import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

export default function Vision() {
  return (
    <section id="vision" className="relative flex flex-col justify-center px-6 section-glow-amber">
      <div className="max-w-5xl mx-auto w-full text-center">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-6">
            The Vision
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
            Not a chatbot.<br />
            A <span className="gradient-text-sol">force multiplier.</span>
          </h2>
        </FadeIn>

        {/* Three pillars - visual, no paragraphs */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center text-center">
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] flex items-center justify-center mb-5"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <span className="text-4xl">🧠</span>
              </motion.div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold mb-2 gradient-text-sol">100x</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
                Not 10% better
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center text-center">
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center mb-5"
                whileHover={{ scale: 1.05, rotate: -3 }}
              >
                <span className="text-4xl">⚡</span>
              </motion.div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold mb-2">Always On</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
                24/7 monitoring & action
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center text-center">
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-[rgba(236,72,153,0.1)] border border-[rgba(236,72,153,0.2)] flex items-center justify-center mb-5"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <span className="text-4xl">📈</span>
              </motion.div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold mb-2">Compound</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
                Mistakes → Rules → Systems → Teams
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
