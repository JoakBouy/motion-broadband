import { motion } from 'framer-motion'
import { Target, Users, Heart, Lightbulb, Globe, Award, CheckCircle, ArrowRight, Clock, Shield, Zap, MapPin, Signal } from 'lucide-react'

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  const values = [
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Consistent, uninterrupted connectivity you can depend on every day. We\'ve invested in redundant systems and backup solutions to minimize downtime and keep you connected when it matters most.',
      color: 'text-primary-400'
    },
    {
      icon: Target,
      title: 'Affordability',
      description: 'High-speed internet accessible to everyone with competitive, transparent pricing. Our flexible plans accommodate different budgets, ensuring families, students, and businesses can all benefit from our services.',
      color: 'text-secondary-400'
    },
    {
      icon: Users,
      title: 'Customer-centricity',
      description: 'Your success is our priority. We provide personalized support and solutions tailored to your specific needs, becoming your technology partner from consultation to ongoing support.',
      color: 'text-accent-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge satellite technology to deliver the best internet experience. We continuously invest in advanced solutions and explore new technologies to better serve our community.',
      color: 'text-primary-400'
    },
    {
      icon: Globe,
      title: 'Nationwide Accessibility',
      description: 'Bringing connectivity to every corner of South Sudan, no matter how remote. Our satellite infrastructure reaches traditionally underserved communities, bridging the digital divide nationwide.',
      color: 'text-secondary-400'
    }
  ]

  const stats = [
    { number: '10', label: 'States Covered', icon: Globe, description: 'Complete nationwide presence' },
    { number: '24/7', label: 'Support Available', icon: Clock, description: 'Always here when you need us' },
    { number: '100%', label: 'Customer Satisfaction', icon: Award, description: 'Exceeding expectations daily' },
    { number: '1000+', label: 'Happy Customers', icon: Heart, description: 'Growing community of satisfied users' }
  ]

  return (
    <div className="min-h-screen bg-dark-950 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              variants={itemVariants}
            >
              About <span className="text-gradient">Motion Broadband</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Leading provider of high-speed, affordable satellite broadband powered by Starlink.
              We're driving connectivity and economic growth across South Sudan, empowering communities
              to thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                Our <span className="text-gradient">Vision & Mission</span>
              </h2>

              <div className="space-y-8">
                <motion.div
                  className="glass-panel p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-primary-400 mb-3 flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    Our Vision
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the most trusted internet service provider in South Sudan, driving connectivity
                    and economic growth nationwide. We envision every citizen having access to high-quality
                    internet that enables participation in the global digital economy.
                  </p>
                </motion.div>

                <motion.div
                  className="glass-panel p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-secondary-400 mb-3 flex items-center">
                    <Globe className="h-6 w-6 mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To deliver reliable, high-speed and affordable internet solutions tailored to individuals,
                    businesses, and institutions throughout South Sudan. We bridge the digital divide using
                    cutting-edge satellite technology that transforms lives and drives economic development.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card p-8 text-white shadow-glow">
                <h3 className="text-2xl font-semibold mb-6">Why Choose Motion Broadband?</h3>
                <ul className="space-y-4">
                  {[
                    "Deployed across all 10 states with comprehensive nationwide coverage",
                    "24/7 technical support with local expertise",
                    "Advanced satellite technology with unprecedented speeds",
                    "Competitive pricing and flexible plans",
                    "Local presence with deep community understanding"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-dark-950 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/2 h-full bg-primary-900/10 blur-3xl -z-10 transform -translate-y-1/2"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-4 lg:px-0"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-6 md:mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Motion Broadband was founded to bridge South Sudan's digital divide by bringing
                  world-class internet connectivity to every community. We recognized that reliable
                  internet access is fundamental for economic development, education, and social progress.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  As South Sudan's leading Starlink provider, we've deployed across all 10 states,
                  from Juba to remote towns like Akobo, Bentiu, and Pibor. Every community deserves
                  access to the opportunities that reliable connectivity provides.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  We're building bridges to opportunity, education, and economic prosperity.
                  Our story is one of determination, innovation, and unwavering commitment
                  to serving our community with accessible, reliable internet for all.
                </motion.p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-8 flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span>Learn More About Our Journey</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8 px-4 lg:px-0"
            >
              <div className="w-full h-64 md:h-80 lg:h-96 glass-panel rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center px-4">
                  <Globe className="h-16 md:h-20 lg:h-24 w-16 md:w-20 lg:w-24 text-primary-500 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Our Reach</h3>
                  <p className="text-sm md:text-base text-gray-400">Connecting South Sudan nationwide</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Width Aerial View Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-6 md:mb-8 px-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3 md:mb-4">
                South Sudan from <span className="text-gradient">Above</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Our beautiful nation from a bird's eye view - the diverse landscape we're proud to serve
              </p>
            </div>

            {/* Full-Width Image Container - Mobile Optimized */}
            <motion.div
              className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] xl:h-[600px] bg-dark-800 rounded-xl md:rounded-2xl overflow-hidden shadow-glow mx-2 md:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Image overlay with gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />

              {/* Caption overlay - optimized for mobile */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="glass-panel rounded-lg p-3 md:p-4 max-w-lg md:max-w-2xl mx-auto text-center border border-white/10">
                  <p className="text-sm md:text-lg text-white font-medium">
                    Connecting communities across South Sudan's diverse landscape
                  </p>
                  <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2 hidden md:block">
                    From bustling cities to remote villages, Motion Broadband brings reliable internet to every corner of our nation
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* State Coverage Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 mx-2 md:mx-0">
              <div className="text-center mb-6 md:mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Globe className="h-12 md:h-14 lg:h-16 w-12 md:w-14 lg:w-16 text-primary-500 mx-auto mb-3 md:mb-4" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Nationwide Coverage</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">Serving all 10 states of South Sudan</p>
              </div>

              {/* State Coverage Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { name: 'Central Equatoria', shortName: 'C. Equatoria', icon: MapPin, status: 'excellent', signal: 4 },
                  { name: 'Eastern Equatoria', shortName: 'E. Equatoria', icon: MapPin, status: 'excellent', signal: 4 },
                  { name: 'Western Equatoria', shortName: 'W. Equatoria', icon: MapPin, status: 'good', signal: 3 },
                  { name: 'Jonglei', shortName: 'Jonglei', icon: MapPin, status: 'good', signal: 3 },
                  { name: 'Unity', shortName: 'Unity', icon: MapPin, status: 'excellent', signal: 4 },
                  { name: 'Upper Nile', shortName: 'Upper Nile', icon: MapPin, status: 'good', signal: 3 },
                  { name: 'Warrap', shortName: 'Warrap', icon: MapPin, status: 'good', signal: 3 },
                  { name: 'Northern Bahr el Ghazal', shortName: 'N. Bahr el Ghazal', icon: MapPin, status: 'active', signal: 2 },
                  { name: 'Western Bahr el Ghazal', shortName: 'W. Bahr el Ghazal', icon: MapPin, status: 'good', signal: 3 },
                  { name: 'Lakes', shortName: 'Lakes', icon: MapPin, status: 'active', signal: 2 }
                ].map((state, index) => {
                  const getStatusColor = (status) => {
                    switch (status) {
                      case 'excellent': return 'bg-green-500/20 text-green-400 border-green-500/30'
                      case 'good': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      case 'active': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                    }
                  }

                  const getStatusLabel = (status) => {
                    switch (status) {
                      case 'excellent': return 'Excellent'
                      case 'good': return 'Good'
                      case 'active': return 'Active'
                      default: return 'Available'
                    }
                  }

                  const getSignalBars = (signal) => {
                    return Array.from({ length: 4 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-sm ${i < signal
                          ? 'bg-gradient-to-t from-primary-500 to-secondary-500'
                          : 'bg-gray-700'
                          }`}
                        style={{ height: `${(i + 1) * 3 + 2}px` }}
                      />
                    ))
                  }

                  return (
                    <motion.div
                      key={state.name}
                      className="bg-white/5 rounded-lg p-3 md:p-4 shadow-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.0 + (index * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <state.icon className="h-3 w-3 md:h-4 md:w-4 text-primary-400" />
                          </div>
                          <h4 className="text-xs md:text-sm font-medium text-white truncate">
                            <span className="md:hidden">{state.shortName}</span>
                            <span className="hidden md:inline">{state.name}</span>
                          </h4>
                        </div>
                        <div className="flex items-center space-x-0.5 md:space-x-1 flex-shrink-0">
                          {getSignalBars(state.signal)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(state.status)}`}>
                          {getStatusLabel(state.status)}
                        </span>
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Coverage Stats - Mobile Optimized */}
              <motion.div
                className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 rounded-lg p-3 md:p-4 shadow-sm border border-white/10">
                  <div className="flex items-center justify-center mb-1 md:mb-2">
                    <Globe className="h-4 w-4 md:h-6 md:w-6 text-primary-400" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-primary-400">10</div>
                  <div className="text-xs md:text-sm text-gray-400">States Served</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 md:p-4 shadow-sm border border-white/10">
                  <div className="flex items-center justify-center mb-1 md:mb-2">
                    <Signal className="h-4 w-4 md:h-6 md:w-6 text-green-400" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-green-400">100%</div>
                  <div className="text-xs md:text-sm text-gray-400">Availability</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 md:p-4 shadow-sm border border-white/10">
                  <div className="flex items-center justify-center mb-1 md:mb-2">
                    <Shield className="h-4 w-4 md:h-6 md:w-6 text-blue-400" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs md:text-sm text-gray-400">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Fundamental principles that guide our commitment to serving South Sudan with
              integrity, excellence, and genuine care for your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card p-8 text-center group hover:bg-white/5 transition-all duration-500"
                whileHover={{ y: -10 }}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 z-0"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Our <span className="text-accent-300">Impact</span> Across South Sudan
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Real numbers that represent families, businesses, and communities transformed
              by reliable internet connectivity across our nation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 font-medium mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About