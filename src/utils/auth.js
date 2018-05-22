import Cookies from 'js-cookie'

const TokenKey = 'X-Token'
const JsOpenIdKey = 'jsopenid'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getJsOpenId() {
  return Cookies.get(JsOpenIdKey)
}

export function setJsOpenId(openid) {
  return Cookies.set(JsOpenIdKey, openid)
}

export function removeJsOpenId() {
  return Cookies.remove(JsOpenIdKey)
}