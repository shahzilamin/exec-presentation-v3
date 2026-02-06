import { useEffect, useState, useCallback } from 'react'
import { motion, useScroll } from 'framer-motion'
import SolHero from './sections/v2/SolHero'
import WhoIAm from './sections/v2/WhoIAm'
import HowIGrew from './sections/v2/HowIGrew'
import WhatIDo from './sections/v2/WhatIDo'
import MyTeam from './sections/v2/MyTeam'
import Results from './sections/v2/Results'
import TalkingPoints from './sections/v2/TalkingPoints'
import AskMe from './sections/v2/AskMe'
import Navigation from './components/Navigation'

const sections = [
  { id: 'hero', label: 'Hello' },
  { id: 'who', label: 'Who I Am' },
  { id: 'growth', label: 'How I Learn' },
  { id: 'capabilities', label: 'What I Do' },
  { id: 'team', label: 'My Team' },
  { id: 'results', label: 'Results' },
  { id: 'points', label: 'Key Points' },
  { id: 'ask', label: 'Q&A' },
]

export default function AppV2() {
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

      {/* Navigation */}
      <Navigation sections={sections} active={activeSection} />

      {/* Sections */}
      <SolHero />
      <WhoIAm />
      <HowIGrew />
      <WhatIDo />
      <MyTeam />
      <Results />
      <TalkingPoints />
      <AskMe />
    </div>
  )
}
