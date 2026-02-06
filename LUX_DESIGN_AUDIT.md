# LUX DESIGN AUDIT — Executive Presentation
**Date:** 2026-02-04 22:30 CST  
**URL:** https://exec-presentation.vercel.app  
**Stack:** React 19 + Vite 7 + Tailwind v4 + Framer Motion 12  
**Context:** 9-slide scroll-snap deck for in-person chairman presentation  

---

## Overall Impression

Strong conceptual foundation. The dark theme, amber accent system, and Bricolage Grotesque headlines create genuine executive gravitas. The scroll-snap deck format works well. But there are several issues that **will look bad under projector lights** — primarily: text is too small, section numbering is wrong, and `text-muted` fails contrast on dark backgrounds. These need fixing before any live presentation.

---

## 🔴 MUST FIX — Will look bad in presentation

### 1. Section Numbers Are Wrong and Out of Order

The section labels inside slides don't match each other OR the nav counter. The Dashboard (slide 5) labels itself "05" and Team (slide 6) labels itself "04" — they're reversed. The nav counter shows the correct position (01–09) but every section label is off-by-one from the counter because Hero has no number.

**Current state:**
| Slide Position | Nav Counter | Section Label |
|---|---|---|
| Hero | 01 | (none) |
| Vision | 02 | "01 / THE VISION" |
| Journey | 03 | "02 / THE HONEST JOURNEY" |
| Systems | 04 | "03 / HOW WE FIXED IT" |
| Dashboard | 05 | "05 / THE DASHBOARD" ← skipped 04 |
| Team | 06 | "04 / THE TEAM" ← should be 05 or 06 |
| ChatDemo | 07 | "06 / IN ACTION" |
| Impact | 08 | "07 / REAL IMPACT" |
| Future | 09 | "08 / WHAT'S NEXT" |

**Fix — Option A (recommended): Remove section numbers entirely.** They add no value for a live presentation. The nav dots + slide counter already orient the audience. Replace `"01 / THE VISION"` with just `"THE VISION"`. Clean, no mismatch risk.

```jsx
// Vision.jsx — line 13
- "01 / The Vision"
+ "The Vision"

// Journey.jsx — line 62
- "02 / The Honest Journey"  
+ "The Honest Journey"

// Systems.jsx — line 50
- "03 / How We Fixed It"
+ "How We Fixed It"

// Dashboard.jsx — line 12
- "05 / The Dashboard"
+ "The Dashboard"

// Team.jsx — line 55
- "04 / The Team"
+ "The Team"

// ChatDemo.jsx — line 164
- "06 / In Action"
+ "In Action"

// Impact.jsx — line 54
- "07 / Real Impact"
+ "Real Impact"

// Future.jsx — line 22
- "08 / What's Next"
+ "What's Next"
```

**Fix — Option B: Fix the numbering to match nav.** Hero = no label, Vision = "02", Journey = "03", Systems = "04", Dashboard = "05", Team = "06", ChatDemo = "07", Impact = "08", Future = "09".

---

### 2. 36 Instances of Sub-12px Text — Invisible on Projector

This is the #1 readability killer. On a conference room projector or large display, **anything below 12px is invisible beyond the first row**. The deck currently has:

- **4 instances of `text-[9px]`** — ChatDemo timestamps, Future status badges, Navigation labels
- **21 instances of `text-[10px]`** — Dashboard KPIs, Journey dates, Team roles/tags, Impact labels, Navigation hints
- **6 instances of `text-[11px]`** — Dashboard browser chrome, Journey lessons, Systems problem/solution, Impact timeline events
- **12 instances of `text-xs` (12px)** — Various section labels, chat tabs (borderline OK)

**Minimum floor for presentation: 12px (`text-xs`). Preferred: 13-14px (`text-sm`) for body text.**

**Bulk fix — find and replace across all files:**

```
text-[9px]  → text-xs     (9→12px,  +33%)
text-[10px] → text-xs     (10→12px, +20%)
text-[11px] → text-xs     (11→12px, +9%)
```

**Specific high-impact fixes:**

```jsx
// Dashboard.jsx — KPI labels (currently 10px, completely unreadable)
// Line 71: text-[10px] → text-xs
// Line 73: text-[10px] → text-xs  
// Line 82: text-[10px] → text-xs (Revenue Trend label)

// Team.jsx — Role labels (COMMANDER, CTO, CDO, CFO)
// Line 97: text-[10px] → text-xs

// Team.jsx — Capability tags
// Line 109: text-[10px] → text-xs

// Impact.jsx — Metric labels and timeline
// Line 74: text-[10px] → text-xs
// Line 103: text-[10px] → text-xs  
// Line 104: text-[11px] → text-xs

// ChatDemo.jsx — Timestamps  
// Line 249: text-[9px] → text-[11px] (timestamps can be slightly smaller)

// Future.jsx — Status badges
// Line 51: text-[9px] → text-[11px]

// Journey.jsx — Lesson text
// Line 116: text-[11px] → text-xs
```

---

### 3. `text-muted` (#6b7280) Fails Contrast on All Dark Backgrounds

Measured contrast ratios:
| Background | Ratio | WCAG AA (normal text) |
|---|---|---|
| `--color-bg` (#08080c) | 4.14:1 | ❌ FAIL (needs 4.5:1) |
| `--color-bg-elevated` (#111118) | 3.89:1 | ❌ FAIL |
| `--color-bg-card` (#16161f) | 3.72:1 | ❌ FAIL |

This color is used ~30+ times across the deck for labels, dates, captions, and metadata.

**Fix:** Change `--color-text-muted` from `#6b7280` to `#8b95a3` in `index.css`:

```css
/* index.css — @theme block */
- --color-text-muted: #6b7280;
+ --color-text-muted: #8b95a3;
```

New contrast ratios:
- On #08080c: ~5.8:1 ✅
- On #111118: ~5.4:1 ✅  
- On #16161f: ~5.1:1 ✅

This single change fixes every instance globally without touching any component files.

---

### 4. Chat Demo Auto-Plays Before Presenter Is Ready

The chat demo starts playing automatically when the slide scrolls into view (`useInView` with `amount: 0.5`). During a live presentation, Shaz might scroll to this slide while still talking about the previous topic. The animation fires without his control.

**Fix:** Disable auto-play. Make it click-to-start only.

```jsx
// ChatDemo.jsx — remove auto-play useEffect (lines ~119-124)
- useEffect(() => {
-   if (isInView && !hasAutoPlayed && !isPlaying) {
-     setHasAutoPlayed(true)
-     setTimeout(() => playConversation(), 500)
-   }
- }, [isInView])

// Change the empty state message
// Line ~227
- "Auto-plays when slide is active"
+ "Click ▶ Play to start"
```

This gives Shaz full control: land on the slide, set context verbally, THEN click Play.

---

### 5. Navigation Keyboard Hint Clutters Presentation Mode

The `↑ ↓ navigate` hint at bottom center is for web users, not a live audience. It's small (10px) but still a visual distraction on every slide.

**Fix:** Hide it during presentation. Add a URL parameter or remove it entirely since the presenter knows the controls.

```jsx
// Navigation.jsx — remove the keyboard hint block (lines ~27-34)
// Delete or wrap in a dev-only condition:
- <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-3">
-   ...
- </div>
```

---

## 🟡 SHOULD FIX — Noticeably better

### 6. Dashboard Mockup Is Too Dense for a Presentation Slide

The dashboard mockup on slide 5 tries to show a full dashboard (4 KPIs + chart + channel bars) at presentation scale. At 10px text on a projector, the audience can't read any of it. The mockup should be a **visual impression**, not a readable dashboard.

**Fix — Option A (quick):** Scale up the key elements. The mockup is in a container with `p-4 md:p-6`. Increase the KPI text size:

```jsx
// Dashboard.jsx — KPI values
// Line 72: text-lg md:text-xl → text-xl md:text-2xl
// Line 71: text-[10px] → text-xs (labels)
```

**Fix — Option B (better):** Simplify the mockup to just 4 large KPI cards and the chart. Remove the channels sidebar — it's redundant with the stats row below. This reduces visual noise and makes the mockup work as a quick visual hit.

---

### 7. Impact Slide Timeline Connector Lines Have Gaps

The timeline connector uses `absolute top-4 left-[50%] right-0` on each item's container. Because each item is `flex-1`, the line only spans half of each item's width, creating visible gaps between nodes.

**Fix:** Change the connector to span from center of current node to center of next node:

```jsx
// Impact.jsx — line ~90
- <div className="absolute top-4 left-[50%] right-0 h-px bg-[var(--color-border)]" />
+ <div className="absolute top-4 left-[50%] w-full h-px bg-[var(--color-border)]" />
```

Or better: Use a single continuous line behind all nodes with a shared parent approach.

---

### 8. Vision Slide — Three Pillars Have Too Much Vertical Dead Space

The Vision slide ("Not a chatbot. A force multiplier.") has the headline and three pillars clustered in the center, with ~200px of empty space below. The pillars themselves have 80px icon boxes + stat + label, but the gap between headline and pillars (`mb-16` = 64px) is excessive.

**Fix:**

```jsx
// Vision.jsx — line 21
- mb-16
+ mb-10
```

This tightens the headline-to-pillars gap and pushes the entire content block slightly higher, creating more balanced vertical distribution.

---

### 9. Emoji Rendering Inconsistency Across Platforms

The deck uses native emoji (🧠⚡📈📧👻⚙️❓🚨🔒📋📌🗺️☀️🎨📊💰🚀👁️⌨️🏥💊🏗️📡🔌) for icons. On macOS these look polished, but on Windows projector systems, emoji render as flat, colorless, or outlined. This could look unprofessional on certain hardware.

**Fix for safety:** Consider replacing key emoji with simple SVG icons or Lucide React icons. Priority replacements:
- Agent cards (☀️⚡🎨📊) — these are "character" icons that must look good
- System diagram nodes (📋🧠📌🗺️🔒)

This is a "know your equipment" issue. If presenting from a Mac connected to a projector, it's fine. If using a Windows machine, it's a risk.

---

### 10. Company Cards on Future Slide — "Planned" Items Look Broken

The 4 "Planned" companies have `opacity-50` which makes them look like disabled/broken UI rather than aspirational future state. Combined with the gray border and muted status badge, they signal "doesn't work" instead of "coming soon."

**Fix:** Reduce opacity from 50% to 70% and add a subtle dashed border to signal "planned":

```jsx
// Future.jsx — line ~42
- : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] opacity-50'
+ : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] border-dashed opacity-70'

// Line ~49 — fix the whileInView opacity too
- whileInView={{ opacity: company.status === 'Planned' ? 0.5 : 1, y: 0 }}
+ whileInView={{ opacity: company.status === 'Planned' ? 0.7 : 1, y: 0 }}
```

---

### 11. Progress Bar at Top Is Invisible (2px)

The scroll progress bar is `h-[2px]` — essentially invisible during a presentation. Either make it meaningful or remove it to reduce visual noise.

**Fix:** Increase to 3px or remove entirely:

```jsx
// App.jsx — line 84
- className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
+ className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
```

Or remove if the nav dots are sufficient for progress indication.

---

## 🟢 NICE TO HAVE — Polish

### 12. Noise Overlay May Cause Frame Drops on Projector Hardware

The `noise-overlay` div uses an SVG feTurbulence filter at `z-index: 1000` covering the entire viewport. On older projector hardware or presentation laptops, this could cause scroll jank.

**Fix:** Add a toggle or reduce to a static PNG texture:

```css
/* Quick disable for presentation */
.noise-overlay { display: none; }
```

Or reduce opacity from 0.03 to 0.015 to lessen GPU load.

---

### 13. Chat Bubble "SA" Avatar Is Too Small

The presenter avatar in chat bubbles is a 24x24px circle with 9px text "SA". This is technically legible but feels cramped. Compare with Sol's avatar which has an emoji.

**Fix:**

```jsx
// ChatDemo.jsx — line 271
- <span className="text-[9px] font-bold text-black">SA</span>
+ <span className="text-[11px] font-bold text-black">S</span>
```

Use a single letter "S" at 11px instead of "SA" at 9px. Cleaner and more legible.

---

### 14. Chat Interface Height Could Be Taller

The chat interface is `h-[340px]` which is comfortable for the first conversation, but the longer "Cost Investigation" conversation will require scrolling within the chat. For a live demo, internal scrolling inside a slide is awkward.

**Fix:** Increase to `h-[380px]` or `h-[400px]`:

```jsx
// ChatDemo.jsx — line 219
- className="h-[340px] overflow-y-auto p-4 space-y-3"
+ className="h-[400px] overflow-y-auto p-4 space-y-3"
```

---

### 15. "1000x" vs "100x" — Inconsistent Multiplier Claims

Vision slide (slide 2) claims "1000x — Not 10% better." The closing slide (slide 9) shows "100x — Not automation. Amplification." The order-of-magnitude difference between these two will be noticed by a detail-oriented executive audience.

**Recommendation:** Align on one number. If the Vision slide is aspirational and the closing slide is the proven/conservative claim, consider changing Vision to just "Not 10% better — an order of magnitude" without a specific number, letting the "100x" at the end be the anchor.

---

### 16. Systems Slide — Network Diagram Labels Are 9px in SVG

The `SystemDiagram.jsx` uses `fontSize="9"` for node labels and `fontSize="8"` for the center label "SINGLE SOURCE OF TRUTH". These are SVG text elements that don't respond to Tailwind classes.

**Fix:**

```jsx
// SystemDiagram.jsx — node labels
// Line ~69: fontSize="9" → fontSize="11"

// Center label
// Line ~78: fontSize="8" → fontSize="10"
```

---

## Typography Summary

| Size | Count | Verdict |
|---|---|---|
| 9px | 4 | 🔴 Eliminate — invisible on projector |
| 10px | 21 | 🔴 Raise to 12px minimum |
| 11px | 6 | 🟡 Raise to 12px |
| 12px (text-xs) | 12 | ✅ Acceptable minimum for captions |
| 14px (text-sm) | Several | ✅ Good for body text |
| Various headings | — | ✅ Excellent — 5xl to 7xl scale works great |

## Color/Contrast Summary

| Token | Hex | On #08080c | On #111118 | On #16161f |
|---|---|---|---|---|
| text-primary | #f0ebe3 | 16.85:1 ✅ | — | — |
| text-secondary | #9ca3af | 7.87:1 ✅ | — | — |
| text-muted | #6b7280 | 4.14:1 ❌ | 3.89:1 ❌ | 3.72:1 ❌ |
| sol (amber) | #f59e0b | 9.31:1 ✅ | — | — |
| accent-green | #22c55e | 8.77:1 ✅ | — | — |
| accent-red | #ef4444 | 5.31:1 ✅ | — | — |

## What the Presenter's Eyes Should Do (Per Slide)

1. **Hero** → Headline lands. Bold, dramatic. ✅ Works perfectly.
2. **Vision** → "Force multiplier" → three pillars. ✅ Good visual hierarchy.
3. **Journey** → Grid of failure cards. ✅ Good but lesson text (11px green) will be hard to read.
4. **Systems** → Interactive tabs + diagram. ✅ Good for presenter to click through.
5. **Dashboard** → Mockup visual impression. 🟡 Dense text hurts — simplify or enlarge.
6. **Team** → Agent cards + loop. ✅ Good layout but tags too small.
7. **Chat Demo** → Live animation. 🟡 Auto-play is a problem. Fix to click-to-start.
8. **Impact** → Metrics + timeline. ✅ Strong closing data. Timeline labels need size bump.
9. **Future** → Companies + "100x" closer. ✅ Dramatic finish. Planned items need better styling.

---

## Priority Implementation Order

1. Fix section numbering (5 min)
2. Change `--color-text-muted` to #8b95a3 (1 line in index.css, fixes 30+ instances)
3. Bulk replace sub-12px text (find/replace, 15 min)
4. Disable chat auto-play (delete one useEffect)
5. Remove keyboard hint (delete one div)
6. Bump dashboard mockup text sizes
7. Fix timeline connector gaps
8. Reduce Vision mb-16 gap
9. Fix Future planned card opacity
10. SVG label font sizes

Total estimated time: ~45 minutes for all MUST FIX + SHOULD FIX items.

---

*Lux, CDO — ruthless clarity for the chairman's eyes.*
