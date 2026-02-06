import { motion } from 'framer-motion'

export default function Navigation({ sections, active }) {
  const slideNum = String(active + 1).padStart(2, '0')
  const totalSlides = String(sections.length).padStart(2, '0')

  return (
    <>
      {/* Slide number - top left */}
      <div className="fixed top-6 left-6 z-40 hidden lg:block">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-[family-name:var(--font-mono)] text-3xl font-bold text-[var(--color-sol)]">
            {slideNum}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
            / {totalSlides}
          </p>
        </motion.div>
      </div>

      {/* Keyboard hint removed for cleaner presentation */}

      {/* Right dot navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-1.5">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3 py-0.5"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span
              className={`text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase transition-all duration-300 ${
                i === active ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-1 group-hover:translate-x-0 group-hover:opacity-70'
              }`}
              style={{
                color: i === active ? 'var(--color-sol)' : 'var(--color-text-muted)',
              }}
            >
              {section.label}
            </span>
            <motion.div
              className="rounded-full transition-all duration-300"
              animate={{
                width: i === active ? 24 : 6,
                height: 6,
                backgroundColor: i === active ? '#f59e0b' : '#3d3d50',
              }}
              whileHover={{
                backgroundColor: '#f59e0b',
                width: 14,
              }}
            />
          </a>
        ))}
      </nav>
    </>
  )
}
