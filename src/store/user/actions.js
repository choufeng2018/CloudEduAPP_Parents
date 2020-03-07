import { addLocalStore, removeLocalStore } from 'assets/uitls/localStore'
import { TOKEN_KEY, USER_KEY, IS_EXIST_NICKNAME } from '../storeKeys'
import { appLogin, appRegister, getRoleList } from '../../service/user/user'
import {
  AUTH_REQUEST_MUTATION,
  AUTH_SUCCESS_MUTATION,
  AUTH_ERROR_MUTATION,
  IS_EXIST_NICKNAME_MUTATION
} from './mutation-types'
import { LOGIN_ACTION, REGISTER_ACTION, ROLE_LIST_ACTION } from './action-types'

export default {
  [LOGIN_ACTION]({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION)
      try {
        const result = await appLogin(payload)
        const token = result.data.token
        const user = result.data.user
        const isExistNickname = !result.data.user.nickname
        console.log(typeof isExistNickname)
        addLocalStore(TOKEN_KEY, JSON.stringify(token))
        addLocalStore(USER_KEY, JSON.stringify(user))
        addLocalStore(IS_EXIST_NICKNAME, isExistNickname)
        commit(AUTH_SUCCESS_MUTATION, token, user)
        commit(IS_EXIST_NICKNAME_MUTATION, isExistNickname)
        resolve(result)
      } catch (error) {
        commit(AUTH_ERROR_MUTATION)
        removeLocalStore(TOKEN_KEY)
        removeLocalStore(USER_KEY)
        removeLocalStore(IS_EXIST_NICKNAME)
        reject(error)
      }
    })
  },
  [REGISTER_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION)
      try {
        const result = await appRegister(payload)
        commit(AUTH_SUCCESS_MUTATION, '', '')
        resolve(result)
      } catch (error) {
        commit(AUTH_ERROR_MUTATION)
        removeLocalStore(TOKEN_KEY)
        removeLocalStore(USER_KEY)
        reject(error)
      }
    })
  }
}
