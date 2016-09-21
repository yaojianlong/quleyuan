define(['baidu','iscroll','lazy'],function(baidu,iscroll,lazy){
	function list(){
		var str = 'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城';
		var rank='';
		var myScroll=null;
		function data(str,rank){
			$.get(str,function(res){
				var arr = JSON.parse(res).data;
				//点击排序
				if(rank!=''&&rank=="离我最近"){
					var strRank = JSON.stringify(arr);
					var arrRank = JSON.parse(strRank); 
					arrRank.sort(function(a,b){
						return Number(a.dist) - Number(b.dist)
					});
					setData(arrRank);
					return;
				};
				setData(arr);
				 if(myScroll==null){
 					scrollFunc();
 				};
			});
			function setData(arr){
				$('.leyuan_img_list').empty();
				 for(var i = 0;i<arr.length;i++){
					var objLi = $('<li><img class="leyuan_img_bg lazy" data-original="'+arr[i].img+'"/><div class=""><p class="leyuan_img_name"></p><p class="address"</p></div><div class="space"><p class="iconfont icon_1">&#xe616;</p><p class="dist"></p></div></li>');
					// objLi.find('.leyuan_img_bg').attr('src',arr[i].img);
					objLi.find('.leyuan_img_name').text(arr[i].name);
					objLi.find('.address').text(arr[i].address);
					objLi.find('.dist').text(arr[i].dist);
					$('.leyuan_img_list').append(objLi);
				}
			//懒加载
				$(".lazy").lazyload({
     				effect : "fadeIn",
     				effectspeed:500
 				});
 			//调用滚动刷新
 				// if(myScroll==null){
 				// 	scrollFunc();
 				// };
			};
		};
		data(str,rank);
			$('.leyuan_nav_list .leyuan_list_item').eq(0).css('border-bottom','2px solid red');
			//
			$('.city_list').hide();
			$('.zhebu').hide();
			//分类点击事件
			var fenlei = false;
			$('.fenlei').on('click',function(){
				if(fenlei){
					$('.leyuan_fenlei').hide();
					$('.zhebu').hide();
					$('body').css('overflow','scroll');
					fenlei = false;
					console.log('hide')
				}else{
					$('.leyuan_fenlei').show();
					$('.zhebu').show();
					$('body').css('overflow','hidden');
					$('.city_list').hide();
					$('.leyuan_paixu').hide();
					city=false;
					paixu=false;
					fenlei = true;
				}
				$(this).css('border-bottom','2px solid red');
				$(this).siblings().css('border-bottom','none');

			})
			//
			$('.leyuan_list_item').siblings().on('click',function(){	
				$(this).css('border-bottom','2px solid red');
				$(this).siblings().css('border-bottom','none');
			})
			//
			$('.leyuan_fenlei li').on('click',function(){
				$('.leyuan_fenlei').hide();
				$('.zhebu').hide();
				$('.fenlei').text($(this).text());
				$('body').css('overflow','scroll');
				fenlei = false;
			})

			//遮罩点击
			$('.zhebu').on('click',function(event){
				event.stopPropagation();
				$('.city_list').hide();
				$('.leyuan_paixu').hide();
				$('.leyuan_fenlei').hide();
				$(this).hide();
				$('body').css('overflow','scroll');
				city = false;
				paixu = false;
				fenlei = false;
			});		
			//城市点击事件
			var city=false;
			$('.allcity').on('click',function () {
				if(city){
				$('.zhebu').hide();
				$('body').css('overflow','scroll');
				$('.city_list').hide();
				city=false;
				}else{
				$('.zhebu').show();
				$('body').css('overflow','hidden');
				$('.city_list').show();
				$('.leyuan_fenlei').hide();
				$('.leyuan_paixu').hide();
				paixu=false;
				fenlei=false;
				city=true;
				}
	
			})
			//切换具体城市
			$('.city_list li').on('click',function(){
				$('.allcity').text($(this).text());
				var cityname=$(this).text();
				//切换地区
				str='http://duif.applinzi.com/leyuan/leyuan_data.php?address='+cityname+'';
				data(str,rank);
				$('.city_list').hide();
				$('.zhebu').hide();
				$('body').css('overflow','scroll');
				city=false;
			})
			//排序点击
			var paixu=false;
			$('.paixu').on('click',function(){
				if(paixu){
				$('.zhebu').hide();
				$('body').css('overflow','scroll');
				$('.leyuan_paixu').hide();
				paixu=false;
				}else{
				$('.zhebu').show();
				$('body').css('overflow','hidden');
				$('.city_list').hide();
				$('.leyuan_fenlei').hide();
				$('.leyuan_paixu').show();
				paixu=true;
				fenlei=false;
				city=false;
				}
			});
			$('.leyuan_paixu li').on('click',function(){
				$('.paixu').text($(this).text());
				rank=$(this).text();
				data(str,rank);
				$('.leyuan_paixu').hide();
				$('.zhebu').hide();
				$('body').css('overflow','scroll');
				paixu=false;
			})
			//
		function scrollFunc(){
		//实例化一个 IScroll 对象
		myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true});
		
		myScroll.on('scroll',function(){		
			console.log('scroll')
			/**
			 * iscroll 禁止了容器的 scroll，而通过touch事件做动画来移动容器内部元素，
			 * 因此 lazyload 的scroll事件无法触发，在此手动触发容器的scroll事件
			 */
			 $("#wrapper").trigger('scroll');		
		});
		
		myScroll.on("slideDown",function(){
			if(this.y > 40){
				console.log('slide down')
			}
		});
	
		myScroll.on("slideUp",function(){
			if(this.maxScrollY - this.y > 40){
				console.log('load data')
				// //上拉加载数据
				// getData(address);
				// //刷新
				// myScroll.refresh();
			}
		});
	}
	//
	};
	return{
		'list':list
	}

})