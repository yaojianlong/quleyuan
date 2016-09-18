define(['swiper'],function(swiper){
	
	 // $(function(){
	 	
	 	function slider(){
	 		$.get('http://duif.applinzi.com/leyuan/home_data.php',function(res){
	 				var obj = JSON.parse(res);
	 				setData(obj);
	 		})	

	 		function setData(obj){
				for(var i = 0;i<obj.slider.length;i++){
				var objDiv = $('<div class="swiper-slide"><img src="" alt="" /></div>');
				objDiv.find('img').attr('src',obj.slider[i].img);
				$('.swiper-wrapper').append(objDiv);
				}
				for(var i = 0; i <obj.arealist.length;i++){
					var objLi = $('<li><img src="" alt=""></li>');
					objLi.find('img').attr('src',obj.arealist[i].img);
					$('.home_class_list').append(objLi);
				}
				for(var i = 0;i<obj.reclist.length;i++){
					var objLi1 = $('<li><img src="" alt=""></li>');
					objLi1.find('img').attr('src',obj.reclist[i].img);
					$('.home_img_list').append(objLi1);
				}
				//
				var mySwiper = new Swiper('.swiper-container', {
		    		nextButton:'.swiper-button-next',
		    		prevButton:'swiper-button-prev',
		    		paginationclickable:true,
		//  		spaceBetween:30,
					pagination: '.swiper-pagination',
		    		slidesPreView:1,
		    		centeredSlides:true,
		    		autoplay:500,
		    		loop:true,
		    		autoplayDisableOnInteraction:false
				});
			}
		};

		return{
			'slider':slider
		};


	// })
})