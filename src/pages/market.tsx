import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiSearch, FiFilter } from 'react-icons/fi'

const Market: React.FC = () => {
  const navigate = useNavigate()

  const items = [
    { id: 1, name: 'iPhone 12 Pro', price: '₦350,000', image: '📱', seller: 'John D.', rating: 4.8 },
    { id: 2, name: 'Nike Sneakers', price: '₦45,000', image: '👟', seller: 'Sarah M.', rating: 4.5 },
    { id: 3, name: 'Laptop Dell', price: '₦280,000', image: '💻', seller: 'Mike K.', rating: 4.9 },
    { id: 4, name: 'Coffee Table', price: '₦35,000', image: '🪑', seller: 'Anna B.', rating: 4.6 },
  ]

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Vehicles']

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
        <h1 className="text-lg font-bold text-gray-900 flex-1">Marketplace</h1>
        <button className="bg-transparent border-none cursor-pointer p-2">
          <FiFilter size={22} className="text-gray-900" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 py-4 bg-white">
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-xl">
          <FiSearch size={20} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search items..."
            className="flex-1 bg-transparent border-none text-sm outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 px-5 py-4 overflow-x-auto bg-white border-b border-gray-200">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border-none text-sm font-semibold cursor-pointer whitespace-nowrap ${
              index === 0 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="p-5 flex-1">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
            >
              <div className="h-36 bg-gray-100 flex items-center justify-center text-6xl">
                {item.image}
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.name}</p>
                <p className="text-base font-bold text-green-600 mb-2">{item.price}</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">{item.seller}</span>
                  <span className="text-xs text-orange-500">★ {item.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Market
