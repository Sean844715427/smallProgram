//js

const util = require("../../utils/util")

//获取应用实例
const app = getApp()

Page({
    data: {
        list:[]
    },
    
    onLoad: function () {
        this.getmenulist()
    },

    //获得菜单列表
    getmenulist(){
        var _this = this
        util.postApi('menu',{},
        function(res){
            console.log(res)
            _this.setData({
                list:res
            })
            console.log(_this.data.list)
        })
    },

    //菜单选择
    selectMenu(e){
        console.log(e.currentTarget.dataset.id)
        switch(e.currentTarget.dataset.id){
            case 1:
                this.openMap()
            break
            default:
                wx.showToast({
                    title: '功能我还没做哦',
                    icon: 'none',
                    duration: 2000
                  })
            break
        }
    },

    //打开地图
    openMap(){
        const latitude = 31.85125 
        const longitude = 106.76889
        wx.openLocation({
            latitude,
            longitude,
            scale: 10,
            name:'四川省巴中市',
            address:'这是我的家乡，欢迎各位来游玩！'
        })
    },

    //显示
    show: function () {

    },
    //隐藏
    hide: function () {

    },
})
