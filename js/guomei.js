$(document).ready(function(){
	// 导航的移入移出
	$(".block").on("mouseover",function(){
		var index=$(this).index();
		$(".border").eq(index).css("display","block");
		$(".hidden").eq(index).css("display","block");
	})
	$(".block").on("mouseout",function(){
		var index=$(this).index();
		$(".border").eq(index).css("display","none");
		$(".hidden").eq(index).css("display","none");
	})
	// 侧导航的选项卡
	$(".ban-left .left").hover(function(){
		var index=$(this).index();
		$(".ban-left .left").eq(index).css("background","#FBFBFB");
		$(".left .jiayong").eq(index).css("color","#888")
		$(".ban-left .classa").eq(index).css("display","block");
	},function(){
		var index=$(this).index();
		$(".ban-left .left").eq(index).css("background","");
		$(".left .jiayong").eq(index).css("color","")
		$(".ban-left .classa").eq(index).css("display","none");
	})
	// 楼层选项卡
	$(".one .option-nav").on("mouseover",function(){
		var index=$(this).index();
		$(".one .option-nav a").removeClass("oneaaa").eq(index).addClass("oneaaa")
		$(".one .option-lis").removeClass("option-lis-first").eq(index).addClass("option-lis-first");
	})
	$(".two .option-nav").on("mouseover",function(){
		var index=$(this).index();
		$(".two .option-nav a").removeClass("oneaaa").eq(index).addClass("oneaaa")
		$(".two .option-lis").removeClass("option-lis-first").eq(index).addClass("option-lis-first");
	})
	$(".three .option-nav").on("mouseover",function(){
		var index=$(this).index();
		$(".three .option-nav a").removeClass("oneaaa").eq(index).addClass("oneaaa")
		$(".three .option-lis").removeClass("option-lis-first").eq(index).addClass("option-lis-first");
	})
	$(".four .option-nav").on("mouseover",function(){
		var index=$(this).index();
		$(".four .option-nav a").removeClass("oneaaa").eq(index).addClass("oneaaa")
		$(".four .option-lis").removeClass("option-lis-first").eq(index).addClass("option-lis-first");
	})
	$(".five .option-nav").on("mouseover",function(){
		var index=$(this).index();
		$(".five .option-nav a").removeClass("oneaaa").eq(index).addClass("oneaaa")
		$(".five .option-lis").removeClass("option-lis-first").eq(index).addClass("option-lis-first");
	})
	// 楼层里的轮播
	jQuery.extend({
		lunbo:function(img,left,right,cli,box){
			var n=0;
			var next=0;
			var flag=true;
			var t=setInterval(move,3000);
			function move(){
				if(!flag){
					return;
				}
				flag=false;
				next=n+1;
				if(next>=img.length){
					next=0;
				}
				img.eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
					flag=true;
				});
				cli.removeClass("first").eq(next).addClass("first");
				n=next;
			}
			left.on("click",function(){
				if(!flag){
					return;
				}
				flag=false;
				next=n-1;
				if(next<0){
					next=img.length-1;
				}
				img.eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
					flag=true;
				});
				cli.removeClass("first").eq(next).addClass("first")
				n=next;
			})
			right.on("click",function(){
				move();
			})
			box.on("mouseover",function(){
				clearInterval(t);
			})
			box.on("mouseout",function(){
				t=setInterval(move,3000);
			})
		}
	})
	
	$.lunbo($(".one .img"),$(".one .left"),$(".one .right"),$(".one .cli"),$(".one .img-box"))
	$.lunbo($(".two .img"),$(".two .left"),$(".two .right"),$(".two .cli"),$(".two .img-box"))
	$.lunbo($(".three .img"),$(".three .left"),$(".three .right"),$(".three .cli"),$(".three .img-box"))
	$.lunbo($(".four .img"),$(".four .left"),$(".four .right"),$(".four .cli"),$(".four .img-box"))
	$.lunbo($(".five .img"),$(".five .left"),$(".five .right"),$(".five .cli"),$(".five .img-box"))
	// banner轮播
	var x=0;
	var y=0;
	var time=setInterval(move,3000);
	function move(){
		y=x+1;
		if(y>$(".cbox .imga").length-1){
			y=0;
		}
		$(".cbox .imga").eq(x).animate({"opacity":0},600).end().eq(y).animate({"opacity":1},600);
		$(".cbox .lisb").eq(x).removeClass("lisb-one").end().eq(y).addClass("lisb-one");
		$(".cbox .lisc").eq(x).removeClass("lisc-one").end().eq(y).addClass("lisc-one");
		x=y;
	}
	$(".cbox").hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(move,3000);
	})
	$(".cbox .lisa").on("mouseover",function(){
		var index=$(this).index();
		$(this).stop(true)
		if(index==x){
			// $($(x).children()[1]).children(".p").on("mouseover",function(){
			// 	var indexa=$(this).index();
			// 	$($(x).children()[1]).children(".p").removeClass("pp").eq(indexa).addClass("pp");
				
			// })
			return;
		}else{
			$(".cbox .lisb").removeClass("lisb-one").eq(index).addClass("lisb-one");
			$(".cbox .lisc").removeClass("lisc-one").eq(index).addClass("lisc-one");
			$(".cbox .imga").animate({"opacity":0},50).eq(index).animate({"opacity":1},50);
		}
		// $($(this).children()[1]).children(".p").on("mouseover",function(){
		// 	var indexa=$(this).index();
		// 	$($(this).children()[1]).children(".p").eq(indexa).css({"height": "5px","background": "#EB481F","margin-top": "13px"})
		// 
		x=index;
	})
	$(".you").on("click",function(){
		move();
	})
	$(".zuo").on("click",function(){
		y=x-1;
		if(y<0){
			y=$(".cbox .imga").length-1;
		}
		$(".cbox .imga").eq(x).animate({"opacity":0},600).end().eq(y).animate({"opacity":1},600);
		$(".cbox .lisb").eq(x).removeClass("lisb-one").end().eq(y).addClass("lisb-one");
		$(".cbox .lisc").eq(x).removeClass("lisc-one").end().eq(y).addClass("lisc-one");
		x=y;
	})
})
// 懒加载
jQuery(document).ready(function($){
	$("img").lazyload({
	 	   effect : "fadeIn",
	 	   event:"scroll",
	 	   threshold:200
	 });
})
// 楼层跳转
jQuery(document).ready(function($){
	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < $(".beauty").length; i++) {
		var juli=$(".beauty").eq(i).position();
		$(".beauty").eq(i).prop("h",juli.top);
	}
	$(window).on("scroll",function(){
		var top=$(window).scrollTop()
		if(top>=$(".beauty").first().prop("h")-300){
			$(".tiao").css("display","block")
			
		}
		if(top<$(".beauty").first().prop("h")-300){
			$(".tiao").css("display","none")
		}
		for (var i = 0; i < $(".beauty").length; i++) {
			if(top>=$(".beauty").eq(i).prop("h")-200){
				$(".lou").eq(i).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
				$(".lou").eq(i).find(".sanjiao").css("display","block").end().siblings().find(".sanjiao").css("display","none")
			}
		}
	})
	$(".lou").on("click",function(){
			var index=$(this).index();
			var hh=$(".beauty").eq(index-1).prop("h")
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
			$(this).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
			$(this).find(".sanjiao").css("display","block").end().siblings().find(".sanjiao").css("display","none")
			now=index;
		})
		$(".lou").hover(function(){
			$(this).find("span").css("color","#c00")
			$(this).find(".sanjiao").css("display","block")
		},function(){
			if($(this).index()==now){
				return;
			}
			$(this).find("span").css("color","#666")
			$(this).find(".sanjiao").css("display","none")
		})
		$(".back").on("click",function(){
			$('body,html').animate({
            scrollTop: 0
	        },
	        800);
	        return false;  
		})

})		
