var inter = {
	root: {},

	initialization: function (root) {
		var er = inter.root = root;

		er.hand.visible = false;
		er.hand.alpha = 0;
		er.boxtop.alpha = 0;
		er.card.alpha = 0;
		er.card.x = 284;
		er.box.alpha = 0;

		setTimeout(start, 500);

		function start() {
			createjs.Tween.get(er.boxtop).to({ alpha: 1 }, 2000, createjs.Ease.quartOut);
			createjs.Tween.get(er.card).wait(1000).to({ alpha: 1 }, 1000, createjs.Ease.quartOut).to({ x: 444 }, 1000, createjs.Ease.quartOut).call(handAnim);
			createjs.Tween.get(er.box).to({ alpha: 1 }, 2000, createjs.Ease.quartOut);
		}

		function handAnim() {
			er.hand.visible = true;			
			er.hand.y =-673;
			//er.hand.fon.y=-5;
			//createjs.Tween.get(er.hand.fon).to({ y:0 }, 1000, createjs.Ease.quartOut);
			createjs.Tween.get(er.hand).to({ y:-675, alpha: 1 }, 1000, createjs.Ease.quartOut).call(fin);

			function fin() {
				er.hand.gotoAndPlay(1);
			}
		}

		if (window.addEventListener) {
			window.addEventListener("message", listener);
		} else {
			// IE8
			window.attachEvent("onmessage", listener);
		}

		function listener(event) {			
			if (event.data == 'start') {											
				start();
			}				
		}

		er.visible = true;
	},
	end: function()
	{
		console.log("end")
	}

}