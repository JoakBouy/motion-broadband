import { motion } from 'framer-motion'
import { Wifi, Satellite, Radio } from 'lucide-react'

const LoadingSpinner = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  variant = 'default',
  showDots = true,
  showText = true
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  }

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }

  const dotSizeClasses = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
    xl: 'w-3 h-3',
    '2xl': 'w-3.5 h-3.5'
  }

  const variants = {
    default: {
      icon: Wifi,
      animation: { rotate: 360 },
      transition: { duration: 2, repeat: Infinity, ease: 'linear' }
    },
    satellite: {
      icon: Satellite,
      animation: {
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      },
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    },
    signal: {
      icon: Radio,
      animation: {
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      },
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
    },
    orbit: {
      icon: Satellite,
      animation: {},
      transition: {}
    }
  }

  const currentVariant = variants[variant]
  const IconComponent = currentVariant.icon

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Main Loading Icon */}
      {variant === 'orbit' ? (
        <div className={`relative ${sizeClasses[size]}`}>
          {/* Central hub */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Orbiting satellites */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: `${size === 'xs' ? '6px' : size === 'sm' ? '8px' : size === 'md' ? '16px' : size === 'lg' ? '24px' : size === 'xl' ? '32px' : '40px'} 0`
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8
              }}
            />
          ))}
        </div>
      ) : (
        <motion.div
          className={`${sizeClasses[size]} text-primary-600`}
          animate={currentVariant.animation}
          transition={currentVariant.transition}
        >
          <IconComponent className="w-full h-full" />
        </motion.div>
      )}

      {/* Loading Text */}
      {showText && text && (
        <motion.p
          className={`${textSizeClasses[size]} text-gray-600 font-medium text-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}

      {/* Pulse dots */}
      {showDots && (
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`${dotSizeClasses[size]} bg-primary-400 rounded-full`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default LoadingSpinner
