import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: number
  suffix: string
  prefix: string
  label: string
  sublabel: string
}

const stats: StatItem[] = [
  { prefix: '', value: 50000, suffix: '+', label: 'Users Verified', sublabel: 'Across 6 African countries' },
  { prefix: '₦', value: 2.4, suffix: 'B+', label: 'Transactions Processed', sublabel: 'Safe & instant transfers' },
  { prefix: '', value: 12000, suffix: '+', label: 'Marketplace Listings', sublabel: 'Local products & services' },
]

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(parseFloat(start.toFixed(target < 10 ? 1 : 0)))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

const StatCard: React.FC<{ stat: StatItem; delay: number; active: boolean }> = ({ stat, delay, active }) => {
  const count = useCountUp(stat.value, 1800, active)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{ textAlign: 'center', padding: '8px 16px' }}
    >
      <div style={{ fontSize: 48, fontWeight: 800, color: 'white', fontFamily: 'Poppins', lineHeight: 1.1, letterSpacing: '-1px' }}>
        {stat.prefix}{stat.value < 10 ? count.toFixed(1) : Math.floor(count).toLocaleString()}{stat.suffix}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#bbf7d0', marginTop: 6, fontFamily: 'Poppins' }}>
        {stat.label}
      </div>
      <div style={{ fontSize: 13, color: '#86efac', marginTop: 4 }}>{stat.sublabel}</div>
    </motion.div>
  )
}

const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #16A34A 100%)', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
      {/* decorative circles */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

      <div className="section-container">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', color: '#86efac', fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 40 }}>
          AfriTrust by the Numbers
        </motion.p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
          {stats.map((s, i) => <StatCard key={s.label} stat={s} delay={i * 0.15} active={inView} />)}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
