import axios from 'axios'
// import dayjs from 'dayjs'
import { Notify } from 'vant'
// import storage from './storage'

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    let { url } = config
    // if (import.meta.env.PROD) url = url?.replace('/mock/api', '/api')
    return {
      ...config,
      url: window.encodeURI(url || ''),
      headers: {
        ...config.headers
      }
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (config) => {
    return config
  },
  (err) => {
    const { response } = err
    const { data } = response
    const { code, message: msg } = data

    Notify({
      type: 'danger',
      message: `${msg || '服务器发生错误'}（错误码：${code}）`
    })

    return {
      data: {
        isError: code ? true : false,
        ...data
      }
    }
  }
)

export default axios
