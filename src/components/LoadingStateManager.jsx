import { motion, AnimatePresence } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'
import SkeletonLoader from './SkeletonLoader'
import ProgressIndicator from './ProgressIndicator'

const LoadingStateManager = ({
  isLoading = false,
  loadingType = 'spinner',
  loadingText = 'Loading...',
  skeletonVariant = 'default',
  spinnerVariant = 'default',
  spinnerSize = 'md',
  overlay = false,
  blur = false,
  progress = null,
  steps = [],
  currentStep = 0,
  className = '',
  children,
  fallback = null,
  error = null,
  retry = null
}) => {
  // Error state
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong</h3>
        <p className="text-gray-600 mb-4">{error.message || 'An unexpected error occurred'}</p>
        {retry && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={retry}
            className="btn-primary"
          >
            Try Again
          </motion.button>
        )}
      </motion.div>
    )
  }

  // Loading states
  const loadingComponents = {
    spinner: (
      <LoadingSpinner
        variant={spinnerVariant}
        size={spinnerSize}
        text={loadingText}
        className="py-8"
      />
    ),
    
    skeleton: (
      <SkeletonLoader
        variant={skeletonVariant}
        className="w-full"
      />
    ),
    
    progress: progress !== null ? (
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <div className="w-full max-w-md">
          <ProgressIndicator
            steps={[{ label: 'Loading' }]}
            currentStep={0}
            variant="linear"
            showLabels={false}
          />
        </div>
        <p className="text-gray-600 font-medium">{loadingText}</p>
        <p className="text-sm text-gray-500">{Math.round(progress)}% complete</p>
      </div>
    ) : (
      <LoadingSpinner
        variant={spinnerVariant}
        size={spinnerSize}
        text={loadingText}
        className="py-8"
      />
    ),
    
    steps: steps.length > 0 ? (
      <div className="flex flex-col items-center justify-center py-8 space-y-6">
        <ProgressIndicator
          steps={steps}
          currentStep={currentStep}
          variant="horizontal"
          size="md"
        />
        <LoadingSpinner
          variant="satellite"
          size="lg"
          text={steps[currentStep]?.label || loadingText}
          showDots={false}
        />
      </div>
    ) : (
      <LoadingSpinner
        variant={spinnerVariant}
        size={spinnerSize}
        text={loadingText}
        className="py-8"
      />
    ),
    
    dots: (
      <div className="flex items-center justify-center py-8 space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-primary-500 rounded-full"
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
        {loadingText && (
          <span className="ml-4 text-gray-600 font-medium">{loadingText}</span>
        )}
      </div>
    ),
    
    pulse: (
      <div className="flex flex-col items-center justify-center py-8">
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {loadingText && (
          <p className="mt-4 text-gray-600 font-medium">{loadingText}</p>
        )}
      </div>
    )
  }

  const LoadingComponent = loadingComponents[loadingType] || loadingComponents.spinner

  // Overlay loading
  if (overlay && isLoading) {
    return (
      <div className="relative">
        {children}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`
              absolute inset-0 z-50 flex items-center justify-center
              ${blur ? 'backdrop-blur-sm' : ''}
              bg-white/80
            `}
          >
            {LoadingComponent}
          </motion.div>
        </AnimatePresence>
      </div>
    )
  }

  // Inline loading replacement
  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={className}
        >
          {LoadingComponent}
        </motion.div>
      </AnimatePresence>
    )
  }

  // Content loaded
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={className}
      >
        {children || fallback}
      </motion.div>
    </AnimatePresence>
  )
}

// Specialized loading components for common use cases
export const PageLoader = ({ isLoading, children, ...props }) => (
  <LoadingStateManager
    isLoading={isLoading}
    loadingType="spinner"
    spinnerVariant="orbit"
    spinnerSize="xl"
    loadingText="Loading page..."
    className="min-h-screen flex items-center justify-center"
    {...props}
  >
    {children}
  </LoadingStateManager>
)

export const CardLoader = ({ isLoading, children, ...props }) => (
  <LoadingStateManager
    isLoading={isLoading}
    loadingType="skeleton"
    skeletonVariant="card"
    {...props}
  >
    {children}
  </LoadingStateManager>
)

export const FormLoader = ({ isLoading, children, steps, currentStep, ...props }) => (
  <LoadingStateManager
    isLoading={isLoading}
    loadingType={steps ? "steps" : "spinner"}
    spinnerVariant="signal"
    loadingText="Processing..."
    steps={steps}
    currentStep={currentStep}
    overlay={true}
    blur={true}
    {...props}
  >
    {children}
  </LoadingStateManager>
)

export const ImageLoader = ({ isLoading, children, ...props }) => (
  <LoadingStateManager
    isLoading={isLoading}
    loadingType="pulse"
    loadingText=""
    className="w-full h-full"
    {...props}
  >
    {children}
  </LoadingStateManager>
)

export default LoadingStateManager
