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
    $(".hd ul li a").on("click",function() {
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        $(".bd1").eq($(this).parent().index()).addClass("xianshi").siblings().removeClass("xianshi");

    });

});
