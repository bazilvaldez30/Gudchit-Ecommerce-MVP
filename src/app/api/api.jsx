import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const backend_url =
  'https://dutchie-integrations-v3-bgxd2bvflq-uw.a.run.app/117'

// const backend_url = 'https://api.vsona.ai'

// const backend_url = "http://127.0.0.1:8000";

const api = axios.create({ baseURL: backend_url })
const token = Cookies.get('access')
const user = Cookies.get('user')
const refresh = Cookies.get('refresh')

api.interceptors.request.use((config) => {
  const accessToken = Cookies.get('access')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})
let refreshAttempts = 0 // Initialize the counter

api.interceptors.response.use(
  (response) => response, // Return the response for all successful requests
  async (error) => {
    if (error.response) {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        if (refreshAttempts < 3) {
          // Check if refresh attempts are less than 3
          refreshAttempts++ // Increment the counter
          console.log(api.defaults.baseURL)
          try {
            const refresh = Cookies.get('refresh')
            if (!refresh) {
              const currentPath = useRouter().asPath
              Cookies.set('return_path', currentPath)
              return Promise.reject(error.response) // Reject with the original error
            }

            const refreshResponse = await api.post('auth/token/refresh/', {
              refresh,
            })

            Cookies.set('access', refreshResponse.data.access)
            originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`
            return axios(originalRequest)
          } catch (refreshError) {
            console.error('Token refresh failed:', refreshError)
            return Promise.reject(error.response) // Reject with the original error
          }
        } else {
          // Redirect to login after 3 failed refresh attempts
          console.error(
            'Token refresh attempts exceeded. Redirecting to login.'
          )
          Cookies.remove('access')
          Cookies.remove('refresh')
          Cookies.remove('user')
          return Promise.reject(error.response) // Reject with the original error
        }
      }
    }
    // Return the error response for both failed requests and bad requests
    return error.response
  }
)
export default api
