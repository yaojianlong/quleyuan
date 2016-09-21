define(['swiper','iscroll','lazy','baidu'],function(swiper,iscroll,lazy,baidu){
	
	 // $(function(){
	 	
	 	function slider(){
	 		$.get('http://duif.applinzi.com/leyuan/home_data.php',function(res){
	 				var obj = JSON.parse(res);
	 				setData(obj);
	 		})	
	 		// var myScroll = null;
	 		function setData(obj){
				for(var i = 0;i<obj.slider.length;i++){
				var objDiv = $('<div class="swiper-slide"><img src="" alt="" /></div>');
				objDiv.find('img').attr('src',obj.slider[i].img);
				$('.swiper-wrapper').append(objDiv);
				};
				//
				for(var i = 0; i <obj.arealist.length;i++){
					var objLi = $('<li><img src="" alt=""></li>');
					objLi.find('img').attr('src',obj.arealist[i].img);
					$('.home_class_list').append(objLi);
				};
				//
				for(var i = 0;i<obj.reclist.length;i++){
					var objLi1 = $('<li><img data-original="'+obj.reclist[i].img+'" alt="" class="lazy"></li>');
					$('.home_img_list').append(objLi1);
				};
				//懒加载
				$(".lazy").lazyload({
     				effect : "fadeIn",
     				effectspeed:500
 				});
 				///////////
 				// if(myScroll == null){
				 //   	 	scrollFunc();
				 //  }
				
				//轮播图
				var mySwiper = new Swiper('.swiper-container', {
		    		paginationclickable:true,
					pagination: '.swiper-pagination',
		    		slidesPreView:1,
		    		centeredSlides:true,
		    		autoplay:500,
		    		loop:true,
		    		autoplayDisableOnInteraction:false
				});
			};
		};
///////////////////
	// function scrollFunc(){
		
	// 	//实例化一个 IScroll 对象
	// 	myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true});
		
	// 	myScroll.on('scroll',function(){		
	// 		console.log('scroll')
	// 		*
	// 		 * iscroll 禁止了容器的 scroll，而通过touch事件做动画来移动容器内部元素，
	// 		 * 因此 lazyload 的scroll事件无法触发，在此手动触发容器的scroll事件
			 
	// 		 $("#wrapper").trigger('scroll');		
	// 	});
		
	// 	// myScroll.on("slideDown",function(){
	// 	// 	if(this.y > 40){
	// 	// 		console.log('slide down')
	// 	// 	}
	// 	// });
	
	// 	// myScroll.on("slideUp",function(){
	// 	// 	if(this.maxScrollY - this.y > 40){
	// 	// 		myScroll.refresh();
	// 	// 	}
	// 	// });
	// }


/////////////
		return{
			'slider':slider,
			// 'scroll':scroll
		};


	// })
})