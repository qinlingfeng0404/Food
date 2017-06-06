$(function(){
    var $li = $(".m_l_header>ul>li");
    var $table = $(".main_left>table");
    var $span = $(".m_l_header>span");
    $li.each(function(index){
        $(this).on("click",function(){
            if(index<$li.length-2){
                $(this).addClass("m_l_h_li").siblings().removeClass("m_l_h_li");
                $table.eq(index).css("display","block").siblings("table").css("display","none");
                $span.stop().animate({
                    width:"100px",
                    left:index*110, 
                },1000);
            }else{
                $(this).addClass("m_l_h_li").siblings().removeClass("m_l_h_li");
                $table.eq(index).css("display","block").siblings("table").css("display","none");
                $span.stop().animate({
                    width:"80px",
                    left:110+(((index*9)*10)-70), 
                },1000);
            }
            
        });
    });
});
$(function(){
    var $td = $(".main_left>table>tbody>tr>td");
    $td.mouseover(function(){
            $(this).find("h2").stop().fadeIn("slow");
            $(this).find("p").stop().fadeIn("slow");
    });
        
    $td.mouseout(function(){
            $(this).find("h2").stop().fadeOut("slow");
            $(this).find("p").stop().fadeOut("slow");
    });
});