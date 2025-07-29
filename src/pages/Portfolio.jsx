import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Users, 
  Building, 
  Home, 
  Globe, 
  Star, 
  ArrowRight, 
  ArrowLeft,
  Wifi,
  CheckCircle,
  Award,
  TrendingUp
} from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCase, setSelectedCase] = useState(null)

  const filters = [
    { id: 'all', label: 'All Deployments' },
    { id: 'home', label: 'Home Solutions' },
    { id: 'office', label: 'Office Solutions' },
    { id: 'business', label: 'Business Solutions' }
  ]

  const caseStudies = [
    {
      id: 1,
      category: 'home',
      title: 'Juba Family Connectivity',
      location: 'Juba, Central Equatoria',
      type: 'Home Solution',
      description: 'Complete home internet setup for a family of 6, enabling remote work, online education, and entertainment.',
      challenges: [
        'Multiple devices requiring simultaneous connectivity',
        'Need for reliable streaming and video calls',
        'Budget constraints for high-speed internet'
      ],
      solutions: [
        'Installed Starlink system with advanced router configuration',
        'Set up mesh network for whole-home coverage',
        'Implemented parental controls and device management'
      ],
      results: [
        '100% uptime since installation',
        'Seamless 4K streaming on multiple devices',
        'Successful remote work and online learning',
        'Significant cost savings compared to previous provider'
      ],
      stats: {
        speed: '150+ Mbps',
        devices: '8+ devices',
        uptime: '99.9%',
        satisfaction: '5/5 stars'
      },
      image: '/images/portfolio/home-1.jpg'
    },
    {
      id: 2,
      category: 'office',
      title: 'NGO Office Network',
      location: 'Malakal, Upper Nile',
      type: 'Office Solution',
      description: 'Enterprise-grade internet solution for an international NGO supporting humanitarian operations.',
      challenges: [
        'Critical need for reliable connectivity in remote location',
        'Multiple users requiring simultaneous access',
        'Security requirements for sensitive data transmission'
      ],
      solutions: [
        'Deployed redundant Starlink systems for failover',
        'Implemented enterprise-grade security protocols',
        'Set up dedicated bandwidth allocation for different departments'
      ],
      results: [
        'Zero downtime during critical operations',
        'Enhanced productivity with high-speed connectivity',
        'Secure data transmission for sensitive operations',
        'Cost-effective solution compared to satellite alternatives'
      ],
      stats: {
        speed: '200+ Mbps',
        devices: '25+ devices',
        uptime: '100%',
        satisfaction: '5/5 stars'
      },
      image: '/images/portfolio/office-1.jpg'
    },
    {
      id: 3,
      category: 'business',
      title: 'Hotel Wi-Fi Enhancement',
      location: 'Wau, Western Bahr el Ghazal',
      type: 'Business Solution',
      description: 'Revenue-generating Wi-Fi solution for a hotel, improving guest experience and generating additional income.',
      challenges: [
        'Poor existing internet connectivity affecting guest satisfaction',
        'Need for automated billing and access management',
        'Requirement for high-speed internet for business travelers'
      ],
      solutions: [
        'Installed Starlink system with commercial-grade equipment',
        'Implemented automated voucher system for guest access',
        'Set up analytics dashboard for usage monitoring'
      ],
      results: [
        '50% increase in guest satisfaction scores',
        'Additional revenue from Wi-Fi services',
        'Improved business traveler experience',
        'Reduced operational costs with automated system'
      ],
      stats: {
        speed: '180+ Mbps',
        devices: '100+ devices',
        uptime: '99.8%',
        satisfaction: '4.8/5 stars'
      },
      image: '/images/portfolio/business-1.jpg'
    }
  ]

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeFilter)

  const stats = [
    { number: '500+', label: 'Successful Deployments', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Average', icon: Wifi },
    { number: '4.9/5', label: 'Customer Rating', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Real-world examples of how we've transformed connectivity across South Sudan. 
              From homes to businesses, see how Motion Broadband is making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our successful deployments and see how we've solved real connectivity challenges.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                className="card p-6 group hover:shadow-2xl transition-all duration-500 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Globe className="h-16 w-16 text-primary-500" />
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  <span className="text-sm text-gray-600">{caseStudy.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{caseStudy.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600">{caseStudy.type}</span>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                      {selectedCase.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedCase.location}</span>
                      </div>
                      <span>•</span>
                      <span>{selectedCase.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed">{selectedCase.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedCase.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {selectedCase.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                    <ul className="space-y-2">
                      {selectedCase.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-700">
                          <TrendingUp className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(selectedCase.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio 