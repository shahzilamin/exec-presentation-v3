import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import FadeIn from '../components/FadeIn'

function CountUp({ value, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const numVal = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (isNaN(numVal)) { setDisplay(value); return }
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(numVal * eased)
      setDisplay(current.toLocaleString())
      if (progress < 1) requestAnimationFrame(animate)
      else setDisplay(value)
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

const impacts = [
  { metric: '$400-500', suffix: '/mo', label: 'GCP Savings', icon: '💰' },
  { metric: '19', suffix: '+', label: 'Versions Shipped', icon: '🚀' },
  { metric: '24/7', suffix: '', label: 'Autonomous Ops', icon: '👁️' },
  { metric: '0', suffix: '', label: 'Lines by CEO', icon: '⌨️' },
]

export default function Impact() {
  return (
    <section id="impact" className="relative flex flex-col justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-4">
            Real Impact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            Not theoretical. <span className="gradient-text-sol">Measurable.</span>
          </h2>
        </FadeIn>

        {/* Big metric cards - larger and more visual */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {impacts.map((impact, i) => (
              <motion.div
                key={i}
                className="p-8 md:p-10 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-center relative overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-sol)] to-transparent opacity-40" />
                <span className="text-4xl md:text-5xl">{impact.icon}</span>
                <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold mt-4 gradient-text-sol">
                  <CountUp value={impact.metric} suffix={impact.suffix} />
                </p>
                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-3 uppercase tracking-wider">{impact.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Time to value - dramatic visual */}
        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <motion.p
                className="font-[family-name:var(--font-display)] text-7xl md:text-8xl font-bold gradient-text-sol"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true }}
              >
                5
              </motion.p>
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] tracking-wider uppercase">days</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { icon: '☀️', text: 'Sol live', day: 'Day 1' },
                { icon: '🔧', text: 'Systems built', day: 'Day 3' },
                { icon: '⚡', text: 'Team deployed', day: 'Day 4' },
                { icon: '💰', text: 'Saving money', day: 'Day 5' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">{item.day}</span>
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
