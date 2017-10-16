/*使用jqzoom*/
$(function(){
	$(".jqzoom").jqueryzoom({
		xzoom:400, //放大图的宽度(默认是 200)
		yzoom:400, //放大图的高度(默认是 200)
		offset:20, //离原图的距离(默认是 10)
		position:"right", //放大图的定位(默认是 "right")
		preload:1   
	});
});
/*衣服尺寸选择*/
$(function(){
	$(".pro_size li span").click(function(){
		$(this).parents("ul").siblings("strong").text(  $(this).text() );
	})
})
/*数量和价格联动*/
$(function(){
    var $span = $("div.pro_price span");
	var price = $span.text();	
	$("#num_sort").change(function(){
	    var num = $(this).val();
		var amount = num * price;
		$span.text( amount );
	}).change();
})
/*最终购买输出*/
$(function(){
    var $product = $(".pro_detail_right");
	$("#cart a").click(function(){
        var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color =  $(".color_change strong").text();
		var pro_num = $product.find("#num_sort").val();
	    var pro_price = $product.find(".pro_price span").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
				"尺寸是："+pro_size+"；\n"+
				"颜色是："+pro_color+"；\n"+
				"数量是："+pro_num+"；\n"+
				"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})
/*商品评分效果*/
$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
})
/*衣服颜色切换*/
$(function(){
	$(".color_change ul li img").click(function(){           
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;
		  var imgSrc_big = imgSrc + "_one_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		  var url = imgSrc+".html";
		  $(".pro_detail_left ul.imgList")
				.empty()
				.load(url);
	});
});
/*tab切换*/
$(function(){
	$(".tab li").click(function(){
		$(this).addClass("selected").siblings().removeClass();
/*		if(!$("li").hasClass("aa")){
			var $index=$("li.selected").index();
			$("li.selected").parents(".tab_menu").siblings().children("div").eq($index)
			.animate({left:"16px"},1000,function(){
				$(".tab_box div").eq($(this).index()).addClass("active").siblings()
				.removeClass();
			})
		}*/
		
		/*var $left=$position.left;*/
		/*var $sib=$(".tab_box div").eq($(this).index()).siblings();
		var $position=$sib.position().left;
		$sib.removeClass();*/
		$(".tab_box div").eq($(this).index()).addClass("active").siblings().removeClass()
		/*if($position=="-1182"){
			$(".tab_box div").eq($(this).index()).addClass("active")
			console.log(1)
		}*/
	})
})
