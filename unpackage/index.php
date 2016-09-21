<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx93b957aec7f731fd","ccc7f9d70490ec502e67e008427e76cb");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title></title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/iconfont.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/require.js" data-main="app"></script>
    <script type="text/javascript">
    	
   		document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			
   		});
   		
    </script>
</head>
<body>
	<div id="container"></div>
	<footer id="footer">
		<ul class="footer_nav">
			<li>
				<a href="#/home">
					<p class="iconfont nav_ico">&#xe611;</p>
					<p class="nav_item">首页</p>
				</a>
			</li>
			<li>
				<a href="#/leyuan">
					<p class="iconfont nav_ico">&#xe614;</p>
					<p class="nav_item">乐园</p>
				</a>
			</li>
		<li>
			<a href="#/leyuanka">
				<p class="iconfont nav_ico">&#xe613;</p>
				<p class="nav_item">乐享卡</p>
			</a>
		</li>
		<li>
			<a href="#/me">
				<p class="iconfont" id="nav_ico">&#xe612;</p>
				<p class="nav_item">我的</p>
			</a>
		</li>
		</ul>
	</footer>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>

  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
//      'onMenuShareTimeline',
//      'onMenuShareAppMessage',
//      'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
  wx.ready(function () {
    // 在这里调用 API
    
    wx.getLocation({
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    },
    cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
    }
});


  });
</script>
</html>