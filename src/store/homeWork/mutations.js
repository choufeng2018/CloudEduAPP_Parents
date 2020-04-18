import {
  GETUSERINFO_MUTATION
} from './mutation-types'
export default {
  [GETUSERINFO_MUTATION](state, payload) {
    state.user = payload
  }
}
