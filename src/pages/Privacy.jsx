import { motion } from 'framer-motion'
import { Shield, Cookie, Eye, Lock, Users, FileText, Mail, Phone } from 'lucide-react'

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us (name, email, phone number)',
        'Technical information about your device and browser',
        'Usage data about how you interact with our website',
        'Location data (general geographic area, not precise location)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To respond to your inquiries and provide customer support',
        'To improve our website and services',
        'To send you information about our services (with your consent)',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Cookie,
      title: 'Cookies and Tracking',
      content: [
        'Essential cookies for website functionality',
        'Analytics cookies to understand website usage (with your consent)',
        'Marketing cookies for advertising (with your consent)',
        'Functional cookies to enhance your experience (with your consent)'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'We may share information with service providers who help us operate our website',
        'We may disclose information if required by law or to protect our rights',
        'We may share aggregated, non-personal information for business purposes'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We use industry-standard security measures to protect your information',
        'All data transmission is encrypted using SSL/TLS protocols',
        'We regularly review and update our security practices',
        'We limit access to personal information to authorized personnel only'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate information',
        'Right to delete your information (subject to legal requirements)',
        'Right to withdraw consent for marketing communications'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-dark-950 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container-custom relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Privacy <span className="text-gradient">Policy</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your privacy is important to us. This policy explains how Motion Broadband collects,
              uses, and protects your personal information when you use our website and services.
            </motion.p>

            <motion.p
              className="text-sm text-gray-400 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="glass-panel p-8 h-full border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-500/20">
                    <section.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="section-padding bg-dark-950 relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Cookie <span className="text-gradient">Management</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              You can manage your cookie preferences at any time. We respect your choices and
              will only use cookies in accordance with your preferences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Necessary Cookies',
                description: 'Essential for website functionality',
                icon: Shield,
                required: true
              },
              {
                title: 'Analytics Cookies',
                description: 'Help us improve our website',
                icon: Eye,
                required: false
              },
              {
                title: 'Functional Cookies',
                description: 'Enhance your experience',
                icon: Users,
                required: false
              },
              {
                title: 'Marketing Cookies',
                description: 'Deliver relevant advertisements',
                icon: Cookie,
                required: false
              }
            ].map((cookie, index) => (
              <motion.div
                key={cookie.title}
                className="glass-panel p-6 text-center border border-white/10 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <cookie.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{cookie.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{cookie.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full border ${cookie.required
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  }`}>
                  {cookie.required ? 'Always Active' : 'Optional'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Questions About Your <span className="text-accent-300">Privacy</span>?
            </motion.h2>

            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              If you have any questions about this privacy policy or how we handle your data,
              please don't hesitate to contact us.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:sales@motionbroadbandltd.com"
                className="flex items-center space-x-2 text-white hover:text-accent-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>sales@motionbroadbandltd.com</span>
              </a>

              <a
                href="tel:+211927001026"
                className="flex items-center space-x-2 text-white hover:text-accent-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+211 92 700 1026</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
