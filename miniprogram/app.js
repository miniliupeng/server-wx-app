// 执行 extendApi.js 文件，将方法挂载到 wx 全局对象身上
import { reqIndexData } from './api/index'
import OrderApi from './api/order'
import UserApi from './api/user'
import './utils/extendApi'

App({
  OrderApi,
  UserApi,
  onShow() {
    reqIndexData()
  }
})