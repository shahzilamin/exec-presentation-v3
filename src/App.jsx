import { useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './sections/Hero'
import Vision from './sections/Vision'
import Journey from './sections/Journey'
import Systems from './sections/Systems'
import Dashboard from './sections/Dashboard'
import Team from './sections/Team'
import Impact from './sections/Impact'
import Future from './sections/Future'
import ChatDemo from './sections/ChatDemo'
import Navigation from './components/Navigation'

const sections = [
  { id: 'hero', label: 'Start' },
  { id: 'vision', label: 'Vision' },
  { id: 'journey', label: 'Journey' },
  { id: 'systems', label: 'Systems' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'team', label: 'Team' },
  { id: 'chat', label: 'Live Demo' },
  { id: 'impact', label: 'Impact' },
  { id: 'future', label: 'Future' },
]

function App() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState(0)

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = sections.map(s => document.getElementById(s.id))
      const scrollPos = window.scrollY + window.innerHeight / 2

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (sectionEls[i] && sectionEls[i].offsetTop <= scrollPos) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard navigation
  const navigateToSlide = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, sections.length - 1))
    const el = document.getElementById(sections[clamped].id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          navigateToSlide(activeSection + 1)
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          navigateToSlide(activeSection - 1)
          break
        case 'Home':
          e.preventDefault()
          navigateToSlide(0)
          break
        case 'End':
          e.preventDefault()
          navigateToSlide(sections.length - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSection, navigateToSlide])

  return (
    <div className="relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
        }}
      />

      {/* Slide number indicator + navigation */}
      <Navigation sections={sections} active={activeSection} />

      {/* Sections */}
      <Hero />
      <Vision />
      <Journey />
      <Systems />
      <Dashboard />
      <Team />
      <ChatDemo />
      <Impact />
      <Future />

      {/* Footer hidden in deck mode - last section is the closer */}
    </div>
  )
}

export default App
