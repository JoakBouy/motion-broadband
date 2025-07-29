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
  TrendingUp,
  DollarSign,
  Clock,
  Quote
} from 'lucide-react'

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCase, setSelectedCase] = useState(null)

  const filters = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'home', label: 'Residential' },
    { id: 'office', label: 'Enterprise' },
    { id: 'business', label: 'Commercial' }
  ]

  const caseStudies = [
    {
      id: 1,
      category: 'home',
      title: 'Johnson Family Digital Transformation',
      subtitle: 'From Connectivity Struggles to Digital Excellence',
      location: 'Juba, Central Equatoria',
      type: 'Residential Solution',
      customer: 'Sarah Johnson, Family Manager',
      duration: '6 months',
      overview: 'A family of 6 in Juba transformed their digital experience with Motion Broadband\'s residential Starlink service, achieving 100% uptime and significant cost savings while enabling seamless remote work and online education.',
      testimonial: 'Motion Broadband has transformed our family\'s digital life. With 6 people in the house, we needed reliable internet for work, school, and entertainment. The setup was seamless, and the speed is incredible.',
      challenge: 'The Johnson family faced significant connectivity challenges with their previous internet provider. With six family members requiring simultaneous access for remote work, online education, and entertainment, their existing connection couldn\'t handle the demand, resulting in frequent disconnections and poor video quality.',
      solution: 'Motion Broadband deployed a comprehensive residential Starlink solution with enterprise-grade equipment, mesh networking for complete home coverage, and intelligent bandwidth management to prioritize critical applications.',
      impact: 'The transformation was immediate and measurable. The family achieved 100% uptime, reduced their monthly internet costs by 40%, and saw a 25% improvement in children\'s online test scores due to reliable connectivity.',
      metrics: {
        'Speed Improvement': '15 Mbps → 180 Mbps',
        'Connected Devices': '12 simultaneous',
        'Uptime Achievement': '100% (6 months)',
        'Cost Savings': '40% reduction',
        'Installation Time': '2 hours',
        'Customer Satisfaction': '5/5 stars'
      },
      results: [
        '100% uptime achieved over 6-month period',
        'Simultaneous 4K streaming on multiple devices',
        '50% increase in remote work productivity',
        '25% improvement in children\'s online test scores',
        '40% reduction in monthly internet costs',
        'Zero connectivity-related complaints'
      ],
      image: '/images/satellite/case-study-johnson-family.webp'
    },
    {
      id: 2,
      category: 'office',
      title: 'International NGO Mission-Critical Connectivity',
      subtitle: 'Enabling Life-Saving Operations in Remote Areas',
      location: 'Malakal, Upper Nile',
      type: 'Enterprise Solution',
      customer: 'Dr. Michael Ochieng, Country Director',
      duration: '8 months',
      overview: 'An international NGO in remote Malakal achieved zero downtime and 75% operational efficiency improvement with Motion Broadband\'s enterprise Starlink solution, enabling critical humanitarian operations.',
      testimonial: 'As an international NGO working in remote areas, reliable internet is crucial for our operations. Motion Broadband delivered beyond our expectations. The 24/7 support has been invaluable for our humanitarian work.',
      challenge: 'Operating in one of South Sudan\'s most remote locations, the NGO struggled with unreliable VSAT connectivity that frequently failed during critical operations. The organization needed enterprise-grade reliability for 25+ staff members handling sensitive humanitarian data.',
      solution: 'Motion Broadband implemented a redundant Starlink system with automatic failover, enterprise security protocols, dedicated bandwidth allocation, and 24/7 monitoring with local technical support.',
      impact: 'The NGO achieved zero downtime over 8 months, improved operational efficiency by 75%, and reduced connectivity costs by 60% while maintaining the highest security standards for sensitive humanitarian operations.',
      metrics: {
        'Speed Improvement': '5 Mbps → 220 Mbps',
        'Connected Users': '28 staff members',
        'Uptime Achievement': '100% (8 months)',
        'Cost Reduction': '60% vs VSAT',
        'Security Incidents': '0 breaches',
        'Emergency Operations': '3 supported'
      },
      results: [
        'Zero downtime during 8-month deployment period',
        '75% improvement in operational efficiency',
        '100% secure data transmission with no incidents',
        '60% cost reduction compared to VSAT solution',
        'Real-time coordination with global headquarters',
        'Successful support of 3 emergency operations'
      ],
      image: '/images/satellite/case-study-ngo-malakal.webp'
    },
    {
      id: 3,
      category: 'business',
      title: 'Restaurant Revenue Transformation',
      subtitle: 'From Connectivity Problems to Profit Generation',
      location: 'Wau, Western Bahr el Ghazal',
      type: 'Commercial Solution',
      customer: 'Fatima Hassan, Restaurant Owner',
      duration: '4 months',
      overview: 'A restaurant in Wau transformed its business model with Motion Broadband\'s commercial Wi-Fi solution, generating $450 additional monthly revenue while dramatically improving customer satisfaction.',
      testimonial: 'Our restaurant business has been completely transformed since getting Motion Broadband. The automated Wi-Fi system generates additional revenue, and our customers love the fast, reliable internet.',
      challenge: 'The restaurant was losing customers due to poor internet connectivity, with many patrons leaving for competitors with better Wi-Fi. Manual internet management was consuming valuable staff time, and the business needed additional revenue streams.',
      solution: 'Motion Broadband deployed a commercial Starlink system with automated voucher management, tiered access levels, custom branding, and comprehensive analytics to optimize both customer experience and revenue generation.',
      impact: 'The restaurant saw an 85% increase in customer satisfaction scores, generated $450 in additional monthly revenue from Wi-Fi services, and experienced a 35% increase in customer visits and dwell time.',
      metrics: {
        'Speed Improvement': '8 Mbps → 195 Mbps',
        'Concurrent Users': '120+ customers',
        'Uptime Achievement': '99.8%',
        'Monthly Wi-Fi Revenue': '$450',
        'Customer Satisfaction': '4.2 → 4.8/5',
        'Visit Increase': '35%'
      },
      results: [
        '85% increase in customer satisfaction scores',
        '$450 additional monthly revenue from Wi-Fi',
        '35% increase in customer visits and dwell time',
        '70% reduction in connectivity complaints',
        '25% increase in overall restaurant revenue',
        'Attracted new business traveler clientele'
      ],
      image: '/images/satellite/case-study-restaurant-wau.webp'
    }
  ]

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeFilter)

  const stats = [
    { number: '100%', label: 'Customer Success Rate', icon: Award },
    { number: '99.9%', label: 'Average Uptime', icon: Wifi },
    { number: '50%', label: 'Average Cost Savings', icon: DollarSign },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Success <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Real transformations, measurable results. See how Motion Broadband has revolutionized 
              connectivity for families, organizations, and businesses across South Sudan.
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

      {/* Case Studies Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Detailed <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              In-depth analysis of our most successful deployments with measurable outcomes and customer testimonials.
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

          {/* Case Studies Grid */}
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
                <p className="text-gray-700 text-sm mb-4">{caseStudy.overview}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600">{caseStudy.type}</span>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
