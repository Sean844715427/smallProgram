//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.setStorageSync('rescode', res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log('session' + res);
              this.globalData.userInfo = res.userInfo;
              this.globalData.encryptedData = res.encryptedData;
              this.globalData.iv = res.iv;
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
    //云开发初始化-云开发环境ID
    // wx.cloud.init({
    //   env: 'wangwenchen-s1vp0',
    //   traceUser: true
    // });
  },
  globalData: {
    userInfo: null,
    encryptedData: "",
    iv: "",
    pixelRatio: wx.getSystemInfoSync()['pixelRatio'], //设备像素比
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'], //状态栏的高度，单位px
    windowWidth: wx.getSystemInfoSync()['windowWidth'], //可使用窗口宽度，单位px
    windowHeight: wx.getSystemInfoSync()['windowHeight'] //可使用窗口高度，单位px
  }
})