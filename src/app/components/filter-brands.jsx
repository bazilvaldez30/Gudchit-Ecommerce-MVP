import React, { useEffect, useState } from 'react'
import { useQueryState } from 'nuqs'
import { useSearchParams } from 'next/navigation'
import { brands } from '../../../lib/data'

export default function FilterBrands() {
  const searchParams = useSearchParams()
  const [brandsFilter, setBrandsFilter] = useQueryState('brands')
  const [selectedBrands, setSelectedBrands] = useState([])

  useEffect(() => {
    const params = searchParams.get('brands')

    // Check if params is not null or undefined
    if (params) {
      // Split the comma-separated string into an array
      const brandsArray = params.split(',')

      // Trim each brand to remove any leading/trailing whitespaces
      const trimmedBrandsArray = brandsArray.map((brand) => brand.trim())

      // Set the array as selectedBrands
      setSelectedBrands(trimmedBrandsArray)
    } else {
      // If params is null or undefined, set an empty array
      setSelectedBrands([])
    }
  }, [])

  useEffect(() => {
    setBrandsFilter(selectedBrands)
  }, [selectedBrands])

  const handleClickBrand = (e) => {
    if (selectedBrands.includes(e.target.value)) {
      setSelectedBrands((prev) =>
        prev.filter((item) => item !== e.target.value)
      )
      return
    }
    setSelectedBrands((prev) => [...prev, e.target.value])
  }

  return (
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
              checked={brandsFilter?.includes(item)}
              value={item}
              onChange={(e) => handleClickBrand(e)}
              type='checkbox'
              className='mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]'
            />
            <span className='inline-block cursor-pointer'>{item}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
