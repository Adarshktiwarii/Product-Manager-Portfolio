'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Briefcase, Users, BookOpen, Target, Heart } from 'lucide-react'

const qualifications = [
  {
    icon: GraduationCap,
    title: 'M.Phil. Clinical Psychology',
    institution: 'MAN College',
    status: 'Results Awaited (2025)',
    description: 'Advanced training in clinical assessment and therapeutic interventions'
  },
  {
    icon: Award,
    title: 'M.A. Clinical Psychology',
    institution: 'Amity University, Gwalior',
    year: '2023',
    description: 'Comprehensive foundation in psychological theory and practice'
  }
]

const experience = [
  {
    icon: Briefcase,
    title: 'Senior Executive School Counsellor',
    institution: 'Amanora School',
    description: 'Led comprehensive school counseling programs and student support services'
  },
  {
    icon: Users,
    title: 'Clinical Intern',
    institution: 'Sassoon General Hospital',
    description: 'Hands-on clinical experience in hospital-based psychological assessment and intervention'
  },
  {
    icon: BookOpen,
    title: 'Clinical Intern',
    institution: 'Gwalior Mansik Arogyashala',
    description: 'Specialized training in community mental health and rehabilitation services'
  }
]

const research = [
  {
    title: 'SEED Curriculum Implementation',
    description: '20 CASEL-based SEL sessions with 80 students (Oct 2024 – Jul 2025)',
    impact: 'Developed and delivered evidence-based social-emotional learning curriculum'
  },
  {
    title: 'Cannabis Use & Family Relationships Study',
    description: 'Quantitative analysis with 97 participants (2022–23)',
    impact: 'Contributed to understanding substance use patterns and family dynamics'
  },
  {
    title: 'Emotional Quotient Comparative Study',
    description: 'Creative vs. Mathematical minds analysis (2020–21)',
    impact: 'Explored cognitive-emotional differences across different thinking styles'
  }
]

export default function About() {
  return (
    <section className="section-padding bg-warm-beige/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-balance mb-6">
            About Dr. Upasna Shil
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            A trained clinical psychologist with hands-on experience across hospitals, educational institutes, 
            and community mental health programs, dedicated to providing evidence-based care with empathy and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-heading mb-4">Professional Background</h3>
              <p className="text-body mb-6">
                Dr. Upasna Shil is a trained clinical psychologist with hands-on experience across hospitals, 
                educational institutes, and community mental health programs. She completed her M.A. in Clinical 
                Psychology from Amity University, Gwalior (2023) and an M.Phil. in Clinical Psychology from 
                MAN College (result awaited, 2025).
              </p>
              <p className="text-body mb-6">
                Upasna has worked as a Senior Executive School Counsellor at Amanora School, and completed 
                clinical internships at Sassoon General Hospital and Gwalior Mansik Arogyashala. Her clinical 
                strengths include psychometric assessment, case formulation, individual and group interventions, 
                and life skills training.
              </p>
              <p className="text-body">
                She has led SEL interventions (20 CASEL-based sessions with 80 students) and contributed to 
                academic research on youth mental health and substance use. Upasna combines evidence-based 
                practice with empathy and a collaborative approach to help clients build resilience, manage 
                symptoms, and improve functioning.
              </p>
            </div>

            {/* Approach */}
            <div className="card">
              <h3 className="text-heading mb-4">Therapeutic Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-accent-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Evidence-Based Practice</h4>
                    <p className="text-small text-slate-gray">Utilizing scientifically proven therapeutic methods and assessment tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-accent-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Collaborative Care</h4>
                    <p className="text-small text-slate-gray">Working together with clients and families to achieve treatment goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-accent-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Empathetic Support</h4>
                    <p className="text-small text-slate-gray">Providing compassionate care in a safe, non-judgmental environment</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Qualifications & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="card">
              <h3 className="text-heading mb-6">Education & Qualifications</h3>
              <div className="space-y-6">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <qual.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-navy mb-1">{qual.title}</h4>
                      <p className="text-small text-slate-gray mb-1">{qual.institution}</p>
                      <p className="text-small text-accent-blue font-medium mb-2">
                        {qual.year || qual.status}
                      </p>
                      <p className="text-small text-slate-gray">{qual.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="card">
              <h3 className="text-heading mb-6">Professional Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-4 h-4 text-accent-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-navy mb-1">{exp.title}</h4>
                      <p className="text-small text-slate-gray mb-1">{exp.institution}</p>
                      <p className="text-small text-slate-gray">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research */}
            <div className="card">
              <h3 className="text-heading mb-6">Research & Projects</h3>
              <div className="space-y-4">
                {research.map((project, index) => (
                  <div key={index} className="border-l-2 border-accent-blue pl-4">
                    <h4 className="font-medium text-navy mb-2">{project.title}</h4>
                    <p className="text-small text-slate-gray mb-2">{project.description}</p>
                    <p className="text-small text-accent-blue">{project.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}