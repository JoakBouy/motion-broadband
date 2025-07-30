import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie, X, Settings, Shield, BarChart3, Users } from 'lucide-react'
import Cookies from 'js-cookie'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = Cookies.get('cookie-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent)
        setCookiePreferences(savedPreferences)
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setCookiePreferences(allAccepted)
    Cookies.set('cookie-consent', JSON.stringify(allAccepted), { expires: 365 })
    setShowBanner(false)
    setShowSettings(false)
    
    // Initialize analytics and other services here
    initializeServices(allAccepted)
  }

  const handleAcceptSelected = () => {
    Cookies.set('cookie-consent', JSON.stringify(cookiePreferences), { expires: 365 })
    setShowBanner(false)
    setShowSettings(false)
    
    // Initialize only selected services
    initializeServices(cookiePreferences)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setCookiePreferences(onlyNecessary)
    Cookies.set('cookie-consent', JSON.stringify(onlyNecessary), { expires: 365 })
    setShowBanner(false)
    setShowSettings(false)
  }

  const initializeServices = (preferences) => {
    // Initialize Google Analytics if analytics cookies are accepted
    if (preferences.analytics && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }

    // Initialize marketing tools if marketing cookies are accepted
    if (preferences.marketing) {
      // Initialize Facebook Pixel, Google Ads, etc.
      console.log('Marketing cookies accepted - initialize marketing tools')
    }

    // Initialize functional cookies if accepted
    if (preferences.functional) {
      // Initialize chat widgets, preference storage, etc.
      console.log('Functional cookies accepted - initialize functional tools')
    }
  }

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: Shield,
      required: true
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      icon: BarChart3,
      required: false
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality like chat support and personalized content.',
      icon: Settings,
      required: false
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track marketing campaign effectiveness.',
      icon: Users,
      required: false
    }
  ]

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="flex items-start space-x-3 flex-1">
                  <Cookie className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">We Value Your Privacy</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We use cookies to enhance your browsing experience, provide personalized content,
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{' '}
                      <Link to="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                        Learn more in our Privacy Policy
                      </Link>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="btn-secondary text-sm px-4 py-2 whitespace-nowrap"
                  >
                    Cookie Settings
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="btn-outline text-sm px-4 py-2 whitespace-nowrap"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Cookie className="h-6 w-6 text-primary-500" />
                    <h2 className="text-xl font-semibold text-gray-900">Cookie Preferences</h2>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Manage your cookie preferences. You can enable or disable different types of cookies below.
                </p>
              </div>

              {/* Cookie Types */}
              <div className="p-6 space-y-6">
                {cookieTypes.map((type) => (
                  <div key={type.id} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <type.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{type.title}</h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[type.id]}
                            onChange={(e) => {
                              if (!type.required) {
                                setCookiePreferences(prev => ({
                                  ...prev,
                                  [type.id]: e.target.checked
                                }))
                              }
                            }}
                            disabled={type.required}
                            className="sr-only"
                          />
                          <div className={`w-11 h-6 rounded-full transition-colors ${
                            cookiePreferences[type.id] 
                              ? 'bg-primary-500' 
                              : 'bg-gray-300'
                          } ${type.required ? 'opacity-50' : ''}`}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              cookiePreferences[type.id] ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5`} />
                          </div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                      {type.required && (
                        <p className="text-xs text-gray-500 mt-1">Always active</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="btn-outline flex-1"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="btn-primary flex-1"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CookieConsent
