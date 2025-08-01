import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  Users,
  Shield,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Plot 27, Munuki, Block B, Juba, Central Equatoria State, South Sudan',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      content: '+211 92 700 1026\n+211 92 239 3300 (SMS/WhatsApp)',
      link: 'tel:+211927001026',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'sales@motionbroadbandltd.com\nbroadband.motion@gmail.com',
      link: 'mailto:sales@motionbroadbandltd.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 Customer Support Available\nRound-the-clock assistance',
      link: '#',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sales@motionbroadbandltd.com'
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      console.log('Email sent successfully via EmailJS')
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)

    } catch (error) {
      console.error('EmailJS sending failed:', error)

      // Fallback to mailto if EmailJS fails
      try {
        const mailtoLink = `mailto:sales@motionbroadbandltd.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        )}`
        window.open(mailtoLink, '_blank')

        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })

        setTimeout(() => setSubmitSuccess(false), 5000)

      } catch (mailtoError) {
        console.error('Mailto fallback also failed:', mailtoError)
        setIsSubmitting(false)
        setSubmitError(true)

        // Hide error message after 5 seconds
        setTimeout(() => setSubmitError(false), 5000)
      }
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to experience the best internet connectivity in South Sudan? Contact us today and let's 
              get you connected with fast, reliable, and affordable Starlink internet service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Contact <span className="text-gradient">Information</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Multiple ways to reach us. We're here to help you get connected and stay connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                className="card p-6 text-center group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">{info.content}</p>
                {info.link !== '#' && (
                  <a 
                    href={info.link}
                    className="inline-block mt-3 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Contact Now →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Have questions about our services? Want to get started with Starlink internet? 
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-700">We typically respond within 24 hours to all inquiries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                    <p className="text-gray-700">Our team of experts is ready to help you with any questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Communication</h3>
                    <p className="text-gray-700">Your information is safe and secure with us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : submitError ? (
                <div className="text-center py-8">
                  <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Failed to Send</h3>
                  <p className="text-gray-700 mb-4">Sorry, there was an error with both our email service and the backup method. Please contact us directly at sales@motionbroadbandltd.com or try again.</p>
                  <button
                    onClick={() => setSubmitError(false)}
                    className="btn-primary"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 