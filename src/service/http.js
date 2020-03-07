import axios from 'axios'

export const get = (url, params) =>
  new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })

export const post = (url, params) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })

