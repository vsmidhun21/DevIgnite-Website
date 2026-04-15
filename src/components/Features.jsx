import { Rocket, Server, Clock, Shuffle, ScrollText } from 'lucide-react'

const features = [
  {
    id: 'one-click-launch',
    icon: Rocket,
    title: 'One-Click Project Launch',
    desc: 'Open your IDE, terminal, and browser all at once. Add any project and launch it instantly with a single click — no more manual setup.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.12)',
  },
  {
    id: 'auto-dev-server',
    icon: Server,
    title: 'Auto Dev Server Start',
    desc: "DevIgnite detects your project's framework and starts the dev server automatically. Works with Next.js, Vite, Create React App, and more.",
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.12)',
  },
  {
    id: 'time-tracking',
    icon: Clock,
    title: 'Time Tracking',
    desc: 'Automatically track how much time you spend on each project. View session history and total hours worked — great for freelancers.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
  },
  {
    id: 'env-switching',
    icon: Shuffle,
    title: 'Environment Switching',
    desc: 'Effortlessly toggle between dev, test and production environments. DevIgnite loads the right .env file for each context automatically.',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.12)',
  },
  {
    id: 'execution-logs',
    icon: ScrollText,
    title: 'Execution Logs',
    desc: 'Every command and server output is captured and stored. Review past logs, debug issues and track what happened in each session.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
  },
]

export default function Features() {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <div className="section-header section-header--center" data-aos="fade-up">
          <span className="section-label">✦ Features</span>
          <h2 className="section-title">
            Everything you need to{' '}
            <span className="gradient-text">move faster</span>
          </h2>
          <p className="section-subtitle">
            DevIgnite packs the most essential developer workflow tools into one
            lightweight desktop app — no config files, no fuss.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.id}
                id={f.id}
                className="feature-card"
                style={{ '--card-glow': f.glow }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="feature-icon-wrap"
                  style={{
                    background: `${f.glow}`,
                    border: `1px solid ${f.color}33`,
                    boxShadow: `0 0 24px ${f.color}22`,
                  }}
                >
                  <Icon size={22} color={f.color} strokeWidth={1.8} />
                </div>
                <h3 className="feature-card-title">{f.title}</h3>
                <p className="feature-card-desc">{f.desc}</p>
              </div>
            )
          })}

          {/* Spacer card with CTA */}
          <div
            className="feature-card"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.08))',
              border: '1px solid rgba(99,102,241,0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: 12,
            }}
            data-aos="fade-up"
            data-aos-delay={features.length * 80}
          >
            <p style={{ fontSize: '2rem' }}>⚡</p>
            <h3 className="feature-card-title">More coming soon</h3>
            <p className="feature-card-desc">
              DevIgnite is actively developed. Star the repo to follow updates and suggest features.
            </p>
            <a
              href="https://github.com/vsmidhun21/DevIgnite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.85rem', marginTop: 4 }}
            >
              Star on GitHub ★
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
