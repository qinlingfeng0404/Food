$(function(){
    var $h_m_m=$(".h_m_m");
    var $h_m_main=$(".h_m_main");
    var i=1;
    $h_m_m.on("click",function(){
        i++;
        if(i%2==0){
            $h_m_m.find("span").css("color","red");
            $h_m_main.slideDown(2000);
            $h_m_m.find("i").animate({
                rotate:"180",
            },500);
        }else{
            $h_m_m.find("span").css("color","#000");
            $h_m_main.slideUp(2000);
            $h_m_m.find("i").animate({
                rotate:"0",
            },500);
        }
    });

});