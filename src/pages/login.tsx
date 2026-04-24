import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiPhone, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex font-sans w-full">

      {/* Left panel — branding (desktop only) */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center p-12 gap-8 relative overflow-hidden bg-gradient-to-br from-green-900 to-green-600">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/5" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center z-10">
          <div className="w-18 h-18 bg-white/15 rounded-5xl flex items-center justify-center mx-auto mb-5 border-2 border-white/20">
            <span className="text-white font-extrabold text-3xl font-poppins">A</span>
          </div>
          <h1 className="text-white font-extrabold text-3xl mb-3 leading-tight font-poppins">
            Welcome Back to<br />AfriTrust
          </h1>
          <p className="text-green-100 text-base leading-relaxed max-w-xs mx-auto">
            Your trusted platform for simple money and safe marketplace transactions across Africa.
          </p>
        </motion.div>

        {/* Stats pills */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-col gap-3 z-10 w-full max-w-xs">
          {[
            { icon: '👥', label: '50,000+ Verified Users' },
            { icon: '🔒', label: 'Bank-Grade Security' },
            { icon: '⚡', label: 'Instant Money Transfers' },
          ].map(s => (
            <div key={s.label} className="bg-white/12 rounded-xl p-3 flex items-center gap-3 border border-white/15">
              <span className="text-xl">{s.icon}</span>
              <span className="text-white font-semibold text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center p-10 bg-gray-50 min-h-screen">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
              <span className="text-white font-extrabold text-lg font-poppins">A</span>
            </div>
            <span className="text-xl font-extrabold font-poppins text-gray-900">Afri<span className="text-green-600">Trust</span></span>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 font-poppins mb-1.5">Sign in</h2>
          <p className="text-gray-500 text-sm mb-8">Welcome back! Enter your details below.</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4.5">
            {/* Phone */}
            <div>
              <label className="block font-semibold text-sm text-gray-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <FiPhone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                  placeholder="+234 80 000 0000"
                  required
                  className="w-full py-3.5 px-3.5 pl-11 border-2 border-gray-200 rounded-xl text-base text-gray-900 outline-none bg-white font-inter transition-colors focus:border-green-600"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-semibold text-sm text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <FiLock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                  className="w-full py-3.5 px-12 pl-11 border-2 border-gray-200 rounded-xl text-base text-gray-900 outline-none bg-white font-inter transition-colors focus:border-green-600"
                />
                <button type="button" onClick={() => setShowPass(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-400">
                  {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot */}
            <div className="text-right -mt-2">
              <a href="#" className="text-sm text-green-600 font-semibold no-underline">Forgot Password?</a>
            </div>

            {/* Submit */}
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="btn-primary w-full text-base justify-center bg-green-600 text-white py-3.5 rounded-xl font-bold border-none hover:bg-green-700 transition-colors"
              style={{ opacity: loading ? 0.75 : 1 }}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">Sign In <FiArrowRight /></span>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social login placeholder */}
          <div className="flex gap-3">
            {['📱 OTP Login', '🏦 USSD'].map(opt => (
              <button key={opt} className="flex-1 py-3 border-2 border-gray-200 bg-white rounded-xl font-semibold text-sm cursor-pointer text-gray-700 transition-colors hover:border-green-600">
                {opt}
              </button>
            ))}
          </div>

          <p className="text-center mt-7 text-sm text-gray-500">
            Don't have an account?{' '}
            <a onClick={() => navigate('/signup')} className="text-green-600 font-bold cursor-pointer">Create Free Account</a>
          </p>

          {/* Security note */}
          <div className="flex items-center gap-2 justify-center mt-5 text-gray-400 text-xs">
            <MdVerified size={14} className="text-green-600" />
            Secured by 256-bit SSL encryption
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login