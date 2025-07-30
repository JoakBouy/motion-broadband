import { motion } from 'framer-motion'
import { Check, Circle, ArrowRight } from 'lucide-react'

const ProgressIndicator = ({
  steps = [],
  currentStep = 0,
  variant = 'horizontal',
  showLabels = true,
  showProgress = true,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: {
      circle: 'w-6 h-6',
      text: 'text-xs',
      spacing: 'space-x-2'
    },
    md: {
      circle: 'w-8 h-8',
      text: 'text-sm',
      spacing: 'space-x-4'
    },
    lg: {
      circle: 'w-10 h-10',
      text: 'text-base',
      spacing: 'space-x-6'
    }
  }

  const currentSize = sizeClasses[size]

  const StepCircle = ({ step, index, isActive, isCompleted }) => (
    <motion.div
      className={`
        ${currentSize.circle} rounded-full flex items-center justify-center relative z-10
        ${isCompleted 
          ? 'bg-green-500 text-white' 
          : isActive 
            ? 'bg-primary-600 text-white' 
            : 'bg-gray-200 text-gray-500'
        }
      `}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      {isCompleted ? (
        <Check className="w-4 h-4" />
      ) : (
        <span className="font-semibold">{index + 1}</span>
      )}
      
      {/* Pulse animation for active step */}
      {isActive && !isCompleted && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary-600"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  )

  const ConnectorLine = ({ isCompleted, isActive }) => (
    <div className="flex-1 relative">
      <div className="h-0.5 bg-gray-200 absolute top-1/2 transform -translate-y-1/2 w-full" />
      <motion.div
        className="h-0.5 bg-primary-600 absolute top-1/2 transform -translate-y-1/2"
        initial={{ width: '0%' }}
        animate={{ 
          width: isCompleted ? '100%' : isActive ? '50%' : '0%'
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  )

  const HorizontalProgress = () => (
    <div className={`flex items-center ${currentSize.spacing} ${className}`}>
      {steps.map((step, index) => {
        const isActive = index === currentStep
        const isCompleted = index < currentStep
        
        return (
          <div key={index} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <StepCircle 
                step={step} 
                index={index} 
                isActive={isActive} 
                isCompleted={isCompleted} 
              />
              {showLabels && (
                <motion.p
                  className={`
                    ${currentSize.text} mt-2 text-center font-medium
                    ${isCompleted 
                      ? 'text-green-600' 
                      : isActive 
                        ? 'text-primary-600' 
                        : 'text-gray-500'
                    }
                  `}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {step.label || step.title || `Step ${index + 1}`}
                </motion.p>
              )}
            </div>
            
            {index < steps.length - 1 && (
              <ConnectorLine 
                isCompleted={index < currentStep - 1} 
                isActive={index === currentStep - 1}
              />
            )}
          </div>
        )
      })}
    </div>
  )

  const VerticalProgress = () => (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {steps.map((step, index) => {
        const isActive = index === currentStep
        const isCompleted = index < currentStep
        
        return (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <StepCircle 
                step={step} 
                index={index} 
                isActive={isActive} 
                isCompleted={isCompleted} 
              />
              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 mt-2 relative">
                  <div className="w-full h-full bg-gray-200" />
                  <motion.div
                    className="w-full bg-primary-600 absolute top-0"
                    initial={{ height: '0%' }}
                    animate={{ 
                      height: isCompleted ? '100%' : isActive ? '50%' : '0%'
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </div>
              )}
            </div>
            
            <div className="flex-1 pt-1">
              <motion.h3
                className={`
                  font-semibold ${currentSize.text}
                  ${isCompleted 
                    ? 'text-green-600' 
                    : isActive 
                      ? 'text-primary-600' 
                      : 'text-gray-500'
                  }
                `}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {step.label || step.title || `Step ${index + 1}`}
              </motion.h3>
              
              {step.description && (
                <motion.p
                  className="text-gray-600 text-sm mt-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {step.description}
                </motion.p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )

  const CircularProgress = () => {
    const progress = ((currentStep + 1) / steps.length) * 100
    const circumference = 2 * Math.PI * 45 // radius of 45
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="relative">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className="text-primary-600"
              style={{
                strokeDasharray,
                strokeDashoffset
              }}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-xl font-bold text-primary-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </div>
        
        {showLabels && (
          <motion.p
            className="mt-4 text-center font-medium text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {steps[currentStep]?.label || steps[currentStep]?.title || `Step ${currentStep + 1}`}
          </motion.p>
        )}
      </div>
    )
  }

  const LinearProgress = () => {
    const progress = ((currentStep + 1) / steps.length) * 100

    return (
      <div className={`w-full ${className}`}>
        {showLabels && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              {steps[currentStep]?.label || steps[currentStep]?.title || `Step ${currentStep + 1}`}
            </span>
            <span className="text-sm text-gray-500">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
        )}
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </div>
        
        {showProgress && (
          <motion.p
            className="text-xs text-gray-500 mt-1 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}% complete
          </motion.p>
        )}
      </div>
    )
  }

  const variants = {
    horizontal: HorizontalProgress,
    vertical: VerticalProgress,
    circular: CircularProgress,
    linear: LinearProgress
  }

  const ProgressComponent = variants[variant] || HorizontalProgress

  return <ProgressComponent />
}

export default ProgressIndicator
