import React from 'react'
import Link from 'next/link'
import { FaTag, FaShop } from 'react-icons/fa6'
import { FaShoppingCart, FaCartPlus } from 'react-icons/fa'
import { MotionDiv } from './motion-div'

export default function SingleProduct({ product }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  }

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  }

  return (
    <section className='px-5 md:px-0'>
      <MotionDiv
        className='mb-6 flex gap-3'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href='/shop'
          className='text-sm bg-gray-300 p-1 px-4 rounded-md dark:text-gray-950 flex items-center gap-1 w-fit'
        >
          <FaShop /> Continue Shopping
        </Link>
        <Link
          href='/shop'
          className='text-sm bg-gray-300 p-1 px-4 rounded-md dark:text-gray-950 flex items-center gap-1 w-fit'
        >
          <FaShoppingCart /> My Cart
        </Link>
      </MotionDiv>
      <MotionDiv
        className='grid grid-cols-10 gap-9'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <MotionDiv
          className='lg:col-span-4 col-span-10'
          variants={imageVariants}
        >
          <img src={product[0].image} alt='' />
        </MotionDiv>
        <MotionDiv
          className='lg:col-span-6 col-span-10 space-y-3'
          variants={textVariants}
        >
          <h1 className='text-4xl font-bold'>{product[0].title}</h1>
          <h4 className='uppercase italic'>-- EMPIRE</h4>
          <h4 className='flex items-center gap-2'>
            <FaTag className='' />
            TINCTURES
          </h4>
          <h3 className='text-xl text-blue-500 font-bold'>
            ${product[0].productsvariantsSet[0].priceRec}
          </h3>
          <p className='text-lg tracking-wide'>{product[0].description}</p>
          <div className='pt-5'>
            <span className='bg-gray-300 p-2 px-4 rounded-md dark:text-gray-950'>
              {product[0].productsvariantsSet[0].name} ($
              {product[0].productsvariantsSet[0].priceRec})
            </span>
          </div>
          <div className='flex gap-5 justify-center pt-5'>
            <input
              className='text-black h-fit py-2 rounded-md ps-6 max-w-28 border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat text-sm font-bold [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]'
              type='number'
              min={1}
              defaultValue={1}
            />
            <button className='flex items-center gap-2 dark:bg-blue-900 bg-blue-500 text-white mb-5 py-2 rounded-md hover:scale-[1.05] hover:bg-blue-600 dark:hover:bg-blue-800 px-7'>
              <FaCartPlus />
              ADD TO CART
            </button>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}
