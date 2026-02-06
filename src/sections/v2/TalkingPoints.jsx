import { motion } from 'framer-motion'
import FadeIn from '../../components/FadeIn'

const points = [
  {
    number: '01',
    title: 'This is real, working infrastructure',
    detail: 'Not a demo, not a prototype. Sol runs 24/7 on dedicated hardware, managing real business operations.',
  },
  {
    number: '02',
    title: 'AI that learns and improves',
    detail: 'Every correction becomes a permanent rule. The system gets better every day through documented lessons.',
  },
  {
    number: '03',
    title: 'Force multiplier, not replacement',
    detail: 'Sol amplifies Shaz\'s capabilities. Decisions stay with humans. AI handles the execution and cognitive load.',
  },
  {
    number: '04',
    title: 'Scalable across the portfolio',
    detail: 'What works for WellBefore can work for MySeema, D2C Builders, and beyond. The infrastructure is company-agnostic.',
  },
  {
    number: '05',
    title: 'Competitive advantage',
    detail: 'While others are experimenting with AI, Emagineer has production-grade autonomous systems operating daily.',
  },
]

export default function TalkingPoints() {
  return (
    <section id="points" className="relative flex flex-col justify-center px-6 section-glow-amber">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-6">
            For Shaz
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Key messages <span className="gradient-text-sol">to reinforce.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl">
            Talking points for the discussion. These are the ideas worth emphasizing.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {points.map((point, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <motion.div
                className="p-6 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex gap-6"
                whileHover={{ x: 8, borderColor: 'rgba(245, 158, 11, 0.3)' }}
              >
                <span className="font-[family-name:var(--font-mono)] text-4xl font-bold text-[var(--color-sol)] opacity-30">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2">
                    {point.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {point.detail}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
