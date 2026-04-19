import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X, Sun, Moon } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Download', href: '/#download' },
  { label: 'Docs', href: '/docs' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleAnchor = useCallback((e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.slice(2)
      if (location.pathname !== '/') {
        window.location.href = '/' + href.slice(1)
      } else {
        scrollTo(id)
        setMenuOpen(false)
      }
    }
  }, [location.pathname, scrollTo])

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__inner container">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <Zap size={17} fill="currentColor" />
            </div>
            DevIgnite
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="navbar__link"
                    onClick={(e) => handleAnchor(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`navbar__link ${location.pathname === link.href ? 'navbar__link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button
              id="theme-toggle"
              className="navbar__icon-btn"
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="https://github.com/vsmidhun21/DevIgnite"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__icon-btn"
              title="GitHub"
            >
              <FaGithub size={16} />
            </a>

            <button
              id="mobile-menu-toggle"
              className="navbar__hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="mobile-menu"
          >
            <ul className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="mobile-menu__link"
                      onClick={(e) => handleAnchor(e, link.href)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="mobile-menu__link">
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
