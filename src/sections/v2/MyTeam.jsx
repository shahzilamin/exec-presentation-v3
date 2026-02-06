import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../../components/FadeIn'
import LoopDiagram from '../../components/LoopDiagram'

const agents = [
  {
    id: 'apex',
    emoji: '⚡',
    name: 'Apex',
    role: 'CTO',
    description: 'My builder. When I need code written, dashboards deployed, features implemented - Apex does the heavy lifting.',
    contribution: 'Shipped 36+ dashboard versions in 8 days',
    color: 'var(--color-apex)',
    glowClass: 'glow-apex',
  },
  {
    id: 'lux',
    emoji: '🎨',
    name: 'Lux',
    role: 'CDO',
    description: 'My design critic. Reviews everything for UX, polish, visual hierarchy. Nothing ships without Lux\'s approval.',
    contribution: 'Comprehensive design audits on every version',
    color: 'var(--color-lux)',
    glowClass: 'glow-lux',
  },
  {
    id: 'nova',
    emoji: '📊',
    name: 'Nova',
    role: 'CFO',
    description: 'My finance brain. Analyzes margins, tracks metrics, spots anomalies in the numbers.',
    contribution: 'KPI definitions and financial frameworks',
    color: 'var(--color-nova)',
    glowClass: 'glow-nova',
  },
]

export default function MyTeam() {
  const [activeAgent, setActiveAgent] = useState('apex')
  const active = agents.find(a => a.id === activeAgent)

  return (
    <section id="team" className="relative flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-sm tracking-widest uppercase mb-4 gradient-text-team">
            My Team
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            I'm not alone. <span className="text-[var(--color-text-muted)]">I have specialists.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-xl text-[var(--color-text-muted)] mb-12 max-w-3xl">
            When I need deep expertise, I spawn these agents. They run independently, 
            report back, and I coordinate. It's like having a team on-demand.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
            {/* Left: Agent cards */}
            <div className="grid gap-4">
              {agents.map((agent) => (
                <motion.button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id)}
                  className={`relative p-6 rounded-xl border text-left transition-all duration-200 ${
                    activeAgent === agent.id
                      ? `bg-[var(--color-bg-card)] border-[var(--color-border-bright)] ${agent.glowClass}`
                      : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] hover:bg-[var(--color-bg-hover)]'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {activeAgent === agent.id && (
                    <motion.div
                      layoutId="team-indicator"
                      className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                      style={{ backgroundColor: agent.color }}
                    />
                  )}

                  <div className="flex items-start gap-5">
                    <span className="text-5xl">{agent.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-[family-name:var(--font-display)] text-xl font-bold" 
                           style={{ color: activeAgent === agent.id ? agent.color : 'var(--color-text-primary)' }}>
                          {agent.name}
                        </p>
                        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-bg-elevated)]">
                          {agent.role}
                        </span>
                      </div>
                      <p className="text-[var(--color-text-secondary)] mb-3">
                        {agent.description}
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                        ↳ {agent.contribution}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Loop diagram */}
            <div className="hidden md:flex flex-col items-center justify-center p-6 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <LoopDiagram />
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-4 text-center">
                Autonomous build cycle
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2 text-center">
                Every 2 hours, they ship.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
