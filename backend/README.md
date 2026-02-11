# Palette Backend API

Backend server for uploading Palette drawings to AWS S3.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. AWS S3 Setup

1. **Create an S3 Bucket:**
   - Go to AWS Console → S3
   - Click "Create bucket"
   - Choose a unique bucket name (e.g., `tonylee-palette-images`)
   - Select a region (e.g., `us-east-1`)
   - Uncheck "Block all public access" (or configure bucket policy for public read)
   - Click "Create bucket"

2. **Configure Bucket Policy (for public read access):**
   - Go to your bucket → Permissions → Bucket Policy
   - Add this policy (replace `your-bucket-name`):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/palette/*"
       }
     ]
   }
   ```

3. **Create IAM User for API Access:**
   - Go to AWS Console → IAM → Users
   - Click "Create user"
   - Name it (e.g., `palette-upload-user`)
   - Select "Programmatic access"
   - Attach policy: `AmazonS3FullAccess` (or create a custom policy with only necessary permissions)
   - Save the Access Key ID and Secret Access Key

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your AWS credentials:
   ```
   AWS_ACCESS_KEY_ID=your_access_key_here
   AWS_SECRET_ACCESS_KEY=your_secret_key_here
   AWS_REGION=us-east-1
   AWS_S3_BUCKET_NAME=your-bucket-name
   PORT=3001
   ```

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001` (or the PORT you specified).

## API Endpoints

### POST /api/upload
Upload an image to S3.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: FormData with `image` field

**Response:**
```json
{
  "success": true,
  "url": "https://bucket-name.s3.region.amazonaws.com/palette/filename.png",
  "key": "palette/filename.png"
}
```

### GET /api/images
List all uploaded images (optional).

### DELETE /api/images/:key
Delete an image by key (optional).

## Deployment Options

### Option 1: Deploy to Heroku
1. Install Heroku CLI
2. Create a Heroku app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set AWS_ACCESS_KEY_ID=...`
4. Deploy: `git push heroku main`

### Option 2: Deploy to AWS Lambda + API Gateway
Use Serverless Framework or AWS SAM to deploy as a serverless function.

### Option 3: Deploy to Railway/Render
Similar to Heroku, these platforms support Node.js apps with environment variables.

## Frontend Configuration

Update your React app's `.env` file (in the root directory, not backend):

```
REACT_APP_API_URL=http://localhost:3001
```

For production, update to your deployed backend URL:
```
REACT_APP_API_URL=https://your-backend-url.com
```

## Security Notes

- Never commit `.env` files to git
- Use IAM roles with minimal permissions (only S3 upload access)
- Consider adding authentication/rate limiting for production
- Use CORS configuration to restrict origins if needed
