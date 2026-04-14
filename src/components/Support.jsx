import { BookOpen, MessageCircle } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { SiBuymeacoffee as BuyCoffee } from 'react-icons/si'

const supports = [
  {
    id: 'github-issues',
    icon: FaGithub,
    title: 'GitHub Issues',
    desc: 'Found a bug or have a feature request? Open an issue on GitHub and the maintainer will get back to you.',
    link: 'https://github.com/vsmidhun21/Dev-Project-Launcher/issues',
    label: 'Open an Issue →',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    linkColor: '#6366f1',
  },
  {
    id: 'buy-coffee',
    icon: BuyCoffee,
    title: 'Buy Me a Coffee',
    desc: "If DevIgnite saves you time and you'd like to say thanks, a coffee keeps the developer fueled and motivated ☕",
    link: 'https://buymeacoffee.com/midhun.v.s',
    label: 'Support the Dev →',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    linkColor: '#f59e0b',
  },
  {
    id: 'documentation',
    icon: BookOpen,
    title: 'Documentation',
    desc: 'Full documentation with setup guides, usage tips and configuration options is coming soon alongside v1 release.',
    link: 'https://github.com/vsmidhun21/Dev-Project-Launcher#readme',
    label: 'Read the README →',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    linkColor: '#22d3ee',
  },
  // {
  //   id: 'community',
  //   icon: MessageCircle,
  //   title: 'Community & Help',
  //   desc: 'Have a general question or want to discuss ideas? Start a GitHub Discussion and connect with other DevIgnite users.',
  //   link: 'https://github.com/vsmidhun21/Dev-Project-Launcher/discussions',
  //   label: 'Join Discussion →',
  //   color: '#a855f7',
  //   bg: 'rgba(168,85,247,0.08)',
  //   border: 'rgba(168,85,247,0.2)',
  //   linkColor: '#a855f7',
  // },
]

export default function Support() {
  return (
    <section className="section section-alt" id="support">
      <div className="container">
        <div className="section-header section-header--center" data-aos="fade-up">
          <span className="section-label">✦ Support</span>
          <h2 className="section-title">
            We&apos;ve got you <span className="gradient-text">covered</span>
          </h2>
          <p className="section-subtitle">
            DevIgnite is backed by an active GitHub community. Whatever you need —
            bug reports, ideas, or just a thank-you — here&apos;s how to reach us.
          </p>
        </div>

        <div className="support-grid">
          {supports.map((s, i) => {
            const Icon = s.icon
            return (
              <a
                key={s.id}
                id={s.id}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="support-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="support-card-icon"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                >
                  <Icon size={20} color={s.color} />
                </div>
                <p className="support-card-title">{s.title}</p>
                <p className="support-card-desc">{s.desc}</p>
                <span className="support-card-link" style={{ color: s.linkColor }}>
                  {s.label}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
