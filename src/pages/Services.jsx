import { motion } from 'framer-motion'
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
      color: 'from-blue-500 to-cyan-500'
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
      color: 'from-green-500 to-emerald-500'
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
      color: 'from-purple-500 to-pink-500'
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive internet solutions designed to meet the diverse needs of individuals, businesses, 
              and institutions across South Sudan. From basic connectivity to enterprise-grade solutions, 
              we provide everything you need to stay connected in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive suite of services ensures you get the best internet experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="card p-8 group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-700">
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
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Service <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored solutions for different user types and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="card p-8 text-center group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-gradient">Support</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're committed to providing exceptional support that keeps you connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Get <span className="text-yellow-300">Connected</span>?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied customers across South Sudan who trust Motion Broadband for their internet needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 