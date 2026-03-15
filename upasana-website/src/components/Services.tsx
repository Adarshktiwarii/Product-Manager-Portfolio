'use client'

import { motion } from 'framer-motion'
import { Brain, Users, GraduationCap, Heart, BookOpen, Microscope } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Brain,
    title: 'Initial Assessment & Psychometric Testing',
    duration: '60-80 min',
    description: 'Comprehensive diagnostic interview, standardized tests, and personalized feedback report. Ideal for diagnostic clarity and education plans.',
    features: ['Diagnostic Interview', 'Standardized Testing', 'Personalized Report', 'Education Planning'],
    href: '/services/assessment'
  },
  {
    icon: Heart,
    title: 'Individual Therapy',
    duration: '45-60 min',
    description: 'CBT, supportive psychotherapy, and tailored interventions for anxiety, depression, adjustment, and life transitions.',
    features: ['CBT Techniques', 'Supportive Therapy', 'Anxiety Management', 'Depression Support'],
    href: '/services/therapy'
  },
  {
    icon: GraduationCap,
    title: 'School Counselling & SEL Programs',
    duration: 'Variable',
    description: 'Workshops and module delivery for children and teachers; curriculum-based interventions for behavioral & learning concerns.',
    features: ['SEL Workshops', 'Teacher Training', 'Behavioral Support', 'Learning Interventions'],
    href: '/services/school-counseling'
  },
  {
    icon: Users,
    title: 'Parent Consultations & Family Support',
    duration: '45-60 min',
    description: 'Guidance on developmental, behavioral and relational concerns within the family system.',
    features: ['Developmental Guidance', 'Behavioral Strategies', 'Family Dynamics', 'Parenting Support'],
    href: '/services/parent-consultation'
  },
  {
    icon: BookOpen,
    title: 'Workshops & Trainings',
    duration: '2-4 hours',
    description: 'Teacher training, parenting workshops, and resilience-building modules for various audiences.',
    features: ['Teacher Training', 'Parenting Workshops', 'Resilience Building', 'Custom Modules'],
    href: '/services/workshops'
  },
  {
    icon: Microscope,
    title: 'Research & Assessment Projects',
    duration: 'Variable',
    description: 'Specialized research projects and advanced assessment protocols for academic and clinical purposes.',
    features: ['Research Design', 'Data Analysis', 'Assessment Protocols', 'Academic Collaboration'],
    href: '/services/research'
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-balance mb-6">
            Comprehensive Psychological Services
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Evidence-based interventions tailored to meet the unique needs of children, adolescents, and adults. 
            Each service is designed to promote mental health, well-being, and personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading mb-2 group-hover:text-navy transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-small text-accent-blue font-medium">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <p className="text-body mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                      <span className="text-small text-slate-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-accent-blue hover:text-navy font-medium transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-navy to-accent-blue rounded-2xl p-8 text-white">
            <h3 className="text-display mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-body text-white/90 mb-6 max-w-2xl mx-auto">
              Take the first step towards better mental health with a personalized consultation. 
              I&apos;m here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-secondary bg-white text-navy hover:bg-gray-100">
                Book a Consultation
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Ask Questions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}