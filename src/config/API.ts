import axios from 'axios'
import Cookies from 'js-cookie'
import {SilentLoginService} from "@/services/Auth.service";
import {OLD_LIT_AT, OLD_LIT_RT} from "@/config/index";
import {AuthCookieSetter} from "@/utils";

// * base url to set the request api url
axios.defaults.baseURL = 'https://api.oldlit.yalchin.info/api'

//? request
axios.interceptors.request.use(
  config => {
    if (typeof window !== 'undefined') {
      const token = Cookies.get(OLD_LIT_AT)
      // config.headers['Content-Type'] = 'application/json'
      config.headers['Accept'] = '*/*'
      config.headers['Accept-Language'] = 'en'
      token && (config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`)
    }
    return config
  },
    error => Promise.reject(error),
)

axios.interceptors.response.use(
    res => res,
    async error => {
        if (error.response && error.response.status === 401) {
            const refreshToken = Cookies.get(OLD_LIT_RT);
            if (refreshToken) {
                try {
                    const { data } = await SilentLoginService(JSON.parse(refreshToken));
                    AuthCookieSetter(data);
                    // Retry the original request
                    const originalRequest = error.config;
                    originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                    return axios(originalRequest);
                } catch (e) {
                    console.log('Token refresh failed: ', e);
                }
            }
        }
        return Promise.reject(error);
    },
);

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
