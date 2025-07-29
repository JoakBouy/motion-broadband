import { motion } from 'framer-motion'
import { Wifi, Globe, Shield, Zap, Home as HomeIcon, Building, Store, MapPin, ArrowRight, Star, Satellite, Users, Award, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react'

const Home = () => {
  const valuePropositions = [
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'From the bustling capital of Juba to the most remote towns like Akobo, Bentiu, and Pibor, we\'ve established comprehensive coverage across all 10 states of South Sudan. Our satellite-based infrastructure ensures that no matter how remote your location, you can access high-speed internet connectivity that was previously unimaginable in these areas.',
      color: 'from-blue-500 to-cyan-500',
      image: '/images/coverage-placeholder.svg'
    },
    {
      icon: Shield,
      title: 'Affordable Pricing',
      description: 'We understand the economic challenges faced by individuals and businesses in South Sudan. That\'s why we\'ve designed our pricing structure to be the most competitive in the market, offering flexible plans that cater to different budgets and usage requirements. Our transparent pricing ensures no hidden costs, making high-speed internet accessible to everyone.',
      color: 'from-green-500 to-emerald-500',
      image: '/images/pricing-placeholder.svg'
    },
    {
      icon: Wifi,
      title: 'Reliable Support',
      description: 'Our commitment to customer satisfaction goes beyond just providing internet service. We offer round-the-clock technical assistance through our dedicated customer support team. Whether you\'re experiencing connectivity issues, need help with installation, or have questions about your service, our experienced technicians are available 24/7 to ensure your internet experience remains seamless.',
      color: 'from-purple-500 to-pink-500',
      image: '/images/support-placeholder.svg'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We bring you Starlink, the world\'s most advanced satellite internet system developed by SpaceX. This revolutionary technology provides unprecedented speeds and reliability, even in the most challenging environments. Our infrastructure utilizes the latest satellite technology to deliver consistent, high-performance internet that rivals traditional fiber-optic connections.',
      color: 'from-orange-500 to-red-500',
      image: '/images/technology-placeholder.svg'
    }
  ]

  const services = [
    {
      icon: HomeIcon,
      title: 'Starlink for Home Use',
      description: 'Transform your home into a connected hub with our residential Starlink service. Whether you\'re streaming your favorite shows in high definition, working remotely with video conferencing, helping your children with online education, or enjoying online gaming with friends, our reliable internet ensures smooth performance for all your family\'s digital needs.',
      features: [
        'High-speed streaming for multiple devices simultaneously',
        'Seamless video conferencing and remote work capabilities',
        'Online gaming with low latency and stable connections',
        'Educational content access for students of all ages',
        'Social media and communication platform support',
        'Smart home device connectivity and management'
      ],
      image: '/images/home-internet-placeholder.svg'
    },
    {
      icon: Building,
      title: 'Starlink for Office Use',
      description: 'Empower your organization with enterprise-grade internet connectivity that supports multiple users and bandwidth-intensive applications. Our office solutions are designed to handle the demands of modern workplaces, from NGOs and development partners to diplomatic missions and government institutions. Experience enhanced productivity with reliable, high-speed internet that keeps your team connected and efficient.',
      features: [
        'Multi-user support with dedicated bandwidth allocation',
        'Secure VPN and remote access capabilities',
        'Cloud-based application and data storage support',
        'Video conferencing and collaboration tools optimization',
        'Backup connectivity solutions for business continuity',
        'Customized network management and monitoring'
      ],
      image: '/images/office-internet-placeholder.svg'
    },
    {
      icon: Store,
      title: 'Starlink for Business Use',
      description: 'Take your business to the next level with our comprehensive business internet solutions. Whether you\'re running a small café, a large hotel, or a retail establishment, our services help you delight customers with fast, reliable Wi-Fi while generating additional revenue through automated voucher systems. Our business packages include advanced features designed to enhance customer experience and boost your bottom line.',
      features: [
        'Customer Wi-Fi hotspot management and monetization',
        'Automated voucher system for pay-per-use internet access',
        'Business analytics and usage reporting tools',
        'Custom branding and splash page customization',
        'Advanced security features and content filtering',
        'Technical support and maintenance services'
      ],
      image: '/images/business-internet-placeholder.svg'
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
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight text-shadow-lg"
            variants={itemVariants}
          >
            South Sudan's Leading{' '}
            <span className="text-gradient">Starlink Internet Provider</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-100 mb-8 text-shadow"
            variants={itemVariants}
          >
            Connecting you to affordable, reliable and high speed starlink internet
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed text-shadow"
            variants={itemVariants}
          >
            Whether you're at home, in the office, running a business, or managing operations in remote areas, 
            Motion Broadband ensures you stay connected with fast, reliable, & affordable internet from space. 
            Our mission is to bridge the digital divide in South Sudan by bringing world-class satellite internet 
            technology to every corner of the country, empowering individuals, businesses, and institutions to 
            thrive in the digital age.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get Connected Today</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Packages
            </motion.button>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Motion Broadband</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We're committed to bringing the world's most advanced satellite internet technology to every corner of South Sudan. 
              Our comprehensive approach combines cutting-edge Starlink technology with local expertise, ensuring that every 
              customer receives personalized service and reliable connectivity that transforms their digital experience.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{prop.title}</h3>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Comprehensive Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive internet solutions tailored for every need, from home connectivity to enterprise solutions. 
              We understand that different users have different requirements, which is why we've developed specialized 
              packages that address the unique challenges and opportunities faced by individuals, families, businesses, 
              and institutions across South Sudan.
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Our <span className="text-yellow-300">Impact</span> Across South Sudan
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Numbers that tell the story of our commitment to connecting South Sudan. Every statistic represents 
              real people, families, and businesses whose lives have been transformed by reliable internet connectivity. 
              We're proud of our achievements but remain focused on expanding our reach to serve even more communities.
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
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 font-medium mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 