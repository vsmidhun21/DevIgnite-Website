import { motion } from 'framer-motion'
import { Image as ImageIcon, Maximize2 } from 'lucide-react'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'

const images = [
  { src: gallery1, title: 'Main Dashboard', desc: 'Manage all your projects from a single workspace.' },
  { src: gallery2, title: 'Powerful Project Insights', desc: 'Everything you need, at glance' },
  //   { src: gallery3, title: 'Time Tracking', desc: 'Monitor your development hours with precision.' },
]

export default function Gallery() {
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
    </section>
  )
}
