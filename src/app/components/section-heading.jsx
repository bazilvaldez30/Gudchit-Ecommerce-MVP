'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function SectionHeading({ children }) {
  return (
    <motion.h2
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='text-xl md:text-3xl font-medium capitalize mb-8'
    >
      {children}
    </motion.h2>
  )
}
