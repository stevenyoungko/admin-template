// import Cookies from 'js-cookie'
import Setting from '../settings'

const TokenKey = Setting.accessTokenKey

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
