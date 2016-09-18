define([],function(){
	function list(){
		$.get('http://duif.applinzi.com/leyuan/leyuan_data.php?address=%E5%85%A8%E5%9F%8E',function(res){
			
			var arr = JSON.parse(res).data;
			setData(arr);
		});
		function setData(arr){
			 for(var i = 0;i<arr.length;i++){
				var objLi = $('<li><img class="leyuan_img_bg" src=""/><div class=""><p class="leyuan_img_name"></p><p class="address"</p></div><div class="space"><p class="iconfont icon_1">&#xe616;</p><p class="dist"></p></div></li>');
				objLi.find('.leyuan_img_bg').attr('src',arr[i].img);
				objLi.find('.leyuan_img_name').text(arr[i].name);
				objLi.find('.address').text(arr[i].address);
				objLi.find('.dist').text(arr[i].dist);
				$('.leyuan_img_list').append(objLi);
			}
		}
			$('.leyuan_nav_list li').eq(0).css('border-bottom','2px solid red');
			$('.leyuan_nav_list li').on('click',function(){
				if($(this).index()==1){
					$('.city_list').css('display','block');
					$('.leyuan_img').css({
						'background':'#000',
						'opacity':'0.7'
					});

				}else{
					$('.city_list').css('display','none');
				}
				$(this).css('border-bottom','2px solid red');
				$(this).siblings().css('border-bottom','none');
			})
	

	};
	return{
		'list':list
	}

})