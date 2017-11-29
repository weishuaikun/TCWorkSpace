/**
 * @author wsk
 */
/**
 * @author wsk
 */
var Flower = function() {
};

/**
 * client
 */
var xiaoming = {
	sendFlower : function(target) {
		var flower = new Flower();
		target.receiveFlower(flower);
	}
};

/**
 * proxy
 */
var B = {
	receiveFlower:function(flower){
		//设置A处于好心情时的回调方法
		A.listenGoodMood(function(){
			A.receiveFlower(flower);
		});
	}
};

/**
 * target
 */
var A = {
	receiveFlower:function(flower){
		console.log("收到花:" + flower);
	},
	listenGoodMood:function(fn){
		setTimeout(function(){
			//10秒之后调用回调方法
			fn();
		},10000);
	}
};

xiaoming.sendFlower(B);
