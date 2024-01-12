import React from 'react'
import { brands, categories, strainType } from '../../../lib/data'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Cookies from 'js-cookie'

export default function SidePanelFilters({ setLoading }) {
  const animationVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  }

  const handleBack = () => {
    Cookies.remove('dispensary')
    setLoading(true)
  }

  return (
    <motion.div
      className='mb-4 max-w-none lg:max-w-[300px]'
      variants={animationVariants}
      initial='initial'
      animate='animate'
    >
      <div
        name='wf-form-Filter-2'
        className='flex-col gap-6 sticky top-36 md:max-h-[80vh] md:overflow-auto md:pe-3'
      >
        {/* <!-- Filters title --> */}
        <button
          className='dark:text-white text-gray-950'
          onClick={(e) => handleBack(e)}
        >
          Select Shop
        </button>
        <div className='mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)] dark:text-white text-gray-950'>
          <h5 className='text-xl font-bold '>Filters</h5>
          <button className='text-sm hover:scale-105 hover:text-gray-800 dark:hover:text-[#d8d8d8]'>
            Clear all
          </button>
        </div>

        {/*  <!-- Search input --> */}
        <motion.div
          className='relative'
          variants={animationVariants}
          initial='initial'
          animate='animate'
        >
          <BsSearch className='absolute left-3 top-3 text-gray-500' size={20} />
          <input
            type='text'
            className='mb-7 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]'
            placeholder='Search'
          />
        </motion.div>

        {/* <!-- Categories --> */}
        <div className='flex flex-col gap-6'>
          <p className='font-semibold dark:text-white text-gray-950'>
            Categories
          </p>
          <div className='flex flex-wrap items-center gap-2 text-gray-950'>
            {categories?.map((item) => (
              <button
                className='flex gap-2 rounded-md bg-[#f2f2f7] p-3 font-semibold items-center text-sm'
                key={item.name}
              >
                <img src={item.icon} alt='' className='inline-block h-4 w-4' />
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className='mb-6 mt-6 h-px w-full bg-[#d9d9d9]'></div>

        {/*   <!-- FIlter One --> */}
        <div className='flex flex-col gap-6 dark:text-white text-gray-950'>
          <div className='flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0'>
            <p className='font-semibold'>Strain Type</p>
            <button className='inline-block text-sm'>Clear</button>
          </div>
          <div className='flex flex-col gap-3'>
            {strainType?.map((item) => (
              <label
                className='flex items-center text-sm font-medium'
                key={item}
              >
                <input
                  type='checkbox'
                  className='mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]'
                />
                <span className='inline-block cursor-pointer'>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/*  <!-- Divider --> */}
        <div className='mb-6 mt-6 h-px w-full bg-[#d9d9d9]'></div>

        {/*   <!-- FIlter Two --> */}
        <div className='flex flex-col gap-6 dark:text-white text-gray-950'>
          <div className='flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0 '>
            <p className='font-semibold'>Brands</p>
            <button href='#' className='inline-block text-sm'>
              Clear
            </button>
          </div>
          <div className='flex flex-col gap-3 max-h-96 overflow-auto bg-scroll'>
            {brands?.map((item) => (
              <label className='flex items-center font-medium' key={item}>
                <input
                  type='checkbox'
                  className='mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]'
                />
                <span className='inline-block cursor-pointer'>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
