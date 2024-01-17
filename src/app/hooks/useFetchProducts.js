'use server'

import { brands } from '../../../lib/data'
import api from '../api/api'

export const fetchProducts = async (
  itemsToFetched,
  selectedDispensary,
  loadNext,
  brandsFilter
) => {
  try {
    if (brandsFilter?.length === 0) brandsFilter = brands
    const response = await api.post('/graphql/', {
      query: `
              query MyQuery {
                allProducts(brandNames: ${
                  JSON.stringify(brandsFilter) || brands
                },first: ${itemsToFetched},after: ${
        loadNext || 0
      }, retailerId: ${selectedDispensary}) {
                  id
                  created
                  image
                  productId
                  title
                  strainType
                  slug
                  productsvariantsSet {
                    priceRec
                  }
                }
              }
            `,
    })

    return response.data.data.allProducts
  } catch (error) {
    console.error(error)
  }
}
