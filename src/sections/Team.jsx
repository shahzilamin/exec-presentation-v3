import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LoopDiagram from '../components/LoopDiagram'

const agents = [
  {
    id: 'sol',
    emoji: '☀️',
    name: 'Sol',
    role: 'Commander',
    oneLiner: 'Orchestrates everything',
    color: 'var(--color-sol)',
    glowClass: 'glow-sol',
  },
  {
    id: 'apex',
    emoji: '⚡',
    name: 'Apex',
    role: 'CTO',
    oneLiner: 'Ships code autonomously',
    color: 'var(--color-apex)',
    glowClass: 'glow-apex',
  },
  {
    id: 'lux',
    emoji: '🎨',
    name: 'Lux',
    role: 'CDO',
    oneLiner: 'Design & UX quality',
    color: 'var(--color-lux)',
    glowClass: 'glow-lux',
  },
  {
    id: 'nova',
    emoji: '📊',
    name: 'Nova',
    role: 'CFO',
    oneLiner: 'Financial intelligence',
    color: 'var(--color-nova)',
    glowClass: 'glow-nova',
  },
]

export default function Team() {
  const [activeAgent, setActiveAgent] = useState('sol')
  const active = agents.find(a => a.id === activeAgent)

  return (
    <section id="team" className="relative flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-sm tracking-widest uppercase mb-4 gradient-text-team">
            The Team
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
            Four agents. <span className="text-[var(--color-text-muted)]">One mission.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-center">
            {/* Left: Agent cards */}
            <div className="grid grid-cols-2 gap-3">
              {agents.map((agent) => (
                <motion.button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id)}
                  className={`relative p-5 rounded-xl border text-left transition-all duration-200 ${
                    activeAgent === agent.id
                      ? `bg-[var(--color-bg-card)] border-[var(--color-border-bright)] ${agent.glowClass}`
                      : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] hover:bg-[var(--color-bg-hover)]'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeAgent === agent.id && (
                    <motion.div
                      layoutId="agent-indicator"
                      className="absolute top-0 left-0 w-full h-0.5 rounded-t-xl"
                      style={{ backgroundColor: agent.color }}
                    />
                  )}

                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl">{agent.emoji}</span>
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-xl font-bold" style={{ color: activeAgent === agent.id ? agent.color : 'var(--color-text-primary)' }}>
                        {agent.name}
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{agent.role}</p>
                    </div>
                  </div>

                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-secondary)] tracking-wide">
                    {agent.oneLiner}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Right: Autonomous loop diagram */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <LoopDiagram />
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-4 text-center">
                Autonomous 2-hour build cycle
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
