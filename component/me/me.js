define([],function(){
	function me(){
		$('.tucao_btn').on('click',function(){
			$('.tucao').css('display','block');
			// $('#container').css({
			// 	'background':'rgba('+0+','+ 0+','+0+','+ 0.8+')',
			// })
		})
		$('#btn').on('click',function(){
			$('.tucao').css('display','none');
		})
	}
	return{
		'me':me
	}
})