# Mixpanel Analytics Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Create Mixpanel Account
1. Go to [mixpanel.com](https://mixpanel.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Create a New Project
1. After login, click "Create Project"
2. Enter project name: `Adarsh Portfolio Analytics`
3. Choose "Web" as the platform
4. Click "Create Project"

### 3. Get Your Project Token
1. In your project dashboard, go to **Settings** → **Project Settings**
2. Copy the **Project Token** (starts with something like `1234567890abcdef...`)

### 4. Update Your Website
1. Open `index.html` in your code editor
2. Find line 799: `const MIXPANEL_TOKEN = 'YOUR_MIXPANEL_PROJECT_TOKEN';`
3. Replace `'YOUR_MIXPANEL_PROJECT_TOKEN'` with your actual token:
   ```javascript
   const MIXPANEL_TOKEN = '1234567890abcdef...'; // Your actual token here
   ```

### 5. Deploy Changes
```bash
git add index.html
git commit -m "feat: integrate Mixpanel analytics with real project token"
git push origin dev
```

## 📊 What Gets Tracked

### Automatic Events:
- **Page Views** - Every page load
- **Link Clicks** - All link interactions
- **Button Clicks** - All button interactions
- **CTA Clicks** - Contact buttons, consultation CTAs
- **Form Focus** - When users focus on form fields
- **Form Submissions** - When forms are submitted
- **Section Views** - When users scroll to different sections
- **Page Exit** - When users leave the page

### User Properties:
- **Device Type** - Desktop, mobile, tablet
- **Browser** - Chrome, Firefox, Safari, etc.
- **Location** - Timezone and language
- **Referrer** - Where users came from
- **Session Data** - Time on page, scroll depth, clicks

## 🔧 Advanced Configuration

### Custom Events
You can track additional custom events by calling:
```javascript
// Track a custom event
mixpanel.track('Custom Event Name', {
  property1: 'value1',
  property2: 'value2'
});
```

### User Identification
To identify users when they submit forms:
```javascript
// Identify a user
mixpanel.identify('user@email.com');
mixpanel.people.set({
  '$email': 'user@email.com',
  '$name': 'User Name',
  'Company': 'Company Name'
});
```

### Funnel Analysis
Mixpanel automatically creates funnels for:
- Page View → CTA Click → Form Submission
- Page View → Section View → Button Click
- Any custom funnel you define

## 📈 Dashboard Features

### Real-time Analytics:
- **Live Activity** - See visitors in real-time
- **Event Tracking** - Monitor all user interactions
- **User Profiles** - Detailed user behavior
- **Funnel Analysis** - Conversion tracking
- **Retention Analysis** - User engagement over time

### Key Metrics:
- **Unique Visitors** - Daily, weekly, monthly
- **Page Views** - Most popular pages
- **Conversion Rate** - CTA to form submission
- **Bounce Rate** - Single-page sessions
- **Session Duration** - Time on site
- **Traffic Sources** - Where visitors come from

## 🛠️ Troubleshooting

### Data Not Appearing?
1. **Check Token**: Ensure your Mixpanel token is correct
2. **Clear Cache**: Hard refresh your browser (Ctrl+F5)
3. **Check Console**: Open browser dev tools and look for errors
4. **Verify Events**: Use Mixpanel's "Live View" to see real-time events

### Common Issues:
- **Events not tracking**: Check if ad blockers are blocking Mixpanel
- **No data in dashboard**: Wait 5-10 minutes for data to appear
- **Incorrect user count**: Check if you have multiple projects

### Debug Mode:
Add this to your browser console to see all events:
```javascript
mixpanel.set_config({ debug: true });
```

## 💰 Pricing

### Free Plan (Hobby):
- **1,000 events/month** - Perfect for personal websites
- **90 days data retention**
- **Basic analytics features**

### Growth Plan ($25/month):
- **10,000 events/month**
- **1 year data retention**
- **Advanced features**

### Enterprise Plan:
- **Unlimited events**
- **Unlimited data retention**
- **Custom features**

## 🔒 Privacy & GDPR

### Data Collection:
- **No PII**: We don't collect personal information by default
- **Anonymous Tracking**: Users are tracked anonymously
- **Opt-out Option**: Users can opt-out via browser settings

### GDPR Compliance:
- **Cookie Consent**: Add cookie consent banner if needed
- **Data Export**: Users can request their data
- **Data Deletion**: Users can request data deletion

## 📱 Mobile Tracking

The current setup works for mobile browsers. For mobile apps, you'd need:
- **React Native SDK** for mobile apps
- **iOS/Android SDKs** for native apps

## 🎯 Best Practices

### Event Naming:
- Use descriptive names: `CTA Clicked`, `Form Submitted`
- Be consistent: `Button Click` not `button_click`
- Use camelCase: `pageView` not `page_view`

### Properties:
- Keep properties simple and meaningful
- Don't over-track: focus on important interactions
- Use consistent data types

### Performance:
- Events are sent asynchronously
- No impact on page load speed
- Automatic retry on network failures

## 📞 Support

### Mixpanel Support:
- **Documentation**: [help.mixpanel.com](https://help.mixpanel.com)
- **Community**: [community.mixpanel.com](https://community.mixpanel.com)
- **Email**: support@mixpanel.com

### Local Analytics Dashboard:
- **URL**: `yourdomain/analytics-dashboard.html`
- **Login**: admin / adarsh2025
- **Features**: Real-time data, charts, visitor details

---

## 🚀 Next Steps

1. **Set up Mixpanel** using the steps above
2. **Test tracking** by visiting your site and clicking CTAs
3. **Check Mixpanel dashboard** for real-time data
4. **Set up alerts** for important events
5. **Create custom reports** for specific insights

Your analytics will be much more accurate and comprehensive with Mixpanel integration! 🎉