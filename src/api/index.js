import request from '@/utils/request'
import store from '@/store'
import Qs from 'qs'


export function getScenicList() {
  return request({
    url: '/app/scenic-list',
    method: 'get'
  })
}

export function getScenicDetail(params) {
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

export function getSubmit(productId, count, price, userName, userPhone, location, date, time) {
  let communId = store.state.communId
  let jsopenid = store.state.wxopenid
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
    url: '/app/profile',
    method: 'post',
    data: data
  })
}