import axios from 'axios'
import store from 'vuex'

axios.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      config.headers.Authorization = store.state.user.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  config => config,
  error => {
    console.log(error)
  }
)
