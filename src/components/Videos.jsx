import { Play, Info, Lock } from 'lucide-react'

export default function Videos() {
  return (
    <section className="section section-alt" id="videos">
      <div className="container">
        <div className="section-header section-header--center" data-aos="fade-up">
          <span className="section-label">✦ Videos</span>
          <h2 className="section-title">
            See it in <span className="gradient-text">action</span>
          </h2>
          <p className="section-subtitle">
            Watch how DevIgnite can transform your development workflow.
          </p>
        </div>

        <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {/* Promo Video */}
          <div className="video-card" data-aos="fade-up">
            <div className="video-thumb-wrap">
              <div className="video-thumb-overlay">
                <Lock size={32} />
                <p>Coming Soon</p>
              </div>
              <div className="video-thumb-bg" style={{ background: 'linear-gradient(45deg, #ff6b35, #f59e0b)' }} />
            </div>
            <div className="video-content">
              <h3 className="video-title">Promo Trailer</h3>
              <p className="video-desc">A cinematic overview of DevIgnite and its core features.</p>
            </div>
          </div>

          {/* Tutorial Video */}
          <div className="video-card" data-aos="fade-up" data-aos-delay="100">
            <div className="video-thumb-wrap">
              <div className="video-thumb-overlay">
                <Lock size={32} />
                <p>Coming Soon</p>
              </div>
              <div className="video-thumb-bg" style={{ background: 'linear-gradient(45deg, #6366f1, #a855f7)' }} />
            </div>
            <div className="video-content">
              <h3 className="video-title">Full Tutorial</h3>
              <p className="video-desc">Learn how to configure environments and custom actions from scratch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
