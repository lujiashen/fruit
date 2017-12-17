$(function() {
   $("#header_right").on("mouseover",function() {
       $("#car").show();
   }) .on("mouseout",function() {
       $("#car").hide();
   });

//    -----------------------------------------------------

    $("#header_nav ul li a").hover(function() {
        $(this).addClass("selected").parent().siblings().children().removeClass("selected");
    });

//    -----------------------------------------------------

    $("#header_nav ul li").on("mouseover",function() {
        var i=($(this).index()*110)+20;
        $("#line").stop().animate({
            left: i
        },"fast")

    });

//    -----------------------------------------------------
    $("#photo ul li").on("mouseover",function() {
       $(this).addClass("two").siblings().removeClass("two");
    });
    $("#photo ul li:first-child").on("mouseover",function() {
        $(".banner").stop(true,true).animate({
            left:0
        },"fast")
    });

    $("#photo ul li:last-child").on("mouseover",function() {
        $(".banner").stop(true,true).animate({
            left:-1440
        },"fast")
    });

//    -----------------------------------------------------
    var index=0;
    var newIndex=0;
    var timer;
    var len= $(".fruit_right a img").length;
    $(".fruit_right .shuzi li").on("click",function() {
        newIndex=$(this).index();
        changeImg();
    });
    function changeImg() {
        $(".fruit_right .shuzi li").eq(newIndex).addClass("show_num").siblings().removeClass("show_num");
        $(".fruit_right a img").eq(newIndex).stop(true,true).fadeIn().addClass("show").parent().siblings().children().fadeOut().removeClass("show");
    }
    $(".fruit_right").on("mouseover",function() {
        stop();
    }).on("mouseout",function() {
        play();
    });
    function play() {
        timer=setInterval(function() {
            index++;
            if(index==len) {
                index=0;
            }
            $(".fruit_right .shuzi li").eq(index).addClass("show_num").siblings().removeClass("show_num");
            $(".fruit_right a img").eq(index).stop(true,true).fadeIn().addClass("show").parent().siblings().children().fadeOut().removeClass("show");
        },2000)
    }
    play();
    function stop() {
        clearInterval(timer);
    }






























































});

