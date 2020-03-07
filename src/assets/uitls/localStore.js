import { Cookies, AddressbarColor } from 'quasar'

export const getCookie = key => {
  return Cookies.get(key)
}

export const getCookieAll = () => {
  return Cookies.getAll()
}

export const hasCookie = key => {
  return Cookies.has(key)
}

export const addCookie = (key, value, options) => {
  Cookies.set(key, value, options)
}

export const removeCookie = (key, options) => {
  Cookies.remove(key, options)
}

export const getLocalStore = key => {
  return localStorage.getItem(key)
}

export const addLocalStore = (key, value) => {
  localStorage.setItem(key, value)
}

export const removeLocalStore = key => {
  localStorage.removeItem(key)
}

export const addSeesionStore = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const getSeesionStore = key => {
  return sessionStorage.getItem(key)
}

export const removeSeesionStore = key => {
  sessionStorage.removeItem(key)
}
