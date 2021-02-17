// 封装cookie
function getCookie(key){
    //获取当前域名下所有cookie
    var cookies=document.cookie
    //分割字符串，转换数组
    var arr=cookies.split('; ')
    //遍历数组中所有元素
    for(var attr in arr){
        //再次分割数组中的元素
        var arr2=arr[attr].split('=')
        //判断分割出来的第一个元素是否传入参数相等(只有一条数据时)
        if(arr2[0]==key){
            return arr2[1]
        }
    }
}
//添加cookie
function setCookie(key,value,expires){
    if(key){
        //获取当前时间
        var time=new Date()
        //将当前时间戳转成格林时间格式 并设置给cookie
        var time2=time.getTime()-(8*3600*1000)+ expires*1000*60  //分钟
        document.cookie=`${key}=${value};expires=${new Date(time2)}`
    }
}
//删除cookie
function delCookie(key,expires){
      setCookie(key,'',expires)
}