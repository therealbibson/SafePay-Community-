import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Wallet', href: '#wallet' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Security', href: '#security' },
  { label: 'Support', href: '#support' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="section-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div className="gradient-green" style={{ width: 42, height: 42, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(22,163,74,0.35)', flexShrink: 0 }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: 20, fontFamily: 'Poppins' }}>A</span>
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#111827', fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>
              Afri<span style={{ color: '#16A34A' }}>Trust</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex" style={{ gap: 32 }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{ color: '#6B7280', fontWeight: 500, fontSize: 15, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#16A34A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex" style={{ gap: 12, alignItems: 'center' }}>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/login')}
              style={{ padding: '10px 22px', background: 'transparent', border: '2px solid #16A34A', color: '#16A34A', borderRadius: 50, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'Poppins' }}>
              Login
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/signup')}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: 14, minHeight: 'auto' }}>
              Get Started
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
            className="lg:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827', padding: 8 }}>
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'white', borderTop: '1px solid #f0f0f0', padding: '12px 24px 20px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', color: '#374151', fontWeight: 500, padding: '13px 0', borderBottom: '1px solid #f5f5f5', textDecoration: 'none', fontSize: 16 }}>
                {l.label}
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 16 }}>
              <button onClick={() => navigate('/login')}
                style={{ width: '100%', padding: 14, border: '2px solid #16A34A', color: '#16A34A', background: 'transparent', borderRadius: 50, fontWeight: 600, fontSize: 16, cursor: 'pointer', fontFamily: 'Poppins' }}>
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="btn-primary" style={{ width: '100%' }}>
                Get Started — It's Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
