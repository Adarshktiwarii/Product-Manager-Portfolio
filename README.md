# Adarsh & Consultants - Strategic Consulting Website
Dev deployment via GitHub Actions (S3)
-------------------------------------

## 📅 **Recent Update - September 30, 2025**
- **Status**: Restored to commit `8a1b091` (Documentation update)
- **Base**: `13d7449` (Adarsh & Consultants branding)
- **Dev**: `a528a62` (Previous dev state)
- **Design**: Stable documentation state with Adarsh & Consultants branding
- **Features**: Professional consulting website with comprehensive documentation
- **State**: Production-ready with stable codebase

This repo includes a workflow to deploy to an AWS S3 dev bucket on pushes to `dev` and any `feat/**` branches, and on manual dispatch.

1) Add the following GitHub Actions secrets (Repository Settings → Secrets and variables → Actions):

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION (e.g. ap-south-1)
- S3_DEV_BUCKET (e.g. my-portfolio-dev-bucket)
- CLOUDFRONT_DISTRIBUTION_ID (optional, for cache invalidation)

2) Trigger deploy:
- Push to `dev` or `feat/*` branch; OR
- Manually run: Actions → Deploy to S3 (dev) → Run workflow

Notes:
- HTML files upload with `no-cache` headers for instant refresh; assets sync with standard caching.
- Excludes `index - Copy.html` and CI files from upload.


Promote to Production (Amplify)
-------------------------------

Use the `Promote to Production (Amplify)` workflow (manual dispatch). Two options:

- Webhook (recommended if prod app is connected to repo):
  - Add secrets: `AMPLIFY_PROD_WEBHOOK_URL`

- Direct deployment (for prod app not connected to repo):
  - Add secrets: `AMPLIFY_PROD_APP_ID`, `AMPLIFY_PROD_BRANCH`, and reuse `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`
  - IAM user needs:
    - `amplify:CreateDeployment` and `amplify:StartDeployment` on `arn:aws:amplify:REGION:ACCOUNT:apps/APP_ID/branches/BRANCH/deployments/*`

Run: GitHub → Actions → Promote to Production (Amplify) → Run workflow.
A modern, responsive consulting website showcasing strategic consulting services, case studies, and professional experience. Built with clean design principles and optimized for performance.

## 🚀 Features

### Design & UX
- **Clean & Modern Design**: Squeaky clean interface with creative elements
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent preferences
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Subtle animations and transitions for enhanced UX
- **Custom Cursor**: Interactive cursor effects for desktop users
- **Floating Shapes**: Animated background elements for visual appeal

### Content Sections
- **Hero Section**: Dynamic typing animation with professional introduction
- **About Section**: Professional background with key statistics and timeline
- **Services Section**: 6 comprehensive consulting services with detailed features
- **Case Studies**: Real-world project examples with measurable results
- **Experience Timeline**: Professional journey with achievements and technologies
- **Contact Section**: Multiple contact methods and consultation booking
- **Newsletter**: Email subscription for industry insights

### Interactive Features
- **Contact Forms**: Functional contact and consultation request forms
- **Mobile Menu**: Responsive navigation for mobile devices
- **Scroll Progress**: Visual progress indicator
- **Count-up Animations**: Animated statistics display
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No framework dependencies for optimal performance
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Inter font family for typography
- **Formspree**: Form handling and email delivery

## 📁 File Structure

```
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Complete styling with responsive design
├── js/
│   ├── data.js            # Content data (services, case studies, experience)
│   ├── main.js            # Main JavaScript functionality
│   └── analytics.js       # Analytics and tracking
└── README.md              # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1) to Purple (#8b5cf6) gradient
- **Secondary**: Pink (#ec4899) accent
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive**: Fluid typography with clamp() functions

### Components
- **Cards**: Elevated surfaces with hover effects
- **Buttons**: Gradient and outline variants
- **Forms**: Clean input styling with focus states
- **Timeline**: Professional experience visualization
- **Modals**: Overlay dialogs for forms

## 🚀 Performance Optimizations

- **CSS Optimizations**: Hardware-accelerated animations
- **JavaScript**: Efficient event handling and lazy loading
- **Images**: Optimized loading and responsive sizing
- **Fonts**: Font display swap for better loading
- **Minimal Dependencies**: No heavy frameworks or libraries

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Services
Edit `js/data.js` to add new consulting services:

```javascript
{
    id: 7,
    title: 'New Service',
    description: 'Service description',
    icon: 'fas fa-icon-name',
    features: ['Feature 1', 'Feature 2'],
    color: 'linear-gradient(135deg, #color1 0%, #color2 100%)'
}
```

### Updating Case Studies
Add new case studies in the `caseStudies` array:

```javascript
{
    id: 5,
    title: 'New Case Study',
    client: 'Client Name',
    industry: 'Industry',
    challenge: 'Challenge description',
    solution: 'Solution description',
    results: ['Result 1', 'Result 2'],
    technologies: ['Tech 1', 'Tech 2'],
    duration: 'Duration',
    image: 'image-name.jpg'
}
```

### Modifying Experience
Update the `experience` array with new professional experience:

```javascript
{
    id: 5,
    title: 'New Role',
    company: 'Company Name',
    period: '2024 - Present',
    location: 'Location',
    description: 'Role description',
    achievements: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech 1', 'Tech 2'],
    type: 'current' // or 'previous' or 'education'
}
```

## 📊 Analytics

The website includes built-in analytics tracking for:
- Page views
- Button clicks
- Form submissions
- Scroll depth
- Time on page
- Section visibility

## 🚀 Deployment

1. Upload all files to your web hosting service
2. Ensure all file paths are correct
3. Test all forms and interactive elements
4. Verify responsive design on multiple devices
5. Check performance with tools like PageSpeed Insights

## 📞 Contact

For questions or support regarding this consulting website:
- Email: hello.adarshkt@gmail.com
- LinkedIn: [Adarsh Kumar Tiwari](https://www.linkedin.com/in/adarsh-kumar-tiwari-34aa63152/)

## 📄 License

This project is created for Adarsh Kumar Tiwari's consulting business. All rights reserved.

---

**Built with ❤️ for strategic consulting excellence**