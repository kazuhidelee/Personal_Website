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
  region: process.env.AWS_REGION || 'us-east-1'
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

    // Generate unique filename
    const fileName = `palette/${Date.now()}-${Math.random().toString(36).substring(7)}.png`;

    // Upload to S3
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: 'image/png'// Make images publicly accessible
    };

    const result = await s3.upload(params).promise();

    res.json({
      success: true,
      url: result.Location,
      key: fileName
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image', details: error.message });
  }
});

// Get all images endpoint (optional - for listing)
app.get('/api/images', async (req, res) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Prefix: 'palette/'
    };

    const result = await s3.listObjectsV2(params).promise();
    const images = result.Contents.map(item => ({
      key: item.Key,
      url: `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${item.Key}`,
      lastModified: item.LastModified
    }));

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
