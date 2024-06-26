'use client'

import React, { useEffect, useState } from 'react'
import DispensaryCard from './dispensary-card'
import Cookies from 'js-cookie'
import ShopMainContent from './shop-main-content'

export default function Shop({ dispensary }) {
  const [selectedDispensary, setSelectedDispensary] = useState([
    {
      id: '1',
      name: 'Gudchit - Sandbox 1',
      location: 'Las Vegas, NV, USA',
    },
    {
      id: '2',
      name: 'Gudchit - Sandbox 2',
      location: 'Las Vegas, NV, USA',
    },
  ])
  const [loading, setLoading] = useState(true)

  /* useEffect(() => {
    const fetchData = async () => {
      setSelectedDispensary(Cookies.get('dispensary'))
      setLoading(false)
    }

    fetchData()
  }, [loading]) */

  return (
    <div>
      {selectedDispensary ? (
        <ShopMainContent
          setLoading={setLoading}
          selectedDispensary={selectedDispensary}
        />
      ) : (
        <div className='flex justify-center flex-wrap gap-4'>
          {dispensary?.map((item) => (
            <React.Fragment key={item.name}>
              <DispensaryCard item={item} setLoading={setLoading} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
