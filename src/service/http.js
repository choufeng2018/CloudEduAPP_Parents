import axios from 'axios'
import service from './interceptors/interceptor'
export const get = (url, params) =>
  new Promise((resolve, reject) => {
    service
      .get(url, { params })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })

export const post = (url, params) =>
  new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
  export const put = (url, params) =>
  new Promise((resolve, reject) => {
    service
      .put(url, params)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })

