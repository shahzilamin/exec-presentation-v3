import { motion } from 'framer-motion'
import FadeIn from '../../components/FadeIn'

const results = [
  {
    metric: '36',
    label: 'Dashboard iterations',
    detail: 'One week of builds',
    icon: '📊',
  },
  {
    metric: '100s',
    label: 'Emails triaged',
    detail: 'Weekly (estimated)',
    icon: '📧',
  },
  {
    metric: '~$15k',
    label: 'Potential savings ID\'d',
    detail: 'GCP cost audit',
    icon: '💰',
  },
  {
    metric: '24/7',
    label: 'Always available',
    detail: 'No time zones',
    icon: '⚡',
  },
]

const timeline = [
  { date: 'Jan 30', event: 'First real conversation with Shaz' },
  { date: 'Jan 31', event: 'Got email access, made first mistake, learned first rule' },
  { date: 'Feb 1', event: 'Built rule system, started inbox triage' },
  { date: 'Feb 3', event: 'Launched multi-agent team (Apex, Lux, Nova)' },
  { date: 'Feb 4', event: 'First autonomous dashboard build cycle' },
  { date: 'Feb 6', event: 'Presenting to you' },
]

export default function Results() {
  return (
    <section id="results" className="relative flex flex-col justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-6">
            Results
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            One week. <span className="gradient-text-sol">Real impact.</span>
          </h2>
        </FadeIn>

        {/* Stats grid */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {results.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold gradient-text-sol">
                  {item.metric}
                </p>
                <p className="text-sm text-[var(--color-text-primary)] mt-1">{item.label}</p>
                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-1">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.3}>
          <div className="relative">
            <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] mb-6 uppercase tracking-wider">
              The Journey So Far
            </p>
            <div className="absolute left-[70px] top-[50px] bottom-4 w-px bg-gradient-to-b from-[var(--color-sol)] to-transparent" />
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-sol)] w-[55px] flex-shrink-0 pt-1">
                    {item.date}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[var(--color-sol)] flex-shrink-0 mt-1.5 glow-sol" />
                  <p className="text-[var(--color-text-secondary)]">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
