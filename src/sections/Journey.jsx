import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const failures = [
  {
    id: 'wrong-email',
    icon: '📧',
    title: 'Wrong Calendar Invite',
    date: 'Day 2',
    lesson: 'External actions locked down',
    severity: 'critical',
  },
  {
    id: 'memory-conflict',
    icon: '🧠',
    title: 'Memory Conflicts',
    date: 'Day 3',
    lesson: 'Single source of truth created',
    severity: 'high',
  },
  {
    id: 'ghost-actions',
    icon: '👻',
    title: 'Said Done, Wasn\'t Done',
    date: 'Day 3',
    lesson: 'Execute first, report second',
    severity: 'high',
  },
  {
    id: 'verify-before-answering',
    icon: '❓',
    title: 'Guessed Instead of Checking',
    date: 'Day 4',
    lesson: 'Check before stating. Always.',
    severity: 'medium',
  },
  {
    id: 'ignored-error',
    icon: '🚨',
    title: 'Dismissed an Error',
    date: 'Day 6',
    lesson: 'Errors = immediate action',
    severity: 'high',
  },
  {
    id: 'skills-never-loaded',
    icon: '📚',
    title: 'Skills Never Loaded',
    date: 'Day 7',
    lesson: 'Verify what agents actually see',
    severity: 'critical',
  },
  {
    id: 'lazy-diagnostics',
    icon: '🔍',
    title: 'Lazy Diagnostics',
    date: 'Day 8',
    lesson: 'Investigate first, answer second',
    severity: 'high',
  },
  {
    id: 'file-sprawl',
    icon: '🗂️',
    title: '9 Duplications Found',
    date: 'Day 7',
    lesson: 'Fresh eyes catch what familiarity misses',
    severity: 'medium',
  },
]

export default function Journey() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="journey" className="relative flex flex-col justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-accent-red)] text-sm tracking-widest uppercase mb-4">
            The Honest Journey
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3">
            8 failures. <span className="text-[var(--color-text-muted)]">8 days.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            Each one → a permanent fix.
          </p>
        </FadeIn>

        {/* Visual failure grid - icons + one-liners */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {failures.map((failure, i) => (
              <motion.div
                key={failure.id}
                className={`relative p-5 rounded-xl border transition-all duration-300 cursor-default ${
                  hoveredId === failure.id
                    ? 'bg-[var(--color-bg-card)] border-[var(--color-border-bright)]'
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)]'
                }`}
                onMouseEnter={() => setHoveredId(failure.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Severity indicator */}
                <div className={`absolute top-0 left-0 w-full h-0.5 rounded-t-xl ${
                  failure.severity === 'critical' ? 'bg-[var(--color-accent-red)]'
                  : failure.severity === 'high' ? 'bg-[var(--color-sol)]'
                  : 'bg-[var(--color-text-muted)]'
                }`} />

                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{failure.icon}</span>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] bg-[var(--color-bg)] px-2 py-0.5 rounded">
                    {failure.date}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold mb-2">
                  {failure.title}
                </h3>

                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-green)] leading-relaxed">
                  → {failure.lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom insight removed for cleaner presentation */}
      </div>
    </section>
  )
}
