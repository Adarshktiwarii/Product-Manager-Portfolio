'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-warning-orange text-white text-center py-2 text-small">
        <p>
          <strong>Not an emergency service</strong> — If you are in crisis, call emergency services or your local helpline
        </p>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-off-white'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">US</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-heading">Dr. Upasna Shil</h1>
                <p className="text-small text-slate-gray">Clinical Psychologist</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-gray hover:text-navy transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact" className="flex items-center space-x-2 text-slate-gray hover:text-navy transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-small">Contact</span>
              </Link>
              <Link href="/book" className="btn-primary">
                Book Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-gray hover:text-navy focus:outline-none focus:ring-2 focus:ring-accent-blue"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-slate-gray hover:text-navy hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/book"
                    className="block w-full text-center btn-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}