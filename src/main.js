import Vue from 'vue'
import router from './router'
import App from './app'
import store from './store'
import http from './utils/request'
// import { cookie } from 'vux'
import Cookies from 'js-cookie'
import './history'
import './global'
import './assets/styles/base.css'
import 'theme.less'
import { getUrlParam } from '@/utils'
import { getCookieAt, getCookieJsopenid } from '@/utils/auth'

const FastClick = require('fastclick')
FastClick.attach(document.body)

let communId = getUrlParam("shareCommunId")
if (communId) {
  console.log('communId = ' + communId)
  store.dispatch('GetCommunInfo', communId).then(() => {
    console.log("load commun success")
  })
}
let scenicId = getUrlParam("shareScenicId")
if (scenicId) {
  store.commit('SET_SCENIC', scenicId)
}

if (process.env.NODE_ENV === 'development') {
  // store.commit('SET_TOKEN', "75a7b4c2f5e1d625f0beac593ecb9a30")
  // store.commit('SET_WXOPENID', "111111111")
  Cookies.set('at', '75a7b4c2f5e1d625f0beac593ecb9a30');
  Cookies.set('jsopenid', '111111111');
}

// 微信登录
var at = getCookieAt()
var jsopenid = getCookieJsopenid()

if (jsopenid != undefined && at != undefined) {
  store.commit('SET_TOKEN', at)
  store.commit('SET_WXOPENID', jsopenid)
} else {
  var sharePath = process.env.BASE_URL
  var url = window.location.hash.substr(1)
  console.log(url)
  var wxurl = "http://www.szwzznkj.com/get-weixin-code.html?appid=wxa394628a900009f9&scope=snsapi_userinfo&state=" + url + "&redirect_uri=" + sharePath + "/web/wx-oauth-redirect"
  window.location.href = wxurl
  // return
}

// 请求用户信息
store.dispatch('GetProfile').then(() => {
  console.log("load profile success")
})

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

http.vue = vue
