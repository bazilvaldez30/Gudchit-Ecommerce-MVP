import React from 'react'
import SectionContainer from '../components/section-container'
import Shop from '../components/shop'
import api from '../api/api'

const dispensary = [
  { name: 'Dispenza - Dutchie Plus Sandbox 1', location: 'Las Vegas, NV, USA' },
  { name: 'Dispenza - Dutchie Plus Sandbox 2', location: 'Las Vegas, NV, USA' },
]

export default async function page() {
  const fetchRetailers = async () => {
    try {
      const response = await api.post('/graphql/', {
        query: 'query MyQuery {allRetailers {id name address}}',
      })
      console.log(response.data.data.allRetailers)
      return response.data.data.allRetailers
    } catch (error) {
      console.error(error)
    }
  }

  const retailers = await fetchRetailers()
  return (
    <div className='min-h-screen'>
      <SectionContainer>
        <Shop dispensary={retailers} />
      </SectionContainer>
    </div>
  )
}
