 //图片轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed:300,
        autoplay: {
                 delay: 1000,
                 stopOnLastSlide: false,
                 disableOnInteraction: true,
                 },
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
 });
 
//获取用户名
var account =getCookie('account') 
console.log(account)
if(account){
  
}