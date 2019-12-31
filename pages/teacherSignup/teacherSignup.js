// pages/teacherSignup/techerSignup.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name:'',
    Place:'',
    Email:'',
    Information:''

  },
  getName:function(e){
    this.data.Name = e.detail.value;
  },
  getPlace:function(e){
    this.data.Place = e.detail.value;
  },
  getEmail:function(e){
    this.data.Email = e.detail.value;
  },
  getInformation:function(e){
    this.data.Information = e.detail.value;
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
      url: 'https://www.tuppy.com/newTeacher',
      method: 'POST',
      data: {
        "OpenId": app.globalData.openid,
        "Name": this.data.Name,
        "Email": this.data.Email,
        "Place": this.data.Place,
        "Information": this.data.Information,

      },
    }),
      wx.showToast({
        title: '已提交注册信息',
        duration: 1500
      })
    setTimeout(function () {
      wx.switchTab({
        url: '../course/course',
      })
    }, 1500)

    console.log("switch")
  }
})