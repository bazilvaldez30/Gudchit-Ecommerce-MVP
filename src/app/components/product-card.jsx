import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({ item }) {
  return (
    <motion.div
      className='flex flex-col gap-3 rounded-md dark:bg-gray-800 font-semibold relative border dark:border-gray-600 border-gray-200 shadow-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className='text-[10px] absolute top-2 left-2 dark:bg-gray-800 bg-gray-200 dark:text-white p-1 rounded-full px-3 text-gray-950 tracking-wider'>
        {item.strainType}
      </p>
      <img src={item.image} alt={item.title} className='inline-block' />
      <div className='px-4 pb-4'>
        <p className='text-sm text-blue-600 dark:text-blue-300'>
          ${item.productsvariantsSet[0].priceRec}
        </p>
        <p className='text-md'>{item.title}</p>
      </div>
    </motion.div>
  )
}
