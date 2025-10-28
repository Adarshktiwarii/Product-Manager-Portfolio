# AWS Deployment Guide - Dr. Upasna Shil Website

## Current Status: Frontend + Mock Backend

The website is currently **frontend-only** with placeholder backend features. This means:
- ✅ All pages and UI work perfectly
- ✅ Forms validate and look professional
- ❌ Bookings don't save to database
- ❌ Payments don't process
- ❌ Emails don't send

## Deployment Options

### Option 1: AWS Amplify (Recommended for Frontend)

**Best for**: Quick deployment, static hosting, low cost

#### Steps:
1. **Prepare the build**:
```bash
npm run build
npm run export  # Creates static files
```

2. **Deploy to AWS Amplify**:
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository
   - Build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: out
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

3. **Configure environment variables**:
   - Go to App settings → Environment variables
   - Add your variables (same as Vercel)

4. **Custom domain** (optional):
   - Go to Domain management
   - Add your custom domain
   - Update DNS records

**Cost**: ~$1-5/month for small traffic

### Option 2: AWS EC2 + Docker (Full Backend)

**Best for**: Full Next.js app with server-side features

#### Steps:
1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. **Launch EC2 instance**:
   - Choose Ubuntu 20.04 LTS
   - t3.micro (free tier eligible)
   - Configure security group (port 3000, 80, 443)

3. **Deploy**:
```bash
# On EC2 instance
git clone https://github.com/Adarshktiwarii/Upasana-s-Website.git
cd Upasana-s-Website
docker build -t upasana-website .
docker run -d -p 3000:3000 --name website upasana-website
```

4. **Set up reverse proxy** (Nginx):
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Cost**: ~$10-20/month (t3.micro)

### Option 3: AWS Lambda + S3 (Serverless)

**Best for**: Scalable, pay-per-use

#### Steps:
1. **Build static assets**:
```bash
npm run build
npm run export
```

2. **Upload to S3**:
   - Create S3 bucket
   - Upload `out/` folder contents
   - Enable static website hosting

3. **Set up CloudFront**:
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain

4. **Add Lambda functions** for backend features

**Cost**: ~$1-10/month (pay per request)

## Backend Services Needed

### Current Mock Features → Real Implementation

| Feature | Current | AWS Solution | Cost |
|---------|---------|--------------|------|
| **Database** | None | DynamoDB | $1-5/month |
| **Payments** | Console.log | Stripe API | 2.9% + $0.30 |
| **Email** | Console.log | SES | $0.10/1000 emails |
| **Scheduling** | Mock UI | Calendly API | Free tier |
| **File Storage** | None | S3 | $0.023/GB |

### Implementation Plan

#### Phase 1: Basic Backend (1-2 weeks)
```typescript
// Add these API routes:
/api/bookings          // Store booking data
/api/contact           // Send contact emails
/api/payments          // Process payments
/api/calendly          // Sync with Calendly
```

#### Phase 2: Full Backend (2-4 weeks)
```typescript
// Add these features:
- User authentication
- Patient portal
- Appointment management
- Email automation
- File uploads
- Analytics dashboard
```

## Quick Start: Deploy Frontend Only

### 1. AWS Amplify (5 minutes)
```bash
# 1. Build the project
npm run build

# 2. Go to AWS Amplify Console
# 3. Connect GitHub repo
# 4. Deploy automatically
```

### 2. Manual S3 + CloudFront (10 minutes)
```bash
# 1. Build static files
npm run build
npm run export

# 2. Upload to S3
aws s3 sync out/ s3://your-bucket-name --delete

# 3. Create CloudFront distribution
# 4. Point to S3 bucket
```

## Environment Variables for AWS

```env
# Database
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=upasana-bookings

# Email
AWS_SES_FROM_EMAIL=noreply@upasnashil.com
AWS_SES_REGION=us-east-1

# Payments
STRIPE_SECRET_KEY=sk_live_...
RAZORPAY_SECRET_KEY=your_secret

# App
NEXT_PUBLIC_APP_URL=https://upasnashil.com
```

## Cost Comparison

| Option | Monthly Cost | Setup Time | Backend Features |
|--------|-------------|------------|------------------|
| **Amplify** | $1-5 | 5 minutes | None (frontend only) |
| **EC2** | $10-20 | 30 minutes | Full Next.js |
| **Lambda + S3** | $1-10 | 20 minutes | Serverless functions |
| **Vercel** | $0-20 | 5 minutes | Full Next.js |

## Recommendation

### For Quick Launch (Today):
**Use AWS Amplify** - Deploy frontend only, add backend later

### For Full Features (Next Week):
**Use EC2 + Docker** - Full Next.js app with backend

### For Production (Next Month):
**Use Lambda + S3** - Scalable, serverless architecture

## Next Steps

1. **Choose deployment option**
2. **Deploy frontend** (works immediately)
3. **Add backend services** (as needed)
4. **Test all functionality**
5. **Go live!**

Would you like me to help you deploy to AWS Amplify first, or would you prefer to add backend features first?