import { Link } from 'react-router-dom'
import { Zap, ExternalLink } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaGlobe } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const socialLinks = [
  {
    id: 'footer-github',
    icon: FaGithub,
    href: 'https://github.com/vsmidhun21',
    title: 'GitHub',
  },
  {
    id: 'footer-instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/midhun_v_s_',
    title: 'Instagram',
  },
  {
    id: 'footer-linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/midhun-v-s/',
    title: 'LinkedIn',
  },
  {
    id: 'footer-youtube',
    icon: FaYoutube,
    href: 'https://www.youtube.com/@Unlucky_Coder21',
    title: 'YouTube',
  },
  {
    id: 'footer-coffee',
    icon: SiBuymeacoffee,
    href: 'https://buymeacoffee.com/midhun.v.s',
    title: 'Buy Me a Coffee',
  },
  {
    id: 'footer-mail',
    icon: MdEmail,
    href: 'mailto:midhun21@zohomail.in',
    title: 'Email',
  },
  {
    id: 'footer-website',
    icon: FaGlobe,
    href: 'https://midhun-v-s.web.app/',
    title: 'Portfolio Website',
  },
]

const links = {
  product: [
    { label: 'Features',     href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Download',     href: '/#download' },
    { label: 'FAQ',          href: '/#faq' },
  ],
  resources: [
    { label: 'GitHub Repo',     href: 'https://github.com/vsmidhun21/Dev-Project-Launcher', external: true },
    { label: 'Releases',        href: 'https://github.com/vsmidhun21/Dev-Project-Launcher/releases', external: true },
    { label: 'Report an Issue', href: 'https://github.com/vsmidhun21/Dev-Project-Launcher/issues', external: true },
    { label: 'Contact Us',      href: '/contact' },
  ],
}

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">
              <div
                className="navbar__logo-icon"
                style={{ width: 30, height: 30, borderRadius: 8 }}
              >
                <Zap size={15} fill="currentColor" />
              </div>
              DevIgnite
            </div>
            <p className="footer__brand-desc">
              A developer productivity tool that launches your projects, starts dev servers,
              tracks time and manages environments — all in one click.
            </p>

            {/* Social row */}
            <div className="footer__socials">
              {socialLinks.map(({ id, icon: Icon, href, title }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="footer__social-icon"
                  title={title}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <p className="footer__col-title">Product</p>
            <ul className="footer__links">
              {links.product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="footer__link"
                    onClick={(e) => {
                      if (l.href.startsWith('/#')) {
                        e.preventDefault()
                        scrollTo(l.href.slice(2))
                      }
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource links */}
          <div>
            <p className="footer__col-title">Resources</p>
            <ul className="footer__links">
              {links.resources.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
                    >
                      {l.label}
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link to={l.href} className="footer__link">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} DevIgnite. Built with ♥ by{' '}
            <a
              href="https://midhun-v-s.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-indigo)' }}
            >
              Midhun V S
            </a>
            .
          </p>
          <span className="footer__version">v1.0 · Work in Progress</span>
        </div>
      </div>
    </footer>
  )
}
