/* 
   判断是否登录进入购物车
 */
var carEmpty=document.querySelector('.cart-empty')
var carContent=document.querySelector('.cart-content')
//获取cookie中的用户名
var account =getCookie('account') 
console.log(account)
//判断当前cookie是否存在
if(!account){
 carEmpty.style.display='table'
}

//获取大盒子对象
var cart=document.querySelector('.cart')
//获取对象
var moreBuy=document.querySelector('.more-buy')
//获取localstorage数据
var cartList=localStorage.getItem("cartList") || "[]"
// console.log (cartList)
//转换数据对象
cartList=JSON.parse(cartList)
console.log(cartList)
var cart=document.querySelector('.cart')
show()
function show(){
   //判断localstorage中是否有数据
   if(cartList.length>0){
     //验证全选框是否被选中
     var selectALL=cartList.every(item=>{
          return item.is_select==1
     })
     var  opp= totall()  //接收商品总件数和
        var str1=`
            <div class='main'>
                <div class="cart-content">
                  <ul class="cart-header">
                      <li class="quan first-select cart-select"><input type='checkbox' name='quan' ${selectALL?'checked':''} class="checkbox"> 全选</li>
                      <li class="quan cart-price">单价(元)</li>
                      <li class="quan cart-num">数量</li>
                      <li class="quan cart-total">小计(元)</li>
                      <li class="quan cart-ctrl">编辑</li>
                  </ul>
                  <div class="meizu">
                    <span class="first-select"><input type='checkbox' ${selectALL?'checked':''} name='quan' class="checkbox" id='mzbox'> 魅族</span>
                    <span class="more-buy ">再买80.00元，即可免运费 <a class="once">立即凑单 ></a></span>
                  </div>
                  <div class="cart-good">
        `
        //遍历数组中所有商品信息
        cartList.forEach(item=>{
             str1+=`
                   <p class="more-price">
                       <span>加价购</span>
                       <i class="more-change">另加29元起，即可换购超值商品 <a class="once">立即加购 ></a></i>
                    </p>
                        <div class="select-good first-select">
                            <span class="good-sel"><input type='checkbox' ${item.is_select==1?'checked':''} name='xuan' data-id=${item.id} class="checkbox"></span>
                            <a href='../html/good.html?id=${item.id}' class="good-about good-img"><img src='${item.imgurl}'></a>
                            <a href="#" class="good-about words">
                                <p class="good-name">${item.name}</p>
                                <p class="good-desc">${item.type}</p>
                            </a>
                            <span class="good-price"><i>￥</i>${parseFloat(item.price).toFixed(2)}</span>
                            <div class="btns" >
                                <button class="btn" data-id=${item.id} ${item.number<=1?'disabled':''}>-</button>
                                <input type='text' value="${item.number}" class="num-inp">
                                <button class="btn" data-id=${item.id} ${item.number>=3?'disabled':''}>+</button>
                                <P >限购3件</P>
                            </div>
                            <span class="good-totPrice"><i>￥</i>${(item.number*parseFloat(item.price)).toFixed(2)}</span>
                            <a href='' class='delete'  data-id=${item.id}>✘</a>
                        </div>
              `
          })
          str1+=` 
                  <div class="cart-end">
                      <p class="first-select">
                          <input type='checkbox' ${selectALL?'checked':''} name='quan'> 全选
                      </p>
                      <p><a>删除选中的商品</a></p>
                      <p>共 <span class="goods-num">${opp[2]}</span> 件商品，已选择 <span class="chosen">${parseInt((opp[0]))}</span>  件</p>
                      <p>合计(不含运费)：<i>￥</i><span class='totalPrice'>${opp[1]}</span></p>
                      <button>结算</button>
                      <p class="clear"></p>
                  </div>
              </div>
            </div>
          `
        //把当前字符串添加到大盒子里
       cart.innerHTML=str1
   }else{
       //购物车中没有商品
       var  str2=`
            <div class="cart-empty" >
                  <div class="cart-empty-content">
                    <div class="cart-emptyL"></div>
                    <div class="cart-emptyR">
                        <p>购物车内还没有商品 快去选购吧~</p>
                        <a href='../html/meizu.html' class="return-login">返回首页</a>
                    </div>
                  </div>
             </div>
       `
       //把当前字符串添加到大盒子里
       cart.innerHTML=str2
   }
}


//给盒子绑定点击事件
cart.onclick=function(e){
    var e= e || window.event
    var target=e.target || e.srcElement
      
    //数量增加
     if(target.innerHTML=='+'){
       //获取当前商品id
       var id1=target.getAttribute('data-id')
       cartList.forEach(item=>{
         //判断是否为当前操作的商品
         if(item.id==id1){
             item.number+=1 
            //  if(item.number>3){
            //    item.number=3
            //  }
         }
       })
       //重置localstorage
       localStorage.setItem('cartList',JSON.stringify(cartList))
       show()
     }
     //数量减少
     if(target.innerHTML=='-'){
      //获取当前商品id
      var id1=target.getAttribute('data-id')
      cartList.forEach(item=>{
        //判断是否为当前操作的商品
        if(item.id==id1){
            item.number-=1
            // if(item.number<1){
            //   item.number=1
            // }
        }
      })
      //重置localstorage
      localStorage.setItem('cartList',JSON.stringify(cartList))
      show()
    }

     //删除一行
     if(target.getAttribute('class')=='delete'){
        //获取id
        var id1=target.getAttribute('data-id')
       //遍历数组 过滤满足条件的数据（删除
        cartList2=cartList.filter(item=>{
          return item.id!=id1   //返回id不等于选中id的商品 
        })
       //重置localstorage
      localStorage.setItem('cartList',JSON.stringify(cartList2))
      show()
     }

     //全选
     if(target.getAttribute('name')=='quan'){
       //遍历数组中所有数据
       cartList.forEach(item=>{
         if(target.checked){
           //修改所有商品选中框中的is_select
           item.is_select=1
           }else{
          item.is_select=0
         }
       })
       //重置localstorage
      localStorage.setItem('cartList',JSON.stringify(cartList))
      show()
     }

    //单选框
    if(target.getAttribute('name')=='xuan'){
      //获取当前商品id
      var id1=target.getAttribute('data-id')
      cartList.forEach(item=>{
        // console.log(item.id)
        if(item.id==id1){
           if(item.is_select==1){
              item.is_select=0
              console.log(item.is_select)
           }else{
              item.is_select=1
           }
        }
      })
      //重置localstorage
      localStorage.setItem('cartList',JSON.stringify(cartList))
      show()
    }
    //删除选中商品
    if(target.innerHTML=='删除选中的商品'){
       cartList.forEach(item=>{
         if(item.is_select==1){
            cartList4=cartList.filter(item=>{
              return item.is_select!=1
            })
         }
       })
        //重置localstorage
      localStorage.setItem('cartList',JSON.stringify(cartList4))
      location.reload()
    }
    //结算
    if(target.innerHTML=='结算'){
      cartList.forEach(item=>{
        if( item.is_select==1){
          if(confirm('你确定购买吗？')){
            alert('请支付:'+totall()[1])
            //过滤数组元素
             cartList3=cartList.filter(item=>{
              return item.is_select!=1
            }) 
              //重置localstorage
              localStorage.setItem('cartList',JSON.stringify(cartList3))
              location.reload()
          }
        }
      }) 
    }
    //选中魅族
   /*  if(target.getAttribute('id')=='mzbox'){
     target.parentNode.nextElementSibling.innerHTML='已免运费'
    }
    console.log(target.parentNode.nextElementSibling)
    show() */

    
}

// totall()
 function totall(){
    var num=0 //总数量
    var price=0  //总价格
    var goods=0  //购物车中商品件数
    //遍历cartlist数组
    cartList.forEach(item=>{
        goods+=parseInt(item.number)
         //判断商品是否被选中
         if(item.is_select==1){
           //统计商品数量
           num+=item.number
           //统计总计
           price+=(item.number)*(parseFloat(item.price))
         }
    })
    return [num,price.toFixed(2),goods]
 }



