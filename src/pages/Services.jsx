import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Wifi,
  Settings,
  Headphones,
  Home as HomeIcon,
  Building,
  Store,
  CheckCircle,
  ArrowRight,
  Satellite,
  Shield,
  Zap,
  Users,
  Globe,
  Clock,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'

const Services = () => {
  const coreServices = [
    {
      icon: Satellite,
      title: 'Integrated Starlink Connectivity',
      description: 'Comprehensive internet services with seamless order, delivery, installation, activation and payment process.',
      features: [
        'Hassle-free setup for affordable, reliable and high speed starlink internet',
        'Guidance in choosing cost-effective and efficient options',
        'Complete end-to-end service management',
        'Seamless integration with existing infrastructure'
      ],
      color: 'text-primary-400'
    },
    {
      icon: Settings,
      title: 'Maintenance & Technical Support',
      description: 'Dedicated team of technicians available 24/7 to keep your equipment in optimal condition.',
      features: [
        '24/7 technical support and troubleshooting',
        'Preventive maintenance and system optimization',
        'Remote monitoring and diagnostics',
        'Emergency response and rapid resolution'
      ],
      color: 'text-secondary-400'
    },
    {
      icon: Shield,
      title: 'Network Security & Management',
      description: 'Advanced security solutions to protect your network and ensure safe internet usage.',
      features: [
        'Advanced firewall and security protocols',
        'Content filtering and parental controls',
        'Network monitoring and threat detection',
        'Secure VPN and data protection'
      ],
      color: 'text-accent-400'
    }
  ]

  const serviceCategories = [
    {
      icon: HomeIcon,
      title: 'Residential Services',
      description: 'Perfect for families and individuals seeking reliable home internet connectivity.',
      features: ['High-speed streaming', 'Online gaming', 'Remote work', 'Video conferencing'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Scalable solutions for businesses, NGOs, and government institutions.',
      features: ['Multi-user support', 'Business continuity', 'Cloud integration', 'Dedicated support'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Store,
      title: 'Business Services',
      description: 'Revenue-generating solutions for hotels, cafes, and retail establishments.',
      features: ['Customer Wi-Fi', 'Voucher systems', 'Analytics dashboard', 'Custom branding'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const supportFeatures = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support to ensure your connectivity never stops.'
    },
    {
      icon: Phone,
      title: 'Multiple Contact Channels',
      description: 'Reach us via phone, email, or live chat for immediate assistance.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our team understands the unique challenges of South Sudan.'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick resolution times to minimize any service interruptions.'
    }
  ]

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
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive internet solutions designed to meet the diverse needs of individuals, businesses,
              and institutions across South Sudan. From basic connectivity to enterprise-grade solutions,
              we provide everything you need to stay connected in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive suite of services ensures you get the best internet experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="card p-8 group hover:bg-white/5 transition-all duration-500"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-dark-950 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Service <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions for different user types and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="glass-panel p-8 text-center group hover:border-primary-500/50 transition-all duration-500 border border-white/10 rounded-2xl"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="section-padding bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Why Choose Our <span className="text-gradient">Support</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're committed to providing exceptional support that keeps you connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 border border-white/10">
                  <feature.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Get <span className="text-accent-300">Connected</span>?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied customers across South Sudan who trust Motion Broadband for their internet needs.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services