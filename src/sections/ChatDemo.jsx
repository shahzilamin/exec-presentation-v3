import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const conversations = [
  {
    id: 'morning',
    label: 'Morning Briefing',
    messages: [
      { from: 'shaz', text: 'what did I miss overnight?', time: '8:02 AM' },
      { from: 'sol', text: '3 things:\n\n1. **Apex shipped V17** — live on Vercel\n2. **Nova flagged** shipping cost spike (+12%)\n3. **Sohail email** re: MySeema timeline', time: '8:02 AM' },
      { from: 'shaz', text: 'show me the email summary', time: '8:03 AM' },
      { from: 'sol', text: 'Sohail wants CCM integration moved to Q1. Two new ACOs closing.\n\n**Needs:** Timeline sign-off + 1 hire.\n**My take:** $100K/yr revenue. Hire pays for itself in 3 months.', time: '8:03 AM' },
    ],
  },
  {
    id: 'cost',
    label: 'Cost Audit',
    messages: [
      { from: 'shaz', text: 'GCP bill seems high. dig in?', time: '2:15 PM' },
      { from: 'sol', text: '**$1,550/mo** total. BigQuery = $892 (58%) ← full table scans.\n\nFix: partition filters = **$400-500/mo savings.**\n\nDraft email to Bala ready. Send?', time: '2:18 PM' },
      { from: 'shaz', text: 'send it', time: '2:18 PM' },
      { from: 'sol', text: 'Sent. Full audit + fix strategies. Tagged priority.', time: '2:19 PM' },
    ],
  },
  {
    id: 'quick',
    label: 'Quick Decisions',
    messages: [
      { from: 'shaz', text: 'anything before 11 today?', time: '9:30 AM' },
      { from: 'sol', text: 'Clear until 11:30.\n\n**11:30** Ops sync · **1:00** Lunch · **2:30** Karlani call\n\nNo agenda for ops sync. Ping team?', time: '9:30 AM' },
      { from: 'shaz', text: 'yeah, and move Karlani to 3', time: '9:31 AM' },
      { from: 'sol', text: 'Done. Moved to 3 PM, attendees notified. Agenda pinged.', time: '9:31 AM' },
    ],
  },
]

function TypeWriter({ text, speed = 15, onComplete }) {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setIsComplete(false)
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setIsComplete(true)
        onComplete?.()
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span>
      {displayed.split('\n').map((line, i, arr) => (
        <span key={i}>
          {line.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-[var(--color-text-primary)] font-semibold">{part.slice(2, -2)}</strong>
            }
            return <span key={j}>{part}</span>
          })}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
      {!isComplete && <span className="typing-cursor" />}
    </span>
  )
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 px-3 py-2">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

export default function ChatDemo() {
  const [activeConvo, setActiveConvo] = useState('morning')
  const [visibleMessages, setVisibleMessages] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTyping, setCurrentTyping] = useState(-1)
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const chatRef = useRef(null)
  const sectionRef = useRef(null)
  const convo = conversations.find(c => c.id === activeConvo)

  const playConversation = () => {
    setVisibleMessages([])
    setCurrentTyping(-1)
    setIsPlaying(true)
    setShowTypingIndicator(false)

    let msgIndex = 0
    const showNext = () => {
      if (msgIndex < convo.messages.length) {
        const currentIndex = msgIndex
        const msg = convo.messages[currentIndex]
        
        if (msg.from === 'sol' && currentIndex > 0) {
          setShowTypingIndicator(true)
          setTimeout(() => {
            setShowTypingIndicator(false)
            setVisibleMessages(prev => [...prev, msg])
            setCurrentTyping(currentIndex)
            msgIndex++
            setTimeout(() => {
              chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
            }, 50)
            const delay = Math.min(msg.text.length * 15 + 300, 3000)
            setTimeout(showNext, delay)
          }, 800)
        } else {
          setVisibleMessages(prev => [...prev, msg])
          setCurrentTyping(currentIndex)
          msgIndex++
          setTimeout(() => {
            chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
          }, 50)
          setTimeout(showNext, 600)
        }
      } else {
        setIsPlaying(false)
        setCurrentTyping(-1)
      }
    }
    setTimeout(showNext, 300)
  }

  const handleConvoChange = (id) => {
    setActiveConvo(id)
    setVisibleMessages([])
    setCurrentTyping(-1)
    setIsPlaying(false)
    setShowTypingIndicator(false)
  }

  return (
    <section id="chat" ref={sectionRef} className="relative flex flex-col justify-center px-6 section-glow-amber">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex-shrink-0 mb-4">
          <FadeIn>
            <p className="font-[family-name:var(--font-mono)] text-[var(--color-sol)] text-sm tracking-widest uppercase mb-2">
              In Action
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              This is what it <span className="gradient-text-sol">looks like.</span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          {/* Conversation tabs */}
          <div className="flex gap-2 mb-4">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => handleConvoChange(c.id)}
                className={`px-3 py-1.5 rounded-lg font-[family-name:var(--font-mono)] text-xs whitespace-nowrap transition-all ${
                  activeConvo === c.id
                    ? 'bg-[var(--color-sol)] text-black font-medium'
                    : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] border border-[var(--color-border)]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Chat interface */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] overflow-hidden chat-interface">
            <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">#sol-main</span>
                <span className="font-[family-name:var(--font-display)] font-semibold text-sm">Sol ☀️</span>
              </div>
              <button
                onClick={playConversation}
                disabled={isPlaying}
                className={`px-3 py-1.5 rounded-lg font-[family-name:var(--font-mono)] text-xs transition-all ${
                  isPlaying
                    ? 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] cursor-not-allowed'
                    : 'bg-[var(--color-sol)] text-black hover:brightness-110 font-medium'
                }`}
                aria-label="Play conversation demo"
              >
                {isPlaying ? 'Playing...' : '▶ Play'}
              </button>
            </div>

            <div
              ref={chatRef}
              className="h-[400px] overflow-y-auto p-4 space-y-3"
            >
              {visibleMessages.length === 0 && !isPlaying && (
                <div className="h-full flex items-center justify-center">
                  <p className="text-[var(--color-text-muted)] font-[family-name:var(--font-mono)] text-xs">
                    Click ▶ Play to start
                  </p>
                </div>
              )}

              <AnimatePresence>
                {visibleMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-end gap-2 ${msg.from === 'shaz' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.from === 'sol' && (
                      <div className="w-6 h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-sol)] flex items-center justify-center flex-shrink-0 text-xs">
                        ☀️
                      </div>
                    )}
                    <div className={`chat-bubble ${msg.from === 'shaz' ? 'chat-bubble-human' : 'chat-bubble-sol'}`}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-[family-name:var(--font-mono)] text-xs opacity-40">{msg.time}</span>
                      </div>
                      {msg.from === 'sol' && i === currentTyping ? (
                        <TypeWriter text={msg.text} speed={12} onComplete={() => setCurrentTyping(-1)} />
                      ) : (
                        <span className="text-sm">
                          {msg.text.split('\n').map((line, li, arr) => (
                            <span key={li}>
                              {line.split(/(\*\*[^*]+\*\*)/).map((part, pi) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pi} className="font-semibold">{part.slice(2, -2)}</strong>
                                }
                                return <span key={pi}>{part}</span>
                              })}
                              {li < arr.length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                    {msg.from === 'shaz' && (
                      <div className="w-6 h-6 rounded-full bg-[var(--color-sol)] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-black">S</span>
                      </div>
                    )}
                  </motion.div>
                ))}
                {showTypingIndicator && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-end gap-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-sol)] flex items-center justify-center flex-shrink-0 text-xs">
                      ☀️
                    </div>
                    <div className="chat-bubble chat-bubble-sol">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* footnote removed */}
        </FadeIn>
      </div>
    </section>
  )
}
