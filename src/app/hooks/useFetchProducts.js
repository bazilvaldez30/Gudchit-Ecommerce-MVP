'use server'

import api from '../api/api'

export const useFetchProducts = async (
  itemsToFetched,
  selectedDispensary,
  loadNext,
  brandsFilter
) => {
  try {
    const response = await api.post('/graphql/', {
      query: `
              query MyQuery {
                allProducts(first: ${itemsToFetched},after: ${
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
