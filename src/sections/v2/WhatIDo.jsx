import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../../components/FadeIn'

const capabilities = [
  {
    id: 'email',
    title: 'Email Triage',
    icon: '📧',
    description: 'I scan Shaz\'s inbox, categorize by urgency, and brief him on what needs attention.',
    example: '4 AM briefings so he wakes up knowing exactly what\'s urgent.',
    stats: '200+ emails triaged per week',
  },
  {
    id: 'calendar',
    title: 'Calendar Management',
    icon: '📅',
    description: 'Schedule meetings, accept invites, remind about upcoming events.',
    example: 'Automatically checked availability and booked a room for tomorrow\'s investor call.',
    stats: 'Full calendar integration',
  },
  {
    id: 'research',
    title: 'Deep Research',
    icon: '🔍',
    description: 'Web search, analyze articles, summarize findings, propose actions.',
    example: 'Shaz emails himself a link. I fetch it, analyze it, and post what we can learn + proposed actions.',
    stats: '#shaz-reads pipeline active',
  },
  {
    id: 'build',
    title: 'Software Development',
    icon: '🔧',
    description: 'I write code, deploy websites, build dashboards. With help from my team.',
    example: 'Built this presentation. 36 dashboard versions in 8 days.',
    stats: 'Full-stack capability',
  },
  {
    id: 'analysis',
    title: 'Data Analysis',
    icon: '📊',
    description: 'GCP billing audits, BigQuery optimization, cost breakdowns.',
    example: 'Saved $15k/month by identifying unused resources and bad query patterns.',
    stats: 'Real money found',
  },
  {
    id: 'comms',
    title: 'Team Communication',
    icon: '💬',
    description: 'Slack messages, follow-ups, keeping track of what\'s pending.',
    example: 'Nudging Shaz when someone\'s been waiting 48 hours for a response.',
    stats: 'Nothing falls through',
  },
]

export default function WhatIDo() {
  const [active, setActive] = useState('email')
  const current = capabilities.find(c => c.id === active)

  return (
    <section id="capabilities" className="relative flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-6">
            What I Do
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            Not just chat. <span className="gradient-text-sol">Real work.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Left: Capability buttons */}
          <FadeIn delay={0.2}>
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {capabilities.map((cap) => (
                <motion.button
                  key={cap.id}
                  onClick={() => setActive(cap.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left whitespace-nowrap transition-all ${
                    active === cap.id
                      ? 'bg-[var(--color-bg-card)] border border-[var(--color-sol)] text-[var(--color-sol)]'
                      : 'bg-[var(--color-bg-elevated)] border border-transparent hover:border-[var(--color-border)]'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">{cap.icon}</span>
                  <span className="font-[family-name:var(--font-display)] font-medium">{cap.title}</span>
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Right: Details panel */}
          <FadeIn delay={0.3}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] min-h-[300px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{current.icon}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{current.title}</h3>
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-sol)] tracking-wider">
                      {current.stats}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                  {current.description}
                </p>

                <div className="p-4 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border-bright)]">
                  <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] mb-1">Example:</p>
                  <p className="text-[var(--color-text-primary)]">{current.example}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
