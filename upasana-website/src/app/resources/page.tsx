'use client'

import { motion } from 'framer-motion'
import { BookOpen, FileText, Download, ExternalLink } from 'lucide-react'

const resources = [
  {
    category: 'Articles',
    items: [
      {
        title: 'Understanding Anxiety in Children: A Parent\'s Guide',
        description: 'Learn about common anxiety symptoms in children and evidence-based strategies to support your child.',
        type: 'article',
        readTime: '5 min read',
        date: 'Dec 2024'
      },
      {
        title: 'The Benefits of Social-Emotional Learning in Schools',
        description: 'Explore how SEL programs can improve student outcomes and create positive school environments.',
        type: 'article',
        readTime: '7 min read',
        date: 'Nov 2024'
      },
      {
        title: 'Coping with Stress: Practical Strategies for Adults',
        description: 'Evidence-based techniques for managing stress and building resilience in daily life.',
        type: 'article',
        readTime: '6 min read',
        date: 'Nov 2024'
      }
    ]
  },
  {
    category: 'Resources',
    items: [
      {
        title: 'Mental Health Self-Assessment Tool',
        description: 'A brief screening tool to help you understand your current mental health status.',
        type: 'tool',
        readTime: '2 min',
        date: 'Available'
      },
      {
        title: 'Crisis Resources and Emergency Contacts',
        description: 'Important phone numbers and resources for mental health emergencies in India.',
        type: 'resource',
        readTime: '1 min',
        date: 'Updated'
      },
      {
        title: 'Preparing for Your First Therapy Session',
        description: 'A helpful guide to make the most of your initial consultation and therapy journey.',
        type: 'guide',
        readTime: '3 min read',
        date: 'Available'
      }
    ]
  },
  {
    category: 'Downloads',
    items: [
      {
        title: 'Intake Form Template',
        description: 'Download and complete this form before your first session to save time.',
        type: 'download',
        readTime: 'PDF',
        date: 'Available'
      },
      {
        title: 'Privacy Policy and Informed Consent',
        description: 'Important information about confidentiality and your rights as a client.',
        type: 'download',
        readTime: 'PDF',
        date: 'Available'
      },
      {
        title: 'Telehealth Guidelines',
        description: 'Instructions for online therapy sessions and technical requirements.',
        type: 'download',
        readTime: 'PDF',
        date: 'Available'
      }
    ]
  }
]

const getIcon = (type: string) => {
  switch (type) {
    case 'article':
      return BookOpen
    case 'tool':
      return FileText
    case 'resource':
      return ExternalLink
    case 'guide':
      return FileText
    case 'download':
      return Download
    default:
      return BookOpen
  }
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-navy to-accent-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-display text-balance mb-6">
            Resources & Articles
          </h1>
          <p className="text-body text-white/90 max-w-3xl mx-auto">
            Evidence-based information, tools, and resources to support your mental health journey. 
            Explore articles, guides, and downloadable materials.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        {resources.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-heading mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => {
                const Icon = getIcon(item.type)
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-small text-accent-blue font-medium">
                            {item.readTime}
                          </span>
                          <span className="text-small text-slate-gray">•</span>
                          <span className="text-small text-slate-gray">{item.date}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-subheading font-semibold text-navy mb-3 group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-slate-gray mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center text-accent-blue font-medium group-hover:text-navy transition-colors">
                      <span className="text-small">
                        {item.type === 'download' ? 'Download' : 'Read More'}
                      </span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-warm-beige to-soft-gray rounded-2xl p-8 text-center">
            <h3 className="text-display mb-4">Stay Updated</h3>
            <p className="text-body text-slate-gray mb-6 max-w-2xl mx-auto">
              Subscribe to receive the latest articles, resources, and mental health insights 
              directly in your inbox. No spam, just valuable content.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 input-field"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-small text-slate-gray mt-3">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-navy to-accent-blue rounded-2xl p-8 text-white">
            <h3 className="text-display mb-4">Need Personalized Support?</h3>
            <p className="text-body text-white/90 mb-6 max-w-2xl mx-auto">
              While these resources are helpful, nothing replaces personalized care. 
              Book a consultation to discuss your specific needs and develop a tailored treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book" className="btn-secondary bg-white text-navy hover:bg-gray-100">
                Book a Consultation
              </a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Ask Questions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}