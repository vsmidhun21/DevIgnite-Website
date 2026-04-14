import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader } from 'lucide-react'

const initialState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form,    setForm]    = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [errors,  setErrors]  = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Name is required.'
    if (!form.email.trim())                         e.email   = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim())                       e.message = 'Message is required.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate async send (no backend)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm(initialState)
    }, 1600)
  }

  return (
    <div className="contact-form-wrap">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="form-success"
          >
            <div className="form-success-icon">
              <CheckCircle size={30} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
              Message sent!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 320 }}>
              Thanks for reaching out. We&apos;ll get back to you as soon as possible.
            </p>
            <button
              className="btn-secondary"
              style={{ marginTop: 8, padding: '10px 22px' }}
              onClick={() => setSent(false)}
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.name && (
                <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 6 }}>{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && (
                <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 6 }}>{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Tell us about a bug, feature idea, or just say hi..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 6 }}>{errors.message}</p>
              )}
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              className="btn-primary form-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader size={17} style={{ animation: 'spin-slow 1s linear infinite' }} />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={17} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
