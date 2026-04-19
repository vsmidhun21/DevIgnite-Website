import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X, Download, Star, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ThankYouPopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="modal-content"
            style={{ maxWidth: '480px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 50%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <button onClick={onClose} className="modal-close" style={{ zIndex: 10 }}>
              <X size={20} />
            </button>

            <div style={{ position: 'relative', zIndex: 1, padding: '12px' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'rgba(16,185,129,0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px',
                  color: '#10b981'
                }}
              >
                <CheckCircle size={32} />
              </motion.div>

              <h2 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Thanks for Downloading!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
                Your DevIgnite installer should start automatically. If it doesn't, 
                <a href="https://github.com/vsmidhun21/DevIgnite/releases/download/DevIgnite-v2.0.0/DevIgniteSetup-v2.0.0.exe" style={{ color: 'var(--accent-brand)', marginLeft: '4px', textDecoration: 'underline' }}>click here</a>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="https://github.com/vsmidhun21/DevIgnite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FaGithub size={18} />
                  <span>Star on GitHub</span>
                </a>
                <button 
                  onClick={onClose}
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Close
                </button>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Star size={14} fill="var(--accent-brand)" color="var(--accent-brand)" />
                  Join 10+ Developers
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
