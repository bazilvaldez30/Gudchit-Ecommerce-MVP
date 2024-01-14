'use server'

import api from '../api/api'

export const useFetchSingleProduct = async (brandSlug = 'absoluteXtracts') => {
  try {
    const response = await api.post('/graphql/', {
      query: `
              query MyQuery {
                allProducts(brandNames: ["${brandSlug}"],first: ${12}, retailerId: 2) {
                  id
                  created
                  description
                  image
                  productId
                  title
                  strainType
                  slug
                  productsvariantsSet {
                    priceRec
                    name
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
