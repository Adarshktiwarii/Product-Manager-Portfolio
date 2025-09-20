import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <h3 className="text-heading text-white">Dr. Upasna Shil</h3>
            <p className="text-body text-gray-300">
              Clinical Psychologist specializing in evidence-based therapy and psychometric assessment for children and adults.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+91-XXXXXXXXXX" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:contact@upasnashil.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-subheading text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/book" className="text-gray-300 hover:text-white transition-colors">Book Session</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-subheading text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/assessment" className="text-gray-300 hover:text-white transition-colors">Psychometric Testing</Link></li>
              <li><Link href="/services/therapy" className="text-gray-300 hover:text-white transition-colors">Individual Therapy</Link></li>
              <li><Link href="/services/school-counseling" className="text-gray-300 hover:text-white transition-colors">School Counseling</Link></li>
              <li><Link href="/services/parent-consultation" className="text-gray-300 hover:text-white transition-colors">Parent Consultation</Link></li>
              <li><Link href="/services/workshops" className="text-gray-300 hover:text-white transition-colors">Workshops</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-subheading text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-small">
                    Pune, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-300" />
                <div>
                  <p className="text-gray-300 text-small">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-small">
              © 2024 Dr. Upasna Shil. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-small">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-small">
                Terms of Service
              </Link>
              <Link href="/cancellation" className="text-gray-300 hover:text-white transition-colors text-small">
                Cancellation Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-small">
              <strong>Confidentiality is upheld.</strong> Read our{' '}
              <Link href="/privacy" className="text-white hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}