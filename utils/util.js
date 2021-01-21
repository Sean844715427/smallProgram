const webUrl = "http://127.0.0.1:3000/"
// const webUrl = "http://172.81.209.180:8888/"

var postApi = function(apiNmae, data,callback){
  wx.request({
    url: webUrl+apiNmae,
    data,
    dataType:'json',
    method:'POST',
    success:function(res){
      callback(res.data)
    }
  })
}

module.exports = {
  postApi: postApi,
}
