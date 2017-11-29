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
 * target
 */
var A = {
	receiveFlower:function(flower){
		console.log("收到花:" + flower);
	}
};

xiaoming.sendFlower(A);
