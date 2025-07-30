import { motion } from 'framer-motion'

const SkeletonLoader = ({ 
  variant = 'default',
  className = '',
  animate = true,
  count = 1
}) => {
  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  const SkeletonItem = ({ children, className: itemClassName = '' }) => (
    <div className={`relative overflow-hidden bg-gray-200 rounded ${itemClassName}`}>
      {animate && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
      )}
      {children}
    </div>
  )

  const variants = {
    // Basic skeleton shapes
    default: (
      <SkeletonItem className="h-4 w-full" />
    ),
    
    text: (
      <div className="space-y-2">
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-4/5" />
        <SkeletonItem className="h-4 w-3/4" />
      </div>
    ),

    paragraph: (
      <div className="space-y-3">
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-5/6" />
        <SkeletonItem className="h-4 w-4/5" />
        <SkeletonItem className="h-4 w-2/3" />
      </div>
    ),

    // Card layouts
    card: (
      <div className="p-6 bg-white rounded-xl shadow-lg space-y-4">
        <SkeletonItem className="h-48 w-full rounded-lg" />
        <SkeletonItem className="h-6 w-3/4" />
        <div className="space-y-2">
          <SkeletonItem className="h-4 w-full" />
          <SkeletonItem className="h-4 w-5/6" />
          <SkeletonItem className="h-4 w-4/5" />
        </div>
        <div className="flex space-x-2">
          <SkeletonItem className="h-8 w-20 rounded-full" />
          <SkeletonItem className="h-8 w-24 rounded-full" />
        </div>
      </div>
    ),

    testimonial: (
      <div className="p-6 bg-white rounded-xl shadow-lg space-y-4">
        <div className="flex items-center space-x-4">
          <SkeletonItem className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <SkeletonItem className="h-4 w-32" />
            <SkeletonItem className="h-3 w-24" />
          </div>
        </div>
        <div className="space-y-2">
          <SkeletonItem className="h-4 w-full" />
          <SkeletonItem className="h-4 w-full" />
          <SkeletonItem className="h-4 w-3/4" />
        </div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <SkeletonItem key={i} className="h-4 w-4 rounded-full" />
          ))}
        </div>
      </div>
    ),

    // Service/feature layouts
    service: (
      <div className="p-8 bg-white rounded-xl shadow-lg space-y-6">
        <SkeletonItem className="h-40 w-full rounded-xl" />
        <SkeletonItem className="h-6 w-2/3" />
        <div className="space-y-2">
          <SkeletonItem className="h-4 w-full" />
          <SkeletonItem className="h-4 w-5/6" />
        </div>
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <SkeletonItem className="h-4 w-4 rounded-full" />
              <SkeletonItem className="h-4 flex-1" />
            </div>
          ))}
        </div>
      </div>
    ),

    // Navigation/header layouts
    navbar: (
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <SkeletonItem className="h-8 w-8 rounded-full" />
          <SkeletonItem className="h-6 w-32" />
        </div>
        <div className="flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <SkeletonItem key={i} className="h-4 w-16" />
          ))}
        </div>
        <SkeletonItem className="h-10 w-24 rounded-lg" />
      </div>
    ),

    // Stats/metrics layouts
    stats: (
      <div className="text-center space-y-4">
        <SkeletonItem className="h-16 w-16 rounded-full mx-auto" />
        <SkeletonItem className="h-8 w-20 mx-auto" />
        <SkeletonItem className="h-4 w-24 mx-auto" />
      </div>
    ),

    // Hero section layout
    hero: (
      <div className="text-center space-y-6 py-20">
        <SkeletonItem className="h-12 w-3/4 mx-auto" />
        <SkeletonItem className="h-8 w-1/2 mx-auto" />
        <div className="space-y-3 max-w-4xl mx-auto">
          <SkeletonItem className="h-4 w-full" />
          <SkeletonItem className="h-4 w-5/6 mx-auto" />
          <SkeletonItem className="h-4 w-4/5 mx-auto" />
        </div>
        <div className="flex justify-center space-x-4">
          <SkeletonItem className="h-12 w-32 rounded-lg" />
          <SkeletonItem className="h-12 w-28 rounded-lg" />
        </div>
      </div>
    ),

    // List layouts
    list: (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
            <SkeletonItem className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <SkeletonItem className="h-4 w-3/4" />
              <SkeletonItem className="h-3 w-1/2" />
            </div>
            <SkeletonItem className="h-8 w-16 rounded" />
          </div>
        ))}
      </div>
    ),

    // Table layout
    table: (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-gray-50 p-4 border-b">
          <div className="flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <SkeletonItem key={i} className="h-4 w-20" />
            ))}
          </div>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 border-b border-gray-100">
            <div className="flex space-x-4">
              {[...Array(4)].map((_, j) => (
                <SkeletonItem key={j} className="h-4 w-20" />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderSkeletons = () => {
    if (count === 1) {
      return variants[variant]
    }
    
    return [...Array(count)].map((_, index) => (
      <div key={index} className="mb-4 last:mb-0">
        {variants[variant]}
      </div>
    ))
  }

  return (
    <div className={`animate-pulse ${className}`}>
      {renderSkeletons()}
    </div>
  )
}

export default SkeletonLoader
