import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Mama Chioma Okafor', age: 62, location: 'Enugu, Nigeria',
    initials: 'CO', gradient: 'linear-gradient(135deg,#16A34A,#22c55e)',
    quote: 'My daughter showed me how to use AfriTrust. Now I send money to her in Lagos myself! The buttons are big and clear. I am very proud of myself.',
    role: 'Retired Teacher & Market Seller',
    rating: 5,
    badge: '✓ Verified Seller',
  },
  {
    name: 'Bello Musa Aliyu', age: 54, location: 'Kano, Nigeria',
    initials: 'BM', gradient: 'linear-gradient(135deg,#F97316,#ea580c)',
    quote: 'I sell groundnut oil. Before, buyers ran away without paying. AfriTrust escrow holds their money until I deliver. My sales doubled in one month!',
    role: 'Food Trader, Kano Market',
    rating: 5,
    badge: '⭐ Top Seller',
  },
  {
    name: 'Adaeze Nwachukwu', age: 45, location: 'Port Harcourt, Rivers',
    initials: 'AN', gradient: 'linear-gradient(135deg,#7C3AED,#a855f7)',
    quote: 'I bought a sewing machine through AfriTrust Marketplace. Seller was verified, escrow protected my payment. Everything was smooth. Highly recommended!',
    role: 'Fashion Designer & Buyer',
    rating: 5,
    badge: '💎 Trusted Buyer',
  },
]

const Testimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '96px 0', background: '#F5F5F5' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">🗣️ Community Voices</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', marginTop: 12 }}>
            Trusted by Real{' '}
            <span className="text-gradient-green">African Families</span>
          </h2>
          <p style={{ fontSize: 18, color: '#6B7280', marginTop: 12 }}>
            Hear from our community — the people AfriTrust was built for.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(22,163,74,0.12)' }}
              style={{ background: 'white', borderRadius: 24, padding: '32px 28px', border: '1.5px solid #f0f0f0', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} size={18} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: t.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', fontFamily: 'Poppins', margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', margin: '2px 0 4px' }}>{t.role} · {t.location}</p>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#16A34A', background: '#f0fdf4', padding: '2px 10px', borderRadius: 50 }}>{t.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
