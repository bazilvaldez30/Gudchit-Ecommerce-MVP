import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'

export default function ProductCard({ item, index }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      className='flex flex-col justify-between gap-3 rounded-md dark:bg-gray-800 font-semibold relative border dark:border-gray-600 border-gray-200 shadow-md hover:scale-[1.05]'
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <Link href={''}>
        <p className='text-[10px] absolute top-2 left-2 dark:bg-gray-800 bg-gray-200 dark:text-white rounded-full p-1 px-3 text-gray-950 tracking-wider'>
          {item.strainType}
        </p>
        <img src={item.image} alt={item.title} className='inline-block' />

        <div className='px-5 pb-4 pt-2'>
          <p className='text-sm text-blue-600 dark:text-blue-300'>
            ${item.productsvariantsSet[0].priceRec}
          </p>
          <p className='text-md'>{item.title}</p>
        </div>
      </Link>
      <div className='flex px-5 gap-2'>
        <button className='dark:bg-blue-900 bg-blue-500 text-white w-full mb-5 py-2 rounded-md hover:scale-[1.05] hover:bg-blue-600 dark:hover:bg-blue-800'>
          ADD TO CART
        </button>
        <button className=' bg-gray-500 dark:bg-gray-700 hover:dark:bg-gray-600 text-white mb-5 py-2 px-3 rounded-md hover:scale-[1.15] hover:bg-gray-600'>
          <FaEye />
        </button>
      </div>
    </motion.div>
  )
}
