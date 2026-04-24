import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCopy, FiShare2 } from 'react-icons/fi'

const Receive: React.FC = () => {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const accountNumber = '0123456789'
  const bankName = 'AfriTrust Bank'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 text-white">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="bg-transparent border-none cursor-pointer p-2"
          >
            <FiArrowLeft size={24} className="text-white" />
          </button>
          <h1 className="text-xl font-bold">Receive Money</h1>
        </div>
      </div>

      {/* QR Code Placeholder */}
      <div className="px-5 py-10 text-center bg-white">
        <div className="w-48 h-48 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-7xl">
          📱
        </div>
        <p className="text-sm text-gray-500 mb-2">Scan QR code to pay</p>
        <p className="text-base font-semibold text-gray-900">John Doe</p>
      </div>

      {/* Account Details */}
      <div className="p-5 flex-1">
        <h3 className="text-base font-bold text-gray-900 mb-4">Bank Transfer</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="mb-5">
            <p className="text-xs text-gray-500 mb-1">Bank Name</p>
            <p className="text-lg font-bold text-gray-900">{bankName}</p>
          </div>
          <div className="mb-5">
            <p className="text-xs text-gray-500 mb-1">Account Number</p>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-extrabold text-gray-900 tracking-wider">{accountNumber}</p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-lg border-none cursor-pointer text-sm font-semibold flex items-center gap-1 ${
                  copied ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-700'
                }`}
              >
                <FiCopy size={16} />
                {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Account Name</p>
            <p className="text-lg font-bold text-gray-900">John Doe</p>
          </div>
        </motion.div>

        {/* Share Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gray-100 text-gray-700 border-none rounded-xl text-base font-bold cursor-pointer mt-5 flex items-center justify-center gap-2"
        >
          <FiShare2 size={20} />
          Share Details
        </motion.button>
      </div>
    </div>
  )
}

export default Receive
