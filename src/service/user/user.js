import { get, post } from '../http'
import { getCode, login, register, getRole } from './url'

export const appLogin = params => post(login, params)

export const appRegister = params => post(register, params)

export const appLogout = () => post()

export const getAppCodeImage = () => get(getCode)

export const getRoleList = () => get(getRole)
