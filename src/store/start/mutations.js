import { addLocalStore } from '../../assets/uitls/localStore'
import { IS_STARTED, ACTIVE_PROCESS } from './mutation-types'

export default {
  [IS_STARTED]: (state, payload) => {
    state.started = payload
    addLocalStore('started', payload)
  },
  [ACTIVE_PROCESS]: (state, payload) => (state.activeProcess = payload)
}
