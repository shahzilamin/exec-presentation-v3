import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px 0px', amount: 0.1 })

  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
    none: { y: 0, x: 0 },
  }

  const d = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: d.y, x: d.x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: d.y, x: d.x }}
      transition={{ duration: 0.5, delay: Math.min(delay, 0.4), ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
