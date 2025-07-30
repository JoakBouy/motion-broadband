import { motion } from 'framer-motion'
import { useState } from 'react'

const InteractiveButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  animation = 'scale',
  disabled = false,
  loading = false,
  icon = null,
  className = '',
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600',
    outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-600',
    ghost: 'bg-transparent hover:bg-primary-50 text-primary-600',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white'
  }

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const animations = {
    scale: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 }
    },
    lift: {
      whileHover: { y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' },
      whileTap: { y: 0, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }
    },
    bounce: {
      whileHover: { 
        scale: 1.05,
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      },
      whileTap: { scale: 0.95 }
    },
    pulse: {
      whileHover: {
        boxShadow: [
          '0 0 0 0 rgba(14, 165, 233, 0.7)',
          '0 0 0 10px rgba(14, 165, 233, 0)',
          '0 0 0 0 rgba(14, 165, 233, 0)'
        ],
        transition: { duration: 1.5, repeat: Infinity }
      }
    },
    glow: {
      whileHover: {
        boxShadow: '0 0 20px rgba(14, 165, 233, 0.6)',
        transition: { duration: 0.3 }
      }
    },
    slide: {
      whileHover: { x: 5 },
      whileTap: { x: 0 }
    }
  }

  const currentAnimation = animations[animation] || animations.scale

  const buttonClass = `
    ${variants[variant]}
    ${sizes[size]}
    font-semibold rounded-lg transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
    ${className}
  `

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...currentAnimation}
      {...props}
    >
      {/* Ripple effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}

      {/* Button content */}
      <motion.div
        className={`flex items-center justify-center space-x-2 ${loading ? 'opacity-0' : 'opacity-100'}`}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <motion.div
            whileHover={{ rotate: animation === 'bounce' ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
        <span>{children}</span>
      </motion.div>

      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  )
}

// Specialized button components
export const PrimaryButton = (props) => (
  <InteractiveButton variant="primary" animation="lift" {...props} />
)

export const SecondaryButton = (props) => (
  <InteractiveButton variant="secondary" animation="scale" {...props} />
)

export const GhostButton = (props) => (
  <InteractiveButton variant="ghost" animation="glow" {...props} />
)

export const FloatingActionButton = ({ icon, onClick, className = '', ...props }) => (
  <motion.button
    className={`
      fixed bottom-6 right-6 w-14 h-14 bg-primary-600 hover:bg-primary-700 
      text-white rounded-full shadow-lg hover:shadow-xl
      flex items-center justify-center z-50
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      ${className}
    `}
    onClick={onClick}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    {...props}
  >
    <motion.div
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.div>
  </motion.button>
)

export default InteractiveButton
