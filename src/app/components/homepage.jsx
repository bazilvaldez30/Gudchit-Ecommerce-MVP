import React from 'react'
import SectionHeading from './section-heading'
import SectionContainer from './section-container'
import AssembleCard from './assemble-card'
import api from '../api/api'

const items = [
  {
    name: 'flower Fridays',
    imageUrl: '/default-special-card.jpg',
    type: 'SALE',
    start_date: 'November 20, 2023 - 08:22 pm',
    end_date: 'November 30, -0001 - 12:00 am',
    menu_type: 'BOTH',
    days: 'Fri',
    start_time: '12:00 AM',
    end_time: '12:00 PM',
  },
  {
    name: 'Accessories Specials',
    imageUrl: '/default-special-card.jpg',
    type: 'SALE',
    start_date: 'November 23, 2023 - 06:37 pm',
    end_date: 'November 30, -0001 - 12:00 am',
    menu_type: 'BOTH',
    days: 'Sun, Mon, Tues, Wed, Thu, Fri, Sat',
    start_time: '12:00 AM',
    end_time: '11:45 PM',
  },
]

export default async function HomePage() {
  const fetchSpecials = async () => {
    try {
      const response = await api.post('/graphql/', {
        query:
          'query MyQuery {allSpecials(retailerId: 1) {name id image description endDate startDate type menuType}}',
      })

      console.log(response.data.data.allSpecials) // Access the response data
      return response.data.data.allSpecials
    } catch (error) {
      console.error(error)
    }
  }

  const specials = await fetchSpecials()

  return (
    <SectionContainer>
      <div className='md:px-0 px-12'>
        <SectionHeading>Dispenza - Dutchie Plus Sandbox 1</SectionHeading>
        <AssembleCard items={specials} />
      </div>
    </SectionContainer>
  )
}
