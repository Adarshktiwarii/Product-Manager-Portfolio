# Dr. Upasna Shil - Clinical Psychologist Website

A modern, responsive website for Dr. Upasna Shil's clinical psychology practice, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Booking System**: 3-step booking flow with service selection, intake form, and scheduling
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and sitemap for better search visibility
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Adarshktiwarii/Upasana-s-Website.git
cd Upasana-s-Website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your configuration:
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Sanity CMS (if using)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret

# Calendly (for scheduling)
NEXT_PUBLIC_CALENDLY_USERNAME=your_calendly_username
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── book/              # Booking flow
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── privacy/           # Privacy policy
│   ├── resources/         # Resources and articles
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── BookingFlow.tsx    # 3-step booking process
│   ├── FAQ.tsx            # FAQ section
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header
│   ├── Hero.tsx           # Hero section
│   └── Services.tsx       # Services section
└── lib/                   # Utility functions
```

## Key Components

### BookingFlow
A comprehensive 3-step booking system:
1. **Service Selection**: Choose service type and mode (telehealth/in-person)
2. **Intake Form**: Collect client information and consent
3. **Scheduling & Payment**: Select date/time and process payment

### Design System
- **Colors**: Navy (#0B2545), Off-white (#FAFBFB), Warm beige (#F3EDE6)
- **Typography**: Merriweather (headings), Inter (body)
- **Components**: Consistent button styles, form inputs, and cards

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

### Content Updates
- Update personal information in `src/components/About.tsx`
- Modify services in `src/components/Services.tsx`
- Edit FAQ content in `src/components/FAQ.tsx`

### Styling
- Colors are defined in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### SEO
- Update meta tags in `src/app/layout.tsx`
- Modify structured data for better search visibility
- Add your Google Analytics ID to environment variables

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip-to-content links
- Alt text for images
- Color contrast compliance

## Performance

- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size
- Lighthouse score target: 90+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For technical support or questions about the website, please contact:
- Email: contact@upasnashil.com
- Phone: +91-XXXXXXXXXX

## Changelog

### v1.0.0 (December 2024)
- Initial release
- Complete booking system
- Responsive design
- SEO optimization
- Accessibility compliance