import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSend, FiDownload, FiCreditCard, FiShield, FiShoppingBag, FiUser } from 'react-icons/fi'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const quickActions = [
    { id: 'send', label: 'Send', icon: FiSend, color: '#16A34A', bgColor: 'bg-green-100', path: '/send' },
    { id: 'receive', label: 'Receive', icon: FiDownload, color: '#22c55e', bgColor: 'bg-green-100', path: '/receive' },
    { id: 'pay', label: 'Pay Bills', icon: FiCreditCard, color: '#ea580c', bgColor: 'bg-orange-100', path: '/pay' },
    { id: 'market', label: 'Market', icon: FiShoppingBag, color: '#16A34A', bgColor: 'bg-green-100', path: '/market' },
  ]

  const recentTransactions = [
    { id: 1, name: 'John Doe', type: 'receive', amount: '+₦5,000', time: '2 min ago', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { id: 2, name: 'Electricity', type: 'bill', amount: '-₦1,500', time: '1 hour ago', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
    { id: 3, name: 'Mary Smith', type: 'send', amount: '-₦2,000', time: 'Yesterday', bgColor: 'bg-red-100', textColor: 'text-red-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 pt-12 pb-8 px-5 rounded-b-3xl">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-green-100 text-sm">Welcome back</p>
            <h1 className="text-white text-2xl font-bold mt-1">👋 AfriTrust</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/profile')}
            className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center border-none cursor-pointer"
          >
            <FiUser size={22} className="text-white" />
          </motion.button>
        </div>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20"
        >
          <p className="text-green-100 text-sm mb-2">Total Balance</p>
          <h2 className="text-white text-3xl font-extrabold">₦45,250.00</h2>
          <div className="flex gap-2 mt-4">
            <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1">
              <FiShield size={12} /> Verified
            </span>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center gap-2 py-4 px-2 bg-white rounded-2xl border-none shadow-sm cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${action.color}15` }}
              >
                <action.icon size={24} color={action.color} />
              </div>
              <span className="text-xs font-semibold text-gray-700">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-5 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-green-600 font-semibold bg-transparent border-none cursor-pointer">
            See All
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {recentTransactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${tx.bgColor}`}>
                  {tx.type === 'receive' ? '↓' : tx.type === 'bill' ? '💡' : '↑'}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{tx.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{tx.time}</p>
                </div>
              </div>
              <span className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                {tx.amount}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Only on mobile */}
      <div className="mobile-only fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 pb-6 flex justify-around z-50">
        {[
          { icon: '🏠', label: 'Home', path: '/', active: true },
          { icon: '📊', label: 'Wallet', path: '/dashboard', active: false },
          { icon: '🛒', label: 'Market', path: '/market', active: false },
          { icon: '👤', label: 'Profile', path: '/profile', active: false },
        ].map((item) => (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer ${item.active ? 'opacity-100' : 'opacity-60'}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`text-xs font-semibold ${item.active ? 'text-green-600' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
      
      {/* Spacer for mobile bottom nav */}
      <div className="mobile-only h-20" />
    </div>
  )
}

export default Home