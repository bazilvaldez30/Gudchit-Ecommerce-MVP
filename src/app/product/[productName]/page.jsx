import React from 'react'
import SectionContainer from '@/app/components/section-container'
import { useFetchSingleProduct } from '@/app/hooks/useFetchSingleProduct'
import SingleProduct from '@/app/components/single-product'

export default async function page({ params }) {
  const productName = params.productName

  const product = await useFetchSingleProduct()

  return (
    <div className='min-h-[84.5dvh]'>
      <SectionContainer>
        <SingleProduct product={product} />
      </SectionContainer>
    </div>
  )
}
