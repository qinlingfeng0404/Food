/*轮播图*/
$(function(){
    var timer;
    var i=0;
    var $img=$(".banner_img>img");
    var $length=$(".banner_img>img").length-1;
    function imgleft(){
        if(i<$length){
            $img.eq(i).css("display","none").next().css("display","block");
            i++;
        }else{
            $img.eq($length).css("display","none");
            $img.eq(0).css("display","block");
            i=0;
        }
    }
    function imgright(){
        if(i>0){
            $img.eq(i).css("display","none").prev().css("display","block");
            i--;
        }else{
            $img.eq($length).css("display","block");
            $img.eq(0).css("display","none");
            i=$length;
        }
    }
    $(".left").on("click",function(){
        clearInterval(timer);
        imgleft();
    });
    $(".right").on("click",function(){
        clearInterval(timer);
        imgright();
    });
    $(".left").hover(
        function(){
            $(this).css({
                "background":"rgba(0,0,0,0.2)",
                "color":"#FFF"
            });
        },function(){
            $(this).css({
                "background":"rgba(255,255,255,0)",
                "color":"#CCC"
            });
        }
    );
    $(".right").hover(
        function(){
            $(this).css({
                "background":"rgba(0,0,0,0.2)",
                "color":"#FFF"
            });
        },function(){
            $(this).css({
                "background":"rgba(255,255,255,0)",
                "color":"#CCC"
            });
        }
    );
    $(".banner").hover(
        function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(imgleft,1500);
        }
    );
    timer=setInterval(imgleft,1500);
});
/*轮播图的菜单*/
$(function(){
    var $li=$(".banner>ul>li");
    var $banner_div=$(".banner_div");
    $li.each(function(index){
        $(this).hover(
            function(){
                $(this).css("background","rgba(255,255,255,0.4)");
                $(this).find("i").css("color","red").siblings().css("color","red");
                $banner_div.eq(index).css("display","block");
            },function(){
                $(this).css("background","rgba(0,0,0,0.0)");
                $(this).find("i").css("color","#FFF").siblings().css("color","#FFF");
                $banner_div.eq(index).css("display","none");
            }
        );
    });
    $banner_div.each(function(index){
        $(this).hover(
            function(){
                $li.eq(index).css("background","rgba(255,255,255,0.4)");
                $li.eq(index).find("i").css("color","red").siblings().css("color","red");
                $(this).css("display","block");
            },function(){
                $li.eq(index).css("background","rgba(0,0,0,0.0)");
                $li.eq(index).find("i").css("color","#FFF").siblings().css("color","#FFF");
                $(this).css("display","none");
            }
        );
    });
});
/*栏目*/
$(function(){
    $column_main=$(".column_main");
    $column_main.eq(0).find("p").each(function(index){
        $(this).click(function(){
            $(this).addClass("c_h_p").siblings("p").removeClass("c_h_p");
            $column_main.eq(0).find("ul").eq(index).css("display","block").siblings("ul").css("display","none");
            $(this).siblings("span").animate({
                left: (index+0)*52,
            },500);
        });
    });
    $column_main.eq(1).find("p").each(function(index){
        $(this).click(function(){
            $(this).addClass("c_h_p").siblings("p").removeClass("c_h_p");
            $column_main.eq(1).find("ul").eq(index).css("display","block").siblings("ul").css("display","none");
            $(this).siblings("span").animate({
                left: (index+0)*52,
            },500);
        });
    });
});
/*菜单*/
$(function(){
    var $p=$(".list_header>p");
    var $list_header=$(".list_header");
    var $ta=$(".list_img>table");
    $(".list_header").eq(0).find("p").each(function(index){
        $(this).click(function(){
            if(index==2){
                $(this).addClass("l_h_p").siblings("p").removeClass("l_h_p");
                $ta.eq(index).css("display","block").siblings("table").css("display","none");
                $ta.eq(3).css("display","block");
                $list_header.eq(0).find("span").animate({
                    left: index*98,
                    width: "160px"
                },1000);
            }else{
                $(this).addClass("l_h_p").siblings("p").removeClass("l_h_p");
                $ta.eq(index).css("display","block").siblings("table").css("display","none");
                $ta.eq(3).css("display","block");
                $list_header.eq(0).find("span").animate({
                    left: index*98,
                    width: "80px"
                },1000);
            }
        });
    });
});
$(function(){
    var $td = $(".list_img_ta>tbody>tr>td");
    $td.mouseover(function(){
            $(this).find("h2").stop().fadeIn("slow");
            $(this).find("p").stop().fadeIn("slow");
    });
        
    $td.mouseout(function(){
            $(this).find("h2").stop().fadeOut("slow");
            $(this).find("p").stop().fadeOut("slow");
    });
});