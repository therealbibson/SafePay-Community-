import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiShield, FiSend, FiArrowRight } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

/* ── Floating wallet card ── */
const WalletCard = () => (
  <div style={{ background: 'linear-gradient(135deg,#14532d,#16A34A)', borderRadius: 24, padding: '24px 28px', color: 'white', minWidth: 280, boxShadow: '0 20px 60px rgba(22,163,74,0.45)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
      <div>
        <p style={{ fontSize: 11, color: '#86efac', textTransform: 'uppercase', letterSpacing: 1, margin: 0 }}>AfriTrust Wallet</p>
        <p style={{ fontSize: 11, color: '#bbf7d0', margin: '2px 0 0' }}>•••• •••• 4521</p>
      </div>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontWeight: 800, fontSize: 16 }}>A</span>
      </div>
    </div>
    <p style={{ fontSize: 11, color: '#86efac', margin: '0 0 4px' }}>Available Balance</p>
    <p style={{ fontSize: 32, fontWeight: 800, margin: '0 0 16px', fontFamily: 'Poppins', letterSpacing: '-1px' }}>₦45,230.00</p>
    <div style={{ display: 'flex', gap: 8 }}>
      {['Send ↑', 'Receive ↓', 'Pay Bills'].map(a => (
        <div key={a} style={{ flex: 1, background: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: '8px 4px', textAlign: 'center', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>{a}</div>
      ))}
    </div>
  </div>
)

/* ── Floating listing card ── */
const ListingCard = () => (
  <div style={{ background: 'white', borderRadius: 20, padding: '16px 18px', boxShadow: '0 12px 32px rgba(0,0,0,0.12)', minWidth: 220 }}>
    <div style={{ height: 80, background: 'linear-gradient(135deg,#fde68a,#f59e0b)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, marginBottom: 12 }}>🍅</div>
    <p style={{ fontWeight: 700, fontSize: 14, color: '#111827', margin: '0 0 4px', fontFamily: 'Poppins' }}>Fresh Tomatoes (10kg)</p>
    <p style={{ fontSize: 18, fontWeight: 800, color: '#16A34A', margin: '0 0 6px', fontFamily: 'Poppins' }}>₦2,500</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#16A34A' }}>
      <MdVerified size={14} /> Verified Seller · Lagos Island
    </div>
  </div>
)

/* ── Floating send card ── */
const SendCard = () => (
  <div style={{ background: 'white', borderRadius: 18, padding: '14px 18px', boxShadow: '0 10px 28px rgba(0,0,0,0.1)', minWidth: 200 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A' }}><FiSend size={16} /></div>
      <div>
        <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>Sent to</p>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: 0 }}>Amaka Obi</p>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 20, fontWeight: 800, color: '#16A34A', fontFamily: 'Poppins' }}>₦5,000</span>
      <span style={{ fontSize: 11, background: '#f0fdf4', color: '#16A34A', padding: '3px 10px', borderRadius: 50, fontWeight: 600 }}>✓ Sent</span>
    </div>
  </div>
)

const Hero: React.FC = () => {
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="home" ref={ref} style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #f0fdf4 0%, #ffffff 55%, #fff7ed 100%)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 80,
      paddingBottom: 40,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background decorative blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-6%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>

          {/* Left: copy */}
          <div>
            {/* Trust badge */}
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: '1.5px solid #bbf7d0', borderRadius: 50, padding: '8px 16px', marginBottom: 24, boxShadow: '0 2px 12px rgba(22,163,74,0.1)' }}>
              <span style={{ fontSize: 18 }}>🌍</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#16A34A' }}>Trusted by 50,000+ Africans</span>
              <MdVerified size={16} style={{ color: '#16A34A' }} />
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(34px, 5vw, 64px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20 }}>
              Simple Money.{' '}
              <span style={{ background: 'linear-gradient(135deg,#16A34A,#22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Safe Marketplace.</span>
              {' '}Built for Africa.
            </motion.h1>

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#4B5563', lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>
              Send money, pay bills, save smarter, and buy or sell locally with confidence — all in one trusted app.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/signup')}
                className="btn-primary" style={{ fontSize: 16 }}>
                Open Free Account <FiArrowRight />
              </motion.button>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/dashboard')}
                className="btn-outline" style={{ fontSize: 16 }}>
                Explore Marketplace
              </motion.button>
            </motion.div>

            {/* Trust row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[
                { icon: '🔒', text: 'Bank-grade security' },
                { icon: '🛡️', text: 'Escrow protection' },
                { icon: '⭐', text: '4.9/5 rating' },
              ].map(t => (
                <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280', fontWeight: 500 }}>
                  <span style={{ fontSize: 16 }}>{t.icon}</span> {t.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating cards */}
          <div style={{ position: 'relative', minHeight: 440, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Wallet card — center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-3deg)', zIndex: 2 }}
              className="animate-float-up">
              <WalletCard />
            </motion.div>

            {/* Listing card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ position: 'absolute', top: '4%', right: '0%', zIndex: 3 }}
              className="animate-float-down">
              <ListingCard />
            </motion.div>

            {/* Send card — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              style={{ position: 'absolute', bottom: '6%', left: '0%', zIndex: 3 }}
              className="animate-float-up">
              <SendCard />
            </motion.div>

            {/* Security badge */}
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
              style={{ position: 'absolute', top: '15%', left: '-4%', background: '#111827', color: 'white', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.18)', zIndex: 4 }}>
              <FiShield size={16} style={{ color: '#4ade80' }} />
              <span style={{ fontSize: 12, fontWeight: 700 }}>256-bit Encrypted</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
