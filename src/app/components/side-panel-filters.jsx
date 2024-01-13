import React, { useEffect, useState } from 'react'
import { brands, categories, strainType } from '../../../lib/data'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'

import Cookies from 'js-cookie'
import FilterBrands from './filter-brands'
import FilterStrainType from './filter-straintype'
import FilterCategories from './filter-categories'

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
        <FilterCategories />

        <div className='mb-6 mt-6 h-px w-full bg-[#d9d9d9]'></div>
        <FilterStrainType />
        {/*  <!-- Divider --> */}
        <div className='mb-6 mt-6 h-px w-full bg-[#d9d9d9]'></div>
        <FilterBrands />
      </div>
    </motion.div>
  )
}
