import { useEffect } from 'react'
import Lenis from 'lenis'
import { ModalProvider } from './context/ModalContext'
import ContactModal from './components/ui/ContactModal'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Differentials from './components/sections/Differentials'
import Showcase from './components/sections/Showcase'
import AboutUs from './components/sections/AboutUs'
import CtaFinal from './components/sections/CtaFinal'

function AppContent() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[#0F1426] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Differentials />
        <Showcase />
        <AboutUs />
        <CtaFinal />
      </main>
      <Footer />
      <ContactModal />
    </div>
  )
}

export default function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  )
}
