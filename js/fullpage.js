$(document).ready(function(){
    
    var winHeight = 0;
    var headerHeight;
    var count = 0;
    var $lastHeight;
    var lastIndex;
    var activeIndex = 0;

    // -----------------------------------------------------
    function $wh(){
        winHeight=$(window).height();

        windowWidth=$(window).width();
        $(".section").css({
            height:winHeight
        });
        headerHeight=0;

        $(".section").eq(0).css({
            height:winHeight-headerHeight
        })
        lastIndex=$(".section").length-1;
        $lastHeight=$(".section").eq(lastIndex).offset().top;
        
    }
    $wh();

    // 브라우저 높이 변경되면 처리할 재설정----------------------------------------------
    $(window).resize(function(){
        $wh()
        wheel();
        $("html,body").stop().animate({
            scollTop:winHeight*activeIndex
        });

    })

    function $click(){
        $wh();
        $(".side_nav p").each(function(index){
            $(this).on("click",function(){

                var hash=$(this.hash).offset().top;
                $("html,body").stop().animate({
                    scrollTop:hash
                },800)
                activeIndex=index;
                console.log(" activeIndex=index; : "+activeIndex)
                $active()
                $animation();
            })
        })
        $active();
    }
    $click();


    //사이드 네비게이션 이벤트-----------------------------------------------------------
    $(".side_nav p").removeClass("active")
    function $active(){
        $(".side_nav p").removeClass("active")
        $(".side_nav p").eq(activeIndex).addClass("active")
        $(".side_nav p").removeClass("active")
        $(".side_nav p").eq(activeIndex).addClass("active")
        if(activeIndex==0){
            $(".side_nav p").removeClass("active")
        }

        }
        $active();

        function $animation(){
            $(".section").find("*").removeClass("active");
            $(".section").eq(activeIndex).find("#contents1").addClass("active");
            $(".section").eq(activeIndex).find("#contents2").addClass("active");
            $(".section").eq(activeIndex).find("#contents3").addClass("active");
            $(".section").eq(activeIndex).find("#contents4").addClass("active");
            $(".section").eq(activeIndex).find("#contents5").addClass("active");
        }
        $animation();
        
// 휠 함수
function wheel(){
    console.log("휠함수 실행")

    // 휠을 올렸을때 동작-------------------------------
    $(".section").each(function(index){
        $(this).on("DOMMouseScroll mousewheel", function(e){
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ){
                if($(this).prev() != undefined){
                    var moveTop = $(this).prev().offset().top;
                    activeIndex=index-1;
                   
                    if(activeIndex==0){
                    $(".side_nav p").stop().fadeOut().removeClass("plus-ani");
                    // $("header").css({top:0})
                    }  
                 
                }
                
            }else{
                if($(this).next() != undefined){
                    var moveTop=$(this).next().offset().top;
                    activeIndex=index+1;
                    // 휠을 내렸을 때 애니메이션 할 위치
                    $(".side_nav p").stop().fadeIn().addClass("plus-ani")
                    $(".side_nav p").removeClass("active")
                    $(".side_nav p").eq(count).addClass("active ")
                    // $("header").css({top:-100})                
                }
            }
            $active();
            $animation();
            $("html,body").stop().animate({
                scrollTop:moveTop
            },800);    
            return false; 
        })
        
    })   

 }
 wheel();

// 헤더부분 드롭메뉴
$(function(){
    $(".h_nav > ul > li").mouseover(function(){        
        $(".submenu").stop().slideDown(300);  
        $("#header").addClass("on");  
    });

    $(".h_nav > ul > li").mouseout(function(){
        $(".submenu").stop().slideUp(100);
        $("#header").removeClass("on");  
    });
})

})