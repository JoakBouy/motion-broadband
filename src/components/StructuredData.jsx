import { useEffect } from 'react'

const StructuredData = () => {
  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "TelecommunicationsOrganization",
    "name": "Motion Broadband",
    "alternateName": "Motion Broadband Ltd",
    "description": "Leading provider of high-speed, affordable satellite broadband powered by Starlink in South Sudan. Serving all 10 states with reliable internet connectivity for homes, businesses, and enterprises.",
    "url": "https://motionbroadbandltd.com",
    "logo": "https://motionbroadbandltd.com/favicons/android-chrome-512x512.png",
    "image": "https://motionbroadbandltd.com/favicons/android-chrome-512x512.png",
    "telephone": "+211922393300",
    "email": "sales@motionbroadbandltd.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 27, Munuki, Block B",
      "addressLocality": "Juba",
      "addressRegion": "Central Equatoria State",
      "addressCountry": "South Sudan",
      "postalCode": ""
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.8594",
      "longitude": "31.5713"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Sudan"
      },
      {
        "@type": "State",
        "name": "Central Equatoria"
      },
      {
        "@type": "State", 
        "name": "Eastern Equatoria"
      },
      {
        "@type": "State",
        "name": "Western Equatoria"
      },
      {
        "@type": "State",
        "name": "Jonglei"
      },
      {
        "@type": "State",
        "name": "Unity"
      },
      {
        "@type": "State",
        "name": "Upper Nile"
      },
      {
        "@type": "State",
        "name": "Warrap"
      },
      {
        "@type": "State",
        "name": "Northern Bahr el Ghazal"
      },
      {
        "@type": "State",
        "name": "Western Bahr el Ghazal"
      },
      {
        "@type": "State",
        "name": "Lakes"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+211927001026",
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+211922393300",
        "contactType": "sales",
        "availableLanguage": ["English", "Arabic"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday", 
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/motionbroadband",
      "https://www.twitter.com/motionbroadband",
      "https://www.instagram.com/motionbroadband",
      "https://www.linkedin.com/company/motionbroadband",
      "https://www.youtube.com/motionbroadband"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "slogan": "Connecting South Sudan to the World"
  }

  // Service offerings structured data
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "High-Speed Internet Services",
    "description": "Comprehensive internet connectivity solutions including residential, business, and enterprise packages powered by Starlink satellite technology.",
    "provider": {
      "@type": "TelecommunicationsOrganization",
      "name": "Motion Broadband"
    },
    "serviceType": "Internet Service Provider",
    "areaServed": {
      "@type": "Country",
      "name": "South Sudan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Internet Service Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Internet",
            "description": "High-speed internet for homes and families"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Business Internet",
            "description": "Reliable connectivity solutions for small and medium businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Enterprise Internet",
            "description": "Advanced connectivity solutions for large organizations and enterprises"
          }
        }
      ]
    }
  }

  // Website structured data with sitelinks
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Motion Broadband",
    "url": "https://motionbroadbandltd.com",
    "description": "South Sudan's leading Starlink internet provider offering high-speed, reliable connectivity across all 10 states.",
    "publisher": {
      "@type": "TelecommunicationsOrganization",
      "name": "Motion Broadband"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://motionbroadbandltd.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  useEffect(() => {
    // Function to add structured data script to head
    const addStructuredData = (data, id) => {
      // Remove existing script if it exists
      const existingScript = document.getElementById(id)
      if (existingScript) {
        existingScript.remove()
      }

      // Create new script element
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    }

    // Add all structured data
    addStructuredData(organizationData, 'organization-structured-data')
    addStructuredData(servicesData, 'services-structured-data')
    addStructuredData(websiteData, 'website-structured-data')

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const scripts = [
        'organization-structured-data',
        'services-structured-data',
        'website-structured-data'
      ]
      scripts.forEach(id => {
        const script = document.getElementById(id)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}

export default StructuredData
