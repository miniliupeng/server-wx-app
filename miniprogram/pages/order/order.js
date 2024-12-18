const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    orderList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getOrderList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
  changeTab: function (event) {
    this.setData({
      status: event.detail.name,
      orderList: []
    })
    this.getOrderList()
  },
  getOrderList: function () {
    let ret= app.OrderApi.list()
    if (ret.code === 200) {
      this.setData({
        orderList: ret.data.content
      });
  }
  }
})