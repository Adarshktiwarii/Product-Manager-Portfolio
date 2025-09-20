import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Upasna Shil — Clinical Psychologist | Psychometric Testing & Therapy',
  description: 'Evidence-based clinical psychology services for children and adults. Psychometric testing, school counselling, individual therapy. Book a consultation.',
  keywords: 'clinical psychologist, psychometric testing, therapy, school counselling, mental health, Pune, India',
  authors: [{ name: 'Dr. Upasna Shil' }],
  creator: 'Dr. Upasna Shil',
  publisher: 'Dr. Upasna Shil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://upasnashil.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Upasna Shil — Clinical Psychologist | Psychometric Testing & Therapy',
    description: 'Evidence-based clinical psychology services for children and adults. Psychometric testing, school counselling, individual therapy. Book a consultation.',
    url: 'https://upasnashil.com',
    siteName: 'Dr. Upasna Shil - Clinical Psychologist',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Upasna Shil - Clinical Psychologist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Upasna Shil — Clinical Psychologist | Psychometric Testing & Therapy',
    description: 'Evidence-based clinical psychology services for children and adults. Psychometric testing, school counselling, individual therapy.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Upasna Shil",
              "jobTitle": "Clinical Psychologist",
              "description": "Clinical psychologist specializing in psychometric assessment, school counselling, and individual therapy",
              "url": "https://upasnashil.com",
              "image": "https://upasnashil.com/profile-image.jpg",
              "sameAs": [
                "https://linkedin.com/in/upasna-shil",
                "https://twitter.com/upasnashil"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "M.A. Clinical Psychology",
                  "credentialCategory": "degree",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Amity University, Gwalior"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "M.Phil. Clinical Psychology",
                  "credentialCategory": "degree",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "MAN College"
                  }
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Private Practice"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Psychometric Testing",
                    "description": "Comprehensive diagnostic interview and standardized testing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Individual Therapy",
                    "description": "CBT and supportive psychotherapy for various mental health concerns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "School Counselling",
                    "description": "SEL programs and behavioral interventions for students"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}