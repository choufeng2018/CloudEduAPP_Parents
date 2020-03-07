import { required } from 'vuelidate/lib/validators'

export const isRequired = (value, errorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(required(value) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const withParam = (value, length, errorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((!!value && value.length === length) || `* ${errorMessage}`)
    })
  })
}

export const isNum = (value, errorMessage) => {
  const pattern = /^[0-9]*$/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pattern.exec(value) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const fillMinLength = (value, length, errorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((!!value && value.length >= length) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const fillMaxLength = (value, length, errorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((!!value && value.length <= length) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const phone = (value, errorMessage) => {
  const pattern = /^1[3|4|5|7|8][0-9]{9}$/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pattern.exec(value) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const email = (value, errorMessage) => {
  const pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pattern.exec(value) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const password = (value, errorMessage) => {
  const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pattern.exec(value) || `* ${errorMessage}`)
    }, 1000)
  })
}

export const somePassword = (value, compare, errorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value === compare || `* ${errorMessage}`)
    }, 1000)
  })
}
