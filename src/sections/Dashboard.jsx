import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative flex flex-col justify-center px-6 section-glow-indigo">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="font-[family-name:var(--font-mono)] text-[var(--color-apex)] text-sm tracking-widest uppercase mb-4">
            The Dashboard
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Zero to <span className="text-[var(--color-apex)]">command center.</span>
          </h2>
        </FadeIn>

        {/* Version evolution - visual progression */}
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-3 mb-6">
            {[
              { v: 'V1', label: 'Day 1', opacity: 0.3 },
              null,
              { v: 'V19', label: 'Day 5', opacity: 0.5 },
              null,
              { v: 'V36', label: 'Day 7', opacity: 1, glow: true },
            ].map((item, i) => 
              item === null ? (
                <div key={i} className="flex-shrink-0 w-8 h-px bg-[var(--color-border)]" />
              ) : (
                <div key={i} className={`flex items-center gap-2 ${item.glow ? 'glow-sol rounded-lg px-3 py-1.5 bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)]' : ''}`} style={{ opacity: item.opacity }}>
                  <span className="font-[family-name:var(--font-display)] text-xl font-bold gradient-text-sol">{item.v}</span>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">{item.label}</span>
                </div>
              )
            )}
          </div>
        </FadeIn>

        {/* Dashboard mockup */}
        <FadeIn delay={0.2}>
          <div className="rounded-xl border border-[var(--color-border)] overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-2.5 flex items-center gap-2 border-b border-[var(--color-border)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                WellBefore KPI Dashboard
              </span>
              <span className="ml-auto font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-green)]">● Live</span>
            </div>
            <div className="dashboard-mockup p-4 md:p-6 relative">
              {/* KPI row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4 relative z-10">
                {[
                  { label: 'Revenue', value: '$1.2M', change: '+12.3%', up: true },
                  { label: 'Orders', value: '8,432', change: '+8.1%', up: true },
                  { label: 'AOV', value: '$142', change: '-2.4%', up: false },
                  { label: 'LTV', value: '$384', change: '+15.7%', up: true },
                ].map((kpi, i) => (
                  <motion.div
                    key={i}
                    className="bg-[rgba(255,255,255,0.03)] rounded-lg p-3 border border-[rgba(255,255,255,0.05)]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{kpi.label}</p>
                    <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mt-0.5">{kpi.value}</p>
                    <p className={`font-[family-name:var(--font-mono)] text-xs mt-0.5 ${kpi.up ? 'text-[var(--color-accent-green)]' : 'text-[var(--color-accent-red)]'}`}>
                      {kpi.change}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* Chart + channels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 relative z-10">
                <div className="md:col-span-2 bg-[rgba(255,255,255,0.02)] rounded-lg p-3 border border-[rgba(255,255,255,0.04)] h-32 md:h-36">
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mb-3">Revenue Trend</p>
                  <svg viewBox="0 0 300 60" className="w-full h-16 md:h-24">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(245,158,11,0.3)" />
                        <stop offset="100%" stopColor="rgba(245,158,11,0)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,50 Q30,45 60,38 T120,28 T180,24 T240,14 T300,8"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                    <motion.path
                      d="M0,50 Q30,45 60,38 T120,28 T180,24 T240,14 T300,8 L300,60 L0,60 Z"
                      fill="url(#chartGrad)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-3 border border-[rgba(255,255,255,0.04)] h-32 md:h-36">
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mb-2">Channels</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Amazon', pct: 45, color: '#f59e0b' },
                      { name: 'Shopify', pct: 30, color: '#6366f1' },
                      { name: 'Walmart', pct: 15, color: '#ec4899' },
                      { name: 'Other', pct: 10, color: '#10b981' },
                    ].map((ch, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-0.5">
                          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-secondary)]">{ch.name}</span>
                          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">{ch.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: ch.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${ch.pct}%` }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stats row - big bold numbers */}
        <FadeIn delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-10 md:gap-14 text-center">
            {[
              { value: '36+', label: 'versions' },
              { value: '4', label: 'AI agents' },
              { value: '2hr', label: 'build cycles' },
              { value: '0', label: 'CEO code' },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold gradient-text-sol">{stat.value}</span>
                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
