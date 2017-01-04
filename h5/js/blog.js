define(["zepto"],function($){
    $("#listPage").find("#"+nowPage).addClass("active");
    $('body').delegate('.linkTab','click',function(){
        var tag=$(this).attr("id");
        if($(this).attr("href")){
        	location.href=$(this).attr("href");
        }else{
	        location.href=tag+".html";
	    }
    })
})