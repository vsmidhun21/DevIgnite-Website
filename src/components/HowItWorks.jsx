import { FolderOpen, MousePointerClick, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FolderOpen,
    title: 'Add Your Project',
    desc: 'Browse to your project folder and add it to DevIgnite. It automatically detects the framework, scripts, and environment files.',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    delay: 0,
  },
  {
    number: '02',
    icon: MousePointerClick,
    title: 'Click Start',
    desc: 'Hit the Launch button. DevIgnite opens your IDE, starts the dev server, loads the right environment, and begins tracking your time.',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    delay: 150,
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'DevIgnite Handles Everything',
    desc: "Focus on building. DevIgnite runs your project in the background, captures logs, tracks session time — and stops everything when you're done.",
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    delay: 300,
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-header section-header--center" data-aos="fade-up">
          <span className="section-label">✦ How It Works</span>
          <h2 className="section-title">
            Up and running in{' '}
            <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="section-subtitle">
            DevIgnite removes every repetitive step in your daily dev routine.
            From project setup to shutdown — it&apos;s all handled for you.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="how-step"
                data-aos="fade-up"
                data-aos-delay={step.delay}
              >
                {/* Step number bubble */}
                <div
                  className="how-step-number"
                  style={{ background: step.gradient, animationDelay: `${step.delay}ms` }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="how-step-icon-wrap"
                  style={{
                    background: `${step.color}14`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <Icon size={22} color={step.color} strokeWidth={1.8} />
                </div>

                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Visual terminal log */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          style={{
            marginTop: 72,
            background: '#080d1c',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 14,
            overflow: 'hidden',
            maxWidth: 700,
            margin: '72px auto 0',
          }}
        >
          <div style={{
            padding: '12px 16px',
            background: '#0a0f1e',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
              DevIgnite — Terminal Output
            </span>
          </div>
          <div style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 2 }}>
            {[
              { text: '$ devignite launch my-ecommerce',  color: '#94a3b8' },
              { text: '✓ Detected framework: Next.js 15',  color: '#10b981' },
              { text: '✓ Loading environment: .env.dev',   color: '#10b981' },
              { text: '✓ Opening VS Code...',              color: '#10b981' },
              { text: '▶ Starting dev server on :3000',    color: '#6366f1' },
              { text: '⏱ Time tracking started',           color: '#f59e0b' },
              { text: '● Ready — http://localhost:3000',   color: '#22d3ee' },
            ].map((line, i) => (
              <p key={i} style={{ color: line.color, animationDelay: `${i * 0.3}s` }}>
                {line.text}
                {i === 6 && <span style={{ animation: 'blink 1s step-end infinite' }}> ▮</span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
