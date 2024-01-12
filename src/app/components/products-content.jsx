import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useFetchProducts } from '../hooks/useFetchProducts'
import Products from './products'

export default function ProductsContent({ selectedDispensary }) {
  return (
    <section className='space-y-9 dark:text-white text-gray-950'>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='text-4xl font-bold dark:text-white text-gray-950'
      >
        Dispenza - Dutchie Plus Sandbox 2
      </motion.h1>
      <div className='px-2'>
        <Products selectedDispensary={selectedDispensary} />
      </div>
    </section>
  )
}
