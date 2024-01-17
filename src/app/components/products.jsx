import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fetchProducts } from '../hooks/useFetchProducts'
import ProductCard from './product-card'
import { useSearchParams } from 'next/navigation'
import { useQueryState } from 'nuqs'
import LoadMoreProducts from './load-more-products'

export default function Products({ selectedDispensary }) {
  const [isReachLastItem, setIsReachLastItem] = useState(false)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [brandsFilter, setBrandsFilter] = useQueryState('brands')

  useEffect(() => {
    setIsReachLastItem(true)
    const FetchData = async () => {
      try {
        setIsLoading(true)

        const fetchedProducts = await fetchProducts(
          12,
          selectedDispensary,
          0,
          brandsFilter
        )

        setData(fetchedProducts)

        if (!fetchedProducts.length || fetchedProducts.length < 12) {
          setIsReachLastItem(true)
        } else {
          setIsReachLastItem(false)
        }
      } catch (error) {
        // Handle error if needed
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    FetchData()
  }, [brandsFilter])

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <ProductCard item={item} index={index} />
          </React.Fragment>
        ))}
      </div>
      {!isReachLastItem && !isLoading && (
        <LoadMoreProducts
          selectedDispensary={selectedDispensary}
          brandsFilter={brandsFilter}
          setData={setData}
          setIsReachLastItem={setIsReachLastItem}
        />
      )}
    </section>
  )
}
