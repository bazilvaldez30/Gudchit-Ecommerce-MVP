'use client'

import React, { useEffect, useState } from 'react'
import DispensaryCard from './dispensary-card'
import Cookies from 'js-cookie'
import ShopMainContent from './shop-main-content'

export default function Shop({ dispensary }) {
  const [selectedDispensary, setSelectedDispensary] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setSelectedDispensary(Cookies.get('dispensary'))
      setLoading(false)
    }

    fetchData()
  }, [loading])

  return (
    <div>
      {loading ? (
        // Display loading message in the middle of the screen
        <div className='flex items-center justify-center h-screen'>
          <p>Loading...</p>
        </div>
      ) : selectedDispensary ? (
        <ShopMainContent
          setLoading={setLoading}
          selectedDispensary={selectedDispensary}
        />
      ) : (
        <div className='flex justify-center flex-wrap gap-4'>
          {dispensary &&
            dispensary?.map((item) => (
              <DispensaryCard
                item={item}
                key={item.name}
                setLoading={setLoading}
              />
            ))}
        </div>
      )}
    </div>
  )
}
