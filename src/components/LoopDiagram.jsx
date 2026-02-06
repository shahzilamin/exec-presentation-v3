import { motion } from 'framer-motion'

const cx = 170, cy = 170, r = 110

const agents = [
  { emoji: '⚡', label: 'APEX', sublabel: 'Builds :30', color: '#6366f1', angle: -90 },
  { emoji: '🎨', label: 'LUX', sublabel: 'Critiques :00', color: '#ec4899', angle: 30 },
  { emoji: '📊', label: 'NOVA', sublabel: 'Analyzes', color: '#10b981', angle: 150 },
]

function getPos(angleDeg) {
  return {
    x: cx + r * Math.cos(angleDeg * Math.PI / 180),
    y: cy + r * Math.sin(angleDeg * Math.PI / 180),
  }
}

// Arrow markers along the orbit
function OrbitArrow({ angle }) {
  const pos = getPos(angle)
  const tangent = angle + 90
  const rad = tangent * Math.PI / 180
  const size = 5
  const tip = { x: pos.x + Math.cos(rad) * size, y: pos.y + Math.sin(rad) * size }
  const left = { x: pos.x + Math.cos((tangent + 140) * Math.PI / 180) * size, y: pos.y + Math.sin((tangent + 140) * Math.PI / 180) * size }
  const right = { x: pos.x + Math.cos((tangent - 140) * Math.PI / 180) * size, y: pos.y + Math.sin((tangent - 140) * Math.PI / 180) * size }
  return (
    <polygon
      points={`${tip.x},${tip.y} ${left.x},${left.y} ${right.x},${right.y}`}
      fill="rgba(245,158,11,0.3)"
    />
  )
}

export default function LoopDiagram() {
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <svg viewBox="0 0 340 340" className="w-full">
        <defs>
          <filter id="glow-orbit">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit ring */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Orbit direction arrows */}
        <OrbitArrow angle={-30} />
        <OrbitArrow angle={90} />
        <OrbitArrow angle={210} />

        {/* Animated orbit dot */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'orbit-spin 6s linear infinite' }}>
          <circle
            cx={cx + r}
            cy={cy}
            r={4}
            fill="#f59e0b"
            filter="url(#glow-orbit)"
          />
        </g>

        {/* Second orbit dot (opposite side) */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'orbit-spin 6s linear infinite', animationDelay: '-3s' }}>
          <circle
            cx={cx + r}
            cy={cy}
            r={3}
            fill="#f59e0b"
            opacity={0.4}
          />
        </g>

        {/* Connection lines from center to agents */}
        {agents.map((agent, i) => {
          const pos = getPos(agent.angle)
          return (
            <line
              key={`line-${i}`}
              x1={cx} y1={cy}
              x2={pos.x} y2={pos.y}
              stroke={agent.color}
              strokeWidth="0.5"
              opacity={0.15}
              strokeDasharray="2 4"
            />
          )
        })}

        {/* Center - Sol */}
        <circle cx={cx} cy={cy} r={30} fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />
        <text x={cx} y={cy - 3} textAnchor="middle" dominantBaseline="central" fontSize="22">☀️</text>
        <text
          x={cx} y={cy + 20}
          textAnchor="middle"
          fontSize="10"
          fill="#f59e0b"
          fontFamily="'JetBrains Mono', monospace"
          fontWeight="600"
          letterSpacing="1.5"
        >
          SOL
        </text>

        {/* Agent nodes */}
        {agents.map((agent, i) => {
          const pos = getPos(agent.angle)
          return (
            <g key={i}>
              <circle
                cx={pos.x} cy={pos.y} r={26}
                fill="rgba(8,8,12,0.95)"
                stroke={agent.color}
                strokeWidth="1.5"
              />
              <text
                x={pos.x} y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="18"
              >
                {agent.emoji}
              </text>
              <text
                x={pos.x} y={pos.y + 38}
                textAnchor="middle"
                fontSize="11"
                fill={agent.color}
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="600"
                letterSpacing="1"
              >
                {agent.label}
              </text>
              <text
                x={pos.x} y={pos.y + 50}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(255,255,255,0.3)"
                fontFamily="'JetBrains Mono', monospace"
              >
                {agent.sublabel}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="text-center font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-2">
        Every 2 hours · No human intervention
      </p>
    </div>
  )
}
