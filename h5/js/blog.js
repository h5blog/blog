var nowPage=location.href.split("blog/h5/")[1].split(".html")[0];
var listPage=document.querySelector("#listPage");
if(nowPage){
    listPage.querySelector("#"+nowPage).setAttribute("class","linkTab active");
}else{
	listPage.querySelector("#prototype").setAttribute("class","linkTab active");
}
document.querySelector("#listPage").addEventListener("click",function(event){
    var ele=event.target;
    if ((ele.className).indexOf("linkTab")>=0) {
    	var hrefStr=ele.getAttribute("href");
        if(hrefStr){
        	location.href=hrefStr;
        }else{
	        location.href=ele.getAttribute("id")+".html";
	    }
	}
});
