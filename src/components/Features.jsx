import { Rocket, Server, Clock, Shuffle, ScrollText } from 'lucide-react'

const features = [
  // Productivity & Insights
  {
    id: 'daily-briefing',
    icon: Rocket,
    title: 'Daily Project Briefing',
    desc: 'Get an intelligent overview of your projects, pending tasks, and recent changes every time you start your day.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.12)',
  },
  {
    id: 'reports-tracking',
    icon: Clock,
    title: 'Reports & Tracking',
    desc: 'Generate weekly and monthly productivity reports. Track time spent on each project with manual timer entries.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
  },
  // Workflow & Automation
  {
    id: 'custom-buttons',
    icon: Rocket,
    title: 'Custom Action Buttons',
    desc: 'Define your own launch actions for deployment, building, or any custom script you run frequently.',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.12)',
  },
  {
    id: 'docker-support',
    icon: Server,
    title: 'Docker Support',
    desc: 'Instantly start and manage container-based projects with built-in Docker Compose integration.',
    color: '#0db7ed',
    glow: 'rgba(13,183,237,0.12)',
  },
  // Code & Debugging
  {
    id: 'code-health',
    icon: Shuffle,
    title: 'Code Health Checker',
    desc: 'Analyze your codebase for potential issues, complexity, and best practices with a single click.',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    id: 'global-search',
    icon: ScrollText,
    title: 'Global & Log Search',
    desc: 'Search across all your projects or dive deep into execution logs to debug issues faster.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
  },
  // Project Management
  {
    id: 'project-org',
    icon: Shuffle,
    title: 'Project Organization',
    desc: 'Keep your workspace tidy with project tags, archiving, and the ability to pin or star your favorites.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.12)',
  },
  // Data Management
  {
    id: 'data-mgmt',
    icon: Server,
    title: 'Import & Export',
    desc: 'Backup and restore your entire project configuration easily with JSON-based import and export.',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.12)',
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
