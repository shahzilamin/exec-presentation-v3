export default function AnimatedSun({ size = 80 }) {
  const center = size / 2
  const coreRadius = size * 0.16
  const innerRadius = size * 0.1
  const rayStart = size * 0.24
  const rayEnd = size * 0.42
  const shortRayEnd = size * 0.34
  const numRays = 12

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Pulsing glow background */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.1) 40%, transparent 70%)',
          animation: 'pulse-glow 3s ease-in-out infinite',
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10"
        style={{ animation: 'spin-slow 20s linear infinite' }}
      >
        {/* Rays */}
        {[...Array(numRays)].map((_, i) => {
          const angle = (i * 360) / numRays - 90
          const rad = (angle * Math.PI) / 180
          const isLong = i % 2 === 0
          const end = isLong ? rayEnd : shortRayEnd
          const x1 = center + Math.cos(rad) * rayStart
          const y1 = center + Math.sin(rad) * rayStart
          const x2 = center + Math.cos(rad) * end
          const y2 = center + Math.sin(rad) * end
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#f59e0b"
              strokeWidth={isLong ? 2.5 : 1.5}
              strokeLinecap="round"
              opacity={isLong ? 0.9 : 0.5}
            />
          )
        })}
        {/* Core circle */}
        <circle cx={center} cy={center} r={coreRadius} fill="#f59e0b" />
        {/* Inner highlight */}
        <circle cx={center} cy={center} r={innerRadius} fill="#fbbf24" opacity={0.8} />
      </svg>
    </div>
  )
}
