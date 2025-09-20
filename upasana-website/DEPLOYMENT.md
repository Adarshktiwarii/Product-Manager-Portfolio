# Deployment Guide - Dr. Upasna Shil Website

This guide will help you deploy the website to Vercel and configure all necessary services.

## Prerequisites

- GitHub account
- Vercel account
- Domain name (optional)
- Google Analytics account (optional)
- Stripe account (for payments)
- Calendly account (for scheduling)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Dr. Upasna Shil website"
```

2. Create a new repository on GitHub named "Upasana-s-Website"

3. Push your code:
```bash
git remote add origin https://github.com/Adarshktiwarii/Upasana-s-Website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)

5. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add the following variables:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key

# Razorpay (for India payments)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Calendly (for scheduling)
NEXT_PUBLIC_CALENDLY_USERNAME=your_calendly_username
CALENDLY_API_TOKEN=your_calendly_api_token

# Email (for notifications)
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@upasnashil.com

# App Configuration
NEXT_PUBLIC_APP_URL=https://upasnashil.com
NEXT_PUBLIC_APP_NAME="Dr. Upasna Shil - Clinical Psychologist"
```

6. Click "Deploy"

## Step 3: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your domain name (e.g., upasnashil.com)
4. Follow Vercel's instructions to update DNS records
5. Wait for SSL certificate to be issued

## Step 4: Set Up Services

### Google Analytics
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your website
3. Get your Measurement ID (GA4)
4. Add it to Vercel environment variables

### Stripe (Payments)
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Get your publishable and secret keys
3. Add them to Vercel environment variables
4. Configure webhooks for payment processing

### Calendly (Scheduling)
1. Go to [Calendly](https://calendly.com)
2. Create your account and get your username
3. Generate an API token
4. Add them to Vercel environment variables

### SendGrid (Email)
1. Go to [SendGrid](https://sendgrid.com)
2. Create an account and get your API key
3. Add it to Vercel environment variables

## Step 5: Test the Deployment

1. Visit your deployed website
2. Test all pages and functionality:
   - Home page loads correctly
   - Navigation works
   - Booking flow functions
   - Contact form works
   - All pages are responsive

## Step 6: SEO Configuration

1. Submit your sitemap to Google Search Console:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. Verify Google Analytics is tracking correctly

## Step 7: Security & Performance

1. Enable Vercel's security headers
2. Set up monitoring and alerts
3. Configure backup and recovery

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | No |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes (for payments) |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes (for payments) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay key ID | Yes (for India payments) |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | Yes (for India payments) |
| `NEXT_PUBLIC_CALENDLY_USERNAME` | Calendly username | Yes (for scheduling) |
| `CALENDLY_API_TOKEN` | Calendly API token | Yes (for scheduling) |
| `SENDGRID_API_KEY` | SendGrid API key | Yes (for emails) |
| `FROM_EMAIL` | From email address | Yes (for emails) |
| `NEXT_PUBLIC_APP_URL` | Your website URL | Yes |
| `NEXT_PUBLIC_APP_NAME` | Your app name | Yes |

## Troubleshooting

### Build Errors
- Check that all environment variables are set
- Verify TypeScript compilation passes locally
- Check Vercel build logs for specific errors

### Domain Issues
- Ensure DNS records are correctly configured
- Wait for DNS propagation (up to 48 hours)
- Check SSL certificate status

### Payment Issues
- Verify Stripe/Razorpay keys are correct
- Check webhook endpoints are configured
- Test with sandbox keys first

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor website performance
- Review and update content regularly
- Check for security updates

### Monitoring
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track conversion rates
- Review analytics regularly

## Support

For technical support:
- Check Vercel documentation
- Review Next.js documentation
- Contact the development team

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Mobile responsiveness works
- [ ] Booking flow functions
- [ ] Contact form works
- [ ] Payment integration works
- [ ] Google Analytics is tracking
- [ ] SEO meta tags are correct
- [ ] SSL certificate is active
- [ ] Domain is properly configured
- [ ] All environment variables are set
- [ ] Error monitoring is set up
- [ ] Backup strategy is in place