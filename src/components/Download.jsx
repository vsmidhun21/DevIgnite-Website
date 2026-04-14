import { Download, Monitor, Shield, Star } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function DownloadSection() {
  return (
    <section className="section section-alt" id="download">
      <div className="container">
        <div className="download-card" data-aos="fade-up">
          {/* Glow orb */}
          <div style={{
            position: 'absolute',
            bottom: -60,
            right: -60,
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <span className="version-badge">
                <Star size={12} fill="currentColor" />
                v1.0 · Work in Progress
              </span>
            </div>

            <h2 className="download-title">
              Ready to <span className="gradient-text">ignite</span> your workflow?
            </h2>

            <p className="download-desc">
              Download DevIgnite for Windows and transform how you start your development day.
              Free & open source — always.
            </p>

            <div className="download-ctas">
              <a
                id="download-exe-btn"
                href="https://github.com/vsmidhun21/Dev-Project-Launcher/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download"
              >
                <Download size={20} />
                Download for Windows (.exe)
              </a>
              <a
                id="download-github-btn"
                href="https://github.com/vsmidhun21/Dev-Project-Launcher/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub size={18} />
                View All Releases
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p className="download-platform">
                <Monitor size={14} />
                Windows 10 / 11 · 64-bit · ~50MB
              </p>
            </div>

            {/* Trust badges */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 32,
              marginTop: 40,
              paddingTop: 36,
              borderTop: '1px solid var(--glass-border)',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: Shield, label: 'No telemetry', desc: 'Runs fully offline' },
                { icon: FaGithub, label: 'Open source', desc: 'Fully transparent' },
                { icon: Star, label: 'Free forever', desc: 'No subscriptions' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px',
                    color: 'var(--accent-indigo)',
                  }}>
                    <Icon size={18} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 3 }}>{label}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
