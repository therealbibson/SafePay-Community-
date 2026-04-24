import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiZap, FiWifi, FiTv, FiSmartphone, FiDroplet } from 'react-icons/fi'

const Pay: React.FC = () => {
  const navigate = useNavigate()
  const [selectedBill, setSelectedBill] = useState<string | null>(null)

  const bills = [
    { id: 'electricity', name: 'Electricity', icon: FiZap, color: '#F59E0B', providers: ['IKEDC', 'EKEDC', 'PHEDC'] },
    { id: 'airtime', name: 'Airtime', icon: FiSmartphone, color: '#16A34A', providers: ['MTN', 'Airtel', 'Glo', '9mobile'] },
    { id: 'data', name: 'Data', icon: FiWifi, color: '#3B82F6', providers: ['MTN', 'Airtel', 'Glo', '9mobile'] },
    { id: 'tv', name: 'TV Subscription', icon: FiTv, color: '#8B5CF6', providers: ['DSTV', 'GOTV', 'Startimes'] },
    { id: 'water', name: 'Water', icon: FiDroplet, color: '#06B6D4', providers: ['Lagos Water', 'Abuja Water'] },
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
        <h1 className="text-lg font-bold text-gray-900">Pay Bills</h1>
      </div>

      {/* Bill Types */}
      <div className="p-5">
        <h3 className="text-base font-bold text-gray-900 mb-4">Select Bill Type</h3>
        <div className="grid grid-cols-2 gap-4">
          {bills.map((bill, index) => (
            <motion.button
              key={bill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedBill(bill.id)}
              className={`flex flex-col items-center gap-3 py-6 px-4 rounded-xl border-none shadow-sm cursor-pointer ${
                selectedBill === bill.id ? 'border-2' : 'border-transparent'
              }`}
              style={{
                background: selectedBill === bill.id ? `${bill.color}15` : 'white',
                borderColor: selectedBill === bill.id ? bill.color : 'transparent'
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${bill.color}15` }}
              >
                <bill.icon size={28} color={bill.color} />
              </div>
              <span className="text-sm font-semibold text-gray-700">{bill.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected Bill Form */}
      {selectedBill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-5 pb-5 flex-1"
        >
          <h3 className="text-base font-bold text-gray-900 mb-4">Enter Details</h3>
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Provider</label>
              <select className="w-full py-3.5 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-green-600">
                {bills.find(b => b.id === selectedBill)?.providers.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Account/Meter Number</label>
              <input
                type="text"
                placeholder="Enter number"
                className="w-full py-3.5 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full py-3.5 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-green-600"
              />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-green-600 text-white border-none rounded-xl text-base font-bold cursor-pointer mt-5"
          >
            Pay Bill
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default Pay
