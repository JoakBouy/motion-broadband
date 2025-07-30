import Cookies from 'js-cookie'

// Cookie categories and their purposes
export const COOKIE_CATEGORIES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  FUNCTIONAL: 'functional',
  MARKETING: 'marketing'
}

// Default cookie preferences
export const DEFAULT_PREFERENCES = {
  [COOKIE_CATEGORIES.NECESSARY]: true,
  [COOKIE_CATEGORIES.ANALYTICS]: false,
  [COOKIE_CATEGORIES.FUNCTIONAL]: false,
  [COOKIE_CATEGORIES.MARKETING]: false
}

// Cookie names used by the application
export const COOKIE_NAMES = {
  CONSENT: 'cookie-consent',
  USER_PREFERENCES: 'user-preferences',
  FORM_DATA: 'form-data-temp',
  THEME: 'theme-preference',
  LANGUAGE: 'language-preference'
}

class CookieManager {
  constructor() {
    this.preferences = this.getConsentPreferences()
  }

  // Get current cookie consent preferences
  getConsentPreferences() {
    try {
      const consent = Cookies.get(COOKIE_NAMES.CONSENT)
      return consent ? JSON.parse(consent) : DEFAULT_PREFERENCES
    } catch (error) {
      console.error('Error parsing cookie preferences:', error)
      return DEFAULT_PREFERENCES
    }
  }

  // Check if a specific cookie category is allowed
  isAllowed(category) {
    return this.preferences[category] === true
  }

  // Set a cookie if the category is allowed
  setCookie(name, value, options = {}, category = COOKIE_CATEGORIES.NECESSARY) {
    if (this.isAllowed(category)) {
      const defaultOptions = {
        expires: 30, // 30 days default
        secure: window.location.protocol === 'https:',
        sameSite: 'lax'
      }
      
      Cookies.set(name, value, { ...defaultOptions, ...options })
      return true
    }
    return false
  }

  // Get a cookie value
  getCookie(name) {
    return Cookies.get(name)
  }

  // Remove a cookie
  removeCookie(name, options = {}) {
    Cookies.remove(name, options)
  }

  // Update consent preferences
  updatePreferences(newPreferences) {
    this.preferences = { ...DEFAULT_PREFERENCES, ...newPreferences }
    Cookies.set(COOKIE_NAMES.CONSENT, JSON.stringify(this.preferences), { 
      expires: 365,
      secure: window.location.protocol === 'https:',
      sameSite: 'lax'
    })
    
    // Clean up cookies that are no longer allowed
    this.cleanupDisallowedCookies(newPreferences)
    
    // Initialize services based on new preferences
    this.initializeServices()
  }

  // Remove cookies that are no longer allowed
  cleanupDisallowedCookies(newPreferences) {
    // Analytics cookies cleanup
    if (!newPreferences[COOKIE_CATEGORIES.ANALYTICS]) {
      this.removeCookie('_ga')
      this.removeCookie('_ga_*')
      this.removeCookie('_gid')
      this.removeCookie('_gat')
    }

    // Marketing cookies cleanup
    if (!newPreferences[COOKIE_CATEGORIES.MARKETING]) {
      this.removeCookie('_fbp')
      this.removeCookie('_fbc')
      this.removeCookie('fr')
    }

    // Functional cookies cleanup
    if (!newPreferences[COOKIE_CATEGORIES.FUNCTIONAL]) {
      this.removeCookie(COOKIE_NAMES.USER_PREFERENCES)
      this.removeCookie(COOKIE_NAMES.THEME)
      this.removeCookie(COOKIE_NAMES.LANGUAGE)
    }
  }

  // Initialize services based on current preferences
  initializeServices() {
    // Google Analytics
    if (this.isAllowed(COOKIE_CATEGORIES.ANALYTICS)) {
      this.initializeGoogleAnalytics()
    }

    // Marketing tools
    if (this.isAllowed(COOKIE_CATEGORIES.MARKETING)) {
      this.initializeMarketingTools()
    }

    // Functional tools
    if (this.isAllowed(COOKIE_CATEGORIES.FUNCTIONAL)) {
      this.initializeFunctionalTools()
    }
  }

  // Initialize Google Analytics
  initializeGoogleAnalytics() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': this.isAllowed(COOKIE_CATEGORIES.MARKETING) ? 'granted' : 'denied'
      })
      
      // Track page view
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

  // Initialize marketing tools
  initializeMarketingTools() {
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('consent', 'grant')
    }

    // Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted'
      })
    }
  }

  // Initialize functional tools
  initializeFunctionalTools() {
    // Chat widgets, user preferences, etc.
    console.log('Functional cookies enabled - initializing functional tools')
  }

  // Utility methods for common cookie operations
  
  // Save form data temporarily (functional cookies)
  saveFormData(formName, data) {
    return this.setCookie(
      `${COOKIE_NAMES.FORM_DATA}-${formName}`, 
      JSON.stringify(data), 
      { expires: 1 }, // 1 day
      COOKIE_CATEGORIES.FUNCTIONAL
    )
  }

  // Get saved form data
  getFormData(formName) {
    const data = this.getCookie(`${COOKIE_NAMES.FORM_DATA}-${formName}`)
    try {
      return data ? JSON.parse(data) : null
    } catch (error) {
      console.error('Error parsing form data:', error)
      return null
    }
  }

  // Save user preferences (functional cookies)
  saveUserPreferences(preferences) {
    return this.setCookie(
      COOKIE_NAMES.USER_PREFERENCES,
      JSON.stringify(preferences),
      { expires: 365 },
      COOKIE_CATEGORIES.FUNCTIONAL
    )
  }

  // Get user preferences
  getUserPreferences() {
    const prefs = this.getCookie(COOKIE_NAMES.USER_PREFERENCES)
    try {
      return prefs ? JSON.parse(prefs) : {}
    } catch (error) {
      console.error('Error parsing user preferences:', error)
      return {}
    }
  }

  // Track analytics events (analytics cookies)
  trackEvent(eventName, parameters = {}) {
    if (this.isAllowed(COOKIE_CATEGORIES.ANALYTICS) && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  // Track page views (analytics cookies)
  trackPageView(pagePath, pageTitle) {
    if (this.isAllowed(COOKIE_CATEGORIES.ANALYTICS) && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle
      })
    }
  }

  // Check if user has made a consent choice
  hasConsent() {
    return !!Cookies.get(COOKIE_NAMES.CONSENT)
  }

  // Reset all cookie preferences
  resetPreferences() {
    this.removeCookie(COOKIE_NAMES.CONSENT)
    this.preferences = DEFAULT_PREFERENCES
    this.cleanupDisallowedCookies(DEFAULT_PREFERENCES)
  }

  // Get all cookies set by the application
  getAllAppCookies() {
    const allCookies = Cookies.get()
    const appCookies = {}
    
    // Filter cookies that belong to our application
    Object.keys(COOKIE_NAMES).forEach(key => {
      const cookieName = COOKIE_NAMES[key]
      if (allCookies[cookieName]) {
        appCookies[cookieName] = allCookies[cookieName]
      }
    })
    
    return appCookies
  }
}

// Create and export a singleton instance
const cookieManager = new CookieManager()
export default cookieManager

// Export utility functions for direct use
export const {
  setCookie,
  getCookie,
  removeCookie,
  isAllowed,
  trackEvent,
  trackPageView,
  saveFormData,
  getFormData,
  saveUserPreferences,
  getUserPreferences,
  hasConsent,
  updatePreferences
} = cookieManager
