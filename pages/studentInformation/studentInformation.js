// pages/studentInformation/studentInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name: '',
    Hospital: '',
    Information: 'qweqweqwe',
    OpenId: ''

  },
  addTimes: function(){
    wx.requestSubscribeMessage({
      tmplIds: ['-LcIeb8ranqUmSo1oBVfxkuAmLLdbhupFlZ1u6o15Mk'],
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      OpenId: options.studentOpenId
    })
    var that = this
    wx.request({
      url: app.globalData.url + '/getStudent',
      method: 'POST',
      data: {
        "OpenId": this.data.OpenId
      },
      success: function (res) {
        that.setData({
          Name: res.data.name,
          Hospital: res.data.hospital,
          Information: res.data.information
        })
      }
    })

  },

  onClick: function(){
    wx.navigateTo({
      url: '../teacherFeedbackList/teacherFeedbackList?id=' + this.data.OpenId
    })
  },

  work: function(){
    wx.navigateTo({
      url: '../studentWorkList/studentWorkList?id=' + this.data.OpenId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      Name: '',
      Hospital: '',
      Information: '',
      OpenId: ''
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})