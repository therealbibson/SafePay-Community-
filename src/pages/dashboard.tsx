import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiBell, FiTrendingUp, FiTrendingDown, FiCreditCard } from 'react-icons/fi'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  const stats = [
    { label: 'Total Balance', value: '₦45,250', change: '+12%', up: true, textColor: 'text-green-600' },
    { label: 'This Month', value: '₦12,500', change: '+8%', up: true, textColor: 'text-green-600' },
    { label: 'Savings', value: '₦8,000', change: '+5%', up: true, textColor: 'text-green-600' },
  ]

  const actions = [
    { icon: FiCreditCard, label: 'Add Money', color: '#16A34A', bgColor: 'bg-green-100' },
    { icon: FiTrendingUp, label: 'Invest', color: '#22c55e', bgColor: 'bg-green-100' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-5 py-4 border-b border-gray-200 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="bg-transparent border-none cursor-pointer p-2"
        >
          <FiArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Dashboard</h1>
        <button className="bg-transparent border-none cursor-pointer p-2">
          <FiBell size={24} className="text-gray-900" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <p className="text-xs text-gray-500 mb-2">{stat.label}</p>
              <p className="text-lg font-bold text-gray-900 mb-2">{stat.value}</p>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                {stat.up ? <FiTrendingUp size={12} /> : <FiTrendingDown size={12} />}
                {stat.change}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 pb-5">
        <h3 className="text-base font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border-none shadow-sm cursor-pointer"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${action.color}15` }}
              >
                <action.icon size={20} color={action.color} />
              </div>
              <span className="text-sm font-semibold text-gray-700">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="px-5 py-10 text-center flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4 text-4xl">
          📊
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">More Features Coming</h3>
        <p className="text-sm text-gray-500">Full dashboard analytics will be available soon</p>
      </div>
    </div>
  )
}

export default Dashboard