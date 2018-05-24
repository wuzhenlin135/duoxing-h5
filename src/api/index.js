import request from '@/utils/request'
import store from '@/store'
import Qs from 'qs'


export function getScenicList() {
  return request({
    url: '/app/scenic-list',
    method: 'get'
  })
}

export function getScenicDetail(scenicId) {
  let params = { scenicId: scenicId }
  return request({
    url: '/app/scenic-detail',
    method: 'get',
    params
  })
}

export function getProfile() {
  return request({
    url: '/app/profile',
    method: 'get'
  })
}

export function submit(productId, count, price, userName, userPhone, location, date, time) {
  let communId = store.state.communId
  let jsopenid = store.state.wxopenid
  if (!jsopenid) {
    return Promise.reject('微信id未找到！')
  }
  const data = Qs.stringify({
    'productId': productId,
    'count': count,
    'price': price,
    'userName': userName,
    'userPhone': userPhone,
    'location': location,
    'date': date,
    'time': time,
    'communId': communId,
    'jsopenid': jsopenid,
  })
  return request({
    url: '/app/submit',
    method: 'post',
    data: data
  })
}

export function getCommunInfo(communId) {
  let params = { communId: communId }
  return request({
    url: '/app/commun-info',
    method: 'get',
    params
  })
}

export function getCheckOrder(scenicId) {
  let params = { scenicId: scenicId }
  return request({
    url: '/app/check-order',
    method: 'get',
    params
  })
}