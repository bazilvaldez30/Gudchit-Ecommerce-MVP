import React from 'react'
import SectionHeading from './section-heading'
import SectionContainer from './section-container'
import AssembleCard from './assemble-card'
import api from '../api/api'

export default async function HomePage() {
  const fetchSpecials = async () => {
    try {
      const response = await api.post('/graphql/', {
        query:
          'query MyQuery {allSpecials {name id image description endDate startDate type menuType}}',
      })
      console.log(response.data.data.allSpecials)
      return response.data.data.allSpecials
    } catch (error) {
      console.error(error)
    }
  }

  const specials = await fetchSpecials()

  return (
    <SectionContainer>
      <div className='md:px-0 px-12'>
        <SectionHeading>Gudchit - Sandbox 1</SectionHeading>
        <AssembleCard items={specials} />
      </div>
    </SectionContainer>
  )
}
