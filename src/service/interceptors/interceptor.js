import axios from 'axios'
import store from 'vuex'
import { getLocalStore } from 'assets/uitls/localStore'
import { TOKEN_KEY, ROLE_ID, IS_EXIST_NICKNAME } from '../../store/storeKeys'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 70000 // 请求超时时间
});

service.interceptors.request.use(
  config => {
    // config.headers['Content-Type'] = 'text/plain'
    if (getLocalStore(TOKEN_KEY)) {
      config.headers['Authorization'] = getLocalStore(TOKEN_KEY)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  config => config,
  error => {
    console.log(error)
    if (error.response) {
      switch (error.response.status) {
          case 401:
            // 返回 401 清除token信息并跳转到登录页面
            // store.commit(types.LOGOUT);
            router.replace({
                path: 'login'
          })
      }
    }
    return Promise.reject(error)   // 返回接口返回的错误信息
  }
)

export default service
