import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ImageLoader } from './LoadingStateManager'

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = '/images/placeholder.svg',
  fallback = '/images/placeholder.svg',
  loadingVariant = 'pulse',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      <ImageLoader
        isLoading={isInView && !isLoaded}
        loadingType={loadingVariant}
      >
        {isInView && (
          <motion.img
            src={hasError ? fallback : src}
            alt={alt}
            className="w-full h-full object-cover"
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 1.05
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            loading="lazy"
            decoding="async"
          />
        )}
      </ImageLoader>
    </div>
  )
}

export default LazyImage
