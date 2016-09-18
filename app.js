require.config({
	//baseUrl:'./js',
	paths:{
		jquery:['./js/jquery-1.12.3'],
		underscore:'./js/underscore',
		backbone:'./js/backbone',
		router:'./js/router',
		text:'./js/text',
		css:'./js/css',
		swiper:'./js/swiper.min',
		home:'./component/home/home',
		me:'./component/me/me'
		// touch:'http://touch.code.baidu.com/touch-0.2.14.min'
	},
	shim:{
		'swiper':{
			exports:"swiper"
		},
		'home' : {
			exports: "home"
		},
		'me' : {
			exports: "me"
		},
		'swiper':{
			deps:['jquery']
		}
		// 'touch':{
		// 	exports:"touch"
		// }
	}

})

require(['jquery','backbone','router','swiper','home','me'],function($,bckbome,router,slider){
	Backbone.history.start();
	
})