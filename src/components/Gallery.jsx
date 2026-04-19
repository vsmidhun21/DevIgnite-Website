import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, Maximize2, X } from 'lucide-react'
import { useState } from 'react'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'

const images = [
  { src: gallery1, title: 'Main Dashboard', desc: 'Manage all your projects from a single workspace.' },
  { src: gallery2, title: 'Powerful Project Insights', desc: 'Everything you need, at glance' },
  //   { src: gallery3, title: 'Time Tracking', desc: 'Monitor your development hours with precision.' },
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-header section-header--center" data-aos="fade-up">
          <span className="section-label">✦ Gallery</span>
          <h2 className="section-title">
            Take a <span className="gradient-text">closer look</span>
          </h2>
          <p className="section-subtitle">
            Explore the clean, modern interface of DevIgnite. Built for developers by developers.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => setSelectedImg(img.src)}
            >
              <div className="gallery-image-wrap">
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3 className="gallery-title">{img.title}</h3>
                    <p className="gallery-desc">{img.desc}</p>
                  </div>
                  <div className="gallery-icon">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedImg(null)}
          >
            <button className="modal-close" onClick={() => setSelectedImg(null)}>
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Preview" className="lightbox-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
