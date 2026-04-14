import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)
  const [errors, setErrors] = useState({})

  /* ── Field-level validation ── */
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Message cannot be empty.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fieldErrors = validate()
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors)
      return
    }

    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          product_name: 'DevIgnite',
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
        },
        { publicKey: PUBLIC_KEY }
      )
      setSent(true)
      setForm(initialState)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please try again or reach out directly on GitHub.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-form-wrap">
      <AnimatePresence mode="wait">

        {/* ── Success state ── */}
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
              Send another message
            </button>
          </motion.div>

        ) : (

          /* ── Form ── */
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
                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                disabled={loading}
              />
              {errors.name && (
                <p className="form-field-error">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                disabled={loading}
              />
              {errors.email && (
                <p className="form-field-error">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
                placeholder="Tell us about a bug, feature idea, or just say hi..."
                value={form.message}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.message && (
                <p className="form-field-error">{errors.message}</p>
              )}
            </div>

            {/* Global send error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="form-send-error"
              >
                <AlertCircle size={15} />
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              id="contact-submit-btn"
              type="submit"
              className="btn-primary form-submit"
              disabled={loading}
              style={{ opacity: loading ? 0.75 : 1 }}
            >
              {loading ? (
                <>
                  <Loader size={17} className="spin-icon" />
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
