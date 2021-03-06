import Cookies from 'js-cookie'

const TokenKey = 'X-TOKEN'
const WXOpenIdKey = 'WX-OPENID'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getWXOpenId() {
  return localStorage.getItem(WXOpenIdKey)
}

export function setWXOpenId(openid) {
  return localStorage.setItem(WXOpenIdKey, openid)
}

export function removeWXOpenId() {
  return localStorage.removeItem(WXOpenIdKey)
}

export function removeAuthCookies() {
  Cookies.remove('at', { path: '/' })
  Cookies.remove('jsopenid', { path: '/' })
}

export function getCookieAt() {
  return Cookies.get('at', { path: '/' })
}

export function getCookieJsopenid() {
  return Cookies.get('jsopenid', { path: '/' })
}