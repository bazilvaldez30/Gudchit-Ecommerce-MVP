import React from 'react'

export default function page({ params }) {
  const productName = params.productName
  return <div className='min-h-[84.5dvh]'>My Post: {productName}</div>
}
