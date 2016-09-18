define(['backbone'],function(backbone){
	var Router = backbone.Router.extend({
		routes:{
			'home':'homefunc',
			'leyuan':'leyuanfunc',
			'leyuanka':'leyuankafunc',
			'me':'mefunc',
			'account':'accountfunc',
			'dingdan':'dingdanfunc'
		},
		homefunc:function(){
			require(['text!component/home/home.html','css!component/home/home.css','component/home/home.js'],function(content,css,slider){
				$('#container').html(content);
				slider.slider();
				// slider.scroll();
			})
		},
		leyuanfunc:function(){
			require(['text!component/leyuan/leyuan.html','css!component/leyuan/leyuan.css','component/leyuan/leyuan.js'],function(content,csssss,list){
				$('#container').html(content);
				list.list();
			})
		},
		leyuankafunc:function(){
			require(['text!component/leyuanka/leyuanka.html','css!component/leyuanka/leyuanka.css'],function(content,css){
				$('#container').html(content);
			})
		},
		mefunc:function(){
			require(['text!component/me/me.html','css!component/me/me.css','component/me/me.js'],function(content,css,me){
				$('#container').html(content);
				me.me();
			})
		},
		accountfunc:function(){
			require(['text!component/me/account.html','css!component/me/account.css'],function(content,css){
				$('#container').html(content);
			})
		},
		dingdanfunc:function(){
			require(['text!component/me/dingdan.html','css!component/me/dingdan.css'],function(content,css){
				$('#container').html(content);
			})
		}

	});
	var router = new Router();
})