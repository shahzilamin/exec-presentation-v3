import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const companies = [
  { name: 'WellBefore', status: 'Active', emoji: '🏥' },
  { name: 'MySeema', status: 'Next', emoji: '💊' },
  { name: 'D2C Builders', status: 'Planned', emoji: '🏗️' },
  { name: 'Wireless Labs', status: 'Planned', emoji: '📡' },
  { name: 'Plugged', status: 'Planned', emoji: '🔌' },
  { name: 'Performance Agency', status: 'Planned', emoji: '📈' },
]

export default function Future() {
  return (
    <section id="future" className="relative flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.06)_0%,transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-4">
            What's Next
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
            Now multiply <span className="gradient-text-sol">across everything.</span>
          </h2>
        </FadeIn>

        {/* Company grid */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                className={`p-4 rounded-xl border text-center transition-all ${
                  company.status === 'Active'
                    ? 'bg-[var(--color-bg-card)] border-[var(--color-sol)] glow-sol'
                    : company.status === 'Next'
                    ? 'bg-[var(--color-bg-elevated)] border-[var(--color-border-bright)]'
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] border-dashed opacity-70'
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: company.status === 'Planned' ? 0.7 : 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl">{company.emoji}</span>
                <p className="font-[family-name:var(--font-display)] text-xs font-semibold mt-2">{company.name}</p>
                <div className={`inline-flex px-1.5 py-0.5 rounded text-xs font-[family-name:var(--font-mono)] mt-1.5 ${
                  company.status === 'Active'
                    ? 'bg-[rgba(245,158,11,0.15)] text-[var(--color-sol)]'
                    : company.status === 'Next'
                    ? 'bg-[rgba(99,102,241,0.15)] text-[var(--color-apex)]'
                    : 'bg-[rgba(107,114,128,0.15)] text-[var(--color-text-muted)]'
                }`}>
                  {company.status === 'Active' ? '● Live' : company.status === 'Next' ? '◐ Next' : '○ Planned'}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* The 100x closer - minimal text */}
        <FadeIn delay={0.3}>
          <div className="relative p-10 md:p-16 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-sol)] via-[var(--color-apex)] to-[var(--color-lux)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
            
            <div className="relative">
              <motion.p
                className="font-[family-name:var(--font-display)] text-8xl md:text-9xl lg:text-[10rem] font-bold gradient-text-sol glow-100x leading-none mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true }}
              >
                100x
              </motion.p>
              <motion.p
                className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Not automation. <span className="gradient-text-sol">Amplification.</span>
              </motion.p>
            </div>
          </div>
        </FadeIn>

        {/* Signature */}
        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <div className="w-8 h-px bg-[var(--color-sol)] mx-auto mb-4 opacity-40" />
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] tracking-wider">
              Shahzil Amin — Emagineer
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
