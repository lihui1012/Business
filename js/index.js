
//01 新闻滚动 
$(function(){
        var $this = $(".scrollnews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}
//折叠
$(function(){
	$(".slide").click(function(){
		$(this).next().slideToggle()
		.end().children("span").toggleClass("on");
	})
	$(".product").find("span").click(function(){
		$(this).next().slideToggle()
		.end().toggleClass("on")
	})
})
//show
$(function(){
	//向右
		$("span.next").click(function(){
			var $v_content_list=$(this).parent().siblings(".show_content").children("ul");
			var $v_width=$v_content_list.find("li").width()+21;//宽
			if(!$v_content_list.is(":animated")){
				$v_content_list.animate({left:"-="+$v_width},"slow",function(){
					$v_content_list.css("left","0").find("li:first").appendTo($v_content_list)
				})
			}
		})
		//向左
		$("span.prev").click(function(){
			var $v_content_list=$(this).parent().siblings().children("ul");
			if(!$v_content_list.is(":animated")){
				$v_content_list.find("li:last").prependTo($v_content_list);
				$v_content_list.css("left","-372px").animate({left:"0"},"slow")
				
			}
		})
})
//bottom
$(function(){
	//向右
		$("span.b_next").click(function(){
			var $v_content_list=$(this).parent().siblings().children("ul");
			var $v_width=$v_content_list.find("li").width();//宽
			if(!$v_content_list.is(":animated")){
				$v_content_list.animate({left:"-="+$v_width},"slow",function(){
					$v_content_list.css("left","0").find("li:first").appendTo($v_content_list)
				});
			}
		})
		//向左
		$("span.b_prev").click(function(){
			var $v_content_list=$(this).parent().siblings().children("ul");
			if(!$v_content_list.is(":animated")){
				$v_content_list.find("li:last").prependTo($v_content_list)
				$v_content_list.css("left","-400px").animate({left:"0"},"slow")
				
			}
		})
})