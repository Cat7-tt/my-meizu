//点击小图片 阴影消失
$('.pic').click(function(){
    if(!$(this).hasClass('shadow')){
       $(this).addClass('shadow')
       $(this).siblings().removeClass('shadow')
    }
});

//下拉菜单    
$('.meizu-list').hover(function(){
    // console.log($(this).index())
   //  console.log($('.header-menuBox'));
    // console.log($('.header-menuBox').index())
    
    //获取当前对象的下标
    let index=$(this).index();
    console.log();
    $('.header-menuBox').eq(index).addClass('header-menuBox-show')
    $('.header-menuBox').eq(index).siblings().removeClass('header-menuBox-show')
    
    $('.header-menu').addClass('header-menu-show')
    $('.header-menu').mouseleave(function(){
         $('.header-menu').removeClass('header-menu-show')
       })  
    if(index==4 || index==5 || index==6 || index==7 || index==8){
       $('.header-menu').removeClass('header-menu-show')
       $('.header-menuBox').eq(index).removeClass('header-menuBox-show')
    }
    if(index==9){
       $('.header-menu').addClass('header-menu-show')
       $('.lastBox').addClass('header-menuBox-show')
    }
    $('.meizu-listall').next().hover(function(){
       $('.header-menu').removeClass('header-menu-show')
    })
})

//数据添加
//获取地址栏中的信息
var search =location.search
//获取buy-btn按钮
var buy=document.querySelector('.buy-now')
var car=document.querySelector('.add-car')
var addContent=document.querySelector('.addContent')
//当前商品详情信息的数据
var dt;
// var addContent=document.querySelector('.addContent')
// console.log(search)
//判断是否有地址参数信息

if(search){
     var idValue=search.split('=')[1];
    //  console.log(idValue);
     //使用异步函数执行
     (async function(){
        var p1=await promiseAjax({
           url:'../php/good.php',
           data:`id=${idValue}`
        });
        //转换格式
        dt=eval('('+p1+')')
        console.log(dt)
        // console.log(dt.id)
      if(dt.id==idValue){
         var str=''
         str=`
            <div class="navigation">
               <div class="main navi">
                  <span class="nav-left">${dt.name}</span>
                  <ul class="nav-right">
                      <li><a href="#" >概述</a></li>
                      <li><a href="#" >${dt.name}</a></li>
                      <li><a href="#" >参数</a></li>
                      <li style="border:none"><a href="#" >换机指引</a></li>
                  </ul>
               </div>
           </div>
           <div class="content">
               <div class="main">
                   <div class="good-img">
                   <a class="imgurl">
                            <img src='${dt.imgurl}' class='left'>
                        </a>
                       <ul class="imgs">
                           <li class="pic shadow"><a><img src='${dt.imgurl}'></a></li>
                           <li class="pic"><a><img src='${dt.imgurl}'></a></li>
                           <li class="pic"><a><img src='${dt.imgurl}'></a></li>
                           <li class="pic"><a><img src='${dt.imgurl}'></a></li>
                       </ul>
                   </div>
                   <div class="details">
                       <h1>${dt.name}</h1>
                       <p class="describe">${dt.describe}</p>
                       <div class="price-box">
                           <p class="inline price"><span>￥</span>${parseFloat(dt.price).toFixed(2)}</p>
                           <dl>
                               <dt class="inline sales">优惠券</dt>
                               <dd class="inline">
                                   <p class="inline"><span class="full-left">满4299减200</span><span style="padding-right: 5px;">满4699减300</span></p>
                                   <a href='' class="link-more">更多 ></a>
                               </dd>
                           </dl>
                           <dl>
                               <dt class="inline sales">加价购</dt>
                               <dd class="inline ">
                                   <p  class="inline other">另加29元起，即可换购超值商品</p>
                                   <a href=''  class="link-more">立即加购 ></a>
                               </dd>
                           </dl>
                       </div>
                   </div>
                   <div class="support">
                       <dl>
                           <dt class="inline category">支<span class="s-space"></span>持</dt>
                           <dd class="inline ">
                               <span class="sup-content">
                                   <i class="iconfont icon-icon-test "></i>
                                   花呗分期
                               </span>
                               <span class="sup-content">
                                   <i class="iconfont icon-icon-test"></i>
                                   顺丰发货
                               </span>
                               <span class="sup-content">
                                   <i class="iconfont icon-icon-test"></i>
                                   7天无理由退货 (具体查看详情)
                               </span>
                           </dd>
                       </dl>
                       <dl class="support-down">
                           <dt class="inline category">配送服务</dt>
                           <dd class="inline">
                               <p class="serv-address"> 广东省 深圳市
                                   <i class="iconfont icon-f11"></i>
                               </p>
                           </dd>
                       </dl>
                       <p class="after-sales"> 
                           本商品由 魅族 负责发货并提供售后服务
                           <a href=" " class="kefu">
                               <i class="iconfont icon-kefu"></i>
                           <span>商城客服</span>
                           </a>
                       </p>
                   </div>
                   <div class="model">
                       <dl>
                           <dt  class="inline category type-title">型<span class="s-space"></span>号</dt>
                           <dd class="inline">
                               <a href=" " class="phone-type black">${dt.name}</a>
                               <a href=" " class="phone-type">${dt.name}</a>
                               <a href=" " class="phone-type">${dt.name}</a>
                               <a href=" " class="phone-type">${dt.name}</a>
                           </dd>
                       </dl>
                   </div>
                   
                   <div class="model">
                       <dl>
                           <dt  class="inline category type-title">网络类型</dt>
                           <dd class="inline">
                               <a href=" " class="phone-type black">全网通公开版</a>
                           </dd>
                       </dl>
                   </div>
                   <div class="model">
                       <dl>
                           <dt  class="inline category type-title">数<span class="s-space"></span>量</dt>
                           <dd class="inline">
                               <div class="num-control">
                                   <button class="num-btn">-</button>
                                   <input type='text' class="num" value=1>
                                   <button class="num-btn">+</button>
                               </div>
                           </dd>
                       </dl>
                   </div>
                   <div class="buy-section">
                       <button  class="buy-btn buy-now">立即购买</button>
                       <button  class="buy-btn add-car">加入购物车</button>
                   </div>
               </div>
           </div>
         `
      }
        addContent.innerHTML=str;
     })()
}else{
   //给buy-btn绑定点击事件 -未登录进入详情页无法购买
   buy.onclick=function(){
        location.href='../html/login.html'
   }
   car.onclick=function(){
      alert('您还未登录 请登录')
      location.href='../html/login.html'
   }
}


//给大盒子绑定事件
addContent.onclick=function(e){
       var e=e || window.event
       var target=e.target || e.srcElement
       //判断点击对象是否为+
       if(target.innerHTML=='+'){
        target.previousElementSibling.value++
           //获取商品购买的数量 限制在3
          if(target.previousElementSibling.value>3){
            target.previousElementSibling.value=3
          }
       }
       //判断点击对象是否为-
       if(target.innerHTML=='-'){
        target.nextElementSibling.value--
           //获取商品购买的数量
          if(target.nextElementSibling.value<1){
            target.nextElementSibling.value=1
          }
       }

       //判断点击对象是否为加入购物车
       if(target.innerHTML=='加入购物车'){
           //获取localstorage(存储数据)中的cartList
            var cartList=localStorage.getItem("cartList")
            /* locaolstorage若没有cartList 那么添加 
            若有则判断购物车中是否早已存在此数据 那么需要对商品数量进行修改
             */
              //获取当前数量输入框的值 
              var num=target.parentNode.previousElementSibling.children[0].children[1].children[0].children[1].value
           //    console.log(num)
            if(cartList){
                var a=0  //判断需要添加的数据是否存在
                //将字符串转换成数组对象
               cartList=JSON.parse(cartList)
               //遍历cartList数组中所有数据
               cartList.forEach((item)=>{
                   //当前条件满足时，代表数据已存在
                   if(item.id==dt.id){
                       item.number=++num
                       a++
                       // console.log(item.number)
                       localStorage.setItem('cartList',JSON.stringify(cartList))
                       if(item.number>3){
                           dt.number=3
                       }
                   }
               })
               //判断当前添加的商品是否存在
               if(a==0){  //存在
                   //修改添加商品的数量
                   dt.number=num
                   //把当前商品追加到cartList数组中
                   cartList.push(dt)
                   //更新localstorage中数据
                   localStorage.setItem('cartList',JSON.stringify(cartList))
               }
            }else{
               //修改添加的商品数量
                dt.number=num
               //  console.log(dt.number)
               //设置localstorage(存储数据)中的cartList属性
                localStorage.setItem('cartList',JSON.stringify([dt]))
            }
       }
       //判断点击对象是否为立即购买
       if(target.innerHTML=='立即购买'){
           location.href='../html/shopping_cart.html'
       }
    
}

/* var dsq =setTimeout(function(){
    var box=document.querySelector('.box')
    var main=document.querySelector('.left');
    var list=document.querySelectorAll('li img');
    var cover=document.querySelector('.cover');
    var right=document.querySelector('.right');
    var rightImg=right.querySelector('img');
    box.onmouseover=function(e){
        var e=e || window.event
        cover.style.display="block";
        right.style.display='block';
      
    }
    box.onmousemove=function(e){
         var e=e || window.event
         move(e)
    }
    box.onmouseout=function(){
        cover.style.display="none";
        right.style.display='none';
    }
    function move(e){
        //获取当前坐标值——光标所在x轴位置为减去盒子距离左边的值再减去遮藏层的一半 以至于光标在遮藏层中间
        var x1=e.pageX-box.offsetLeft-parseInt(cover.offsetWidth/2)
        var y1=e.pageY-box.offsetTop-parseInt(cover.offsetHeight/2)
        //光标移动范围
        var maxX=box.offsetWidth-cover.offsetWidth;
        var maxY=box.offsetHeight-cover.offsetHeight;
        var minX=minY=0;
        //右边图片移动坐标
        var x2,y2
        //光标移动位置
        if(x1<minX){
            cover.style.left=minX+'px';
            x2=minX;
        }else if(x1>maxX){
            cover.style.left=maxX+'px';
            x2=maxX;
        }else {
            cover.style.left=x1+'px';
            x2=x1;
        };

        if(y1<minY){
            cover.style.top=minY+'px';
            y2=minY;
        }else if(y1>maxY){
            cover.style.top=maxY+'px';
            y2=maxY;
        }else {
            cover.style.top=y1+'px';
            y2=y1;
        }
        // 右边图片移动
        rightImg.style.left=-2*x2+'px';
        rightImg.style.top=-2*y2+'px';
    }
}, 500);

<div class="box imgurl">
                       <img src='${dt.imgurl}' class='left'>
                   <div class='cover'></div>
               </div>
               <div class="right">
                   <img src='${dt.imgurl}'>
               </div>
         */