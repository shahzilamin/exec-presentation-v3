# Sol Content Brief - Less Words, More Visuals

## Principle
Shaz presents in person. The deck GUIDES him - visual anchors he talks over.
Less reading, more feeling. Every word must earn its place.

## Audience
- Not technical
- High level business impact
- Real stories and pain points
- Explain like they're 5 (accessible, not dumbed down)

## Corrections from Shaz
- It was a wrong CALENDAR INVITE, not wrong email (details matter)

---

## Global Changes

### 1. Remove ALL section numbers
- "01 / The Vision" → "The Vision"
- "02 / The Honest Journey" → "The Honest Journey"  
- etc. across ALL sections
- Nav dots + slide counter handle orientation. Numbers add no value for a live audience.

### 2. Align multiplier: 1000x → 100x everywhere
- Vision slide currently says "1000x" 
- Future slide says "100x"
- Pick ONE: 100x. It's Shaz's real language. More believable than 1000x.
- Vision pillar: change "1000x" to "100x" and subtext "Not 10% better" stays

### 3. Chat Demo → Click-to-start ONLY
- Remove the `useEffect` auto-play (lines ~119-124 in ChatDemo.jsx)
- Empty state message: "Click ▶ Play to start" instead of "Auto-plays when slide is active"
- This gives Shaz control: land on slide, set verbal context, THEN click Play

---

## Per-Slide Content Changes

### Hero (Slide 1) ✅ Keep as-is
Already minimal. Big headline, animated sun, particles. Perfect.

### Vision (Slide 2) - Minor tweak
- Change "1000x" to "100x" in the first pillar
- Everything else stays. Three visual pillars with single-line labels = exactly right for presenting.

### Journey (Slide 3) - Trim bottom text
- Remove bottom insight line: "The fix wasn't more AI. It was better systems." → Shaz will say this verbally, it's his punchline
- Remove the divider lines around it
- Fix: "Wrong Calendar Invite" is correct title (Shaz confirmed, not email)
- The 6-card grid with icon + title + one-liner is perfect for visual scanning

### Systems (Slide 4) - Simplify expanded text
- Problem/solution text currently ~11px - hard to read
- Simplify to SHORTER phrases:
  - Memory: "Forgot everything" → "Persistent across restarts"
  - Rules: "Rules everywhere" → "One source of truth"
  - Active: "Forgot the future" → "Live task tracker"
  - Propagation: "Data lost" → "Who reads what"
  - Security: "Needs guardrails" → "Sacred. Unbreakable."
- These should be 3-4 words MAX on each side of the before/after

### Dashboard (Slide 5) ✅ Keep
- Mockup is a visual impression, not readable data
- Version evolution bar (V1 → V10 → V19+) is great visual storytelling
- Stats row is punchy: "19+ versions · 3 AI agents · 2hr cycles · 0 lines by CEO"

### Team (Slide 6) - Trim capability tags
- Remove the capability tag pills from agent cards (Memory, Email, Calendar, etc.)
- They're too small to read (10px) and too detailed for a non-technical audience
- The one-liner description per agent is enough
- "Coordinates everything" / "Ships code" / "Design lens" / "Financial analysis" - these ARE the capabilities

### Chat Demo (Slide 7) - Click to start + trim conversations
- Remove auto-play (critical for live presenting)
- Keep all 3 conversations - they show range (morning briefing, cost audit, quick decisions)
- These conversations are already punchy. Keep as-is.

### Impact (Slide 8) ✅ Keep
- Big animated numbers are the star
- 5-day timeline is clean
- No changes needed - this is already "less words, more visuals"

### Future (Slide 9) - Minor trim
- Company grid is perfect visual
- 100x closer is perfect
- Remove "Real conversations · Slack & Signal" caption under chat (slide 7) - unnecessary footnote
- Keep signature "Shahzil Amin — Emagineer" at bottom

---

## What NOT to change
- Dark theme + amber accent = great
- Scroll-snap deck behavior = great  
- Animated sun = great
- Particle system = great
- Framer Motion animations = great
- Navigation dots = great

## Summary of text removals
1. Section numbers (all slides)
2. Bottom insight text on Journey slide
3. Capability tag pills on Team slide  
4. Auto-play behavior on Chat Demo
5. "Real conversations" footnote on Chat Demo
6. Align 1000x → 100x

Net effect: ~30% fewer words. All visuals stay. Deck becomes a visual anchor for verbal storytelling.
