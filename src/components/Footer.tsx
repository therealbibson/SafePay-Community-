import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook, FaWhatsapp, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiPhone } from 'react-icons/fi'

const footerLinks = {
  Product: ['Wallet', 'Marketplace', 'Savings', 'Bill Payments', 'Escrow'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
  Support: ['Help Center', 'Contact Us', 'Community', 'FAQ', 'Report Fraud'],
}

const socials = [
  { icon: <FaFacebook size={20} />, label: 'Facebook', url: '#', color: '#1877F2' },
  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', url: '#', color: '#25D366' },
  { icon: <FaInstagram size={20} />, label: 'Instagram', url: '#', color: '#E1306C' },
  { icon: <FaXTwitter size={20} />, label: 'X (Twitter)', url: '#', color: '#000000' },
]

const Footer: React.FC = () => {
  const navigate = useNavigate()

  return (
    <footer style={{ background: '#111827', color: '#9CA3AF' }}>
      {/* CTA band */}
      <div style={{ background: 'linear-gradient(135deg,#14532d,#16A34A)', padding: '56px 24px', textAlign: 'center' }}>
        <div className="section-container" style={{ padding: 0 }}>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: 'white', fontFamily: 'Poppins', marginBottom: 12 }}>
            Ready to Join the AfriTrust Family?
          </h2>
          <p style={{ fontSize: 18, color: '#bbf7d0', marginBottom: 32 }}>
            Thousands of Africans already trust us with their money and marketplace needs.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/signup')}
              style={{ padding: '14px 32px', background: 'white', color: '#16A34A', border: 'none', borderRadius: 50, fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'Poppins', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              Open Free Account →
            </button>
            <button onClick={() => navigate('/dashboard')}
              style={{ padding: '14px 32px', background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 50, fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'Poppins' }}>
              Explore Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container" style={{ padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div className="gradient-green" style={{ width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontWeight: 800, fontSize: 18, fontFamily: 'Poppins' }}>A</span>
              </div>
              <span style={{ fontSize: 20, fontWeight: 800, color: 'white', fontFamily: 'Poppins' }}>
                Afri<span style={{ color: '#4ade80' }}>Trust</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Simple money. Safe marketplace. Built for Africa — and every African family, wherever you are.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} aria-label={s.label}
                  style={{ width: 40, height: 40, borderRadius: 10, background: '#1F2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = s.color; (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1F2937'; (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 style={{ color: 'white', fontWeight: 700, fontFamily: 'Poppins', fontSize: 15, marginBottom: 16 }}>{group}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ color: '#9CA3AF', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#4ade80')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div style={{ borderTop: '1px solid #1F2937', paddingTop: 24, marginBottom: 24, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            <FiMail size={16} style={{ color: '#4ade80' }} />
            <span>support@afritrust.africa</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            <FiPhone size={16} style={{ color: '#4ade80' }} />
            <span>+234 800 AFRI TRUST</span>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid #1F2937', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, margin: 0 }}>© 2026 AfriTrust. Built for African Communities. 🌍</p>
          <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
