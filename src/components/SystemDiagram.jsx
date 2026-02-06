import { motion } from 'framer-motion'

const nodes = [
  { id: 'rules', label: 'RULES.md', icon: '📋', color: '#f59e0b', x: 250, y: 45 },
  { id: 'memory', label: 'MEMORY.md', icon: '🧠', color: '#6366f1', x: 80, y: 100 },
  { id: 'active', label: 'ACTIVE.md', icon: '📌', color: '#ec4899', x: 420, y: 100 },
  { id: 'security', label: 'SECURITY.md', icon: '🔒', color: '#ef4444', x: 120, y: 210 },
  { id: 'propagation', label: 'PROP_MAP.md', icon: '🗺️', color: '#10b981', x: 380, y: 210 },
]

const connections = [
  ['rules', 'memory'],
  ['rules', 'active'],
  ['rules', 'security'],
  ['rules', 'propagation'],
  ['memory', 'propagation'],
  ['active', 'propagation'],
]

export default function SystemDiagram() {
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <div className="w-full max-w-lg mx-auto">
      <svg viewBox="0 0 500 260" className="w-full" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines with animated dashes */}
        {connections.map(([fromId, toId], i) => {
          const from = nodeMap[fromId]
          const to = nodeMap[toId]
          return (
            <motion.line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              style={{ animation: 'dash-flow 2s linear infinite' }}
            />
          )
        })}

        {/* Data flow particles on connections */}
        {connections.map(([fromId, toId], i) => {
          const from = nodeMap[fromId]
          const to = nodeMap[toId]
          return (
            <motion.circle
              key={`particle-${fromId}-${toId}`}
              r={2}
              fill="#f59e0b"
              opacity={0.4}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8,
              }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          >
            {/* Node background circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={26}
              fill="rgba(8,8,12,0.95)"
              stroke={node.color}
              strokeWidth="1.5"
              opacity={0.9}
            />
            {/* Node icon */}
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="16"
            >
              {node.icon}
            </text>
            {/* Node label */}
            <text
              x={node.x}
              y={node.y + 40}
              textAnchor="middle"
              fontSize="11"
              fill={node.color}
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="500"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center label */}
        <text
          x={250}
          y={140}
          textAnchor="middle"
          fontSize="11"
          fill="rgba(255,255,255,0.2)"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="2"
        >
          SINGLE SOURCE OF TRUTH
        </text>
      </svg>
    </div>
  )
}
