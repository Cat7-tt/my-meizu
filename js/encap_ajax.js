/* 封装Ajax函数 */
function Ajax(options){
    //设置默认参数
    var defaultInf={
        url:'',  //请求地址
        type:'GET', //请求方式——默认GET
        data:'', //请求参数
        async:'true', //默认异步true
        dataType:'string',  //响应的数据格式
        success:function(){}, //请求成功的回调函数
        fail:function(){} //请求失败的回调函数
    }
    //使用传入的参数替换默认参数
    for(let attr in options){
        defaultInf[attr]=options[attr]
    }
    //创建ajax对象
    var xhr=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    //判断是否传递了参数
    if(defaultInf.data){
        //判断传入的请求方式是不是get
        if(defaultInf.type.toUpperCase()=='GET'){
            //设置链接 get,url,true
            xhr.open(defaultInf.type,defaultInf.url+'?'+defaultInf.data,defaultInf.async)
            //发送请求 
            xhr.send()
        }else{ //传入的请求方式为POST
            xhr.open(defaultInf.type,defaultInf.url,defaultInf.async)
            //设置请求头信息
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            //发送请求
           xhr.send(defaultInf.data) 
        }
    }else{
        xhr.open(defaultInf.type,defaultInf.url,defaultInf.async)
        xhr.send()
    }
        //绑定事件readystatechange
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){  //判断当前ajax是否响应解析完成
                if(xhr.status==200){ //判断htttp状态是否请求成功
                    defaultInf.success(xhr.responseText)
                }else{
                    defaultInf.fail()
                }
            }
        }
}


/* promise中封装Ajax */
function promiseAjax(options){
    //返回promise对象
    return new Promise(function(resolve,reject){
             //设置默认参数
          var defaultInf={
              url:'',  //请求地址
              type:'GET', //请求方式——默认GET
              data:'', //请求参数
              async:'true', //默认异步true
              dataType:'string',  //响应的数据格式
          }
          //使用传入的参数替换默认参数
          for(let attr in options){
              defaultInf[attr]=options[attr]
          }
          //创建ajax对象
          var xhr=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
          //判断是否传递了参数
          if(defaultInf.data){
              //判断传入的请求方式是不是get
              if(defaultInf.type.toUpperCase()=='GET'){
                  //设置链接 get,url,true
                  xhr.open(defaultInf.type,defaultInf.url+'?'+defaultInf.data,defaultInf.async)
                  //发送请求 
                  xhr.send()
              }else{ //传入的请求方式为POST
                  xhr.open(defaultInf.type,defaultInf.url,defaultInf.async)
                  //设置请求头信息
                  xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
                  //发送请求
                 xhr.send(defaultInf.data) 
              }
          }else{
              xhr.open(defaultInf.type,defaultInf.url,defaultInf.async)
              xhr.send()
          }
              //绑定事件readystatechange
              xhr.onreadystatechange=function(){
                  if(xhr.readyState==4){  //判断当前ajax是否响应解析完成
                      if(xhr.status==200){ //判断htttp状态是否请求成功
                        if(defaultInf.dataType.toUpperCase()=='JSON'){  //判断响应格式是否为json
                            resolve(JSON.parse(xhr.responseText))
                        }else{
                            resolve(xhr.responseText)
                        }
                          
                      }else{
                          reject('请求失败')
                      }
                  }
              }
})
}