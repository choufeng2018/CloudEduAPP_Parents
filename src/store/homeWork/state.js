import { getLocalStore } from 'assets/uitls/localStore'
import { TOKEN_KEY, ROLE_ID, IS_EXIST_NICKNAME } from '../storeKeys'

export default function() {
  return {
    status: '',
    token: getLocalStore(TOKEN_KEY) || '',
    user: {},
    roleId: getLocalStore(ROLE_ID) || '',
    isExistNickname: getLocalStore(IS_EXIST_NICKNAME) || ''
  }
}
