'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What should I expect in the first session?',
    answer: 'The first session typically includes a comprehensive intake interview where we discuss your concerns, history, and goals. I&apos;ll explain the therapeutic process, answer any questions you have, and together we&apos;ll develop a treatment plan tailored to your needs. The session usually lasts 60-80 minutes for initial assessments or 45-60 minutes for therapy sessions.'
  },
  {
    question: 'Is online therapy effective?',
    answer: 'Yes, research consistently shows that online therapy can be as effective as in-person therapy for many mental health concerns. I use secure, HIPAA-compliant video platforms to ensure your privacy and confidentiality. Online therapy offers convenience and accessibility while maintaining the same high-quality care you&apos;d receive in person.'
  },
  {
    question: 'How do I cancel or reschedule an appointment?',
    answer: 'Please notify me at least 24-48 hours in advance if you need to cancel or reschedule. You can do this by calling, emailing, or through the patient portal. Late cancellations (less than 24 hours) may be charged 50% of the session fee. I understand that emergencies happen, and I&apos;ll work with you on a case-by-case basis.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'I currently do not accept insurance directly, but I can provide you with a detailed receipt that you can submit to your insurance company for potential reimbursement. Please contact your insurance provider to understand your out-of-network mental health benefits. I&apos;m happy to discuss payment options and sliding scale fees if needed.'
  },
  {
    question: 'How is my information kept confidential?',
    answer: 'Confidentiality is a cornerstone of therapy and is protected by professional ethics and law. Your information is stored securely and shared only with your explicit consent, except in rare cases where there&apos;s imminent danger to yourself or others. I use encrypted systems for all digital communications and maintain strict privacy protocols in my practice.'
  },
  {
    question: 'What age groups do you work with?',
    answer: 'I work with children (ages 6+), adolescents, and adults. My services include individual therapy, family counseling, school-based interventions, and specialized assessments. I have particular expertise in working with children and adolescents, but I also provide comprehensive care for adults dealing with various mental health concerns.'
  },
  {
    question: 'How long does therapy typically take?',
    answer: 'The duration of therapy varies greatly depending on individual needs, goals, and the nature of concerns. Some people benefit from short-term therapy (6-12 sessions), while others may need longer-term support. We&apos;ll regularly review progress together and adjust the treatment plan as needed. My goal is to help you achieve your objectives as efficiently as possible.'
  },
  {
    question: 'What types of psychological assessments do you offer?',
    answer: 'I provide comprehensive psychological assessments including cognitive testing, personality assessments, diagnostic evaluations, and specialized testing for learning disabilities, ADHD, and other conditions. Assessments typically include clinical interviews, standardized tests, and detailed written reports with recommendations for treatment and accommodations.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-display text-balance mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-body text-slate-gray max-w-3xl mx-auto">
            Find answers to common questions about therapy, assessments, and my practice. 
            If you don&apos;t see your question here, please don&apos;t hesitate to contact me directly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-subheading font-semibold text-navy pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-navy" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-gray" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-body text-slate-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-navy to-accent-blue rounded-2xl p-8 text-white">
            <h3 className="text-display mb-4">Still Have Questions?</h3>
            <p className="text-body text-white/90 mb-6 max-w-2xl mx-auto">
              I&apos;m here to help. Feel free to reach out with any questions about my services, 
              approach, or how I can support you on your mental health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-navy hover:bg-gray-100">
                Contact Me
              </a>
              <a href="/book" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Book a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}