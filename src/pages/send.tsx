import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiPhone } from 'react-icons/fi'

const Send: React.FC = () => {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [phone, setPhone] = useState('')

  const recentContacts = [
    { id: 1, name: 'Mary Smith', phone: '+234 80 234 5678', avatar: '👩' },
    { id: 2, name: 'James Brown', phone: '+234 80 345 6789', avatar: '👨' },
    { id: 3, name: 'Sarah Wilson', phone: '+234 80 456 7890', avatar: '👩' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 text-white">
        <div className="flex items-center gap-4 mb-5">
          <button 
            onClick={() => navigate('/')}
            className="bg-transparent border-none cursor-pointer p-2"
          >
            <FiArrowLeft size={24} className="text-white" />
          </button>
          <h1 className="text-xl font-bold">Send Money</h1>
        </div>

        {/* Amount Input */}
        <div className="text-center py-5">
          <p className="text-sm opacity-90 mb-2">Enter Amount</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold">₦</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="text-5xl font-extrabold bg-transparent border-none text-white w-52 text-center outline-none"
            />
          </div>
          <p className="text-sm opacity-80 mt-2">Balance: ₦45,250.00</p>
        </div>
      </div>

      {/* Recipient */}
      <div className="p-5 flex-1">
        <h3 className="text-base font-bold text-gray-900 mb-4">Recipient</h3>
        
        <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm mb-6">
          <FiPhone size={20} className="text-gray-500" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="flex-1 border-none text-base outline-none"
          />
        </div>

        {/* Recent Contacts */}
        <h3 className="text-sm font-semibold text-gray-500 mb-3">Recent Contacts</h3>
        <div className="flex flex-col gap-3">
          {recentContacts.map((contact, index) => (
            <motion.button
              key={contact.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPhone(contact.phone)}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border-none shadow-sm cursor-pointer w-full text-left"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {contact.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500 mt-1">{contact.phone}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Send Button */}
      <div className="p-5 fixed bottom-0 left-0 right-0 bg-white">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-xl border-none text-base font-bold ${
            amount ? 'bg-green-600 text-white cursor-pointer' : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
          disabled={!amount}
        >
          Send Money
        </motion.button>
      </div>
    </div>
  )
}

export default Send
