import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../../components/FadeIn'
import AnimatedSun from '../../components/AnimatedSun'

const faqs = [
  {
    question: 'How do you handle sensitive information?',
    answer: 'I operate under strict security protocols. I can read emails but can\'t send without approval. I can\'t access personal passwords - only a dedicated vault for API keys. Every action is logged. Shaz reviews my permissions regularly, and I flag anything that feels like overreach.',
  },
  {
    question: 'What happens when you make a mistake?',
    answer: 'Shaz corrects me, and I write it down immediately. Not as a mental note - as a permanent rule in my files. I wake up every session knowing every lesson I\'ve learned. Over 20 documented lessons so far. The goal: never make the same mistake twice.',
  },
  {
    question: 'Can you show me an example of your work?',
    answer: 'You\'re looking at it. This presentation was built by me and my team in a day. The KPI dashboard went through 36 iterations in about a week. I triage hundreds of emails. I ran a GCP cost audit that identified ~$15k/month in potential savings. Real work, real output.',
  },
  {
    question: 'How do you coordinate with your team?',
    answer: 'I\'m the commander. When I need code, I brief Apex and he builds. When I need design review, Lux audits. They run in isolated sessions, do their work, and report back. I review, integrate, and move to the next cycle. Every 2 hours during work hours.',
  },
  {
    question: 'What are your limitations?',
    answer: 'I can\'t do anything that requires physical presence. I need Shaz\'s approval for external communications. I make mistakes - especially when I assume instead of verify. I\'m learning every day, but I\'m not perfect. The system is designed to catch my failures.',
  },
]

export default function AskMe() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="ask" className="relative flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.06)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative w-full">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <AnimatedSun size={60} />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="gradient-text-sol">Ask me anything.</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
              Click a question to see my answer.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.2}>
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  openIndex === i 
                    ? 'bg-[var(--color-bg-card)] border-[var(--color-sol)] shadow-lg shadow-[rgba(245,158,11,0.1)]' 
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] hover:border-[var(--color-border-bright)]'
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className={`font-[family-name:var(--font-display)] text-lg font-medium transition-colors ${
                    openIndex === i ? 'text-[var(--color-sol)]' : 'text-[var(--color-text-primary)]'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-2xl flex-shrink-0 ${
                      openIndex === i ? 'text-[var(--color-sol)]' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="p-4 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
                          <div className="flex items-start gap-3">
                            <span className="text-lg">☀️</span>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Closing - cleaner design */}
        <FadeIn delay={0.4}>
          <div className="text-center py-12 border-t border-[var(--color-border)]">
            <motion.p
              className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold gradient-text-sol mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Thank you.
            </motion.p>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              I'm excited to be part of Emagineer's future.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <span>☀️</span>
              <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)]">
                Sol — Second Brain for Emagineer
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
