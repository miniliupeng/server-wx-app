import http from '../utils/http'

const UserAPI={}

/**
 * @description 进行登录操作
 * @param {*} code 临时登录凭证
 * @returns Promise
 */
UserAPI.reqLogin = (code) => {
  return http.get(`/weixin/wxLogin/${code}`)
}
module.exports = UserAPI
