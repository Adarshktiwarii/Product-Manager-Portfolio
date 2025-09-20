'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Heart, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-off-white via-warm-beige to-soft-gray hero-pattern">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-hero text-balance">
                Compassionate, evidence-based clinical psychology for children & adults
              </h1>
              <p className="text-display text-slate-gray leading-relaxed">
                Dr. Upasna Shil — M.Phil. Clinical Psychology (results pending)
              </p>
              <p className="text-body text-slate-gray max-w-2xl">
                Psychometric assessment • Individual therapy • School counselling
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-small text-slate-gray">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-accent-blue" />
                <span>Licensed Professional</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-accent-blue" />
                <span>Evidence-Based Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-accent-blue" />
                <span>Specialized Assessment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-primary inline-flex items-center justify-center space-x-2 group">
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-outline inline-flex items-center justify-center">
                Read my approach
              </Link>
            </div>

            {/* Short Bio */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-body text-slate-gray">
                <strong>Dr. Upasna Shil</strong> is a clinical psychologist specializing in psychometric assessment, 
                school counselling, and individual therapy. She blends evidence-based practice with empathetic care 
                to support children, adolescents, and adults.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for professional headshot */}
              <div className="aspect-[4/5] bg-gradient-to-br from-navy to-accent-blue rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-navy/80 to-accent-blue/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold">US</span>
                    </div>
                    <p className="text-lg font-medium">Professional Headshot</p>
                    <p className="text-sm opacity-80">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-warm-beige rounded-full opacity-80 animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-blue/20 rounded-full opacity-60 animate-bounce-gentle animation-delay-200"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-navy rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-navy rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}