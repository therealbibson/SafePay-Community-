import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiPhone, FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiCheck } from 'react-icons/fi'

type Field = { id: string; label: string; placeholder: string; type: string; icon: React.ReactNode; required: boolean }

const fields: Field[] = [
  { id: 'fullname', label: 'Full Name', placeholder: 'e.g. Amaka Obi', type: 'text', icon: <FiUser size={18} />, required: true },
  { id: 'phone', label: 'Phone Number', placeholder: '+234 80 000 0000', type: 'tel', icon: <FiPhone size={18} />, required: true },
  { id: 'email', label: 'Email Address (Optional)', placeholder: 'amaka@email.com', type: 'email', icon: <FiMail size={18} />, required: false },
  { id: 'password', label: 'Password', placeholder: 'Enter your password', type: 'password', icon: <FiLock size={18} />, required: true },
  { id: 'confirm', label: 'Password', placeholder: 'Re-enter password', type: 'password', icon: <FiLock size={18} />, required: true },
]

const Signup: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<Record<string, string>>({})
  const [showPass, setShowPass] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [focused, setFocused] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setDone(true)
    await new Promise(r => setTimeout(r, 2000))
    navigate('/dashboard')
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 flex-col gap-4 p-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-200">
          <FiCheck size={48} className="text-white" style={{ strokeWidth: 3 }} />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-2xl font-extrabold text-green-900 font-poppins text-center">
          Account Created! 🎉
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-green-600 text-base text-center max-w-xs">
          Welcome to AfriTrust! Taking you to your dashboard...
        </motion.p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex font-sans w-full bg-gray-50">

      {/* Left branding panel */}
      <div className="hidden lg:flex w-96 flex-col items-center justify-center p-12 gap-7 flex-shrink-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-5 border-2 border-green-700/40">
            <span className="text-green-400 font-extrabold text-2xl font-poppins">A</span>
          </div>
          <h2 className="text-white font-extrabold text-2xl mb-2.5 font-poppins">Join AfriTrust</h2>
          <p className="text-gray-400 text-sm leading-relaxed">Be part of Africa's fastest-growing fintech and marketplace community.</p>
        </div>

        <div className="w-full flex flex-col gap-2.5">
          {[
            { n: '01', text: 'Create your free account' },
            { n: '02', text: 'Verify your phone number' },
            { n: '03', text: 'Set your secure password' },
            { n: '04', text: 'Start sending & selling!' },
          ].map(s => (
            <div key={s.n} className="flex items-center gap-3.5 bg-white/5 rounded-xl p-3 border border-white/10">
              <span className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-extrabold flex-shrink-0">{s.n}</span>
              <span className="text-gray-300 text-sm font-medium">{s.text}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-xs text-center mt-2">
          Already have an account?{' '}
          <a onClick={() => navigate('/login')} className="text-green-400 font-semibold cursor-pointer">Sign In</a>
        </p>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-start justify-center p-10 overflow-y-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="w-full max-w-lg">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-7 justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
              <span className="text-white font-extrabold text-lg font-poppins">A</span>
            </div>
            <span className="text-xl font-extrabold font-poppins text-gray-900">Afri<span className="text-green-600">Trust</span></span>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 font-poppins mb-1">Create Your Account</h2>
          <p className="text-gray-500 text-sm mb-7">Free forever — no monthly charges or hidden fees.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {fields.map(f => (
              <div key={f.id}>
                <label className="block font-semibold text-sm text-gray-700 mb-1.5">
                  {f.label} {f.required && <span className="text-green-600">*</span>}
                </label>
                <div className="relative">
                  <span className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${focused === f.id ? 'text-green-600' : 'text-gray-400'}`}>
                    {f.icon}
                  </span>
                  <input
                    id={f.id}
                    type={f.type === 'password' ? (showPass ? 'text' : 'password') : f.type}
                    value={form[f.id] || ''}
                    onChange={e => setForm(v => ({ ...v, [f.id]: e.target.value }))}
                    placeholder={f.placeholder}
                    required={f.required}
                    onFocus={e => { setFocused(f.id) }}
                    onBlur={e => { setFocused('') }}
                    className="w-full py-3 px-3.5 pl-11 border-2 border-gray-200 rounded-lg text-sm text-gray-900 outline-none bg-white font-inter transition-colors focus:border-green-600"
                  />
                  {f.type === 'password' && (
                    <button type="button" onClick={() => setShowPass(v => !v)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-400">
                      {showPass ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* T&C */}
            <label className="flex items-start gap-3 cursor-pointer">
              <div onClick={() => setAgreed(v => !v)}
                className={`w-5.5 h-5.5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all cursor-pointer ${
                  agreed ? 'border-green-600 bg-green-600' : 'border-gray-300 bg-white'
                }`}>
                {agreed && <FiCheck size={13} className="text-white" style={{ strokeWidth: 3 }} />}
              </div>
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to AfriTrust's{' '}
                <a href="#" className="text-green-600 font-semibold">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-green-600 font-semibold">Privacy Policy</a>
              </span>
            </label>

            {/* Submit */}
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              disabled={loading || !agreed}
              className="btn-primary w-full text-base justify-center bg-green-600 text-white py-3.5 rounded-lg font-bold border-none hover:bg-green-700 transition-colors mt-1"
              style={{ opacity: !agreed ? 0.6 : 1 }}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center gap-2">Create Free Account <FiArrowRight /></span>
              )}
            </motion.button>
          </form>

          <p className="text-center mt-5 text-sm text-gray-500">
            Already have an account?{' '}
            <a onClick={() => navigate('/login')} className="text-green-600 font-bold cursor-pointer">Sign In</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Signup