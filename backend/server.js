const express = require('express');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
app.use(cors());
app.use(express.json());

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-2'
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

// Configure multer for memory storage (we'll upload directly to S3)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Upload image endpoint
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    // Get title from request body
    const title = req.body.title || 'Untitled';

    // Generate unique filename
    const fileName = `palette/${Date.now()}-${Math.random().toString(36).substring(7)}.png`;

    // Upload to S3 with metadata
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: 'image/png',
      Metadata: {
        title: title,
        uploadedAt: new Date().toISOString()
      }
    };

    const result = await s3.upload(params).promise();

    res.json({
      success: true,
      url: result.Location,
      key: fileName,
      title: title
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image', details: error.message });
  }
});

// Get all images endpoint
app.get('/api/images', async (req, res) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Prefix: 'palette/'
    };

    const result = await s3.listObjectsV2(params).promise();

    // Filter out the prefix entry itself (palette/) and only process actual files
    const imageFiles = result.Contents.filter(item =>
      item.Key !== 'palette/' && item.Key.endsWith('.png')
    );

    // Fetch metadata for each image
    const imagesPromises = imageFiles.map(async (item) => {
      try {
        // Get object metadata
        const headParams = {
          Bucket: BUCKET_NAME,
          Key: item.Key
        };
        const headResult = await s3.headObject(headParams).promise();

        // Construct public URL - use the region from environment or detect from bucket
        const region = process.env.AWS_REGION || 'us-east-2';
        // Use path-style URL format which works for all regions
        // Format: https://s3.region.amazonaws.com/bucket-name/key
        const url = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${item.Key}`;

        return {
          id: item.ETag ? item.ETag.replace(/"/g, '') : Date.now().toString(),
          key: item.Key,
          url: url,
          // S3 metadata is lowercase and prefixed with 'x-amz-meta-'
          title: (headResult.Metadata && (headResult.Metadata.title || headResult.Metadata['x-amz-meta-title'])) ?
            (headResult.Metadata.title || headResult.Metadata['x-amz-meta-title']) : 'Untitled',
          text: 'A drawing from the palette',
          alt: 'user drawing',
          lastModified: item.LastModified
        };
      } catch (error) {
        console.error(`Error fetching metadata for ${item.Key}:`, error);
        // Return basic info if metadata fetch fails
        const region = process.env.AWS_REGION || 'us-east-2';
        const url = `https://s3.${region}.amazonaws.com/${BUCKET_NAME}/${item.Key}`;
        return {
          id: item.ETag ? item.ETag.replace(/"/g, '') : Date.now().toString(),
          key: item.Key,
          url: url,
          title: 'Untitled',
          text: 'A drawing from the palette',
          alt: 'user drawing',
          lastModified: item.LastModified
        };
      }
    });

    const images = await Promise.all(imagesPromises);

    // Sort by lastModified (newest first)
    images.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

    res.json({ images });
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ error: 'Failed to list images', details: error.message });
  }
});

// Delete image endpoint (optional)
app.delete('/api/images/:key', async (req, res) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: req.params.key
    };

    await s3.deleteObject(params).promise();
    res.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete image', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
