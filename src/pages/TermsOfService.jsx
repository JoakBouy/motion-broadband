import { motion } from 'framer-motion'
import { Calendar, FileText, Shield, AlertTriangle, Scale, Users } from 'lucide-react'

const TermsOfService = () => {
  const lastUpdated = "December 2024"
  const version = "2.1"

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: FileText,
      content: `By accessing or using Motion Broadband services, you agree to be bound by these Terms of Service and all applicable laws and regulations of the Republic of South Sudan. If you do not agree with any of these terms, you are prohibited from using or accessing our services. These terms apply to all users of Motion Broadband services, including customers, visitors, and others who access or use our services.`
    },
    {
      id: 'services',
      title: '2. Service Description',
      icon: Shield,
      content: `Motion Broadband provides satellite internet services powered by Starlink technology across South Sudan. Our services include high-speed internet connectivity, customer support, equipment rental or purchase, and related telecommunications services. Service availability and performance may vary based on location, weather conditions, network capacity, and other factors beyond our control.`
    },
    {
      id: 'eligibility',
      title: '3. Eligibility and Account Registration',
      icon: Users,
      content: `To use our services, you must be at least 18 years old or have parental/guardian consent. You must provide accurate, current, and complete information during registration and maintain the accuracy of your account information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`
    },
    {
      id: 'acceptable-use',
      title: '4. Acceptable Use Policy',
      icon: AlertTriangle,
      content: `You agree not to use our services for: (a) illegal activities or violation of South Sudanese laws; (b) transmitting harmful, threatening, or offensive content; (c) interfering with network security or attempting unauthorized access; (d) commercial resale without authorization; (e) activities that consume excessive bandwidth or degrade service quality for other users; (f) spamming, phishing, or other malicious activities.`
    },
    {
      id: 'billing',
      title: '5. Billing and Payment Terms',
      icon: Scale,
      content: `Service fees are billed monthly in advance. Payment is due by the date specified on your invoice. We accept mobile money, bank transfers, cash payments, and major credit/debit cards. Late payments may result in service suspension or termination. All fees are non-refundable except as required by South Sudanese consumer protection laws. Prices may change with 30 days written notice.`
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Please read these terms carefully before using Motion Broadband services
            </p>
            
            {/* Version Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Version: {version}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Important Notice
                </h2>
                <p className="text-blue-800 mb-0">
                  These Terms of Service constitute a legally binding agreement between you and Motion Broadband. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </motion.div>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Terms */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Availability and Performance</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Motion Broadband strives to provide reliable internet service but cannot guarantee 100% uptime. 
                    Service may be affected by weather conditions, satellite positioning, network maintenance, 
                    or circumstances beyond our control.
                  </p>
                  <p>
                    We aim for 99% service availability but are not liable for service interruptions due to 
                    force majeure events, government actions, natural disasters, or third-party infrastructure failures.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Equipment and Installation</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Equipment may be purchased or leased from Motion Broadband. Customers are responsible for 
                    proper care and maintenance of equipment. Damaged or lost equipment will be charged at 
                    replacement cost.
                  </p>
                  <p>
                    Professional installation services are available. Customers attempting self-installation 
                    do so at their own risk and must follow all provided instructions and safety guidelines.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Motion Broadband respects your privacy and handles personal data in accordance with 
                    South Sudanese data protection laws and our Privacy Policy. We collect only necessary 
                    information for service provision and account management.
                  </p>
                  <p>
                    We may monitor network traffic for security, quality assurance, and network optimization 
                    purposes but do not inspect the content of your communications.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Motion Broadband's liability is limited to the monthly service fee paid by the customer. 
                    We are not liable for indirect, incidental, or consequential damages arising from service use.
                  </p>
                  <p>
                    This limitation applies to the fullest extent permitted by South Sudanese law and does not 
                    affect statutory consumer rights that cannot be excluded or limited.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Either party may terminate service with 30 days written notice. Motion Broadband may 
                    terminate service immediately for breach of terms, non-payment, or illegal use.
                  </p>
                  <p>
                    Upon termination, all outstanding fees become immediately due, and equipment must be 
                    returned in good condition within 14 days.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Disputes should first be addressed through our customer service channels. If unresolved, 
                    disputes will be handled through mediation or arbitration as provided under South Sudanese law.
                  </p>
                  <p>
                    These terms are governed by the laws of the Republic of South Sudan, and any legal 
                    proceedings must be conducted in South Sudanese courts.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Motion Broadband reserves the right to modify these terms at any time. Changes will be 
                    communicated via email, website notice, or other reasonable means at least 30 days 
                    before taking effect.
                  </p>
                  <p>
                    Continued use of services after changes take effect constitutes acceptance of the 
                    modified terms. If you disagree with changes, you may terminate your service.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Motion Broadband</strong></p>
                <p>Juba, Republic of South Sudan</p>
                <p>Email: legal@motionbroadband.ss</p>
                <p>Phone: +211 922 383 300</p>
                <p>Website: www.motionbroadband.ss</p>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-200">
                <p className="text-sm text-gray-600">
                  For questions about these terms or our services, please contact our customer support team. 
                  We are committed to providing clear information about your rights and responsibilities as a Motion Broadband customer.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
