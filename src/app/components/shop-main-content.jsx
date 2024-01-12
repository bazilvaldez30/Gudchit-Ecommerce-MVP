import React from 'react'
import SidePanelFilters from './side-panel-filters'
import ProductsContent from './products-content'

export default function ShopMainContent({ setLoading, selectedDispensary }) {
  
  return (
    <section>
      {/*  <!-- Container --> */}
      <div className='mx-auto w-full px-5 md:px-0  text-white'>
        {/*  <!-- Content --> */}
        <div className='grid gap-6 lg:grid-cols-[max-content_1fr] pb-20'>
          <SidePanelFilters setLoading={setLoading} />
          <ProductsContent selectedDispensary={selectedDispensary} />
        </div>
      </div>
    </section>
  )
}
