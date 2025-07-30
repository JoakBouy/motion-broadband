import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import HelpCentre from './pages/HelpCentre'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <PageTransition variant="slideUp">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/help" element={<HelpCentre />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <ScrollToTopButton />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  )
}

export default App 
