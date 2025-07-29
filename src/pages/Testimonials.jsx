import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Star, 
  Quote, 
  Users, 
  Building, 
  Home as HomeIcon, 
  Globe, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Reviews', icon: Users },
    { id: 'home', label: 'Home Users', icon: HomeIcon },
    { id: 'office', label: 'Office Users', icon: Building },
    { id: 'business', label: 'Business Users', icon: Globe }
  ]

  const testimonials = [
    {
      id: 1,
      category: 'home',
      name: 'Sarah Johnson',
      role: 'Family Manager',
      location: 'Juba, Central Equatoria',
      rating: 5,
      content: 'Motion Broadband has transformed our family\'s digital life. With 6 people in the house, we needed reliable internet for work, school, and entertainment. The setup was seamless, and the speed is incredible. We can all stream, work, and learn simultaneously without any issues.',
      highlights: ['Reliable family connectivity', 'Excellent customer service', 'Fast installation'],
      image: '/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      category: 'office',
      name: 'Dr. Michael Ochieng',
      role: 'Country Director',
      location: 'Malakal, Upper Nile',
      rating: 5,
      content: 'As an international NGO working in remote areas, reliable internet is crucial for our operations. Motion Broadband delivered beyond our expectations. The 24/7 support and enterprise-grade service have been invaluable for our humanitarian work.',
      highlights: ['Enterprise-grade reliability', '24/7 support', 'Remote location coverage'],
      image: '/images/testimonials/michael.jpg'
    },
    {
      id: 3,
      category: 'business',
      name: 'Fatima Hassan',
      role: 'Restaurant Owner',
      location: 'Wau, Western Bahr el Ghazal',
      rating: 5,
      content: 'Our restaurant business has been completely transformed since getting Motion Broadband. The automated Wi-Fi system generates additional revenue, and our customers love the fast, reliable internet. The setup was professional and the ongoing support is excellent.',
      highlights: ['Revenue generation', 'Customer satisfaction', 'Professional setup'],
      image: '/images/testimonials/fatima.jpg'
    },
    {
      id: 4,
      category: 'home',
      name: 'David Okello',
      role: 'Remote Worker',
      location: 'Yambio, Western Equatoria',
      rating: 5,
      content: 'Working remotely from a remote location was challenging until I found Motion Broadband. The internet speed is consistently fast, and I can participate in video calls without any issues. The customer service team is always helpful and responsive.',
      highlights: ['Consistent speed', 'Video call reliability', 'Responsive support'],
      image: '/images/testimonials/david.jpg'
    },
    {
      id: 5,
      category: 'office',
      name: 'Grace Akol',
      role: 'School Principal',
      location: 'Torit, Eastern Equatoria',
      rating: 5,
      content: 'Our school has been able to provide better educational opportunities thanks to Motion Broadband. Students can access online learning resources, and teachers can use digital tools effectively. The installation was smooth and the service has been reliable.',
      highlights: ['Educational access', 'Digital learning support', 'Reliable service'],
      image: '/images/testimonials/grace.jpg'
    },
    {
      id: 6,
      category: 'business',
      name: 'John Deng',
      role: 'Hotel Manager',
      location: 'Bentiu, Unity',
      rating: 5,
      content: 'The Wi-Fi system from Motion Broadband has significantly improved our guest experience. The automated voucher system is easy to manage and generates good revenue. Our guests appreciate the fast, reliable internet, and it has helped improve our ratings.',
      highlights: ['Guest satisfaction', 'Easy management', 'Revenue generation'],
      image: '/images/testimonials/john.jpg'
    }
  ]

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory)

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '1000+', label: 'Happy Customers', icon: Heart },
    { number: '99.9%', label: 'Satisfaction Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Users }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Customer <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Hear from our satisfied customers across South Sudan. Real stories from real people 
              who have experienced the transformative power of reliable internet connectivity.
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

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real feedback from customers across different sectors and locations in South Sudan.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="card p-6 group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{testimonial.content}</p>
                
                <div className="space-y-2">
                  {testimonial.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Testimonial Carousel */}
          {filteredTestimonials.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Featured <span className="text-gradient">Testimonial</span>
                </h3>
                <p className="text-gray-600">Hear from our customers in their own words</p>
              </div>
              
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center space-x-1 mb-6">
                      {[...Array(filteredTestimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
                      "{filteredTestimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">{filteredTestimonials[currentTestimonial].name}</h4>
                        <p className="text-gray-600">{filteredTestimonials[currentTestimonial].role}</p>
                        <p className="text-sm text-gray-500">{filteredTestimonials[currentTestimonial].location}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-600" />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <ArrowRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="flex justify-center space-x-2 mt-6">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial 
                        ? 'bg-primary-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Testimonials 