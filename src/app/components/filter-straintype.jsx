import React, { useEffect, useState } from 'react'
import { useQueryState } from 'nuqs'
import { useSearchParams } from 'next/navigation'
import { strainType } from '../../../lib/data'
import { motion } from 'framer-motion'

export default function FilterStrainType() {
  const searchParams = useSearchParams()
  const [strainTypeFilter, setStrainTypeFilter] = useQueryState('strainType')
  const [selectedStrainType, setSelectedStrainType] = useState([])

  useEffect(() => {
    const params = searchParams.get('strainType')

    // Check if params is not null or undefined
    if (params) {
      // Split the comma-separated string into an array
      const strainTypeArray = params.split(',')

      // Trim each brand to remove any leading/trailing whitespaces
      const trimmedStrainTypesArray = strainTypeArray.map((brand) =>
        brand.trim()
      )

      // Set the array as selectedStrainType
      setSelectedStrainType(trimmedStrainTypesArray)
    } else {
      // If params is null or undefined, set an empty array
      setSelectedStrainType([])
    }
  }, [])

  useEffect(() => {
    setStrainTypeFilter(selectedStrainType)
  }, [selectedStrainType])

  const handleClickStrainType = (e) => {
    if (selectedStrainType.includes(e.target.value)) {
      setSelectedStrainType((prev) =>
        prev.filter((item) => item !== e.target.value)
      )
      return
    }
    setSelectedStrainType((prev) => [...prev, e.target.value])
  }

  return (
    <div className='flex flex-col gap-6 dark:text-white text-gray-950'>
      <div className='flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0'>
        <p className='font-semibold'>Strain Type</p>
        <button className='inline-block text-sm'>Clear</button>
      </div>
      <div className='flex flex-col gap-3'>
        {strainType?.map((item) => (
          <motion.label
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='flex items-center text-sm font-medium'
            key={item}
          >
            <input
              checked={strainTypeFilter?.includes(item)}
              value={item}
              onChange={(e) => handleClickStrainType(e)}
              type='checkbox'
              className='mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]'
            />
            <span className='inline-block cursor-pointer'>{item}</span>
          </motion.label>
        ))}
      </div>
    </div>
  )
}
