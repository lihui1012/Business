/*nav*/
$(function(){
	$(".menu").hide()
	$("header li").hover(function(){
		$(this).find("div.menu").stop().slideDown()
	},function(){
		$(this).find("div.menu").stop().slideUp()
	})
})
/*banner*/
$(function(){
     var len  = $(".num > li").length;  
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);//index  =   $(this).index()
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入停止动画，滑出开始动画.
	 $('.ad').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			 	index++;
			 	if(index==len){index=0;}
			    showImg(index)
			  } , 3000);
	 }).trigger("mouseleave");
})
//通过控制top ，来显示不同的幻灯片
function showImg(index){
        var adWidth = $(".ad").width();
		$(".slider").stop(true,false).animate({left:-adWidth*index},1000);
		$(".num li").removeClass("on").eq(index).addClass("on");
}