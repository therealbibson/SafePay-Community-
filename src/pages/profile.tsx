import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiEdit2, FiSettings, FiHelpCircle, FiShield, FiLogOut } from 'react-icons/fi'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  const menuItems = [
    { icon: FiEdit2, label: 'Edit Profile', color: '#16A34A', bgColor: 'bg-green-100' },
    { icon: FiSettings, label: 'Settings', color: '#6B7280', bgColor: 'bg-gray-100' },
    { icon: FiShield, label: 'Security', color: '#16A34A', bgColor: 'bg-green-100' },
    { icon: FiHelpCircle, label: 'Help & Support', color: '#6B7280', bgColor: 'bg-gray-100' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-5 py-4 border-b border-gray-200 flex items-center gap-4">
        <button 
          onClick={() => navigate('/')}
          className="bg-transparent border-none cursor-pointer p-2"
        >
          <FiArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="px-5 py-6 bg-white mb-4">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mx-auto mb-4 text-5xl">
            👤
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">John Doe</h2>
          <p className="text-sm text-gray-500 mb-2">+234 80 123 4567</p>
          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
            <FiShield size={12} /> Verified Account
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-5 flex-1">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 w-full p-4 mb-3 bg-white rounded-xl border-none shadow-sm cursor-pointer"
          >
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <item.icon size={22} color={item.color} />
            </div>
            <span className="flex-1 text-sm font-semibold text-gray-700 text-left">{item.label}</span>
            <span className="text-xl text-gray-400">›</span>
          </motion.button>
        ))}

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/login')}
          className="flex items-center gap-4 w-full p-4 bg-red-50 rounded-xl border-none cursor-pointer mt-6"
        >
          <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
            <FiLogOut size={22} className="text-red-500" />
          </div>
          <span className="flex-1 text-sm font-semibold text-red-500 text-left">Logout</span>
        </motion.button>
      </div>
    </div>
  )
}

export default Profile
