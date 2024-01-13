import React, { useEffect, useState } from 'react'
import { useQueryState } from 'nuqs'
import { useSearchParams } from 'next/navigation'
import { categories } from '../../../lib/data'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function FilterCategories() {
  const searchParams = useSearchParams()
  const [categoriesFilter, setCategoriesFilter] = useQueryState('categories')
  const [selectedCategories, setSelectedCategories] = useState('')

  useEffect(() => {
    const params = searchParams.get('categories')

    if (params) {
      setSelectedCategories(params)
    } else {
      setSelectedCategories('')
    }
  }, [])

  useEffect(() => {
    setCategoriesFilter(selectedCategories)
  }, [selectedCategories])

  const handleClickCategories = (e) => {
    setCategoriesFilter(e.target.value)
    setSelectedCategories(e.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <p className='font-semibold dark:text-white text-gray-950'>Categories</p>
      <div className='flex flex-wrap items-center gap-2 text-gray-950'>
        {categories?.map((item) => (
          <motion.button
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => handleClickCategories(e)}
            className={clsx(
              `flex gap-2 rounded-md bg-[#f2f2f7] p-3 font-semibold items-center text-sm`,
              {
                'bg-blue-300': selectedCategories === item.name,
              }
            )}
            key={item.name}
            value={item.name}
          >
            <img src={item.icon} alt='' className='inline-block h-4 w-4' />
            {item.name}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
