define(['jquery'],function(){
	$('.footer_nav li').eq(0).find('a').css('color','red');
	$('.footer_nav li').on('click',function(){
		$(this).find('a').css('color','red');
		$(this).siblings().find('a').css('color','#000');
	});
	var timer = setTimeout(function(){
		$('.jiemain').fadeOut(1000);
	},500);
})