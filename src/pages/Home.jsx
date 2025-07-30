import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wifi, Globe, Shield, Zap, Home as HomeIcon, Building, Store, ArrowRight, Users, Award, CheckCircle, Clock } from 'lucide-react'

const Home = () => {
  const valuePropositions = [
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Complete coverage across all 10 states of South Sudan, from Juba to remote towns like Akobo, Bentiu, and Pibor. Our satellite infrastructure delivers high-speed internet to previously unreachable areas.',
      color: 'from-blue-500 to-cyan-500',
      image: '/images/satellite/South_Sudan-32_States.png'
    },
    {
      icon: Shield,
      title: 'Affordable Pricing',
      description: 'Competitive, transparent pricing designed for South Sudan\'s market. Flexible plans for different budgets with no hidden costs, making high-speed internet accessible to everyone.',
      color: 'from-green-500 to-emerald-500',
      image: '/images/satellite/affordable.avif'
    },
    {
      icon: Wifi,
      title: 'Reliable Support',
      description: '24/7 technical support from our dedicated team. Whether it\'s installation, connectivity issues, or service questions, our experienced technicians ensure seamless internet experience.',
      color: 'from-purple-500 to-pink-500',
      image: '/images/satellite/customer-support-team.webp'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Powered by Starlink, SpaceX\'s advanced satellite internet system. Revolutionary technology delivering unprecedented speeds and reliability, even in challenging environments.',
      color: 'from-orange-500 to-red-500',
      image: '/images/satellite/connectivity.webp'
    }
  ]

  const services = [
    {
      icon: HomeIcon,
      title: 'Starlink for Home Use',
      description: 'Transform your home with reliable Starlink service. Perfect for streaming, remote work, online education, and gaming - ensuring smooth performance for all your family\'s digital needs.',
      features: [
        'High-speed streaming for multiple devices',
        'Seamless video conferencing and remote work',
        'Low-latency gaming and stable connections',
        'Educational content access for students',
        'Social media and communication support',
        'Smart home device connectivity'
      ],
      image: '/images/satellite/home-use.webp'
    },
    {
      icon: Building,
      title: 'Starlink for Office Use',
      description: 'Enterprise-grade connectivity for organizations, NGOs, diplomatic missions, and government institutions. Enhanced productivity with reliable, high-speed internet that keeps teams connected.',
      features: [
        'Multi-user support with dedicated bandwidth',
        'Secure VPN and remote access capabilities',
        'Cloud application and data storage support',
        'Optimized video conferencing and collaboration',
        'Backup connectivity for business continuity',
        'Network management and monitoring'
      ],
      image: '/images/satellite/ngo-use.webp'
    },
    {
      icon: Store,
      title: 'Starlink for Business Use',
      description: 'Comprehensive solutions for cafés, hotels, and retail establishments. Delight customers with fast Wi-Fi while generating additional revenue through automated systems.',
      features: [
        'Customer Wi-Fi management and monetization',
        'Automated voucher system for pay-per-use',
        'Business analytics and usage reporting',
        'Custom branding and splash pages',
        'Advanced security and content filtering',
        'Technical support and maintenance'
      ],
      image: '/images/satellite/vouchers.webp'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Satellites */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-3 h-3 bg-secondary-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-40 left-20 w-2 h-2 bg-accent-400 rounded-full opacity-60"
        />

        <motion.div 
          className="container-custom relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight text-shadow-lg"
            variants={itemVariants}
          >
            South Sudan's Leading{' '}
            <span className="text-gradient">Starlink Internet Provider</span>
          </motion.h1>
          
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-blue-100 mb-8 text-shadow"
            variants={itemVariants}
          >
            Connecting you to affordable, reliable and high speed starlink internet
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed text-shadow"
            variants={itemVariants}
          >
            Fast, reliable, and affordable internet from space. We bridge South Sudan's digital divide
            with world-class satellite technology, empowering communities from Juba to remote areas
            to thrive in the digital age.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-2 no-underline"
              >
                <span>Get Connected Today</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 no-underline"
              >
                View Our Services
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Motion Broadband</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Advanced Starlink technology meets local expertise. We deliver personalized service and
              reliable connectivity that transforms your digital experience across South Sudan.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {valuePropositions.map((prop) => (
              <motion.div
                key={prop.title}
                className="card p-8 text-center group hover:shadow-2xl transition-all duration-500"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                {/* Image Placeholder */}
                <motion.div 
                  className="w-full h-32 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Comprehensive Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Tailored internet solutions for every need. Specialized packages for individuals, families,
              businesses, and institutions across South Sudan.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="card p-8 group hover:shadow-2xl transition-all duration-500"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Image Placeholder */}
                <motion.div 
                  className="w-full h-40 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start space-x-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Our <span className="text-yellow-300">Impact</span> Across South Sudan
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Real impact across South Sudan. Every number represents lives transformed by reliable
              internet connectivity as we expand our reach to serve more communities.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '10', label: 'States Covered', icon: Globe, description: 'Complete nationwide coverage' },
              { number: '24/7', label: 'Support Available', icon: Clock, description: 'Round-the-clock assistance' },
              { number: '100%', label: 'Customer Satisfaction', icon: Award, description: 'Exceeding expectations' },
              { number: '1000+', label: 'Happy Customers', icon: Users, description: 'Growing community' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-blue-100 font-medium mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-blue-200">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 