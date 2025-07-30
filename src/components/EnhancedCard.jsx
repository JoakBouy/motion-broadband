import { motion } from 'framer-motion'
import { useState } from 'react'

const EnhancedCard = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = 'lift',
  clickable = false,
  onClick,
  gradient = false,
  glowColor = 'primary',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-gray-300',
    filled: 'bg-gray-50 border border-gray-200',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20',
    dark: 'bg-gray-900 border border-gray-700 text-white'
  }

  const hoverEffects = {
    lift: {
      whileHover: { 
        y: -8, 
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3, ease: 'easeOut' }
      }
    },
    scale: {
      whileHover: { 
        scale: 1.03,
        transition: { duration: 0.3, ease: 'easeOut' }
      }
    },
    glow: {
      whileHover: {
        boxShadow: `0 0 30px ${
          glowColor === 'primary' ? 'rgba(14, 165, 233, 0.3)' :
          glowColor === 'secondary' ? 'rgba(217, 70, 239, 0.3)' :
          glowColor === 'success' ? 'rgba(34, 197, 94, 0.3)' :
          glowColor === 'warning' ? 'rgba(251, 191, 36, 0.3)' :
          glowColor === 'danger' ? 'rgba(239, 68, 68, 0.3)' :
          'rgba(14, 165, 233, 0.3)'
        }`,
        transition: { duration: 0.3 }
      }
    },
    tilt: {
      whileHover: { 
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }
    },
    slide: {
      whileHover: { 
        x: 5,
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
        transition: { duration: 0.3 }
      }
    },
    bounce: {
      whileHover: {
        y: -5,
        transition: { 
          type: 'spring',
          stiffness: 400,
          damping: 10
        }
      }
    },
    rotate: {
      whileHover: {
        rotate: 2,
        scale: 1.02,
        transition: { duration: 0.3 }
      }
    },
    flip: {
      whileHover: {
        rotateY: 10,
        scale: 1.02,
        transition: { duration: 0.4 }
      }
    }
  }

  const currentHoverEffect = hoverEffects[hoverEffect] || hoverEffects.lift
  const currentVariant = variants[variant] || variants.default

  const cardClass = `
    ${currentVariant}
    rounded-xl shadow-md transition-all duration-300 overflow-hidden
    ${clickable ? 'cursor-pointer' : ''}
    ${className}
  `

  return (
    <motion.div
      className={cardClass}
      onClick={clickable ? onClick : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...currentHoverEffect}
      {...props}
    >
      {/* Gradient overlay on hover */}
      {gradient && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Shine effect */}
      {hoverEffect === 'lift' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Border glow effect */}
      {hoverEffect === 'glow' && (
        <motion.div
          className={`absolute inset-0 rounded-xl border-2 ${
            glowColor === 'primary' ? 'border-primary-400' :
            glowColor === 'secondary' ? 'border-secondary-400' :
            glowColor === 'success' ? 'border-green-400' :
            glowColor === 'warning' ? 'border-yellow-400' :
            glowColor === 'danger' ? 'border-red-400' :
            'border-primary-400'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// Specialized card components
export const ServiceCard = ({ icon, title, description, features, ...props }) => (
  <EnhancedCard variant="elevated" hoverEffect="lift" gradient {...props}>
    <div className="p-6">
      {icon && (
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm text-gray-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
              {feature}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  </EnhancedCard>
)

export const TestimonialCard = ({ name, role, content, rating, avatar, ...props }) => (
  <EnhancedCard variant="glass" hoverEffect="tilt" {...props}>
    <div className="p-6">
      <div className="flex items-center mb-4">
        {avatar && (
          <motion.div
            className="w-12 h-12 rounded-full overflow-hidden mr-4"
            whileHover={{ scale: 1.1 }}
          >
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </motion.div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      {rating && (
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <svg
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.div>
          ))}
        </div>
      )}
      
      <p className="text-gray-700 italic leading-relaxed">"{content}"</p>
    </div>
  </EnhancedCard>
)

export const StatCard = ({ icon, number, label, trend, ...props }) => (
  <EnhancedCard variant="gradient" hoverEffect="bounce" {...props}>
    <div className="p-6 text-center">
      {icon && (
        <motion.div
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
      )}
      <motion.div
        className="text-3xl font-bold text-primary-600 mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        {number}
      </motion.div>
      <p className="text-gray-700 font-medium">{label}</p>
      {trend && (
        <motion.div
          className={`text-sm mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
        </motion.div>
      )}
    </div>
  </EnhancedCard>
)

export default EnhancedCard
