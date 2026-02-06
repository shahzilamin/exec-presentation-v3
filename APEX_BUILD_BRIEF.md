# Apex Build Brief - Exec Presentation V2 (Deck Mode)

## CEO Direction
"More deck like with interaction. More visuals as well."

## Priority: DECK TRANSFORMATION + KEY VISUALS

### Phase 1: Deck Foundation (MUST DO)

#### 1. CSS Scroll-Snap (`src/index.css`)
```css
html {
  scroll-snap-type: y mandatory;
}
section {
  scroll-snap-align: start;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```
Remove all `py-24 md:py-32` from sections. Remove all `section-divider` elements. Each section = exactly one screen.

#### 2. Keyboard Navigation (`src/App.jsx`)
Add keyboard handler: ArrowDown/Right/Space = next slide, ArrowUp/Left = prev slide. Use `scrollIntoView({ behavior: 'smooth' })`.

#### 3. Updated Navigation (`src/components/Navigation.jsx`)
Add current slide number top-left: large "01" with "/ 09" below it. Keep right-side dots but make all labels visible (not just active).

#### 4. All Sections → 100vh
- Hero: change `min-h-screen` to `h-screen`
- All sections: remove `py-24 md:py-32`, add `h-screen` with internal flex centering
- Sections with too much content: reduce content or use internal scroll
- Journey (6 cards): show 3 at a time with scroll, or reduce to 4 key failures
- Remove ALL `section-divider` elements

### Phase 2: Key Visuals (HIGH IMPACT)

#### 5. Animated Network Diagram - Systems Section
Replace the static "File System Architecture" grid at bottom of Systems.jsx with an animated SVG diagram:
- 5 nodes (MEMORY.md, RULES.md, ACTIVE.md, PROPAGATION_MAP.md, SECURITY.md) positioned in a network layout
- Animated dashed lines between connected nodes showing data flow
- Each node colored with its system color
- Use Framer Motion for entrance animations

Create `src/components/SystemDiagram.jsx`.

#### 6. Circular Autonomous Loop - Team Section
Replace the flat horizontal row of boxes in Team.jsx with a circular diagram:
- Sol ☀️ at center
- Apex ⚡, Lux 🎨, Nova 📊 orbiting
- Animated arrows showing the 2-hour cycle direction
- Time indicators (:30, :45, :00) near each agent
- Use SVG circle + positioned elements

Create `src/components/LoopDiagram.jsx`.

#### 7. Fix CountUp Component - Impact Section
The current CountUp doesn't animate. Fix it:
```jsx
function CountUp({ value, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')
  
  useEffect(() => {
    if (!isInView) return
    const numVal = parseFloat(value.replace(/[^0-9.]/g, ''))
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setDisplay(Math.round(numVal * eased).toString())
      if (progress < 1) requestAnimationFrame(animate)
      else setDisplay(value) // show final formatted value
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])
  
  return <span ref={ref}>{display}</span>
}
```

#### 8. Animated Hero Sun
Replace `<span className="text-6xl">☀️</span>` with an animated SVG sun:
- Circular center with radiating rays
- Rays rotate slowly (CSS animation, 20s infinite)
- Subtle pulsing glow
- Color: var(--color-sol)
- Size: 80px

Create `src/components/AnimatedSun.jsx`.

#### 9. Hero Particles Enhancement
- Increase count from 20 to 40
- Vary sizes: `w-${Math.random() > 0.7 ? 2 : 1} h-${Math.random() > 0.7 ? 2 : 1}`
- Increase opacity range: 0.15-0.5

#### 10. Chat Demo Enhancements
- Auto-play first conversation when section is in view
- Add avatar circles: "SA" amber circle for Shaz, "☀️" dark circle for Sol
- Add typing indicator (3 animated dots) before Sol messages

### Phase 3: Nice-to-Have (IF TIME)
- Horizontal swimlane timeline in Impact section
- Portfolio constellation in Future section  
- Varied entrance animations per section
- Presenter mode (?presenter=true)

## Critical Rules
1. DO NOT break existing functionality
2. Build and verify before deploying
3. Deploy to Vercel when done
4. No new npm dependencies - use existing React + Framer Motion + Tailwind + inline SVG
5. Test scroll-snap behavior across section lengths

## Project Details
- **Dir:** /Users/solbot/clawd/projects/exec-presentation/
- **Stack:** React 19 + Vite 7 + Tailwind v4 + Framer Motion 12
- **Deploy:** `npx vercel --prod --token $VERCEL_TOKEN --yes` (VERCEL_TOKEN env var is set)
- **Production URL:** https://exec-presentation.vercel.app
