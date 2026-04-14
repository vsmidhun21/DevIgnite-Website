import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22 } },
}

const contactMeta = [
  {
    icon: FaGithub,
    title: 'GitHub',
    value: 'vsmidhun21/Dev-Project-Launcher',
    href: 'https://github.com/vsmidhun21/Dev-Project-Launcher',
    color: '#6366f1',
    isReactIcon: true,
  },
  // {
  //   icon: MessageSquare,
  //   title: 'Discussions',
  //   value: 'GitHub Discussions',
  //   href: 'https://github.com/vsmidhun21/Dev-Project-Launcher/discussions',
  //   color: '#22d3ee',
  //   isReactIcon: false,
  // },
  {
    icon: Mail,
    title: 'Email',
    value: 'midhun21@zohomail.in',
    href: 'mailto:midhun21@zohomail.in',
    color: '#10b981',
    isReactIcon: false,
  },
]

export default function Contact() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero stripe */}
      <section
        className="section"
        style={{
          paddingTop: 'calc(var(--navbar-height) + 64px)',
          paddingBottom: 80,
          background: 'var(--bg-secondary)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orb */}
        <div style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">✦ Contact</span>
            <h1 className="section-title">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Have a question, a bug to report, or a feature idea? We&apos;d love to hear from you.
              Fill out the form or reach out on GitHub.
            </p>
          </div>

          {/* Contact meta cards */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            flexWrap: 'wrap',
            marginBottom: 56,
          }}>
            {contactMeta.map(({ icon: Icon, title, value, href, color, isReactIcon }) => (
              <div
                key={title}
                className="glass-card"
                style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 14, minWidth: 200 }}
              >
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${color}14`,
                  border: `1px solid ${color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {isReactIcon
                    ? <Icon size={18} color={color} />
                    : <Icon size={18} color={color} strokeWidth={1.8} />
                  }
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{title}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.88rem', color: color, fontWeight: 500 }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </motion.div>
  )
}
