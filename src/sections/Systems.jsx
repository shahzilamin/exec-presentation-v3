import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import SystemDiagram from '../components/SystemDiagram'

const systems = [
  {
    id: 'memory',
    label: 'MEMORY.md',
    problem: 'Forgot everything',
    solution: 'Persistent across restarts',
    icon: '🧠',
    color: 'var(--color-apex)',
  },
  {
    id: 'rules',
    label: 'RULES.md',
    problem: 'Rules everywhere',
    solution: 'One source of truth',
    icon: '📋',
    color: 'var(--color-sol)',
  },
  {
    id: 'active',
    label: 'ACTIVE.md',
    problem: 'Forgot the future',
    solution: 'Live task tracker',
    icon: '📌',
    color: 'var(--color-lux)',
  },
  {
    id: 'propagation',
    label: 'PROPAGATION_MAP.md',
    problem: 'Data lost in transit',
    solution: 'Who reads what',
    icon: '🗺️',
    color: 'var(--color-nova)',
  },
  {
    id: 'security',
    label: 'SECURITY.md',
    problem: 'Needs guardrails',
    solution: 'Sacred. Unbreakable.',
    icon: '🔒',
    color: 'var(--color-accent-red)',
  },
]

export default function Systems() {
  const [activeSystem, setActiveSystem] = useState('rules')
  const active = systems.find(s => s.id === activeSystem)

  return (
    <section id="systems" className="relative flex flex-col justify-center px-6 section-glow-indigo">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-accent-green)] text-sm tracking-widest uppercase mb-4">
            How We Fixed It
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
            Systems, not <span className="text-[var(--color-accent-green)]">band-aids.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: System cards */}
            <div className="space-y-2">
              {systems.map((system) => (
                <motion.button
                  key={system.id}
                  onClick={() => setActiveSystem(system.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                    activeSystem === system.id
                      ? 'bg-[var(--color-bg-card)] border border-[var(--color-border-bright)]'
                      : 'bg-transparent border border-transparent hover:bg-[var(--color-bg-elevated)]'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-2xl flex-shrink-0">{system.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-[family-name:var(--font-mono)] text-xs font-semibold"
                        style={{ color: activeSystem === system.id ? system.color : 'var(--color-text-secondary)' }}
                      >
                        {system.label}
                      </span>
                    </div>
                    {activeSystem === system.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-1.5 space-y-1"
                      >
                        <p className="text-xs text-[var(--color-accent-red)] font-[family-name:var(--font-mono)]">
                          ✗ {system.problem}
                        </p>
                        <p className="text-xs font-[family-name:var(--font-mono)]" style={{ color: system.color }}>
                          ✓ {system.solution}
                        </p>
                      </motion.div>
                    )}
                  </div>
                  <div
                    className="w-1.5 h-8 rounded-full flex-shrink-0 transition-all"
                    style={{ backgroundColor: activeSystem === system.id ? system.color : 'transparent' }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Right: Network diagram */}
            <div className="flex items-center justify-center">
              <SystemDiagram />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
