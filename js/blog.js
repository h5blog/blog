define(["zepto"],function($){
    $("#listPage").find("#"+nowPage).addClass("active");
    $('body').delegate('.linkTab','click',function(){
        var tag=$(this).attr("id");
        location.href=tag+".html?tag="+tag
    })
})