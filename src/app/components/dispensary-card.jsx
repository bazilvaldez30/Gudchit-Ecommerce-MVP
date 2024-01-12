'use client'

import React from 'react'
import MyButton from './my-button'
import Cookies from 'js-cookie'
import { motion } from 'framer-motion'

export default function DispensaryCard({ item, setLoading }) {
  const handleClick = () => {
    Cookies.set('dispensary', item.id)
    setLoading(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='dark:bg-gray-800 bg-white px-6 mb-4 rounded-md shadow-md focus:scale-[1.05] hover:scale-[1.05] active:scale-105 opacity-80 hover:opacity-100 text-center space-y-5 py-8 w-[450px]'
    >
      <h1 className='text-xl font-semibold'>{item.name}</h1>
      <p className='text-lg'>{item.address}</p>
      <MyButton onClick={handleClick}>Select Dispensary</MyButton>
    </motion.div>
  )
}
