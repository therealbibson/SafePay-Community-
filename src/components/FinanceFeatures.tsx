import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiSend, FiZap, FiTrendingUp, FiFileText } from 'react-icons/fi'

interface Feature {
  icon: React.ReactNode
  title: string
  desc: string
  color: string
  bg: string
  highlight: string
}

const features: Feature[] = [
  {
    icon: <FiSend size={28} />,
    title: 'Send & Receive Instantly',
    desc: 'Transfer money to any bank account or AfriTrust wallet in seconds. No delays, no hidden fees.',
    color: '#16A34A', bg: '#f0fdf4', highlight: 'From ₦0 fees',
  },
  {
    icon: <FiZap size={28} />,
    title: 'Bill Payments Made Easy',
    desc: 'Pay DSTV, electricity, water, airtime, and more — all from one simple screen.',
    color: '#F97316', bg: '#fff7ed', highlight: '50+ billers',
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: 'Automated Small Savings',
    desc: 'Set aside ₦500 daily or weekly automatically. Watch your savings grow without thinking.',
    color: '#7C3AED', bg: '#f5f3ff', highlight: 'Earn 8% APY',
  },
  {
    icon: <FiFileText size={28} />,
    title: 'Clear Transaction History',
    desc: 'Every payment tracked with printable receipts. Share proof with family in one tap.',
    color: '#0284C7', bg: '#f0f9ff', highlight: 'Always available',
  },
]

const FinanceFeatures: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="wallet" ref={ref} style={{ padding: '96px 0', background: '#ffffff' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">💳 Financial Services</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', marginTop: 12, marginBottom: 0 }}>
            Everything You Need to{' '}
            <span className="text-gradient-green">Manage Money</span>
          </h2>
          <p style={{ fontSize: 18, color: '#6B7280', marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
            Simple, secure financial tools designed for everyday Africans.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${f.color}22` }}
              style={{
                background: 'white', borderRadius: 20, padding: '32px 28px',
                border: '1.5px solid #f0f0f0',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.3s ease',
                cursor: 'default',
              }}
            >
              <div style={{ width: 60, height: 60, borderRadius: 16, background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', fontFamily: 'Poppins', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>
                {f.desc}
              </p>
              <span style={{ display: 'inline-block', padding: '4px 12px', background: f.bg, color: f.color, borderRadius: 50, fontSize: 13, fontWeight: 600 }}>
                {f.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinanceFeatures
