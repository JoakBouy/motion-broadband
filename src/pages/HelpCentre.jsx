import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Wifi,
  CreditCard,
  Settings,
  MapPin,
  Users,
  Shield,
  HelpCircle,
  ExternalLink
} from 'lucide-react'

const HelpCentre = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'setup', name: 'Service Setup', icon: Users },
    { id: 'connectivity', name: 'Connectivity', icon: Wifi },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'technical', name: 'Technical Support', icon: Settings },
    { id: 'coverage', name: 'Coverage Areas', icon: MapPin }
  ]

  const faqs = [
    {
      id: 1,
      category: 'setup',
      question: 'How do I set up my Starlink internet service?',
      answer: 'Setting up your Starlink service is simple: 1) Position your Starlink dish with a clear view of the sky, 2) Connect the power cable and ethernet cable, 3) Download the Starlink app on your phone, 4) Follow the app instructions to activate your service. Our technicians can assist with installation if needed.'
    },
    {
      id: 2,
      category: 'setup',
      question: 'What information do I need to get started with Motion Broadband?',
      answer: 'To get started with Motion Broadband service, we need: Valid South Sudanese ID or passport, proof of address (utility bill or rental agreement), and contact information. For business services, additional business registration documents may be required. We handle all account setup and management for you.'
    },
    {
      id: 3,
      category: 'connectivity',
      question: 'Why is my internet connection slow or intermittent?',
      answer: 'Several factors can affect your connection: weather conditions, obstructions blocking the dish view, network congestion, or equipment issues. First, check that your dish has a clear view of the sky. If problems persist, restart your equipment or contact our technical support team.'
    },
    {
      id: 4,
      category: 'connectivity',
      question: 'What internet speeds can I expect with Starlink?',
      answer: 'Starlink typically provides download speeds of 25-220 Mbps and upload speeds of 5-20 Mbps in South Sudan. Actual speeds may vary based on location, weather conditions, and network traffic. We continuously work to improve service quality across all regions.'
    },
    {
      id: 5,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including mobile money (Orange Money, Zain Cash), bank transfers, cash payments at our offices, and major credit/debit cards. Monthly billing cycles begin on your service activation date.'
    },
    {
      id: 6,
      category: 'billing',
      question: 'How can I view and pay my bill?',
      answer: 'You can view your bill through our customer portal, mobile app, or by visiting our offices. Payment can be made online, through mobile money, at our service centers, or through authorized agents across South Sudan.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'How do I troubleshoot connection issues?',
      answer: 'Basic troubleshooting steps: 1) Check all cable connections, 2) Restart your Starlink equipment by unplugging for 30 seconds, 3) Ensure the dish has clear sky view, 4) Check for service outages in your area using our app, 5) Contact support if issues persist.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'Can I use my own router with Starlink?',
      answer: 'Yes, you can connect your own router to the Starlink system. Simply connect your router to the Starlink router via ethernet cable. For advanced configurations, our technical team can provide guidance.'
    },
    {
      id: 9,
      category: 'coverage',
      question: 'Is Motion Broadband available in my area?',
      answer: 'Motion Broadband serves all 10 states of South Sudan. Coverage includes major cities like Juba, Wau, Malakal, and extends to remote areas like Akobo, Bentiu, and Pibor. Contact us with your specific location for coverage confirmation.'
    },
    {
      id: 10,
      category: 'coverage',
      question: 'Do you provide service in rural and remote areas?',
      answer: 'Yes! Our Starlink satellite technology is specifically designed to serve remote and underserved areas. We provide reliable internet access to rural communities, oil fields, NGO operations, and government facilities across South Sudan.'
    }
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Call our support hotline',
      contact: '+211 922 383 300',
      availability: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions',
      contact: 'support@motionbroadbandltd.com',
      availability: 'Response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 8AM-6PM'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
    <div className="min-h-screen bg-dark-950 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              How can we <span className="text-gradient">help you?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Find answers to common questions or get in touch with our support team
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm shadow-lg transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-primary-500 text-white border-primary-500 shadow-lg'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-primary-500/50 hover:bg-white/10'
                  }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-5 w-5" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="glass-panel border border-white/10 rounded-xl shadow-sm hover:border-primary-500/30 transition-all duration-300"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 rounded-xl transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HelpCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search or browse different categories</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-dark-950 relative">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-lg text-gray-400">
              Our support team is here to assist you 24/7
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6 text-center hover:border-primary-500/50 transition-all duration-300 border border-white/10 rounded-2xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <channel.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 mb-3">{channel.description}</p>
                <p className="text-primary-400 font-semibold mb-2">{channel.contact}</p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {channel.availability}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Quick Links
            </h2>
            <p className="text-lg text-gray-400">
              Access important resources and information
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Service Status', description: 'Check current service status', icon: Wifi },
              { title: 'Coverage Map', description: 'View our coverage areas', icon: MapPin },
              { title: 'Service Portal', description: 'View your service details', icon: Users },
              { title: 'Terms of Service', description: 'Read our terms', icon: Shield }
            ].map((link, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6 text-center hover:border-primary-500/50 transition-all duration-300 cursor-pointer border border-white/10 rounded-2xl"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <link.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{link.description}</p>
                <ExternalLink className="h-4 w-4 text-primary-400 mx-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HelpCentre
