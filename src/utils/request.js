import axios from 'axios'
import store from '../store'
import { getToken } from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 15000 // 请求超时时间
})

service.vue = undefined
service.showToast = (msg) => {
  if(service.vue) {
    service.vue.$vux.toast.show({
      text: msg
    })
  }
}

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const data = response.data
    if (data.res === 50008 || data.res === 50012 || data.res === 50014) { // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      service.showToast('token已失效，请重新登录')
      store.dispatch('FedLogOut').then(() => {
        location.reload()// 为了重新实例化vue-router对象 避免bug
      })
      return Promise.reject('token已失效，请重新登录')
    } else if (data.res !== 0) {
      service.showToast(data.msg)
      return Promise.reject(data.msg)
    } else {
      return data
    }
  },
  error => {
    console.log('err' + error)// for debug
    if (/Network Error/i.test(error)) {
      service.showToast('您当前无法上网，请检查你的移动数据开关或wifi是否正常')
    }
    if (/ms exceeded/i.test(error)) {
      service.showToast('您的网络连接不稳定，请检查你的移动数据开关或wifi是否正常')
    }
    if (/code 500/i.test(error)) {
      service.showToast('网络异常，请稍后重试')
    }
    return Promise.reject(error)
  }

)

export default service
