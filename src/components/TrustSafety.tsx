import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiShield, FiCheckCircle, FiAlertTriangle, FiEye, FiUsers } from 'react-icons/fi'
import { MdVerified, MdFingerprint } from 'react-icons/md'

const trustFeatures = [
  { icon: <MdVerified size={24} />, color: '#16A34A', bg: '#f0fdf4', title: 'Verified Seller Badges', desc: 'Every seller completes phone and ID verification before listing. Look for the green shield.' },
  { icon: <MdFingerprint size={24} />, color: '#7C3AED', bg: '#f5f3ff', title: 'Phone & ID Verification', desc: 'Two-factor authentication and national ID check keeps fraudsters out completely.' },
  { icon: <FiAlertTriangle size={24} />, color: '#F97316', bg: '#fff7ed', title: 'Fraud Alerts', desc: 'Our AI detects suspicious activity and alerts you instantly via SMS and in-app notification.' },
  { icon: <FiUsers size={24} />, color: '#0284C7', bg: '#f0f9ff', title: 'Family Oversight Mode', desc: 'Allow a trusted family member to view your activity and set spending limits for extra safety.' },
  { icon: <FiEye size={24} />, color: '#DC2626', bg: '#fef2f2', title: 'Transparent Logs', desc: 'Every naira in and out is logged with timestamp, recipient, and location. Fully auditable.' },
]

const TrustSafety: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="security" ref={ref} style={{ padding: '96px 0', background: 'white' }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Left: feature list */}
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
              <span className="section-label">🛡️ Trust & Safety</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, fontFamily: 'Poppins', color: '#111827', marginTop: 12, marginBottom: 8, lineHeight: 1.2 }}>
                Your Safety Is Our
                <span className="text-gradient-green"> Top Priority</span>
              </h2>
              <p style={{ fontSize: 17, color: '#6B7280', marginBottom: 36, lineHeight: 1.7 }}>
                AfriTrust is built with multiple layers of protection so you can transact with confidence.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {trustFeatures.map((f, i) => (
                <motion.div key={f.title}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', fontFamily: 'Poppins', marginBottom: 4 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: shield graphic */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 320, height: 360 }}>
              {/* Main shield */}
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg,#14532d,#16A34A)', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 24px 64px rgba(22,163,74,0.4)' }}>
                <FiShield size={80} style={{ color: 'rgba(255,255,255,0.25)', position: 'absolute' }} />
                <FiShield size={72} style={{ color: 'white' }} />
                <span style={{ color: 'white', fontWeight: 800, fontSize: 22, fontFamily: 'Poppins', marginTop: 12 }}>100% Secure</span>
                <span style={{ color: '#86efac', fontSize: 14, marginTop: 4 }}>Bank-grade encryption</span>
              </div>

              {/* Floating badges */}
              {[
                { label: '✓ Phone Verified', top: '8%', right: '-12%', delay: 0.4 },
                { label: '✓ ID Verified', top: '38%', left: '-18%', delay: 0.55 },
                { label: '✓ Escrow Active', bottom: '14%', right: '-10%', delay: 0.7 },
              ].map(b => (
                <motion.div key={b.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: b.delay }}
                  className="animate-float-up"
                  style={{ position: 'absolute', top: b.top, right: b.right, bottom: b.bottom, left: b.left, background: 'white', borderRadius: 50, padding: '8px 16px', fontSize: 13, fontWeight: 700, color: '#16A34A', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', whiteSpace: 'nowrap' }}>
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustSafety
