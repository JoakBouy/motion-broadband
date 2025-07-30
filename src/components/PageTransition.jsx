import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children, variant = 'slide' }) => {
  const location = useLocation()

  const variants = {
    slide: {
      initial: { x: 300, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -300, opacity: 0 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 }
    },
    slideUp: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -50, opacity: 0 }
    },
    slideDown: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 }
    },
    rotate: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -90, opacity: 0 }
    },
    blur: {
      initial: { filter: 'blur(10px)', opacity: 0 },
      animate: { filter: 'blur(0px)', opacity: 1 },
      exit: { filter: 'blur(10px)', opacity: 0 }
    },
    elastic: {
      initial: { scale: 0, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 10
        }
      },
      exit: { scale: 0, opacity: 0 }
    }
  }

  const currentVariant = variants[variant] || variants.slide

  const transition = {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={currentVariant.initial}
        animate={currentVariant.animate}
        exit={currentVariant.exit}
        transition={currentVariant.animate?.transition || transition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Specialized page transition components
export const SlideTransition = ({ children }) => (
  <PageTransition variant="slide">{children}</PageTransition>
)

export const FadeTransition = ({ children }) => (
  <PageTransition variant="fade">{children}</PageTransition>
)

export const ScaleTransition = ({ children }) => (
  <PageTransition variant="scale">{children}</PageTransition>
)

export const BlurTransition = ({ children }) => (
  <PageTransition variant="blur">{children}</PageTransition>
)

// Advanced page transition with loading state
export const AdvancedPageTransition = ({ 
  children, 
  variant = 'slide',
  showLoader = false,
  loaderDelay = 200
}) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: loaderDelay / 1000 }}
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50"
          >
            <motion.div
              className="h-full bg-white/30"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
        <PageTransition variant={variant}>
          {children}
        </PageTransition>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
