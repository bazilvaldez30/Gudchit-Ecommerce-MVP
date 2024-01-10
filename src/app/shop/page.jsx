import React from 'react'
import SectionContainer from '../components/section-container'
import Shop from '../components/shop'

const dispensary = [
  { name: 'Dispenza - Dutchie Plus Sandbox 1', location: 'Las Vegas, NV, USA' },
  { name: 'Dispenza - Dutchie Plus Sandbox 2', location: 'Las Vegas, NV, USA' },
]

export default function page() {
  return (
    <div className='min-h-screen'>
      <SectionContainer>
        <Shop dispensary={dispensary} />
      </SectionContainer>
    </div>
  )
}
