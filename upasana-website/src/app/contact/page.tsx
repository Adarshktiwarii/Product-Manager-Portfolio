'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91-XXXXXXXXXX',
      description: 'Call during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@upasnashil.com',
      description: 'I\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Pune, Maharashtra',
      description: 'India - Telehealth available'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Sat: 9AM-2PM'
    }
  ]

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-navy to-accent-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-display text-balance mb-6">
            Get in Touch
          </h1>
          <p className="text-body text-white/90 max-w-3xl mx-auto">
            I&apos;m here to help you take the first step towards better mental health. 
            Reach out with any questions or to schedule your consultation.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-heading mb-6">Contact Information</h2>
              <p className="text-body text-slate-gray mb-8">
                I&apos;m committed to providing timely responses and support. Choose the method 
                that works best for you, and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                    <p className="text-body text-slate-gray mb-1">{info.details}</p>
                    <p className="text-small text-slate-gray">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="bg-warning-orange/10 border border-warning-orange/20 rounded-xl p-6">
              <h3 className="font-semibold text-warning-orange mb-2">Important Notice</h3>
              <p className="text-small text-slate-gray">
                This is not an emergency service. If you are experiencing a mental health crisis 
                or having thoughts of self-harm, please contact your local emergency services 
                or crisis helpline immediately.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-heading mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
                <h3 className="text-heading text-navy mb-2">Message Sent!</h3>
                <p className="text-body text-slate-gray">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="input-field"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Book Consultation</option>
                      <option value="assessment">Psychometric Assessment</option>
                      <option value="therapy">Individual Therapy</option>
                      <option value="school">School Counseling</option>
                      <option value="workshop">Workshop/Training</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-small font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="input-field h-32 resize-none"
                    placeholder="Please describe your inquiry or concerns..."
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 text-navy border-gray-300 rounded focus:ring-navy"
                    required
                  />
                  <label htmlFor="consent" className="text-small text-slate-gray">
                    I consent to Dr. Upasna Shil contacting me regarding my inquiry and agree to the{' '}
                    <a href="/privacy" className="text-accent-blue hover:underline">Privacy Policy</a>. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}