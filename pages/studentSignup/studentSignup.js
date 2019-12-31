// pages/studentSignup/studentSignup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  onClick: function () {
    console.log("toast")
    wx.request({
      url: 'https://www.tuppy.pub/newTeacher',
      method: 'POST',
      data: {
        "openId": app.globalData.openid
      },
      success: res => {
        console.log(res)
        wx.showToast({
          title: '已提交注册信息',
          duration: 1500
        })
        setTimeout(function () {
          wx.switchTab({
            url: '../course/course',
          })
        }, 1500)
      },
    })

    console.log("switch")
  }
})