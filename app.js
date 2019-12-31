//app.js
App({
  globalData: {
    userInfo: "",
    identity: "",
    appid: 'wx882769e007a9573e',
    secret: '55867e74554df906a8f7d81036c91fa4',
    openid: ""
  },
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this
    // 登录
    wx.login({
      success: function(res) {
        if (res.code) {
          console.log("res.code:" + res.code);
          wx.request({
            url: 'https://www.tuppy.com/getOpenId',
            method: 'POST',
            data:{
              "code": res.code
            },
            success: res=>{
              console.log(res.data)
              that.globalData.openid = res.data
            }
          })
          } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }

    })
    // 获取用户信息
    wx.getSetting({
      success: res => {

        if (1) {
          console.log("getUserInfo")
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})