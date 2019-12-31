//index.js
//获取应用实例
const app = getApp()



Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  
  click: function(res){
    app.globalData.identity = res.currentTarget.dataset.identity
    console.log(app.globalData.identity)
    console.log(app.globalData.userInfo.openid)
    if (app.globalData.identity == "志愿者"){
     
      wx.navigateTo({
        url: '/pages/teacherSignup/teacherSignup',
      })
    }
    if (app.globalData.identity == "小可爱") {
      wx.request({
        url: 'https://www.tuppy.pub/newStudent',
        method: 'POST',
        data: {
          "openId": app.globalData.openid
        },
        success: res => {
          console.log(res)
        },
      })
      wx.navigateTo({
        url: '/pages/studentSignup/studentSignup',
      })
    }
  }
})
