# APEX FINAL BUILD BRIEF — Executive Presentation
**Date:** 2026-02-04 23:10 CST  
**From:** Lux 🎨 (CDO) — consolidated from Sol's content brief + Lux's design audit  
**For:** Apex ⚡ — implement ALL items below. This is self-contained. No other file needed.  
**Deploy to:** https://exec-presentation.vercel.app  

---

## SECTION 1: SOL'S CONTENT CHANGES

Every content change Shaz requested, with exact file locations.

---

### 1.1 Remove ALL section numbers (8 files)

**File:** `src/sections/Vision.jsx` — line 11
```jsx
// FIND:
            01 / The Vision
// REPLACE:
            The Vision
```

**File:** `src/sections/Journey.jsx` — line 62
```jsx
// FIND:
            02 / The Honest Journey
// REPLACE:
            The Honest Journey
```

**File:** `src/sections/Systems.jsx` — line 50
```jsx
// FIND:
            03 / How We Fixed It
// REPLACE:
            How We Fixed It
```

**File:** `src/sections/Dashboard.jsx` — line 12
```jsx
// FIND:
            04 / The Dashboard
// REPLACE:
            The Dashboard
```

**File:** `src/sections/Team.jsx` — line 55
```jsx
// FIND:
            05 / The Team
// REPLACE:
            The Team
```

**File:** `src/sections/ChatDemo.jsx` — line 164
```jsx
// FIND:
              06 / In Action
// REPLACE:
              In Action
```

**File:** `src/sections/Impact.jsx` — line 54
```jsx
// FIND:
            07 / Real Impact
// REPLACE:
            Real Impact
```

**File:** `src/sections/Future.jsx` — line 22
```jsx
// FIND:
            08 / What's Next
// REPLACE:
            What's Next
```

**Why:** Nav dots + slide counter already orient the audience. Numbers are redundant and were misnumbered anyway.

---

### 1.2 Align multiplier: 1000x → 100x

**File:** `src/sections/Vision.jsx` — line 32
```jsx
// FIND:
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold mb-2 gradient-text-sol">1000x</p>
// REPLACE:
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold mb-2 gradient-text-sol">100x</p>
```

**Why:** Future slide already says "100x". Shaz's real language is 100x. More believable than 1000x for executive audience.

---

### 1.3 Remove Journey bottom insight text

**File:** `src/sections/Journey.jsx` — lines 112-122  
Delete this entire `<FadeIn>` block:
```jsx
// FIND (delete entirely):
        {/* Bottom insight - one line */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-16 bg-[var(--color-border)]" />
            <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-text-secondary)]">
              The fix wasn't more AI. It was <span className="text-[var(--color-text-primary)]">better systems.</span>
            </p>
            <div className="h-px flex-1 max-w-16 bg-[var(--color-border)]" />
          </div>
        </FadeIn>
// REPLACE:
        {/* Shaz delivers this line verbally */}
```

**Why:** "The fix wasn't more AI. It was better systems." is Shaz's verbal punchline. Don't steal it with on-screen text.

---

### 1.4 Remove Chat Demo auto-play

**File:** `src/sections/ChatDemo.jsx` — lines 119-124  
Delete the auto-play `useEffect`:
```jsx
// FIND (delete entirely):
  // Auto-play when section comes into view
  useEffect(() => {
    if (isInView && !hasAutoPlayed && !isPlaying) {
      setHasAutoPlayed(true)
      setTimeout(() => playConversation(), 500)
    }
  }, [isInView])
// REPLACE:
  // Click-to-start only — gives presenter control
```

**File:** `src/sections/ChatDemo.jsx` — line 227 (the empty state message)
```jsx
// FIND:
                    Auto-plays when slide is active
// REPLACE:
                    Click ▶ Play to start
```

**Why:** During live presentation, Shaz needs to set verbal context before the animation fires. Click-to-start gives full control.

---

### 1.5 Remove "Real conversations" footnote

**File:** `src/sections/ChatDemo.jsx` — lines 297-299 (after the chat interface closing div)
```jsx
// FIND (delete entirely):
          <p className="text-center font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] mt-3">
            Real conversations · Slack & Signal
          </p>
// REPLACE:
          {/* Removed — unnecessary footnote for live presentation */}
```

**Why:** Unnecessary footnote. Shaz explains the context verbally.

---

### 1.6 Systems slide — Shorten problem/solution text

**File:** `src/sections/Systems.jsx` — lines 8-42 (the `systems` array)
```jsx
// FIND:
const systems = [
  {
    id: 'memory',
    label: 'MEMORY.md',
    problem: 'Forgot between sessions',
    solution: 'Persistent memory survives restarts',
    icon: '🧠',
    color: 'var(--color-apex)',
  },
  {
    id: 'rules',
    label: 'RULES.md',
    problem: 'Rules scattered everywhere',
    solution: 'Single source of truth',
    icon: '📋',
    color: 'var(--color-sol)',
  },
  {
    id: 'active',
    label: 'ACTIVE.md',
    problem: 'Remembered past, forgot future',
    solution: 'Live task tracker',
    icon: '📌',
    color: 'var(--color-lux)',
  },
  {
    id: 'propagation',
    label: 'PROPAGATION_MAP.md',
    problem: 'Data never reached consumers',
    solution: 'Dependency map: who reads what',
    icon: '🗺️',
    color: 'var(--color-nova)',
  },
  {
    id: 'security',
    label: 'SECURITY.md',
    problem: 'AI needs guardrails',
    solution: 'Sacred protocols. Unoverridable.',
    icon: '🔒',
    color: 'var(--color-accent-red)',
  },
]
// REPLACE:
const systems = [
  {
    id: 'memory',
    label: 'MEMORY.md',
    problem: 'Forgot everything',
    solution: 'Persistent across restarts',
    icon: '🧠',
    color: 'var(--color-apex)',
  },
  {
    id: 'rules',
    label: 'RULES.md',
    problem: 'Rules everywhere',
    solution: 'One source of truth',
    icon: '📋',
    color: 'var(--color-sol)',
  },
  {
    id: 'active',
    label: 'ACTIVE.md',
    problem: 'Forgot the future',
    solution: 'Live task tracker',
    icon: '📌',
    color: 'var(--color-lux)',
  },
  {
    id: 'propagation',
    label: 'PROPAGATION_MAP.md',
    problem: 'Data lost',
    solution: 'Who reads what',
    icon: '🗺️',
    color: 'var(--color-nova)',
  },
  {
    id: 'security',
    label: 'SECURITY.md',
    problem: 'Needs guardrails',
    solution: 'Sacred. Unbreakable.',
    icon: '🔒',
    color: 'var(--color-accent-red)',
  },
]
```

**Why:** 3-4 words max per side. Currently too long for the 11px text at projector distance.

---

## SECTION 2: DESIGN FIXES — 🔴 MUST DO

These will look bad on a projector if not fixed. Non-negotiable.

---

### 2.1 Fix `text-muted` contrast (1 line, fixes 30+ instances globally)

**File:** `src/index.css` — line 16 (inside `@theme` block)
```css
/* FIND: */
  --color-text-muted: #6b7280;
/* REPLACE: */
  --color-text-muted: #8b95a3;
```

**Why:** `#6b7280` fails WCAG AA on all dark backgrounds (4.14:1 on #08080c, needs 4.5:1). `#8b95a3` passes everywhere (~5.5:1). This single change fixes every muted-text instance globally.

---

### 2.2 Raise ALL sub-12px text to minimum 12px

Every instance below. Apply ALL of them.

#### Journey.jsx

**File:** `src/sections/Journey.jsx` — line 102 (date badges)
```jsx
// FIND:
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] bg-[var(--color-bg)] px-2 py-0.5 rounded">
// REPLACE:
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] bg-[var(--color-bg)] px-2 py-0.5 rounded">
```

**File:** `src/sections/Journey.jsx` — line 109 (lesson text)
```jsx
// FIND:
                <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-accent-green)] leading-relaxed">
// REPLACE:
                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-green)] leading-relaxed">
```

#### Systems.jsx

**File:** `src/sections/Systems.jsx` — line 89 (problem text)
```jsx
// FIND:
                        <p className="text-[11px] text-[var(--color-accent-red)] font-[family-name:var(--font-mono)]">
// REPLACE:
                        <p className="text-xs text-[var(--color-accent-red)] font-[family-name:var(--font-mono)]">
```

**File:** `src/sections/Systems.jsx` — line 92 (solution text)
```jsx
// FIND:
                        <p className="text-[11px] font-[family-name:var(--font-mono)]" style={{ color: system.color }}>
// REPLACE:
                        <p className="text-xs font-[family-name:var(--font-mono)]" style={{ color: system.color }}>
```

#### Dashboard.jsx

**File:** `src/sections/Dashboard.jsx` — line 37 (version label — "Day 1", "Day 3", etc.)
```jsx
// FIND:
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)]">{item.label}</span>
// REPLACE:
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">{item.label}</span>
```

**File:** `src/sections/Dashboard.jsx` — line 53 (browser chrome title)
```jsx
// FIND:
              <span className="ml-3 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
// REPLACE:
              <span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
```

**File:** `src/sections/Dashboard.jsx` — line 55 ("● Live" indicator)
```jsx
// FIND:
              <span className="ml-auto font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-accent-green)]">● Live</span>
// REPLACE:
              <span className="ml-auto font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-green)]">● Live</span>
```

**File:** `src/sections/Dashboard.jsx` — line 69 (KPI labels — "Revenue", "Orders", etc.)
```jsx
// FIND:
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">{kpi.label}</p>
// REPLACE:
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{kpi.label}</p>
```

**File:** `src/sections/Dashboard.jsx` — line 71 (KPI change values — "+12.3%", etc.)
```jsx
// FIND:
                    <p className={`font-[family-name:var(--font-mono)] text-[10px] mt-0.5 ${kpi.up ? 'text-[var(--color-accent-green)]' : 'text-[var(--color-accent-red)]'}`}>
// REPLACE:
                    <p className={`font-[family-name:var(--font-mono)] text-xs mt-0.5 ${kpi.up ? 'text-[var(--color-accent-green)]' : 'text-[var(--color-accent-red)]'}`}>
```

**File:** `src/sections/Dashboard.jsx` — line 82 ("Revenue Trend" label)
```jsx
// FIND:
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] mb-3">Revenue Trend</p>
// REPLACE:
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mb-3">Revenue Trend</p>
```

**File:** `src/sections/Dashboard.jsx` — line 104 ("Channels" label)
```jsx
// FIND:
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] mb-2">Channels</p>
// REPLACE:
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mb-2">Channels</p>
```

**File:** `src/sections/Dashboard.jsx` — line 112 (Channel name labels — "Amazon", "Shopify", etc.)
```jsx
// FIND:
                          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-secondary)]">{ch.name}</span>
// REPLACE:
                          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-secondary)]">{ch.name}</span>
```

**File:** `src/sections/Dashboard.jsx` — line 113 (Channel percentage labels)
```jsx
// FIND:
                          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)]">{ch.pct}%</span>
// REPLACE:
                          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">{ch.pct}%</span>
```

**File:** `src/sections/Dashboard.jsx` — line 134 (stats row labels — "versions", "AI agents", etc.)
```jsx
// FIND:
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] mt-1 uppercase tracking-wider">{stat.label}</p>
// REPLACE:
                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-1 uppercase tracking-wider">{stat.label}</p>
```

#### Team.jsx

**File:** `src/sections/Team.jsx` — line 97 (role labels — "COMMANDER", "CTO", etc.)
```jsx
// FIND:
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">{agent.role}</p>
// REPLACE:
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{agent.role}</p>
```

**File:** `src/sections/Team.jsx` — line 109 (loop diagram caption)
```jsx
// FIND:
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] mt-4 text-center">
// REPLACE:
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-4 text-center">
```

#### ChatDemo.jsx

**File:** `src/sections/ChatDemo.jsx` — line 249 (timestamps)
```jsx
// FIND:
                        <span className="font-[family-name:var(--font-mono)] text-[9px] opacity-40">{msg.time}</span>
// REPLACE:
                        <span className="font-[family-name:var(--font-mono)] text-[11px] opacity-40">{msg.time}</span>
```

**File:** `src/sections/ChatDemo.jsx` — line 271 (SA avatar text)
```jsx
// FIND:
                        <span className="text-[9px] font-bold text-black">SA</span>
// REPLACE:
                        <span className="text-[11px] font-bold text-black">S</span>
```

#### Future.jsx

**File:** `src/sections/Future.jsx` — line 51 (status badges — "● Live", "◐ Next", "○ Planned")
```jsx
// FIND:
                <div className={`inline-flex px-1.5 py-0.5 rounded text-[9px] font-[family-name:var(--font-mono)] mt-1.5 ${
// REPLACE:
                <div className={`inline-flex px-1.5 py-0.5 rounded text-[11px] font-[family-name:var(--font-mono)] mt-1.5 ${
```

#### Navigation.jsx

**File:** `src/components/Navigation.jsx` — line 39 (nav dot labels)
```jsx
// FIND:
              className={`text-[9px] font-[family-name:var(--font-mono)] tracking-widest uppercase transition-all duration-300 ${
// REPLACE:
              className={`text-[11px] font-[family-name:var(--font-mono)] tracking-widest uppercase transition-all duration-300 ${
```

**File:** `src/components/Navigation.jsx` — line 29-31 (keyboard hint text — all 10px instances)
```jsx
// FIND:
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] font-[family-name:var(--font-mono)] text-[10px]">↑</kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] font-[family-name:var(--font-mono)] text-[10px]">↓</kbd>
          <span className="font-[family-name:var(--font-mono)] text-[10px] ml-1">navigate</span>
// REPLACE (but actually see 2.3 — we're removing this block entirely):
```

#### LoopDiagram.jsx

**File:** `src/components/LoopDiagram.jsx` — line 117 ("Every 2 hours" caption)
```jsx
// FIND:
      <p className="text-center font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text-muted)] mt-2">
// REPLACE:
      <p className="text-center font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] mt-2">
```

#### SystemDiagram.jsx (SVG text — can't use Tailwind classes)

**File:** `src/components/SystemDiagram.jsx` — line 69 (node labels)
```jsx
// FIND:
              fontSize="9"
// REPLACE (every instance of fontSize="9" for node labels):
              fontSize="11"
```

**File:** `src/components/SystemDiagram.jsx` — line 78 (center label "SINGLE SOURCE OF TRUTH")
```jsx
// FIND:
          fontSize="8"
// REPLACE:
          fontSize="10"
```

**File:** `src/components/LoopDiagram.jsx` — SVG labels (3 instances)

Label for "SOL" center:
```jsx
// FIND:
          fontSize="8"
          fill="#f59e0b"
// REPLACE:
          fontSize="10"
          fill="#f59e0b"
```

Agent labels (APEX, LUX, NOVA):
```jsx
// FIND:
              fontSize="9"
              fill={agent.color}
// REPLACE:
              fontSize="11"
              fill={agent.color}
```

Agent sublabels ("Builds :30", "Critiques :00", "Analyzes"):
```jsx
// FIND:
              fontSize="8"
              fill="rgba(255,255,255,0.3)"
// REPLACE:
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
```

**Why for ALL of 2.2:** On a conference room projector, anything below 12px is invisible beyond the first row. 9px and 10px text literally cannot be read. Floor = 12px (text-xs). SVG text raised proportionally.

---

### 2.3 Remove keyboard navigation hint

**File:** `src/components/Navigation.jsx` — lines 27-34
```jsx
// FIND (delete entire block):
      {/* Keyboard hint - bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] opacity-40">
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] font-[family-name:var(--font-mono)] text-[10px]">↑</kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] font-[family-name:var(--font-mono)] text-[10px]">↓</kbd>
          <span className="font-[family-name:var(--font-mono)] text-[10px] ml-1">navigate</span>
        </div>
      </div>
// REPLACE:
      {/* Keyboard hint removed — presenter knows the controls */}
```

**Why:** Visual distraction on every slide. Not needed for a live audience.

---

### 2.4 Dashboard KPI value size bump

**File:** `src/sections/Dashboard.jsx` — line 70 (KPI values — "$1.2M", "8,432", etc.)
```jsx
// FIND:
                    <p className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold mt-0.5">{kpi.value}</p>
// REPLACE:
                    <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mt-0.5">{kpi.value}</p>
```

**Why:** These are the key data points. Making them slightly larger aids readability on projector.

---

## SECTION 3: DESIGN FIXES — 🟡 SHOULD DO

Noticeably better. Implement if time allows.

---

### 3.1 Vision slide — reduce headline-to-pillars gap

**File:** `src/sections/Vision.jsx` — line 16
```jsx
// FIND:
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-16">
// REPLACE:
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
```

**Why:** `mb-16` (64px) is excessive vertical dead space. `mb-10` (40px) creates more balanced distribution.

---

### 3.2 Future slide — improve "Planned" card opacity

**File:** `src/sections/Future.jsx` — line 42
```jsx
// FIND:
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] opacity-50'
// REPLACE:
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] border-dashed opacity-70'
```

**File:** `src/sections/Future.jsx` — line 49
```jsx
// FIND:
                whileInView={{ opacity: company.status === 'Planned' ? 0.5 : 1, y: 0 }}
// REPLACE:
                whileInView={{ opacity: company.status === 'Planned' ? 0.7 : 1, y: 0 }}
```

**Why:** 50% opacity makes planned companies look broken/disabled. 70% + dashed border signals "coming soon" more clearly.

---

### 3.3 Progress bar — increase thickness

**File:** `src/App.jsx` — line 84
```jsx
// FIND:
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
// REPLACE:
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
```

**Why:** 2px is invisible on projector. 3px is visible without being distracting.

---

### 3.4 Chat interface height — taller for longer conversations

**File:** `src/sections/ChatDemo.jsx` — line 219
```jsx
// FIND:
              className="h-[340px] overflow-y-auto p-4 space-y-3"
// REPLACE:
              className="h-[400px] overflow-y-auto p-4 space-y-3"
```

**Why:** The "Cost Investigation" conversation requires internal scrolling at 340px. 400px avoids this — internal scrolling in a live demo is awkward.

---

### 3.5 "Replay" button → "Play" on first load

**File:** `src/sections/ChatDemo.jsx` — line 213
```jsx
// FIND:
                {isPlaying ? 'Playing...' : '▶ Replay'}
// REPLACE:
                {isPlaying ? 'Playing...' : '▶ Play'}
```

**Why:** On first visit, "Replay" implies it already played. "Play" is more accurate for click-to-start.

---

## SECTION 4: DESIGN FIXES — 🟢 NICE TO HAVE

Polish items. Only if all above is done.

---

### 4.1 Reduce noise overlay for projector performance

**File:** `src/index.css` — line 72 (`.noise-overlay` block)
```css
/* FIND: */
  opacity: 0.03;
/* REPLACE: */
  opacity: 0.015;
```

**Why:** feTurbulence SVG filter at z-index 1000 covering entire viewport can cause scroll jank on older projector hardware. Reducing opacity halves the visual load while keeping the texture.

---

### 4.2 Impact slide — fix timeline text sizes (already covered in 2.2, this is a note)

The timeline items on the Impact slide (`text-xs` for day labels, `text-sm` for event text) are already at acceptable sizes. The metric labels (`text-xs`) were fixed in 2.2. No additional changes needed here beyond what's already specified.

---

### 4.3 Emoji safety note (no code change — hardware-dependent)

The deck uses native emoji for agent cards (☀️⚡🎨📊) and system nodes (📋🧠📌🗺️🔒). On macOS → projector these render perfectly. If presenting from a Windows machine, emoji may render flat/broken. **Know your equipment.** Since Shaz presents from his Mac, this is fine.

---

## IMPLEMENTATION CHECKLIST

Apex: check each item off as you implement. Deploy when all MUST DO + content changes are done.

### Content Changes (Section 1)
- [ ] 1.1 — Remove section numbers (8 files)
- [ ] 1.2 — 1000x → 100x (Vision.jsx)
- [ ] 1.3 — Remove Journey bottom insight text
- [ ] 1.4 — Remove Chat Demo auto-play + change empty state message
- [ ] 1.5 — Remove "Real conversations" footnote
- [ ] 1.6 — Shorten Systems problem/solution text

### MUST DO (Section 2)
- [ ] 2.1 — Fix text-muted contrast (#6b7280 → #8b95a3)
- [ ] 2.2 — Raise ALL sub-12px text (Journey, Systems, Dashboard, Team, ChatDemo, Future, Navigation, LoopDiagram, SystemDiagram)
- [ ] 2.3 — Remove keyboard navigation hint
- [ ] 2.4 — Dashboard KPI value size bump

### SHOULD DO (Section 3)
- [ ] 3.1 — Vision mb-16 → mb-10
- [ ] 3.2 — Future planned cards opacity 50→70 + dashed border
- [ ] 3.3 — Progress bar h-[2px] → h-[3px]
- [ ] 3.4 — Chat interface h-[340px] → h-[400px]
- [ ] 3.5 — "Replay" → "Play" button label

### NICE TO HAVE (Section 4)
- [ ] 4.1 — Reduce noise overlay opacity

---

## FILES TOUCHED (Summary)

| File | Changes |
|------|---------|
| `src/index.css` | text-muted color, noise overlay opacity |
| `src/App.jsx` | Progress bar height |
| `src/sections/Vision.jsx` | Remove "01 /", 1000x→100x, mb-16→mb-10 |
| `src/sections/Journey.jsx` | Remove "02 /", remove bottom insight, text sizes |
| `src/sections/Systems.jsx` | Remove "03 /", shorten problem/solution text, text sizes |
| `src/sections/Dashboard.jsx` | Remove "04 /", 11 text size fixes, KPI value bump |
| `src/sections/Team.jsx` | Remove "05 /", role label size, loop caption size |
| `src/sections/ChatDemo.jsx` | Remove "06 /", remove auto-play, remove footnote, text sizes, button label, chat height |
| `src/sections/Impact.jsx` | Remove "07 /" |
| `src/sections/Future.jsx` | Remove "08 /", status badge size, planned card opacity |
| `src/components/Navigation.jsx` | Remove keyboard hint, nav label size |
| `src/components/SystemDiagram.jsx` | SVG fontSize bumps |
| `src/components/LoopDiagram.jsx` | SVG fontSize bumps, caption size |

**Total: 13 files, ~45 surgical edits. Estimated time: 30-45 minutes.**

---

*Lux 🎨 — every word earns its place, every pixel serves the projector.*
