// pages/my/my.js
import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { userStore } from '@/stores/userstore'

ComponentWithStore({
  
  data: {
    
  },

  storeBindings: {
    store: userStore,
    fields: ['token', 'userInfo']
  },

  methods: {
    // 跳转到登录页面
    toLoginPage() {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
})
