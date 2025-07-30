import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Wifi } from 'lucide-react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    const handleScrollStart = () => setIsScrolling(true)
    const handleScrollEnd = () => {
      setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', handleScrollStart)
    window.addEventListener('scrollend', handleScrollEnd)

    // Fallback for browsers without scrollend
    let scrollTimeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScrollEnd, 150)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', handleScrollStart)
      window.removeEventListener('scrollend', handleScrollEnd)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const scrollToTop = () => {
    setIsScrolling(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 1000)
  }

  const circumference = 2 * Math.PI * 18 // radius of 18
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="relative w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            {/* Progress ring */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 40 40"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-white/20"
              />
              <motion.circle
                cx="20"
                cy="20"
                r="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="text-white"
                style={{
                  strokeDasharray,
                  strokeDashoffset
                }}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </svg>

            {/* Icon with animation */}
            <AnimatePresence mode="wait">
              {isScrolling ? (
                <motion.div
                  key="scrolling"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Wifi className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="static"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ArrowUp className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-400"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.button>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            Back to top ({Math.round(scrollProgress)}%)
            <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
