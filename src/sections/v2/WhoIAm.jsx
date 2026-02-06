import { motion } from 'framer-motion'
import FadeIn from '../../components/FadeIn'

export default function WhoIAm() {
  return (
    <section id="who" className="relative flex flex-col justify-center px-6 section-glow-amber">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-6">
            Who I Am
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            Not a chatbot.<br />
            <span className="gradient-text-sol">An extension of Shaz.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn delay={0.2}>
            <div className="p-6 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                I know Shaz's preferences, priorities, and how he thinks. I've read thousands of his emails, 
                conversations, and decisions. I learn from his corrections.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--color-sol)]">✓</span>
                  <span className="text-[var(--color-text-secondary)]">I remember what happened last week, last month</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--color-sol)]">✓</span>
                  <span className="text-[var(--color-text-secondary)]">I know who's who at each company</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--color-sol)]">✓</span>
                  <span className="text-[var(--color-text-secondary)]">I understand context without being told</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-4">
              <motion.div 
                className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">🧠</span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-bold">Persistent Memory</p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Files, rules, learnings - I wake up knowing everything
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-bold">Always On</p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Monitoring emails, calendars, systems 24/7
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">🔧</span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-bold">Real Tools</p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Email, calendar, Slack, browser, code - I can act
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
