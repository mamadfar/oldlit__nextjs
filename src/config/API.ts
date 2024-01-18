import axios from 'axios'
import Cookies from 'js-cookie'

// * base url to set the request api url
axios.defaults.baseURL = 'https://private-72d778-bookstore.apiary-mock.com'

//? request
axios.interceptors.request.use(
  async config => {
    if (typeof window !== 'undefined') {
      const token = Cookies.get('_csrf')
      config.headers['Content-Type'] = 'application/json'
      config.headers['Accept'] = '*/*'
      config.headers['Accept-Language'] = 'en'
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => {
    if (err) {
      console.error('Something went wrong.')
    }
    return Promise.reject(err)
  },
)

//? response
axios.interceptors.response.use(
  res => res,
  error => {
    if (axios.isCancel(error)) {
      // request canceled.
      console.error('Request has been canceled by user.')
    } else if (error && typeof error.response === 'undefined') {
      console.error('Something went wrong.')
    } else {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      if (!expectedError) {
        console.error('Something went wrong.')
      }
    }
    return Promise.reject(error)
  },
)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  headers: axios.defaults.headers,
}
