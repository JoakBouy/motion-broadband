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
      title: 'Johnson Family Digital Transformation',
      location: 'Juba, Central Equatoria',
      type: 'Home Solution',
      description: 'Sarah Johnson\'s family of 6 transformed their digital life with Motion Broadband\'s residential Starlink service, enabling seamless remote work, online education, and entertainment for the entire household.',
      customer: 'Sarah Johnson, Family Manager',
      testimonial: 'Motion Broadband has transformed our family\'s digital life. With 6 people in the house, we needed reliable internet for work, school, and entertainment. The setup was seamless, and the speed is incredible.',
      challenges: [
        'Six family members requiring simultaneous high-speed connectivity',
        'Critical need for reliable video conferencing for remote work',
        'Children\'s online education requirements during school hours',
        'Budget constraints for premium internet service'
      ],
      solutions: [
        'Deployed residential Starlink system with enterprise-grade router',
        'Configured mesh network for complete home coverage',
        'Implemented bandwidth prioritization for work and education',
        'Set up parental controls and device management system'
      ],
      results: [
        '100% uptime achieved since installation (6 months)',
        'Simultaneous 4K streaming on 4+ devices without buffering',
        '50% increase in work productivity due to reliable connectivity',
        '40% cost reduction compared to previous satellite provider',
        'Children\'s online test scores improved by 25%'
      ],
      stats: {
        speed: '180 Mbps avg',
        devices: '12 connected',
        uptime: '100%',
        satisfaction: '5/5 stars',
        monthlySavings: '$85',
        installationTime: '2 hours'
      },
      image: '/images/satellite/residential-case-study-juba.webp'
    },
    {
      id: 2,
      category: 'office',
      title: 'International NGO Connectivity Success',
      location: 'Malakal, Upper Nile',
      type: 'Office Solution',
      description: 'Dr. Michael Ochieng\'s international NGO achieved mission-critical connectivity in remote Malakal, enabling life-saving humanitarian operations with enterprise-grade Starlink infrastructure.',
      customer: 'Dr. Michael Ochieng, Country Director',
      testimonial: 'As an international NGO working in remote areas, reliable internet is crucial for our operations. Motion Broadband delivered beyond our expectations. The 24/7 support and enterprise-grade service have been invaluable.',
      challenges: [
        'Mission-critical connectivity required in extremely remote location',
        '25+ staff members needing simultaneous high-speed access',
        'Strict security protocols for sensitive humanitarian data',
        'Zero tolerance for downtime during emergency operations',
        'Limited local technical support infrastructure'
      ],
      solutions: [
        'Installed redundant Starlink systems with automatic failover',
        'Deployed enterprise-grade security protocols and VPN tunneling',
        'Configured dedicated bandwidth allocation per department',
        'Established 24/7 remote monitoring and local technical support',
        'Implemented backup power systems for continuous operation'
      ],
      results: [
        'Zero downtime achieved during 8-month deployment period',
        '75% improvement in operational efficiency and response times',
        '100% secure data transmission with no security incidents',
        '60% cost reduction compared to previous VSAT solution',
        'Enabled real-time coordination with global headquarters',
        'Supported 3 emergency response operations without connectivity issues'
      ],
      stats: {
        speed: '220 Mbps avg',
        devices: '28 connected',
        uptime: '100%',
        satisfaction: '5/5 stars',
        costSavings: '60%',
        responseTime: '24/7 support'
      },
      image: '/images/satellite/ngo-case-study-malakal.webp'
    },
    {
      id: 3,
      category: 'business',
      title: 'Hassan Restaurant Revenue Transformation',
      location: 'Wau, Western Bahr el Ghazal',
      type: 'Business Solution',
      description: 'Fatima Hassan\'s restaurant business was completely transformed with Motion Broadband\'s revenue-generating Wi-Fi solution, dramatically improving customer experience while creating a new income stream.',
      customer: 'Fatima Hassan, Restaurant Owner',
      testimonial: 'Our restaurant business has been completely transformed since getting Motion Broadband. The automated Wi-Fi system generates additional revenue, and our customers love the fast, reliable internet.',
      challenges: [
        'Poor existing connectivity severely impacting customer satisfaction',
        'Lost business from customers seeking venues with reliable Wi-Fi',
        'Manual internet access management consuming staff time',
        'Need for additional revenue streams during slow periods',
        'Competition from venues with better connectivity'
      ],
      solutions: [
        'Deployed commercial Starlink system with high-capacity equipment',
        'Implemented automated voucher system with flexible pricing tiers',
        'Set up comprehensive analytics dashboard for usage monitoring',
        'Configured custom branding and promotional splash pages',
        'Established tiered access levels for different customer types'
      ],
      results: [
        '85% increase in customer satisfaction scores (4.2 to 4.8/5)',
        '$450 additional monthly revenue from Wi-Fi services',
        '35% increase in customer dwell time and repeat visits',
        '70% reduction in connectivity-related complaints',
        '25% increase in overall restaurant revenue',
        'Attracted new business traveler clientele',
        '90% reduction in manual internet management time'
      ],
      stats: {
        speed: '195 Mbps avg',
        devices: '120+ concurrent',
        uptime: '99.8%',
        satisfaction: '4.8/5 stars',
        monthlyRevenue: '$450',
        customerIncrease: '35%'
      },
      image: '/images/satellite/business-case-study-wau.webp'
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