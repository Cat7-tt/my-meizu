//下拉菜单    
$('.meizu-list').hover(function(){
    // console.log($(this).index())
   //  console.log($('.header-menuBox'));
    // console.log($('.header-menuBox').index())
    $('.header').css('border','none');
    //获取当前对象的下标
    let index=$(this).index();
    console.log();
    $('.header-menuBox').eq(index).addClass('header-menuBox-show')
    $('.header-menuBox').eq(index).siblings().removeClass('header-menuBox-show')
    
    $('.header-menu').addClass('header-menu-show')
    $('.header-menu').mouseleave(function(){
         $('.header-menu').removeClass('header-menu-show')
         $('.header').css('border-bottom','1px solid #efefef');
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

//点击文字后文字变蓝
$('.title-link').hover(function(){
    $(this).css('color','#008cff')
},function(){
    $(this).siblings().css('color','#343434')
})
$('.title-link').click(function(){
    // console.log($(this));
    // console.log($(this).css('color'));
    if(!$(this).css('color')=='rgb(0,140,255)'){
         $(this).css('color','rgb(0,140,255)')
        $(this).siblings().css('color','#343434')
    }
    
})


//获取操作对象——分页器和盒子对象
var pagination=document.querySelector('.Pagination');
var phoneListBox=document.querySelector('.phone-listBox');
var title=document.querySelector('.title')
//跳转不同列表页面 (ajax不传参数的写法)
//获取地址栏参数
var search=location.search;
    //判断是否存在地址参数
    if(search){
            //获取参数信息 转换乱码
            var type=decodeURI(search.split('=')[1]);
            //使用自执行函数获取数据中对应的数据
           (async function(){
             var p1=await promiseAjax({
                url:'../php/goods_list.php'
            })
            //转换数据库获取数据的数据类型
            var dt=eval('('+p1+')');
            // console.log(dt);
            var arr1=[];
            for(var attr in dt){
                if(dt[attr].type==type){
                    arr1.push(dt[attr])
                }
            }
            console.log(arr1)
            var str1=''
            for(var attr in arr1){
                str1=`
                        <span>${arr1[0].type}</span>
                        <div class="title-right">
                              <a  class='title-link ' style="color: rgb(0,140,255);">推荐</a>
                              <a  class='title-link '>新品</a>
                              <a  class='title-link '>价格</a>
                        </div>
                `
            }
            title.innerHTML=str1
            //编写传入的obj数据
            var obj={
                pageInfo:{
                    pagenum:1,//当前页
                    pagesize:12,//每页显示的条数
                    totalsize:arr1.length,//总条数
                    totalpage:Math.ceil(arr1.length/12) //总页数
                },
                textInfo:{
                    first:'首页',
                    prev:"上一页",
                    next:'下一页',
                    last:'尾页',
                },
                change(m){ //m为页码数
                    //console.log(this);   this指向分页器
                    //截取指定长度的数据
                    let ar2=arr1.slice((m-1)*12,m*12)
                    // console.log(ar2);
                    //拼接所有内容
                    var str2=''
                    //遍历新数组中所有数据
                    for(var attr in ar2){
                         str2+=`
                            <li class="phone-box">
                               <a href='../html/good.html?id=${ar2[attr].id}' target="_blank">
                                   <img src="${ar2[attr].imgurl}">
                                   <h3>${ar2[attr].name}</h3>
                                  <p class="phone-describe">${ar2[attr].describe}</p>
                                  <p class="phone-price"><span>￥</span>${parseFloat(ar2[attr].price).toFixed(2)}</p>
                               </a>  
                            </li>
                         `
                    }
                    phoneListBox.innerHTML=str2
                }
            }
            //创建分页器对象
            new Pagination(pagination,obj)
        })()
    }else{
        alert('非法进入')
        location.href='../html/meizu.html'
    }

//点击按钮图片滑动 phone-list
$('.btn-circle').click(function(){
    $(this).addClass('btn-bgcolor');
    $(this).siblings().removeClass('btn-bgcolor');
    var index=$(this).index()
    var lefts=index * 620
    // $('.list-box').css('left',`-${lefts}px`)
    $('.list-box').animate({left:`-${lefts}px`},'linear')
})

/* //使用自执行函数获取数据中对应的数据
(async function(){
    var p1=await promiseAjax({
        url:'../php/goods_list.php'
    })
    //转换数据类型
    var dt=eval('('+p1+')');
    // console.log(dt);
    //编写传入的obj数据
    var obj={
        pageInfo:{
            pagenum:1,//当前页
            pagesize:12,//每页显示的条数
            totalsize:dt.length,//总条数
            totalpage:Math.ceil(dt.length/12) //总页数
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:'下一页',
            last:'尾页',
        },
        change(m){ //m为页码数
            //console.log(this);   this指向分页器
            //截取指定长度的数据
            let ar2=dt.slice((m-1)*12,m*12)
            // console.log(ar2);
            //拼接所有内容
            var str=''
            //遍历新数组中所有数据
            for(var attr in ar2){
                 str+=`
                    <li class="phone-box">
                       <a href='../html/good.html?id=${ar2[attr].id}' target="_blank">
                           <img src="${ar2[attr].imgurl}">
                           <h3>${ar2[attr].name}</h3>
                          <p class="phone-describe">${ar2[attr].describe}</p>
                          <p class="phone-price"><span>￥</span>${parseFloat(ar2[attr].price).toFixed(2)}</p>
                       </a>  
                    </li>
                 `
            }
            phoneListBox.innerHTML=str
        }
    }
    //创建分页器对象
    new Pagination(pagination,obj)
})() */



//跳转不同列表页面
//获取地址栏参数
/* var search=location.search
//判断参数是否存在
    if(search){
        // console.log(search);
        //获取参数信息
        var type=decodeURI(search.split('=')[1]);
       console.log(type)
        //使用异步函数发送请求 获取响应结果
    
      $.get('../php/goods_list.php',function(res){
        // console.log(eval('('+res+')'))
        var res1=eval('('+res+')')
        var arr=[]
        for( var attr in res1){
            if(res1[attr].type==type){
                arr.push(res1[attr])
            }
        }
        console.log(arr)
        var str=''
        var str2=''
        for(var attr in arr){
            str=`
                    <span>${arr[0].type}</span>
                    <div class="title-right">
                          <a  class='title-link ' style="color: rgb(0,140,255);">推荐</a>
                          <a  class='title-link '>新品</a>
                          <a  class='title-link '>价格</a>
                    </div>
            `
            str2+=`
                    <li class="phone-box">
                       <a href='../html/good.html?id=${arr[attr].id}' target="_blank">
                           <img src="${arr[attr].imgurl}">
                           <h3>${arr[attr].name}</h3>
                          <p class="phone-describe">${arr[attr].describe}</p>
                          <p class="phone-price"><span>￥</span>${parseFloat(arr[attr].price).toFixed(2)}</p>
                       </a>  
                    </li>
                 `
        }
        $('.title').append(str)
        $('.phone-listBox').append(str2)
      })
    } */



