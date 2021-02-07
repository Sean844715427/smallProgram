//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    Index:1,
    Size:5,
    image:[
      {img:'/images/pikaqiu1.jpg'},
      {img:'/images/pikaqiu2.jpg'},
      {img:'/images/pikaqiu3.gif'}
    ],
    list:[]
  },

  //提示
  tips(){
    wx.showToast({
      title: '莫乱点哦，功能我还没做',
      icon: 'none',
      duration: 2000
    })
  },

  onLoad: function (options) {
    
  },

  onShow(){
    this.getlist()
  },

  getlist(){
    let _this = this
    util.postApi("artcile",{
      Index:this.data.Index,
      Size:this.data.Size
    },function(res){
      console.log(res)
      _this.setData({
        list:res
      })
    })
  },

  onShareAppMessage(){
    
  }

})
