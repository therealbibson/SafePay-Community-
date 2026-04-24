import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const sellSteps = [
  { n: '01', icon: '📷', title: 'Tap Sell', desc: 'Open the app and tap the Sell button on the main screen.' },
  { n: '02', icon: '🖼️', title: 'Add Photos & Details', desc: 'Upload a photo, write a title, set your price and pick a category.' },
  { n: '03', icon: '📍', title: 'Auto-Detect Location', desc: 'We find your neighbourhood automatically — or enter it yourself.' },
  { n: '04', icon: '💳', title: 'Choose Payment Method', desc: 'Accept cash, bank transfer, or use AfriTrust Escrow for extra safety.' },
  { n: '05', icon: '🔒', title: 'Optional Escrow', desc: 'Hold funds safely until the buyer confirms they received the item.' },
  { n: '06', icon: '✅', title: 'Receive Payment Safely', desc: 'Money lands in your wallet the moment the deal is confirmed.' },
]

const buySteps = [
  { n: '01', icon: '🔍', title: 'Browse Nearby Listings', desc: 'See trusted listings from verified sellers near your location.' },
  { n: '02', icon: '👁️', title: 'View Item Details', desc: 'Read the full description, seller rating, and delivery options.' },
  { n: '03', icon: '💳', title: 'Select Payment Method', desc: 'Pay with your AfriTrust wallet, bank transfer, or cash on delivery.' },
  { n: '04', icon: '📦', title: 'Confirm Pickup or Delivery', desc: 'Agree on collection point or have it delivered to your door.' },
  { n: '05', icon: '🔓', title: 'Funds Released to Seller', desc: 'Payment is only released after you confirm you received the item.' },
  { n: '06', icon: '⭐', title: 'Rate the Seller', desc: 'Help the community by leaving an honest review of your experience.' },
]

const HowItWorks: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [tab, setTab] = useState<'sell' | 'buy'>('sell')
  const steps = tab === 'sell' ? sellSteps : buySteps

  return (
    <section ref={ref} style={{ padding: '96px 0', background: '#F5F5F5' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label">📋 How It Works</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', marginTop: 12 }}>
            Simple Steps to{' '}
            <span className="text-gradient-green">{tab === 'sell' ? 'Sell Safely' : 'Buy Safely'}</span>
          </h2>

          {/* Tab buttons */}
          <div style={{ display: 'inline-flex', background: 'white', borderRadius: 50, padding: 4, gap: 4, marginTop: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            {(['sell', 'buy'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                style={{
                  padding: '10px 28px', borderRadius: 50, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 15, fontFamily: 'Poppins',
                  background: tab === t ? '#16A34A' : 'transparent',
                  color: tab === t ? 'white' : '#6B7280',
                  transition: 'all 0.2s',
                }}>
                {t === 'sell' ? '🏷️ I Want to Sell' : '🛍️ I Want to Buy'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div key={tab}
            initial={{ opacity: 0, x: tab === 'sell' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: tab === 'sell' ? 20 : -20 }}
            transition={{ duration: 0.35 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(22,163,74,0.12)' }}
                style={{ background: 'white', borderRadius: 20, padding: '28px 24px', position: 'relative', border: '1.5px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 12, fontWeight: 800, color: '#d1fae5', fontFamily: 'Poppins' }}>{s.n}</div>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', fontFamily: 'Poppins', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default HowItWorks
