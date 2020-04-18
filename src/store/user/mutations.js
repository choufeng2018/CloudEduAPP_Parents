import {
  AUTH_REQUEST_MUTATION,
  AUTH_SUCCESS_MUTATION,
  AUTH_ERROR_MUTATION,
  LOGOUT_MUTATION,
  SAVE_ROLE_ID_MUTATION,
  IS_EXIST_NICKNAME_MUTATION,
  GETUSERINFO_MUTATION
} from './mutation-types'
import { addLocalStore } from '../../assets/uitls/localStore'
import { ROLE_ID, USER_KEY } from '../storeKeys'

export default {
  [AUTH_REQUEST_MUTATION](state) {
    state.status = 'loading'
  },
  [AUTH_SUCCESS_MUTATION](state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  [AUTH_ERROR_MUTATION](state) {
    state.status = 'error'
  },
  [LOGOUT_MUTATION](state) {
    state.status = ''
    state.token = ''
  },
  [SAVE_ROLE_ID_MUTATION](state, roleId) {
    state.roleId = roleId
    addLocalStore(ROLE_ID, state.roleId)
  },
  [IS_EXIST_NICKNAME_MUTATION](state, payload) {
    state.isExistNickname = payload
  },
  [GETUSERINFO_MUTATION](state, payload) {
    state.user = payload
  }
}
