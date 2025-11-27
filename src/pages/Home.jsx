import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wifi, Globe, Shield, Zap, Home as HomeIcon, Building, Store, ArrowRight, Users, Award, CheckCircle, Clock } from 'lucide-react'

const Home = () => {
  const valuePropositions = [
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Complete coverage across all 10 states of South Sudan, from Juba to remote towns like Akobo, Bentiu, and Pibor. Our satellite infrastructure delivers high-speed internet to previously unreachable areas.',
      color: 'text-primary-400',
      image: '/images/satellite/South_Sudan-32_States.jpeg'
    },
    {
      icon: Shield,
      title: 'Affordable Pricing',
      description: 'Competitive, transparent pricing designed for South Sudan\'s market. Flexible plans for different budgets with no hidden costs, making high-speed internet accessible to everyone.',
      color: 'text-secondary-400',
      image: '/images/satellite/affordable.png'
    },
    {
      icon: Wifi,
      title: 'Reliable Support',
      description: '24/7 technical support from our dedicated team. Whether it\'s installation, connectivity issues, or service questions, our experienced technicians ensure seamless internet experience.',
      color: 'text-accent-400',
      image: '/images/satellite/customer-support-team.webp'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Powered by Starlink, SpaceX\'s advanced satellite internet system. Revolutionary technology delivering unprecedented speeds and reliability, even in challenging environments.',
      color: 'text-primary-400',
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
    <div className="min-h-screen bg-dark-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating Satellites/Orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-20 w-48 h-48 bg-secondary-500/20 rounded-full blur-3xl"
        />

        <motion.div
          className="container-custom relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-primary-300">
              🚀 Revolutionizing Connectivity in South Sudan
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight"
            variants={itemVariants}
          >
            South Sudan's Leading{' '}
            <span className="text-gradient block mt-2">Starlink Provider</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            variants={itemVariants}
          >
            Bridge the digital divide with world-class satellite technology.
            Empowering communities from Juba to remote areas with fast, reliable, and affordable internet.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-3 no-underline shadow-glow hover:shadow-glow-lg"
              >
                <span>Get Connected</span>
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 no-underline"
              >
                View Services
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="text-gradient">Motion Broadband</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Advanced Starlink technology meets local expertise. We deliver personalized service and
              reliable connectivity that transforms your digital experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                className="card p-6 group hover:bg-dark-800/50 transition-colors duration-500"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                {/* Image Placeholder */}
                <motion.div
                  className="w-full h-40 mb-6 rounded-xl overflow-hidden shadow-lg relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 p-2 bg-white/10 backdrop-blur-md rounded-lg">
                    <prop.icon className={`h-6 w-6 ${prop.color}`} />
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">{prop.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-dark-950 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-0 w-full h-full bg-primary-900/10 blur-3xl -z-10 transform -translate-y-1/2"></div>

        <div className="container-custom">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient">Comprehensive Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card p-8 group relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon className="w-32 h-32 text-white" />
                </div>

                <motion.div
                  className="w-full h-48 mb-8 rounded-xl overflow-hidden shadow-lg relative group"
                >
                  <div className="absolute inset-0 bg-primary-500/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">{service.description}</p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start space-x-3 text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
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
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 z-0"></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our <span className="text-accent-300">Impact</span> Across South Sudan
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
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
                className="text-center group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
                  whileHover={{ rotate: 12 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-base sm:text-lg text-primary-200 font-medium mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-blue-200/80">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home