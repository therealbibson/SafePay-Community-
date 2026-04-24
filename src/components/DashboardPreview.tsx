import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiEye, FiEyeOff, FiSend, FiDownload, FiCreditCard } from 'react-icons/fi'

const txns = [
  { label: 'Sent to Amaka', amount: '-₦5,000', color: '#DC2626', icon: '↑', time: 'Today, 2:30 PM', sub: 'Transfer' },
  { label: 'Received from Bisi', amount: '+₦12,000', color: '#16A34A', icon: '↓', time: 'Yesterday', sub: 'Transfer' },
  { label: 'DSTV Subscription', amount: '-₦3,500', color: '#DC2626', icon: '📺', time: '2 days ago', sub: 'Bill Payment' },
  { label: 'AutoSave Deduction', amount: '-₦1,000', color: '#7C3AED', icon: '💰', time: '2 days ago', sub: 'Savings' },
]

const quickActions = [
  { icon: <FiSend size={22} />, label: 'Send', color: '#16A34A', bg: '#f0fdf4' },
  { icon: <FiDownload size={22} />, label: 'Receive', color: '#0284C7', bg: '#f0f9ff' },
  { icon: <FiCreditCard size={22} />, label: 'Pay Bills', color: '#F97316', bg: '#fff7ed' },
  { icon: '💰', label: 'Save', color: '#7C3AED', bg: '#f5f3ff', isEmoji: true },
]

const DashboardPreview: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [showBal, setShowBal] = React.useState(true)

  return (
    <section ref={ref} style={{ padding: '96px 0', background: 'white' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">📱 App Preview</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', marginTop: 12 }}>
            See How <span className="text-gradient-green">Easy It Is</span>
          </h2>
          <p style={{ fontSize: 18, color: '#6B7280', marginTop: 12 }}>
            A clean, simple dashboard even first-time smartphone users can navigate.
          </p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ width: '100%', maxWidth: 400, position: 'relative' }}>

            {/* Phone frame */}
            <div style={{ background: '#111827', borderRadius: 40, padding: '12px 8px', boxShadow: '0 40px 80px rgba(0,0,0,0.3)', position: 'relative' }}>
              <div style={{ background: '#111827', height: 28, borderRadius: '30px 30px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 80, height: 8, background: '#374151', borderRadius: 50 }} />
              </div>

              {/* App screen */}
              <div style={{ background: '#F5F5F5', borderRadius: 28, overflow: 'hidden', minHeight: 580 }}>
                {/* Header */}
                <div style={{ background: 'white', padding: '16px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <p style={{ fontSize: 12, color: '#9CA3AF', margin: 0 }}>Good morning 👋</p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0, fontFamily: 'Poppins' }}>Lateef Adebayo</p>
                  </div>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#16A34A,#22c55e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 14 }}>LA</div>
                </div>

                <div style={{ padding: '16px' }}>
                  {/* Wallet card */}
                  <div style={{ background: 'linear-gradient(135deg,#14532d,#16A34A)', borderRadius: 20, padding: '20px', marginBottom: 16, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                    <p style={{ color: '#86efac', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Total Balance</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0 12px' }}>
                      <span style={{ color: 'white', fontSize: 28, fontWeight: 800, fontFamily: 'Poppins' }}>
                        {showBal ? '₦45,230.00' : '₦ ••••••'}
                      </span>
                      <button onClick={() => setShowBal(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#86efac' }}>
                        {showBal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </button>
                    </div>
                    <p style={{ color: '#bbf7d0', fontSize: 12 }}>AfriTrust — 0987 6543 21</p>
                  </div>

                  {/* Quick actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 16 }}>
                    {quickActions.map(a => (
                      <div key={a.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 14, background: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: a.isEmoji ? 20 : 'inherit' }}>
                          {a.icon}
                        </div>
                        <span style={{ fontSize: 10, color: '#374151', fontWeight: 600 }}>{a.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent transactions */}
                  <div style={{ background: 'white', borderRadius: 16, padding: '14px' }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 12, fontFamily: 'Poppins' }}>Recent Transactions</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {txns.map(t => (
                        <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 34, height: 34, borderRadius: '50%', background: t.color + '15', color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
                            {t.icon}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: 12, fontWeight: 600, color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.label}</p>
                            <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{t.time}</p>
                          </div>
                          <span style={{ fontSize: 13, fontWeight: 700, color: t.color, flexShrink: 0 }}>{t.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div style={{ background: 'white', display: 'flex', borderTop: '1px solid #f0f0f0', padding: '8px 0 4px' }}>
                  {['🏠 Home', '💳 Wallet', '🛒 Market', '👤 Profile'].map((item, i) => (
                    <div key={item} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, opacity: i === 0 ? 1 : 0.45 }}>
                      <span style={{ fontSize: 16 }}>{item.split(' ')[0]}</span>
                      <span style={{ fontSize: 10, color: i === 0 ? '#16A34A' : '#9CA3AF', fontWeight: i === 0 ? 700 : 400 }}>{item.split(' ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#111827', height: 8, borderRadius: '0 0 30px 30px' }} />
            </div>

            {/* Floating callouts */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
              style={{ position: 'absolute', top: '12%', right: '-22%', background: 'white', borderRadius: 14, padding: '10px 14px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', whiteSpace: 'nowrap' }}>
              <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>Transfer Speed</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#16A34A', margin: 0 }}>⚡ Instant</p>
            </motion.div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              style={{ position: 'absolute', bottom: '22%', left: '-22%', background: 'white', borderRadius: 14, padding: '10px 14px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', whiteSpace: 'nowrap' }}>
              <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>Security</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#7C3AED', margin: 0 }}>🔒 256-bit SSL</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview
