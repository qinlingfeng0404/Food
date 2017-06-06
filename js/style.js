/*轮播图*/
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: 3000,
        loop: true,
               
        // 如果需要前进后退按钮
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',

        slidesPerView : 3,
        spaceBetween : 20,

        autoplayDisableOnInteraction : false,
      }) 
});
/*菜单*/
$(function(){
    var $li=$(".main_header>ul>li");
    var $table=$(".main>table");
    var $span=$(".main_header>span");

    $li.each(function(index){
        $(this).click(function(){
            if(index==0||index==1){
                $(this).addClass("m_h_ulli").siblings().removeClass("m_h_ulli");
                $table.eq(index).css("display","block").siblings("table").css("display","none");
                $span.stop().animate({
                    left:index*90,
                    width:"80px"
                },1000);
            }
            if(index==$li.length-1){
                $(this).addClass("m_h_ulli").siblings().removeClass("m_h_ulli");
                $table.eq(index).css("display","block").siblings("table").css("display","none");
                $span.stop().animate({
                    left:"530px",
                    width:"80px"
                },1000);
            }
            if(index>($li.length-9)&&index<($li.length-1)){
                $(this).addClass("m_h_ulli").siblings().removeClass("m_h_ulli");
                $table.eq(index).css("display","block").siblings("table").css("display","none");
                $span.stop().animate({
                    left:130+((index-1)*50),
                    width:"40px"
                },1000);
            }
        });
    });
});
$(function(){
    var $td = $(".main>table>tbody>tr>td");
    $td.mouseover(function(){
            $(this).find("h2").stop().fadeIn("slow");
            $(this).find("p").stop().fadeIn("slow");
    });
        
    $td.mouseout(function(){
            $(this).find("h2").stop().fadeOut("slow");
            $(this).find("p").stop().fadeOut("slow");
    });
});