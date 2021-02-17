var checkbox=document.querySelector('#acceptFlyme');
var btnRegister=document.querySelector('#btn-register')

//选中框对象绑定点击事件
checkbox.onclick=function(){
    if(this.checked){
        btnRegister.disabled=false
    }else{
        btnRegister.disabled=true
    }
}
//给验证按钮绑定点击事件
$('.verify').click(function(){
    $('.tip').css('visibility','hidden')
      //获取输入框中的value值
      var account=$('#inp-phone').val();
      var pass=$('#pass').val();
      //判断电话号码格式是否正确
      var reg=/^1(3[0-9]|4[4-9]|5[0-35-9]|6[6-7]|7[0-13-8]|8\d|9\d)\d{8}$/;
      if(reg.test(account)){
         $(this).css({
            'background':'#EEFFF5',
            'color':'#18A452',
            'border':'1px solid #26C267'
          });
         $(this).text('|ू･ω･` )验证成功');
         $('#btn-register').click(function(){
            location.href='../html/login.html'
        });
        //使用async发送注册请求
        (async function(){
           var p1=await promiseAjax({
               url:'../php/register.php',
               type:'GET',
               data:`account=${account}&password=${pass}`
           })
        })()
      }else{
        $('.tip').css('visibility','visible')
        $('.regsiter').text(' 手机号码输入格式有误')
      }
      
})
//未验证直接注册
$('#btn-register').click(function(){
    if($("button:contains(' 点击按钮进行验证')")){
        $('.tip').css('visibility','visible')
        $('.regsiter').text('请点击按钮进行验证')
    }
})