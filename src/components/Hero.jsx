import { motion } from 'framer-motion'
import { Download, Play, Square, FileText } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import ThankYouPopup from './ThankYouPopup'

/* ── reusable stagger variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Animated App Mockup ── */
const projects = [
  { name: 'my-ecommerce', dot: '#ff6b35', active: true, pinned: true },
  { name: 'blog-api', dot: '#f59e0b', active: false, pinned: false },
  { name: 'dashboard-ui', dot: '#ef4444', active: false, pinned: false },
  { name: 'auth-service', dot: '#94a3b8', active: false, pinned: false },
]

function AppMockup() {
  return (
    <div className="mockup-window">
      {/* Title bar */}
      <div className="mockup-titlebar">
        <span className="mockup-dot mockup-dot--red" />
        <span className="mockup-dot mockup-dot--amber" />
        <span className="mockup-dot mockup-dot--green" />
        <span className="mockup-title">DevIgnite — Project Launcher</span>
      </div>

      {/* Body */}
      <div className="mockup-body">
        {/* Sidebar */}
        <div className="mockup-sidebar">
          <p className="mockup-sidebar-title">Projects</p>
          {projects.map((p) => (
            <div key={p.name} className={`mockup-project ${p.active ? 'mockup-project--active' : ''}`}>
              <span className="mockup-project-dot" style={{ background: p.dot }} />
              <span className="mockup-project-name">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="mockup-main">
          <div>
            <p className="mockup-project-header">my-ecommerce</p>
            <p className="mockup-path">~/projects/my-ecommerce-app</p>
          </div>

          <div className="mockup-divider" />

          <div className="mockup-info-grid">
            <div>
              <p className="mockup-info-item-label">Status</p>
              <span className="mockup-status-badge">
                <span className="mockup-status-dot" />
                Running
              </span>
            </div>
            <div>
              <p className="mockup-info-item-label">Server</p>
              <p className="mockup-info-item-value">localhost:3000</p>
            </div>
            <div>
              <p className="mockup-info-item-label">Time Tracked</p>
              <p className="mockup-info-item-value mono">02:34:17</p>
            </div>
            <div>
              <p className="mockup-info-item-label">Framework</p>
              <p className="mockup-info-item-value">Next.js 15</p>
            </div>
          </div>

          <div>
            <p className="mockup-info-item-label" style={{ marginBottom: 8 }}>Environment & Actions</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div className="mockup-env-tabs">
                <span className="mockup-env-tab mockup-env-tab--active">dev</span>
                <span className="mockup-env-tab">test</span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <span title="Custom Action" style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: 4, fontSize: '0.65rem', border: '1px solid var(--glass-border)' }}>🚀 Deploy</span>
                <span title="Custom Action" style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: 4, fontSize: '0.65rem', border: '1px solid var(--glass-border)' }}>🛠️ Build</span>
              </div>
            </div>
          </div>

          <div className="mockup-actions">
            <button className="mockup-btn mockup-btn--start">
              <Play size={10} fill="white" /> Launch
            </button>
            <button className="mockup-btn mockup-btn--stop">
              <Square size={10} fill="currentColor" /> Stop
            </button>
            <button className="mockup-btn mockup-btn--log">
              <FileText size={10} /> Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [showThanks, setShowThanks] = useState(false)

  const handleDownload = () => {
    setShowThanks(true)
  }

  return (
    <section className="hero section" id="hero">
      {/* Animated BG */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="container">
        <div className="hero__inner">
          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                V-2.0 Available for Windows
              </div>
            </motion.div>

            <motion.h1 className="hero__title" variants={item}>
              Ignite Your{' '}
              <span className="gradient-text">Development</span>
              <br />
              Workflow
            </motion.h1>

            <motion.p className="hero__desc" variants={item}>
              Stop wasting time on repetitive setup. DevIgnite launches your projects
              instantly, starts dev servers automatically, tracks your working time, and
              manages environments — all from a single click.
            </motion.p>

            <motion.div className="hero__ctas" variants={item}>
              <a
                id="hero-download-btn"
                href="https://github.com/vsmidhun21/DevIgnite/releases/download/DevIgnite-v2.0.0/DevIgniteSetup-v2.0.0.exe"
                onClick={handleDownload}
                className="btn-primary"
              >
                <Download size={17} />
                <span>Download for Windows</span>
              </a>
              <a
                id="hero-github-btn"
                href="https://github.com/vsmidhun21/DevIgnite"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub size={17} />
                <span>View on GitHub</span>
              </a>
            </motion.div>

            <motion.div className="hero__stats" variants={item}>
              {[
                { value: '5+', label: 'Features' },
                { value: '1-Click', label: 'Project Launch' },
                { value: 'Free', label: 'Open Source' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="hero__stat-value gradient-text">{s.value}</p>
                  <p className="hero__stat-label">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mockup column */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>

      <ThankYouPopup
        isOpen={showThanks}
        onClose={() => setShowThanks(false)}
      />
    </section>
  )
}
