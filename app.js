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
		me:'./component/me/me',
		iscroll:'./js/iscroll',
		lazy:'./js/jquery.lazyload.min',
		baidu:'./js/baiduTemplate',
		index:'./index'
		// touch:'http://touch.code.baidu.com/touch-0.2.14.min'
	},
	//非AMD模块
	shim:{
		'lazy':{
			deps:['jquery']
		},
		'baidu':{
			exports:"baidu"
		},
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
		},
		'iscroll':{
			exports:"iscroll"
		},
		'iscroll':{
			deps:['jquery']
		}
		// 'touch':{
		// 	exports:"touch"
		// }
	}

})

require(['jquery','index','backbone','router','swiper','home','me','iscroll'],function($,index,bckbome,router,slider){
	Backbone.history.start();
	
})