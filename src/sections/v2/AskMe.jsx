import { motion } from 'framer-motion'
import FadeIn from '../../components/FadeIn'
import AnimatedSun from '../../components/AnimatedSun'

const sampleQuestions = [
  'How do you handle sensitive information?',
  'What happens when you make a mistake?',
  'Can you show me an example of your work?',
  'How do you coordinate with your team?',
  'What are your limitations?',
]

export default function AskMe() {
  return (
    <section id="ask" className="relative flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.06)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative w-full text-center">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <AnimatedSun size={80} />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text-sol">Ask me anything.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-xl mx-auto">
            I'm here. If you have questions about how I work, what I can do, 
            or anything else - Shaz can relay them and I'll respond.
          </p>
        </FadeIn>

        {/* Sample questions */}
        <FadeIn delay={0.3}>
          <div className="mb-12">
            <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
              Some things you could ask
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleQuestions.map((q, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.3)' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {q}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing */}
        <FadeIn delay={0.5}>
          <div className="relative p-10 md:p-16 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-sol)] via-[var(--color-apex)] to-[var(--color-lux)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
            
            <div className="relative">
              <motion.p
                className="font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-8xl font-bold gradient-text-sol glow-100x leading-none mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true }}
              >
                Thank you.
              </motion.p>
              <motion.p
                className="font-[family-name:var(--font-display)] text-xl md:text-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                I'm excited to be part of <span className="gradient-text-sol">Emagineer's future.</span>
              </motion.p>
            </div>
          </div>
        </FadeIn>

        {/* Signature */}
        <FadeIn delay={0.6}>
          <div className="mt-8 text-center">
            <div className="w-8 h-px bg-[var(--color-sol)] mx-auto mb-4 opacity-40" />
            <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] tracking-wider">
              ☀️ Sol — Second Brain for Emagineer
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
