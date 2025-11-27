import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Globe,
  ArrowRight,
  Wifi,
  CheckCircle,
  Award,
  DollarSign,
  Clock,
  X,
  Quote,
  Calendar,
  Target,
  Zap,
  Shield
} from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCase, setSelectedCase] = useState(null)

  const filters = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'home', label: 'Residential' },
    { id: 'office', label: 'Enterprise & NGO' },
    { id: 'business', label: 'Commercial & Industrial' }
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
      title: 'Hassan Restaurant Revenue Transformation',
      subtitle: 'From Connectivity Problems to Profit Generation',
      location: 'Wau, Western Bahr el Ghazal',
      type: 'Commercial Solution',
      customer: 'Fatima Hassan, Restaurant Owner',
      duration: '4 months',
      overview: 'Fatima Hassan\'s restaurant business was completely transformed with Motion Broadband\'s revenue-generating Wi-Fi solution, dramatically improving customer experience while creating a new income stream.',
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
        'Attracted new business traveler clientele',
        '90% reduction in manual internet management time'
      ],
      image: '/images/satellite/case-study-restaurant-wau.webp'
    },
    {
      id: 4,
      category: 'office',
      title: 'GPOC Unity Oil Field Operations',
      subtitle: 'Mission-Critical Infrastructure for Energy Sector',
      location: 'Unity Oil Field, Unity State',
      type: 'Industrial Solution',
      customer: 'James Mitchell, Operations Director',
      duration: '12 months',
      overview: 'GPOC South Sudan achieved unprecedented operational efficiency and safety compliance with Motion Broadband\'s industrial-grade Starlink solution, enabling real-time monitoring and communication across remote oil field operations.',
      testimonial: 'Motion Broadband transformed our operations in the most challenging environment. The reliability and speed have been game-changing for our safety protocols and operational efficiency. We can now monitor our entire operation in real-time.',
      challenge: 'Operating in Unity State\'s remote oil fields, GPOC faced critical communication challenges that impacted safety protocols, operational efficiency, and regulatory compliance. The existing satellite communication was unreliable, expensive, and insufficient for real-time data transmission required for modern oil operations.',
      solution: 'Motion Broadband deployed a robust industrial Starlink network with redundant systems, dedicated bandwidth allocation for critical operations, real-time monitoring capabilities, and secure VPN tunneling for sensitive operational data.',
      impact: 'GPOC achieved exceptional uptime over 12 months, significantly reduced communication costs, dramatically improved safety incident response time, and enabled real-time operational monitoring that substantially increased production efficiency.',
      metrics: {
        'Speed Improvement': '2 Mbps → 250 Mbps',
        'Connected Systems': '45 operational units',
        'Uptime Achievement': 'Exceptional (12 months)',
        'Cost Reduction': 'Significant vs VSAT',
        'Safety Response Time': 'Dramatically faster',
        'Production Efficiency': 'Substantial increase'
      },
      results: [
        'Exceptional uptime achieved over 12-month operational period',
        'Significant reduction in communication costs compared to VSAT',
        'Dramatically faster emergency response and safety protocol activation',
        'Substantial increase in production efficiency through real-time monitoring',
        'Zero communication-related safety incidents',
        'Successful regulatory compliance with real-time reporting',
        'Remote monitoring of multiple operational units simultaneously'
      ],
      image: '/images/satellite/case-study-gpoc-unity.webp'
    },
    {
      id: 5,
      category: 'office',
      title: 'CLIP Poverty Alleviation Program Success',
      subtitle: 'Empowering Communities Through Digital Connectivity',
      location: 'Bentiu, Unity State',
      type: 'NGO Solution',
      customer: 'Dr. Grace Akol, Program Director',
      duration: '10 months',
      overview: 'CLIP\'s poverty alleviation programs reached unprecedented scale and effectiveness with Motion Broadband\'s community-focused connectivity solution, enabling digital literacy training, mobile banking access, and real-time program monitoring across rural Unity State.',
      testimonial: 'Motion Broadband didn\'t just provide internet - they provided hope. Our community programs have transformed lives through digital access. We\'ve seen families lift themselves out of poverty through online opportunities we helped create.',
      challenge: 'CLIP\'s poverty alleviation programs in rural Unity State were severely limited by lack of reliable internet connectivity. The organization couldn\'t effectively deliver digital literacy training, facilitate mobile banking access, or monitor program effectiveness across scattered rural communities.',
      solution: 'Motion Broadband implemented a community-centered network with mobile hotspot capabilities, digital literacy training support, secure banking transaction facilitation, and comprehensive program monitoring systems with real-time data collection.',
      impact: 'CLIP expanded their reach to multiple additional communities, trained thousands of individuals in digital literacy, facilitated substantial mobile banking transactions, and achieved exceptional program success rates through real-time monitoring and adjustment capabilities.',
      metrics: {
        'Speed Improvement': '0.5 Mbps → 180 Mbps',
        'Communities Served': 'Multiple new locations',
        'People Trained': 'Thousands of individuals',
        'Banking Access': 'Comprehensive facilitation',
        'Program Success Rate': 'Exceptional results',
        'Cost Efficiency': 'Significantly improved'
      },
      results: [
        'Expanded program reach to multiple additional rural communities',
        'Thousands of individuals trained in digital literacy and online skills',
        'Substantial mobile banking transactions facilitated',
        'Exceptional program success rate through real-time monitoring',
        'Significant improvement in cost efficiency per program beneficiary',
        'Notable increase in household income among program participants',
        'Zero data loss incidents during critical program evaluations'
      ],
      image: '/images/satellite/case-study-clip-bentiu.webp'
    },
    {
      id: 6,
      category: 'business',
      title: 'T&M Synergy Multi-Site Operations Excellence',
      subtitle: 'Integrated Connectivity for Oil & Gas Plus Hospitality',
      location: 'Bentiu & Juba',
      type: 'Multi-Site Solution',
      customer: 'Ahmed Hassan, General Manager',
      duration: '8 months',
      overview: 'T&M Synergy achieved seamless integration between their oil & gas operations and hospitality services with Motion Broadband\'s multi-site connectivity solution, enabling unified operations management and premium guest experiences across multiple locations.',
      testimonial: 'Motion Broadband solved our biggest challenge - managing operations across different sectors and locations. Now our oil field operations and hotel services work as one integrated business. Our guests get premium internet while our operations run smoothly.',
      challenge: 'T&M Synergy struggled to maintain consistent connectivity between their oil & gas operations in Bentiu and hospitality services in Juba. Different internet providers, varying quality, and lack of integrated systems created operational inefficiencies and inconsistent customer experiences.',
      solution: 'Motion Broadband deployed an integrated multi-site network with unified management systems, load balancing between locations, guest Wi-Fi monetization, operational data synchronization, and 24/7 monitoring across all sites.',
      impact: 'T&M Synergy achieved 100% operational synchronization between sites, increased hotel revenue by 45% through premium Wi-Fi services, reduced operational costs by 55%, and improved guest satisfaction scores from 3.8 to 4.7 stars.',
      metrics: {
        'Multi-Site Speed': '15 Mbps → 200 Mbps avg',
        'Sites Connected': '3 locations',
        'Hotel Revenue Increase': '45%',
        'Operational Cost Reduction': '55%',
        'Guest Satisfaction': '3.8 → 4.7 stars',
        'System Uptime': '99.8%'
      },
      results: [
        '100% operational synchronization between oil & gas and hospitality sites',
        '45% increase in hotel revenue through premium Wi-Fi services',
        '55% reduction in overall operational communication costs',
        'Guest satisfaction improvement from 3.8 to 4.7 stars',
        '99.8% system uptime across all three locations',
        'Real-time inventory and booking synchronization',
        'Successful integration of field operations with customer services'
      ],
      image: '/images/satellite/case-study-tm-synergy-multi.webp'
    },
    {
      id: 7,
      category: 'business',
      title: 'Superior Enterprises Integrated Operations',
      subtitle: 'Oil & Gas Operations with Premium Hospitality Services',
      location: 'Rubkona, Unity State',
      type: 'Integrated Business Solution',
      customer: 'Robert Deng, CEO',
      duration: '14 months',
      overview: 'Superior Enterprises revolutionized their dual-sector operations with Motion Broadband\'s integrated connectivity solution, seamlessly managing oil & gas operations while providing world-class hospitality services, resulting in operational excellence and premium guest experiences.',
      testimonial: 'Motion Broadband enabled us to operate like a modern international company. Our oil operations are now digitally managed while our hotel provides connectivity that rivals five-star establishments in major cities. It\'s transformed our entire business model.',
      challenge: 'Superior Enterprises faced the complex challenge of running sophisticated oil & gas operations while maintaining a premium hotel that serves international business travelers. Poor connectivity affected both operational safety and guest satisfaction, limiting business growth and operational efficiency.',
      solution: 'Motion Broadband implemented a comprehensive dual-purpose network with industrial-grade connectivity for oil operations, premium guest Wi-Fi with revenue generation, integrated booking and operational systems, real-time monitoring, and backup systems for critical operations.',
      impact: 'Superior Enterprises achieved exceptional operational uptime, dramatically increased hotel bookings through reputation for excellent connectivity, generated substantial additional revenue from Wi-Fi services, and significantly reduced operational incidents through real-time monitoring.',
      metrics: {
        'Operational Speed': '3 Mbps → 280 Mbps',
        'Hotel Bookings': 'Dramatically increased',
        'Wi-Fi Revenue': 'Substantial monthly income',
        'Operational Incidents': 'Significantly reduced',
        'Guest Satisfaction': 'Outstanding ratings',
        'System Reliability': 'Exceptional uptime'
      },
      results: [
        'Exceptional operational uptime across oil & gas and hospitality operations',
        'Dramatic increase in hotel bookings due to connectivity reputation',
        'Substantial additional revenue from premium Wi-Fi services',
        'Significant reduction in operational incidents through real-time monitoring',
        'Outstanding guest satisfaction ratings for connectivity',
        'Successful integration of industrial and hospitality networks',
        'Zero safety incidents related to communication failures'
      ],
      image: '/images/satellite/case-study-superior-rubkona.webp'
    },
    {
      id: 8,
      category: 'office',
      title: 'Enjojo Foundation Wildlife Conservation Success',
      subtitle: 'Technology-Driven Wildlife Protection and Research',
      location: 'Boma National Park, Jonglei',
      type: 'Conservation Solution',
      customer: 'Dr. Mary Lomoro, Conservation Director',
      duration: '18 months',
      overview: 'Enjojo Foundation achieved groundbreaking wildlife conservation results with Motion Broadband\'s specialized connectivity solution, enabling real-time wildlife tracking, anti-poaching operations, and comprehensive ecosystem monitoring in one of South Sudan\'s most remote national parks.',
      testimonial: 'Motion Broadband made the impossible possible. We can now track wildlife in real-time, coordinate anti-poaching efforts instantly, and share our research globally. This connectivity has been crucial in protecting South Sudan\'s wildlife heritage.',
      challenge: 'Enjojo Foundation\'s wildlife conservation efforts in remote Boma National Park were severely hampered by complete lack of connectivity. They couldn\'t track wildlife movements, coordinate anti-poaching efforts, transmit research data, or communicate with international conservation partners, limiting their conservation impact.',
      solution: 'Motion Broadband deployed a specialized conservation network with GPS wildlife tracking integration, real-time anti-poaching communication systems, research data transmission capabilities, international collaboration platforms, and solar-powered remote monitoring stations.',
      impact: 'Enjojo Foundation increased wildlife protection coverage by 300%, reduced poaching incidents by 75%, successfully tracked 150+ animals with GPS collars, and published 12 international research papers through reliable data transmission capabilities.',
      metrics: {
        'Coverage Area': '300% increase',
        'Poaching Reduction': '75% decrease',
        'Animals Tracked': '150+ GPS collars',
        'Research Papers': '12 published',
        'Response Time': '85% faster',
        'Data Transmission': '100% success rate'
      },
      results: [
        '300% increase in wildlife protection coverage area',
        '75% reduction in poaching incidents through real-time coordination',
        'Successful GPS tracking of 150+ animals across the park',
        '12 international research papers published with transmitted data',
        '85% faster response time to wildlife emergencies',
        '100% success rate in critical data transmission',
        'Established South Sudan as a leader in tech-driven conservation'
      ],
      image: '/images/satellite/case-study-enjojo-boma.webp'
    },
    {
      id: 9,
      category: 'office',
      title: 'Flood-Affected Communities Emergency Response',
      subtitle: 'Critical Connectivity During Natural Disasters',
      location: 'Pibor, Jonglei (Flood Zone)',
      type: 'Emergency Response Solution',
      customer: 'Captain John Garang, Emergency Coordinator',
      duration: '6 months (ongoing)',
      overview: 'Motion Broadband provided life-saving connectivity to flood-affected communities in Pibor, enabling emergency coordination, humanitarian aid distribution, and family reunification services during South Sudan\'s worst flooding in decades.',
      testimonial: 'When the floods cut us off from the world, Motion Broadband was our lifeline. We coordinated rescues, distributed aid, and helped families find each other. Without this connectivity, we would have lost many more lives.',
      challenge: 'Severe flooding in Pibor completely destroyed existing communication infrastructure, leaving 50,000+ people cut off from emergency services, humanitarian aid, and family members. Traditional communication methods were impossible, creating a humanitarian crisis within a natural disaster.',
      solution: 'Motion Broadband rapidly deployed emergency Starlink systems with waterproof equipment, mobile communication units, emergency coordination networks, humanitarian aid tracking systems, and family reunification communication services.',
      impact: 'The emergency response saved an estimated 200+ lives through coordinated rescues, successfully distributed aid to 15,000+ people, reunited 500+ separated families, and maintained 24/7 emergency communication throughout the 6-month crisis period.',
      metrics: {
        'Lives Saved': '200+ estimated',
        'People Aided': '15,000+ reached',
        'Families Reunited': '500+ connections',
        'Emergency Uptime': '24/7 for 6 months',
        'Response Coordination': '95% success rate',
        'Aid Distribution': '100% tracked'
      },
      results: [
        'Estimated 200+ lives saved through coordinated emergency response',
        'Successfully reached 15,000+ people with humanitarian aid',
        'Reunited 500+ families separated by flooding',
        'Maintained 24/7 emergency communication for 6 months',
        '95% success rate in emergency response coordination',
        '100% tracking of humanitarian aid distribution',
        'Established model for disaster response connectivity in South Sudan'
      ],
      image: '/images/satellite/case-study-pibor-floods.webp'
    }
  ]

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(caseStudy => caseStudy.category === activeFilter)

  const stats = [
    { number: '100%', label: 'Customer Success Rate', icon: Award },
    { number: '99.8%', label: 'Average Uptime', icon: Wifi },
    { number: '60%', label: 'Average Cost Savings', icon: DollarSign },
    { number: '9', label: 'Success Stories', icon: Clock }
  ]

  // Modal Component
  const CaseStudyModal = ({ caseStudy, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 bg-gradient-to-r from-primary-900 to-secondary-900 text-white rounded-t-2xl border-b border-white/10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <Globe className="h-8 w-8 text-primary-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{caseStudy.title}</h2>
                <p className="text-blue-200 mb-2">{caseStudy.subtitle}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{caseStudy.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.overview}</p>
            </div>

            {/* Customer Testimonial */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 italic mb-3 leading-relaxed">"{caseStudy.testimonial}"</p>
                  <p className="text-sm font-medium text-white">— {caseStudy.customer}</p>
                </div>
              </div>
            </div>

            {/* Challenge, Solution, Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Target className="h-5 w-5 text-red-400 mr-2" />
                  Challenge
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Zap className="h-5 w-5 text-blue-400 mr-2" />
                  Solution
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2" />
                  Impact
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{caseStudy.impact}</p>
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                    <div className="font-bold text-primary-400 text-lg">{value}</div>
                    <div className="text-gray-400 text-sm">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Results Achieved</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  return (
    <div className="min-h-screen bg-dark-950 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container-custom relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Success <span className="text-gradient">Stories</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real transformations, measurable results. See how Motion Broadband has revolutionized
              connectivity for families, organizations, and businesses across South Sudan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 border border-white/10">
                  <stat.icon className="h-8 w-8 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-dark-950 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Detailed <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In-depth analysis of our most successful deployments with measurable outcomes and customer testimonials.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
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
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="glass-panel p-6 group hover:border-primary-500/50 transition-all duration-500 cursor-pointer border border-white/10 rounded-2xl"
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCase(caseStudy)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-900/50 to-secondary-900/50 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-white/5">
                  <Globe className="h-16 w-16 text-primary-400" />
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span className="text-sm text-gray-400">{caseStudy.location}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{caseStudy.overview}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-400">{caseStudy.type}</span>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-primary-400 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </div>
  )
}

export default Portfolio
