import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiMapPin, FiStar, FiShield } from 'react-icons/fi'

interface Product {
  id: number; title: string; price: string; location: string; category: string
  rating: number; badge?: string; gradient: string; emoji: string
}

const products: Product[] = [
  { id: 1, title: 'Fresh Tomatoes (10kg)', price: '₦2,500', location: 'Lagos Island', category: 'Food', rating: 4.8, badge: 'Fresh Today', gradient: 'linear-gradient(135deg,#fde68a,#f59e0b)', emoji: '🍅' },
  { id: 2, title: 'Samsung Galaxy A14', price: '₦85,000', location: 'Ikeja, Lagos', category: 'Electronics', rating: 4.9, badge: 'Verified', gradient: 'linear-gradient(135deg,#bae6fd,#0284c7)', emoji: '📱' },
  { id: 3, title: 'Ankara Fabric (6 yards)', price: '₦8,000', location: 'Yaba, Lagos', category: 'Fashion', rating: 4.7, gradient: 'linear-gradient(135deg,#fecdd3,#e11d48)', emoji: '🎨' },
  { id: 4, title: 'Plumbing Service', price: '₦15,000', location: 'Surulere, Lagos', category: 'Services', rating: 4.6, badge: 'Pro', gradient: 'linear-gradient(135deg,#d1fae5,#16a34a)', emoji: '🔧' },
  { id: 5, title: 'Palm Oil (5 Litres)', price: '₦4,500', location: 'Oshodi, Lagos', category: 'Food', rating: 4.9, gradient: 'linear-gradient(135deg,#ffedd5,#f97316)', emoji: '🫙' },
  { id: 6, title: 'Standing Fan (Panasonic)', price: '₦12,000', location: 'Festac, Lagos', category: 'Electronics', rating: 4.5, gradient: 'linear-gradient(135deg,#e0e7ff,#7c3aed)', emoji: '💨' },
]

const categories = ['All', 'Food', 'Electronics', 'Fashion', 'Services', 'Agriculture', 'Transport']

const Marketplace: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = React.useState('All')
  const navigate = useNavigate()

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section id="marketplace" ref={ref} style={{ padding: '96px 0', background: '#F5F5F5' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label">🛒 Marketplace</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', marginTop: 12 }}>
            Buy & Sell Locally,{' '}
            <span style={{ color: '#F97316' }}>Safely</span>
          </h2>
          <p style={{ fontSize: 18, color: '#6B7280', marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
            Discover trusted sellers near you. Every listing verified, every deal protected.
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding: '10px 20px', borderRadius: 50, fontWeight: 600, fontSize: 14, cursor: 'pointer',
                border: `2px solid ${active === cat ? '#F97316' : '#e5e5e5'}`,
                background: active === cat ? '#F97316' : 'white',
                color: active === cat ? 'white' : '#6B7280',
                transition: 'all 0.2s',
              }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {filtered.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(249,115,22,0.15)' }}
              style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1.5px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', cursor: 'pointer' }}>

              {/* Image placeholder */}
              <div style={{ height: 160, background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ fontSize: 64 }}>{p.emoji}</span>
                {p.badge && (
                  <span style={{ position: 'absolute', top: 12, left: 12, background: 'white', color: '#16A34A', padding: '4px 10px', borderRadius: 50, fontSize: 12, fontWeight: 700 }}>
                    {p.badge}
                  </span>
                )}
                <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.35)', color: 'white', padding: '4px 10px', borderRadius: 50, fontSize: 12, fontWeight: 600 }}>
                  {p.category}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: '16px 18px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', fontFamily: 'Poppins', marginBottom: 6 }}>{p.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: '#16A34A', fontFamily: 'Poppins' }}>{p.price}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#6B7280' }}>
                    <FiStar size={13} style={{ color: '#f59e0b', fill: '#f59e0b' }} /> {p.rating}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#9CA3AF', fontSize: 13 }}>
                  <FiMapPin size={13} /> {p.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#16A34A', fontSize: 13, marginTop: 6 }}>
                  <FiShield size={13} /> Escrow Protected
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 48 }}>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/dashboard')}
            className="btn-accent" style={{ fontSize: 16 }}>
            🚀 Start Selling Today
          </motion.button>
          <p style={{ marginTop: 12, color: '#9CA3AF', fontSize: 14 }}>Free to list • No commission on first 5 sales</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Marketplace
