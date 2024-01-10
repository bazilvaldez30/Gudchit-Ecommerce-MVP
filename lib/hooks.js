import api from '@/app/api/api'
import { useActiveSectionContext } from '@/context/active-sectioncontext'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}

export const useFetchSpecials = async () => {
  try {
    const response = await api.post('/graphql/', {
      query:
        'query MyQuery {allSpecials {name id image description endDate startDate type menuType}}',
    })

    return response.data.data.allSpecials
  } catch (error) {
    setError(error)
  }
}
