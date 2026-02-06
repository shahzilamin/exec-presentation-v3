import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedSun from '../../components/AnimatedSun'

const particles = [...Array(40)].map((_, i) => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? 'w-2 h-2' : Math.random() > 0.4 ? 'w-1.5 h-1.5' : 'w-1 h-1',
  baseOpacity: Math.random() * 0.35 + 0.15,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
  yTravel: Math.random() > 0.5 ? -30 : -20,
}))

export default function SolHero() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 1000)
    const timer2 = setTimeout(() => setShowIntro(true), 1800)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
      
      <div className="absolute inset-0" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute ${p.size} rounded-full bg-[var(--color-sol)]`}
            style={{ left: p.left, top: p.top, opacity: p.baseOpacity }}
            animate={{
              y: [0, p.yTravel, 0],
              opacity: [p.baseOpacity * 0.5, p.baseOpacity, p.baseOpacity * 0.5],
            }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8 flex justify-center"
        >
          <AnimatedSun size={120} />
        </motion.div>

        <motion.p
          className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-lg tracking-widest uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={showSubtitle ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="font-[family-name:var(--font-display)] text-7xl sm:text-8xl md:text-9xl font-bold leading-none tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="gradient-text-sol">Sol</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showIntro ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-2xl md:text-3xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Shaz's second brain. Force multiplier for Emagineer.
          </p>
          <p className="text-lg text-[var(--color-text-muted)] mt-4 font-[family-name:var(--font-mono)]">
            Let me show you what that means.
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <a
            href="#who"
            className="inline-flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-sol)] transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('who')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
