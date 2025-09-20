'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowLeft, ArrowRight, Calendar, CreditCard, User, Shield } from 'lucide-react'

const services = [
  {
    id: 'initial-assessment',
    name: 'Initial Assessment & Psychometric Testing',
    duration: '60-80 min',
    price: '₹2,500',
    description: 'Comprehensive diagnostic interview and testing'
  },
  {
    id: 'follow-up',
    name: 'Follow-up Session',
    duration: '45-60 min',
    price: '₹1,800',
    description: 'Ongoing therapeutic support'
  },
  {
    id: 'school-counseling',
    name: 'School Counseling',
    duration: '45-60 min',
    price: '₹1,500',
    description: 'Educational and behavioral support'
  },
  {
    id: 'psychological-testing',
    name: 'Psychological Testing',
    duration: '90-120 min',
    price: '₹3,000',
    description: 'Comprehensive psychological evaluation'
  },
  {
    id: 'workshop',
    name: 'Workshop/Training',
    duration: '2-4 hours',
    price: '₹5,000',
    description: 'Group workshops and training sessions'
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedMode, setSelectedMode] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    language: 'English',
    address: '',
    timezone: 'IST',
    consent: false,
    privacy: false
  })

  const steps = [
    { number: 1, title: 'Choose Service', icon: User },
    { number: 2, title: 'Intake Form', icon: Shield },
    { number: 3, title: 'Schedule & Payment', icon: Calendar }
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handleModeSelect = (mode: string) => {
    setSelectedMode(mode)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const isStep1Complete = selectedService && selectedMode
  const isStep2Complete = formData.firstName && formData.lastName && formData.email && formData.phone && formData.reason && formData.consent && formData.privacy
  const isStep3Complete = selectedDate && selectedTime

  const selectedServiceData = services.find(s => s.id === selectedService)

  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display mb-4">Book Your Consultation</h1>
          <p className="text-body text-slate-gray">
            Take the first step towards better mental health with a personalized consultation
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-navy border-navy text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-small font-medium ${
                    currentStep >= step.number ? 'text-navy' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-small ${
                    currentStep >= step.number ? 'text-slate-gray' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-navy' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Service Selection */}
              <div>
                <h2 className="text-heading mb-6">Choose Your Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        selectedService === service.id
                          ? 'border-navy bg-navy/5'
                          : 'border-gray-200 hover:border-navy/50'
                      }`}
                    >
                      <h3 className="font-semibold text-navy mb-2">{service.name}</h3>
                      <p className="text-small text-slate-gray mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-small text-accent-blue font-medium">{service.duration}</span>
                        <span className="text-small font-semibold text-navy">{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Selection */}
              <div>
                <h3 className="text-subheading mb-4">Session Mode</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleModeSelect('telehealth')}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selectedMode === 'telehealth'
                        ? 'border-navy bg-navy/5'
                        : 'border-gray-200 hover:border-navy/50'
                    }`}
                  >
                    <h4 className="font-semibold text-navy mb-2">Telehealth</h4>
                    <p className="text-small text-slate-gray">Secure video consultation from your home</p>
                  </button>
                  <button
                    onClick={() => handleModeSelect('in-person')}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selectedMode === 'in-person'
                        ? 'border-navy bg-navy/5'
                        : 'border-gray-200 hover:border-navy/50'
                    }`}
                  >
                    <h4 className="font-semibold text-navy mb-2">In-Person</h4>
                    <p className="text-small text-slate-gray">Face-to-face consultation at our office</p>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-heading mb-6">Intake Information</h2>
                <div className="bg-warning-orange/10 border border-warning-orange/20 rounded-lg p-4 mb-6">
                  <p className="text-small text-warning-orange">
                    <strong>Confidentiality Note:</strong> All personal information is kept confidential, 
                    stored securely, and used only for clinical purposes. For details, read the{' '}
                    <a href="/privacy" className="underline hover:no-underline">Privacy Policy</a>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-small font-medium text-navy mb-2">
                    Brief reason for visit (100-300 characters) *
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    className="input-field h-24 resize-none"
                    placeholder="Please describe what brings you in today..."
                    maxLength={300}
                    required
                  />
                  <p className="text-small text-slate-gray mt-1">
                    {formData.reason.length}/300 characters
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">Preferred Language</label>
                    <select
                      value={formData.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                      className="input-field"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-small font-medium text-navy mb-2">Timezone</label>
                    <select
                      value={formData.timezone}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="input-field"
                    >
                      <option value="IST">India Standard Time (IST)</option>
                      <option value="GMT">Greenwich Mean Time (GMT)</option>
                    </select>
                  </div>
                </div>

                {selectedMode === 'telehealth' && (
                  <div className="mt-6">
                    <label className="block text-small font-medium text-navy mb-2">Address (for legal compliance)</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="input-field h-20 resize-none"
                      placeholder="Please provide your current address..."
                    />
                  </div>
                )}

                {/* Consent Checkboxes */}
                <div className="mt-8 space-y-4">
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
                      I understand that this session is not a crisis service. In case of emergency, I will contact 
                      local emergency services. I consent to receive telehealth services and agree to the privacy policy. *
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacy}
                      onChange={(e) => handleInputChange('privacy', e.target.checked)}
                      className="mt-1 w-4 h-4 text-navy border-gray-300 rounded focus:ring-navy"
                      required
                    />
                    <label htmlFor="privacy" className="text-small text-slate-gray">
                      I agree to the terms of service and privacy policy. *
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-heading mb-6">Schedule & Payment</h2>
                
                {/* Service Summary */}
                <div className="bg-warm-beige/30 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-navy mb-2">Service Summary</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-navy">{selectedServiceData?.name}</p>
                      <p className="text-small text-slate-gray">{selectedServiceData?.duration} • {selectedMode}</p>
                    </div>
                    <p className="font-semibold text-navy">{selectedServiceData?.price}</p>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-6">
                  <h3 className="text-subheading mb-4">Select Date</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {days.map((day, index) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`p-4 rounded-lg border-2 text-center transition-all ${
                          selectedDate === day
                            ? 'border-navy bg-navy text-white'
                            : 'border-gray-200 hover:border-navy/50'
                        }`}
                      >
                        <p className="font-medium">{day}</p>
                        <p className="text-small opacity-75">Dec {15 + index}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <h3 className="text-subheading mb-4">Select Time</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          selectedTime === time
                            ? 'border-navy bg-navy text-white'
                            : 'border-gray-200 hover:border-navy/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="text-subheading mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <input type="radio" id="stripe" name="payment" className="w-4 h-4 text-navy" defaultChecked />
                      <label htmlFor="stripe" className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Credit/Debit Card</span>
                          <div className="flex space-x-2">
                            <span className="text-small bg-gray-100 px-2 py-1 rounded">Visa</span>
                            <span className="text-small bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <input type="radio" id="razorpay" name="payment" className="w-4 h-4 text-navy" />
                      <label htmlFor="razorpay" className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Razorpay (India)</span>
                          <span className="text-small bg-blue-100 text-blue-800 px-2 py-1 rounded">UPI</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-navy hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !isStep1Complete) ||
                (currentStep === 2 && !isStep2Complete)
              }
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                (currentStep === 1 && !isStep1Complete) ||
                (currentStep === 2 && !isStep2Complete)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                // Handle final booking submission
                console.log('Booking submitted:', {
                  service: selectedService,
                  mode: selectedMode,
                  date: selectedDate,
                  time: selectedTime,
                  formData
                })
              }}
              disabled={!isStep3Complete}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all ${
                !isStep3Complete
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-success-green hover:bg-success-green/90 text-white'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Complete Booking</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}