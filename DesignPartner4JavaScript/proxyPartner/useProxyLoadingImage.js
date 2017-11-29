/**
 * @author wsk
 */

/**
 * target
 */
var myImage = (function() {
	var imgNode = document.createElement("img");
	//var body = document.getElementsByTagName("body")[0];
	document.body.appendChild(imgNode);
	return {
		setSrc : function(src) {
			imgNode.src = src;
		}
	};
})();

/**
 * proxy
 */
var proxyImage = (function() {
	var img = new Image();
	img.onload = function() {
		//因为onload方法执行的上下文为img对象，所以这里可以使用this.src指代img.src。
		myImage.setSrc(this.src);
	}
	return {
		setSrc : function(src) {
			myImage.setSrc("../imgs/loading.gif");
			setTimeout(function() {
				img.src = src;
			}, 5000);
		}
	}
})();

proxyImage.setSrc("../imgs/fish.png");
