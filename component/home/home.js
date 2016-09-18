define(['swiper','iscroll','lazy','baidu'],function(swiper,iscroll,lazy,baidu){
	
	 // $(function(){
	 	
	 	function slider(){
	 		$.get('http://duif.applinzi.com/leyuan/home_data.php',function(res){
	 				var obj = JSON.parse(res);
	 				setData(obj);
	 				//
	 				var myScroll = new IScroll('#wrapper',{
						probeType:3,
						mouseWheel: true
					});
					// myScroll.on('silderDown',function(){
					// 	if(this.y>40){
					// 	console.log(this.y);
					// 	console.log('111');
					// 	}
					// })
					// myScroll.on('silderUp',function(){
					// 	if(this.maxScrollY - this.y > 40){
					// 	console.log(this.y);
					// 	console.log('111');
					// 	}
					// })
	 		})	

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
     				effectspeed:1000
 				});
				
				//轮播图
				var mySwiper = new Swiper('.swiper-container', {
		    		// nextButton:'.swiper-button-next',
		    		// prevButton:'swiper-button-prev',
		    		paginationclickable:true,
		//  		spaceBetween:30,
					pagination: '.swiper-pagination',
		    		slidesPreView:1,
		    		centeredSlides:true,
		    		autoplay:500,
		    		loop:true,
		    		autoplayDisableOnInteraction:false
				});

			};
		};
		//下拉滚动刷新
		// function scroll(){

			// };
//
		return{
			'slider':slider,
			// 'scroll':scroll
		};


	// })
})