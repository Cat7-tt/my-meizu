var search=location.search;
// console.log(search);

//先验证后登录
//给验证按钮绑定点击事件
$('.verify').click(function(){
    $('.tip').css('visibility','hidden')
    // console.log(111);
      //获取输入框中的value值
      var account=$('#account').val();
      var pass=$('#pass').val();
      //使用ajax发送登录请求
      (async function(){
       var p1=await promiseAjax({
           url:'../php/login.php',
           type:'GET',
           data:`account=${account}&password=${pass}`
       })
    //    console.log(p1);
       //判断返回的结果是否为1 
       if(p1==1){
             if(search){
                 var newUrl=search.split('=')[1];
                 console.log(newUrl)
                 $('.verify').css({
                   'background':'#EEFFF5',
                   'color':'#18A452',
                   'border':'1px solid #26C267'
                 });
                $('.verify').text('|ू･ω･` )验证成功');
                
                  //添加cookie
                  setCookie('account',account,5)
                  $('.btn-login').click(function(){
                      $('.tip').css('visibility','hidden')
                      location.href=newUrl
                  })
             }else{
                 $('.verify').css({
                    'background':'#EEFFF5',
                    'color':'#18A452',
                    'border':'1px solid #26C267'
                  });
                 $('.verify').text('|ू･ω･` )验证成功');
                  //添加cookie
                  setCookie('account',account)
                  $('.btn-login').click(function(){
                  $('.tip').css('visibility','hidden')
                  location.href='../html/meizu.html'
                 })
             }
        }else{
            $('.tip').css('visibility','visible');
        }
   })()
   return false;
})
//未进行验证 直接点击登录

$('.btn-login').click(function(){
    if($("button:contains(' 点击按钮进行验证')")){
        $('.tip').css('visibility','visible')
        $('.regsiter').text('请点击按钮进行验证')
    }
})



/* var btnLogin=document.querySelector('.btn-login')
btnLogin.onclick=function(){
    //获取输入框中的value值
     var account=document.getElementById('account').value;
     var pass=document.getElementById('pass').value;
     //使用ajax发送登录请求
     (async function(){
          var p1=await promiseAjax({
              url:'../php/login.php',
              type:'GET',
              data:`account=${account}&password=${pass}`
          })
          console.log(p1);
          //判断返回的结果是否为1 
          if(p1==1){
              //添加cookie
              setCookie('account',account)
              //登录成功时，跳转至指定页面
              location.href='../html/meizu.html'
              
          }
     })() */
