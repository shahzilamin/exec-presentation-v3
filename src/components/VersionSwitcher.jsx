import { motion } from 'framer-motion'

export default function VersionSwitcher({ version, onSwitch }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-lg backdrop-blur-md">
        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mr-2">
          Version:
        </span>
        <motion.button
          onClick={() => onSwitch('v1')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            version === 'v1'
              ? 'bg-[var(--color-sol)] text-black'
              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          Shaz Presents
        </motion.button>
        <motion.button
          onClick={() => onSwitch('v2')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            version === 'v2'
              ? 'bg-[var(--color-sol)] text-black'
              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          Sol Presents
        </motion.button>
      </div>
    </div>
  )
}
