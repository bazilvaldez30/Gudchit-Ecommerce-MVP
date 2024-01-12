import React from 'react'
import { motion } from 'framer-motion'

const ItemCard = ({ item, setSelectedItem, openModal }) => {
  const handleClick = (item) => {
    console.log(item)
    setSelectedItem(item)
    openModal()
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => handleClick(item)}
      className='dark:bg-gray-800 bg-white p-4 mb-4 rounded-md shadow-md hover:scale-[1.05] opacity-80 hover:opacity-100'
    >
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-36 object-cover mb-4 rounded-md'
      />
      <h3 className='text-xl font-semibold mb-2 capitalize'>{item.name}</h3>
    </motion.button>
  )
}

export default ItemCard
