import { motion } from 'framer-motion'
import { Target, Users, Heart, Lightbulb, Globe, Award, CheckCircle, ArrowRight, Clock, Shield, Zap, Star } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Reliability',
      description: 'We ensure consistent, uninterrupted connectivity that you can depend on every day. Our commitment to reliability extends beyond just providing internet service – we understand that your digital connectivity is essential for work, education, communication, and entertainment. That\'s why we\'ve invested in redundant systems and backup solutions to minimize downtime and ensure that you stay connected when it matters most.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Affordability',
      description: 'Making high-speed internet accessible to everyone with competitive, transparent pricing. We believe that quality internet connectivity should not be a luxury reserved for the few, but a fundamental service available to all South Sudanese citizens. Our pricing structure is designed to accommodate different budgets and usage patterns, ensuring that families, students, small businesses, and large organizations can all benefit from our services without financial strain.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Customer-centricity',
      description: 'Your success is our priority. We provide personalized support and solutions tailored to your specific needs. Our customer-centric approach means that we don\'t just sell internet packages – we become your technology partner, understanding your unique requirements and working with you to find the perfect solution. From initial consultation to ongoing support, we\'re here to ensure your complete satisfaction.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology to deliver the best possible internet experience. We continuously invest in the latest satellite technology and network infrastructure to ensure that our customers always have access to the most advanced internet solutions available. Our commitment to innovation drives us to constantly improve our services, explore new technologies, and find better ways to serve our community.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Nationwide Accessibility',
      description: 'Bringing connectivity to every corner of South Sudan, no matter how remote. We believe that geographical location should not be a barrier to digital access. Our satellite-based infrastructure allows us to reach communities that have been traditionally underserved by conventional internet providers. We\'re committed to bridging the digital divide and ensuring that every South Sudanese citizen has the opportunity to participate in the global digital economy.',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const stats = [
    { number: '10', label: 'States Covered', icon: Globe, description: 'Complete nationwide presence' },
    { number: '24/7', label: 'Support Available', icon: Clock, description: 'Always here when you need us' },
    { number: '100%', label: 'Customer Satisfaction', icon: Award, description: 'Exceeding expectations daily' },
    { number: '1000+', label: 'Happy Customers', icon: Heart, description: 'Growing community of satisfied users' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Motion Broadband</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Leading provider of high-speed, affordable & reliable satellite broadband powered by Starlink, 
              committed to driving connectivity and economic growth in South Sudan. We are more than just an 
              internet service provider – we are a catalyst for digital transformation, empowering individuals, 
              businesses, and communities to thrive in the interconnected world of the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                Our <span className="text-gradient">Vision & Mission</span>
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3 flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    Our Vision
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    To be the most trusted and reliable internet service provider in South Sudan, driving connectivity 
                    and economic growth across the nation. We envision a future where every South Sudanese citizen, 
                    regardless of their location, has access to high-quality internet connectivity that enables them 
                    to participate fully in the global digital economy, access educational resources, and connect 
                    with the world around them.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3 flex items-center">
                    <Globe className="h-6 w-6 mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    To deliver reliable, high-speed and affordable internet solutions tailored to the needs of 
                    individuals, businesses, and institutions throughout South Sudan. We are committed to bridging 
                    the digital divide by leveraging cutting-edge satellite technology to provide consistent, 
                    high-performance internet connectivity that transforms lives and drives economic development 
                    across all regions of our nation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-gradient rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Why Choose Motion Broadband?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                    <span>Successfully deployed Starlink systems across all 10 states of South Sudan, ensuring comprehensive nationwide coverage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                    <span>24/7 technical support and customer service with local expertise and understanding of South Sudanese needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                    <span>World's most advanced satellite internet technology providing unprecedented speeds and reliability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                    <span>Competitive pricing and flexible plans designed specifically for the South Sudanese market</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                    <span>Local presence and community engagement, understanding the unique challenges of our region</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Motion Broadband was founded with a clear and ambitious vision: to bridge the digital divide 
                  in South Sudan by bringing world-class internet connectivity to every community, no matter 
                  how remote. Our journey began with the recognition that reliable internet access is not just 
                  a luxury, but a fundamental necessity for economic development, education, healthcare, and 
                  social progress in the modern world.
                </p>
                <p>
                  As the leading provider of high-speed, affordable & reliable satellite broadband powered by 
                  Starlink, we have successfully deployed our systems across all 10 states of South Sudan, 
                  from the bustling capital of Juba to the most remote towns like Akobo, Bentiu, and Pibor. 
                  Our expansion has been driven by the understanding that every community deserves access to 
                  the opportunities that reliable internet connectivity provides.
                </p>
                <p>
                  Our commitment goes beyond just providing internet access. We're dedicated to driving 
                  connectivity and economic growth throughout South Sudan, empowering individuals, businesses, 
                  and institutions to thrive in the digital age. We believe that by connecting communities, 
                  we're not just providing a service – we're building bridges to opportunity, education, 
                  and economic prosperity for all South Sudanese citizens.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, always with the goal of making 
                  high-quality internet connectivity more accessible, more reliable, and more affordable 
                  for everyone in South Sudan. Our story is one of determination, innovation, and an 
                  unwavering commitment to serving our community.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-8 flex items-center space-x-2"
              >
                <span>Learn More About Our Journey</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>

            <div>
              <div className="card-gradient rounded-2xl p-8 text-white text-center shadow-xl">
                <Globe className="h-24 w-24 mx-auto mb-6 text-white/80" />
                <h3 className="text-2xl font-semibold mb-4">South Sudan Coverage</h3>
                <p className="text-lg mb-6">
                  Successfully deployed across all 10 states with comprehensive service infrastructure
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Central Equatoria</div>
                  <div>Upper Nile</div>
                  <div>Western Equatoria</div>
                  <div>Western Bahr el Ghazal</div>
                  <div>Unity</div>
                  <div>Jonglei</div>
                  <div>Warrap</div>
                  <div>Eastern Equatoria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The principles that guide everything we do, from technology choices to customer service. 
              These values are not just words on a page – they are the foundation of our company culture 
              and the driving force behind every decision we make. They reflect our commitment to serving 
              the people of South Sudan with integrity, excellence, and genuine care for their success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card p-8 text-center group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Our <span className="text-yellow-300">Impact</span> Across South Sudan
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Numbers that tell the story of our commitment to connecting South Sudan. Every statistic represents 
              real people, families, and businesses whose lives have been transformed by reliable internet connectivity. 
              We're proud of our achievements but remain focused on expanding our reach to serve even more communities 
              and create greater impact across our nation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
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