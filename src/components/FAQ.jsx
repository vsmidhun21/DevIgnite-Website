import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    id: 'what-is-devignite',
    q: 'What is DevIgnite?',
    a: 'DevIgnite is a free, open-source desktop application for Windows that helps developers launch projects instantly, auto-start dev servers, track working time per project, switch between environments (dev/test/prod), and store execution logs — all from one simple interface.',
  },
  {
    id: 'is-it-free',
    q: 'Is DevIgnite free?',
    a: 'Yes, DevIgnite is completely free and open source under an MIT-style license. There are no subscriptions, no paywalls, and no telemetry. You can also contribute to the project or fork it on GitHub.',
  },
  {
    id: 'supported-platforms',
    q: 'What platforms are supported?',
    a: 'Currently DevIgnite is built for Windows 10 and Windows 11 (64-bit). macOS and Linux support is planned for future releases. Follow the GitHub repository to stay updated on cross-platform progress.',
  },
  {
    id: 'how-time-tracking',
    q: 'How does time tracking work?',
    a: "DevIgnite automatically starts a timer when you launch a project and stops it when you close the session or click Stop. All session data is stored locally on your machine — no cloud sync, no external services. You can review your work history per project at any time.",
  },
  {
    id: 'is-it-safe',
    q: 'Is it safe to use?',
    a: 'Absolutely. DevIgnite runs entirely on your local machine with no internet connectivity required. It does not collect any analytics or usage data. The source code is fully open and auditable on GitHub at any time.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header section-header--center" data-aos="fade-up">
          <span className="section-label">✦ FAQ</span>
          <h2 className="section-title">
            Got <span className="gradient-text">questions?</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about DevIgnite. Can&apos;t find the answer?{' '}
            <a href="/contact" style={{ color: 'var(--accent-indigo)' }}>Send us a message.</a>
          </p>
        </div>

        <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <Plus
                    size={20}
                    className={`faq-icon ${isOpen ? 'faq-icon--open' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
