(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bclose = function() {
	this.initialize(img.bclose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1122,684);


(lib.blose = function() {
	this.initialize(img.blose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,995,684);


(lib.bver = function() {
	this.initialize(img.bver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1989,1368);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,972,651);


(lib.cardbig = function() {
	this.initialize(img.cardbig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1944,1301);


(lib.code = function() {
	this.initialize(img.code);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,121);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,1062);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bclose();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,561,342), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.blose();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,497.5,342), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.code();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,107,121), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(67,94.6,0.5,0.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(67,-178.2,617.4,538.3), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bver();
	this.instance.parent = this;

	this.instance_1 = new lib.cardbig();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,2414,1368), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-243,-162.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243,-162.7,486,325.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.stop();
		inter.end();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(184).call(this.frame_184).wait(13));

	// Layer 3
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(2346.2,825.4,1,1,0,0,0,53.5,60.5);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,111,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.968},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.935},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.903},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.871},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.839},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.806},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.774},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.742},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.71},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.677},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.645},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.613},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.581},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.548},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.516},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.484},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.452},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.419},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.387},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.355},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.323},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.29},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.258},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.226},0).wait(1).to({scaleX:1.4,scaleY:1.4,alpha:0.194},0).wait(1).to({scaleX:1.42,scaleY:1.42,alpha:0.161},0).wait(1).to({scaleX:1.44,scaleY:1.44,alpha:0.129},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.097},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.065},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.032},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0},0).wait(12));

	// Layer 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2305.5,1039.5,1,1,0,0,0,157.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:375.7,regY:90.9,x:2523.6,y:864.9},0).wait(1).to({x:2523.4},0).wait(1).to({x:2523},0).wait(1).to({x:2522.5},0).wait(1).to({x:2521.9},0).wait(1).to({x:2521.1},0).wait(1).to({x:2520.1},0).wait(1).to({x:2519.1},0).wait(1).to({x:2517.9},0).wait(1).to({x:2516.6},0).wait(1).to({x:2515.2},0).wait(1).to({x:2513.7},0).wait(1).to({x:2512.1},0).wait(1).to({x:2510.4},0).wait(1).to({x:2508.7},0).wait(1).to({x:2506.9},0).wait(1).to({x:2505.1},0).wait(1).to({x:2503.2},0).wait(1).to({x:2501.3},0).wait(1).to({x:2499.3},0).wait(1).to({x:2497.4},0).wait(1).to({x:2495.5},0).wait(1).to({x:2493.6},0).wait(1).to({x:2491.7},0).wait(1).to({x:2489.9},0).wait(1).to({x:2488.1},0).wait(1).to({x:2486.4},0).wait(1).to({x:2484.7},0).wait(1).to({x:2483.2},0).wait(1).to({x:2481.7},0).wait(1).to({x:2480.4},0).wait(1).to({x:2479.1},0).wait(1).to({x:2478},0).wait(1).to({x:2476.9},0).wait(1).to({x:2476.1},0).wait(1).to({x:2475.3},0).wait(1).to({x:2474.7},0).wait(1).to({x:2474.2},0).wait(1).to({x:2473.9},0).wait(1).to({x:2473.7},0).wait(2).to({x:2473.8},0).wait(1).to({x:2474.1},0).wait(1).to({x:2474.5},0).wait(1).to({x:2475.1},0).wait(1).to({x:2475.8},0).wait(1).to({x:2476.6},0).wait(1).to({x:2477.6},0).wait(1).to({x:2478.7},0).wait(1).to({x:2479.9},0).wait(1).to({x:2481.3},0).wait(1).to({x:2482.7},0).wait(1).to({x:2484.2},0).wait(1).to({x:2485.8},0).wait(1).to({x:2487.5},0).wait(1).to({x:2489.3},0).wait(1).to({x:2491.1},0).wait(1).to({x:2493},0).wait(1).to({x:2494.9},0).wait(1).to({x:2496.8},0).wait(1).to({x:2498.7},0).wait(1).to({x:2500.6},0).wait(1).to({x:2502.5},0).wait(1).to({x:2504.4},0).wait(1).to({x:2506.3},0).wait(1).to({x:2508.1},0).wait(1).to({x:2509.9},0).wait(1).to({x:2511.6},0).wait(1).to({x:2513.2},0).wait(1).to({x:2514.7},0).wait(1).to({x:2516.1},0).wait(1).to({x:2517.5},0).wait(1).to({x:2518.7},0).wait(1).to({x:2519.8},0).wait(1).to({x:2520.8},0).wait(1).to({x:2521.6},0).wait(1).to({x:2522.3},0).wait(1).to({x:2522.9},0).wait(1).to({x:2523.3},0).wait(1).to({x:2523.6},0).wait(1).to({x:2523.7},0).wait(2).to({x:2523.5},0).wait(1).to({x:2523.2},0).wait(1).to({x:2522.7},0).wait(1).to({x:2522.1},0).wait(1).to({x:2521.3},0).wait(1).to({x:2520.5},0).wait(1).to({x:2519.4},0).wait(1).to({x:2518.3},0).wait(1).to({x:2517},0).wait(1).to({x:2515.7},0).wait(1).to({x:2514.2},0).wait(1).to({x:2512.7},0).wait(1).to({x:2511},0).wait(1).to({x:2509.3},0).wait(1).to({x:2507.5},0).wait(1).to({x:2505.7},0).wait(1).to({x:2503.8},0).wait(1).to({x:2501.9},0).wait(1).to({x:2500},0).wait(1).to({x:2498.1},0).wait(1).to({x:2496.1},0).wait(1).to({x:2494.2},0).wait(1).to({x:2492.3},0).wait(1).to({x:2490.5},0).wait(1).to({x:2488.7},0).wait(1).to({x:2487},0).wait(1).to({x:2485.3},0).wait(1).to({x:2483.7},0).wait(1).to({x:2482.2},0).wait(1).to({x:2480.8},0).wait(1).to({x:2479.5},0).wait(1).to({x:2478.3},0).wait(1).to({x:2477.3},0).wait(1).to({x:2476.3},0).wait(1).to({x:2475.5},0).wait(1).to({x:2474.9},0).wait(1).to({x:2474.4},0).wait(1).to({x:2474},0).wait(1).to({x:2473.8},0).wait(1).to({x:2473.7},0).wait(1).to({regX:157.5,regY:265.5,x:2255.5,y:1039.5},0).wait(74));

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ECROA0XIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_1 = new cjs.Graphics().p("ECRLA0ZIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_2 = new cjs.Graphics().p("ECRJA0cIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_3 = new cjs.Graphics().p("ECRGA0eIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_4 = new cjs.Graphics().p("ECRCA0aIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_5 = new cjs.Graphics().p("ECQ9A0VIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_6 = new cjs.Graphics().p("ECQ5A0RIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_7 = new cjs.Graphics().p("ECQ1A0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_8 = new cjs.Graphics().p("ECQuA0QIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_9 = new cjs.Graphics().p("ECQoA0TIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_10 = new cjs.Graphics().p("ECQhA0WIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_11 = new cjs.Graphics().p("ECQbA0ZIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_12 = new cjs.Graphics().p("ECQVA0cIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_13 = new cjs.Graphics().p("ECQOA0eIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_14 = new cjs.Graphics().p("ECQIA0hIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_15 = new cjs.Graphics().p("ECP+A0fIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_16 = new cjs.Graphics().p("ECP1A0dIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_17 = new cjs.Graphics().p("ECPsA0bIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_18 = new cjs.Graphics().p("ECPjA0ZIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_19 = new cjs.Graphics().p("ECPZA0XIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_20 = new cjs.Graphics().p("ECPQA0UIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_21 = new cjs.Graphics().p("ECPHA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_22 = new cjs.Graphics().p("ECO9A0TIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_23 = new cjs.Graphics().p("ECO0A0TIgKibIK7zNICghGIBRAcMAskAZUIA7AcIAhC6IiDDmIqVQlIioAZg");
	var mask_graphics_24 = new cjs.Graphics().p("ECOrA0UIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_25 = new cjs.Graphics().p("ECOhA0VIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_26 = new cjs.Graphics().p("ECOYA0VIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_27 = new cjs.Graphics().p("ECOOA0WIgJibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiEDmIqUQmIipAZg");
	var mask_graphics_28 = new cjs.Graphics().p("ECOFA0XIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_29 = new cjs.Graphics().p("ECN8A0XIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_30 = new cjs.Graphics().p("ECN5A0WIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_31 = new cjs.Graphics().p("ECN2A0VIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_32 = new cjs.Graphics().p("ECNzA0UIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_33 = new cjs.Graphics().p("ECNwA0TIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_34 = new cjs.Graphics().p("ECNtA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_35 = new cjs.Graphics().p("ECNqA0RIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_36 = new cjs.Graphics().p("ECNnA0QIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_37 = new cjs.Graphics().p("ECNkA0PIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_38 = new cjs.Graphics().p("ECNhA0OIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_39 = new cjs.Graphics().p("ECNeA0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_40 = new cjs.Graphics().p("ECNgA0OIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_41 = new cjs.Graphics().p("ECNjA0QIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_42 = new cjs.Graphics().p("ECNmA0RIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_43 = new cjs.Graphics().p("ECNpA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_44 = new cjs.Graphics().p("ECNrA0TIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_45 = new cjs.Graphics().p("ECNuA0UIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_46 = new cjs.Graphics().p("ECNxA0VIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_47 = new cjs.Graphics().p("ECNzA0WIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_48 = new cjs.Graphics().p("ECN2A0YIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_49 = new cjs.Graphics().p("ECN5A0ZIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_50 = new cjs.Graphics().p("ECN7A0aIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_51 = new cjs.Graphics().p("ECN+A0bIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_52 = new cjs.Graphics().p("ECOBA0cIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_53 = new cjs.Graphics().p("ECOKA0aIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_54 = new cjs.Graphics().p("ECOTA0YIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_55 = new cjs.Graphics().p("ECOdA0WIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_56 = new cjs.Graphics().p("ECOmA0UIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_57 = new cjs.Graphics().p("ECOvA0SIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_58 = new cjs.Graphics().p("ECO4A0PIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_59 = new cjs.Graphics().p("ECPCA0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_60 = new cjs.Graphics().p("ECPMA0OIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_61 = new cjs.Graphics().p("ECPWA0PIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_62 = new cjs.Graphics().p("ECPgA0PIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_63 = new cjs.Graphics().p("ECPqA0QIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_64 = new cjs.Graphics().p("ECP0A0RIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_65 = new cjs.Graphics().p("ECP+A0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_66 = new cjs.Graphics().p("ECQIA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_67 = new cjs.Graphics().p("ECQOA0UIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_68 = new cjs.Graphics().p("ECQUA0WIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_69 = new cjs.Graphics().p("ECQaA0XIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_70 = new cjs.Graphics().p("ECQgA0ZIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_71 = new cjs.Graphics().p("ECQmA0bIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_72 = new cjs.Graphics().p("ECQsA0cIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_73 = new cjs.Graphics().p("ECQzA0eIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_74 = new cjs.Graphics().p("ECQ5A0gIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_75 = new cjs.Graphics().p("ECQ/A0hIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_76 = new cjs.Graphics().p("ECRBA0fIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_77 = new cjs.Graphics().p("ECREA0dIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_78 = new cjs.Graphics().p("ECRGA0bIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_79 = new cjs.Graphics().p("ECRJA0ZIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_80 = new cjs.Graphics().p("ECRLA0XIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_81 = new cjs.Graphics().p("ECROA0VIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_82 = new cjs.Graphics().p("ECRQA0TIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_83 = new cjs.Graphics().p("ECRTA0RIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_84 = new cjs.Graphics().p("ECRVA0PIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_85 = new cjs.Graphics().p("ECRYA0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_86 = new cjs.Graphics().p("ECRQA0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_87 = new cjs.Graphics().p("ECRIA0MIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_88 = new cjs.Graphics().p("ECRAA0MIgKibIK7zOIChhGIBQAdMAskAZUIA7AcIAhC5IiDDmIqVQmIioAZg");
	var mask_graphics_89 = new cjs.Graphics().p("ECQ4A0MIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_90 = new cjs.Graphics().p("ECQwA0LIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_91 = new cjs.Graphics().p("ECQoA0LIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_92 = new cjs.Graphics().p("ECQgA0KIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDnIqUQlIipAZg");
	var mask_graphics_93 = new cjs.Graphics().p("ECQYA0KIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_94 = new cjs.Graphics().p("ECQQA0JIgJibIK7zOICghFIBRAdMAskAZUIA7AcIAhC4IiEDnIqUQlIipAag");
	var mask_graphics_95 = new cjs.Graphics().p("ECQJA0JIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_96 = new cjs.Graphics().p("ECQBA0JIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_97 = new cjs.Graphics().p("ECP5A0IIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_98 = new cjs.Graphics().p("ECPwA0KIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_99 = new cjs.Graphics().p("ECPnA0LIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_100 = new cjs.Graphics().p("ECPeA0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_101 = new cjs.Graphics().p("ECPVA0OIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_102 = new cjs.Graphics().p("ECPMA0QIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_103 = new cjs.Graphics().p("ECPDA0RIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_104 = new cjs.Graphics().p("ECO6A0TIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_105 = new cjs.Graphics().p("ECOxA0UIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_106 = new cjs.Graphics().p("ECOoA0WIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDmIqVQmIipAZg");
	var mask_graphics_107 = new cjs.Graphics().p("ECOfA0XIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_108 = new cjs.Graphics().p("ECOYA0WIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_109 = new cjs.Graphics().p("ECORA0UIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_110 = new cjs.Graphics().p("ECOLA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_111 = new cjs.Graphics().p("ECOEA0RIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_112 = new cjs.Graphics().p("ECN9A0PIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_113 = new cjs.Graphics().p("ECN3A0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_114 = new cjs.Graphics().p("ECNwA0MIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_115 = new cjs.Graphics().p("ECNpA0KIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_116 = new cjs.Graphics().p("ECNjA0IIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_117 = new cjs.Graphics().p("ECNhA0KIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_118 = new cjs.Graphics().p("ECNfA0MIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_119 = new cjs.Graphics().p("ECNeA0NIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_120 = new cjs.Graphics().p("ECNcA0PIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_121 = new cjs.Graphics().p("ECNaA0RIgJibIK6zOIChhGIBRAdMAskAZUIA6AcIAhC5IiDDmIqUQmIipAZg");
	var mask_graphics_122 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_123 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_124 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_125 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_126 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_127 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_128 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_129 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_130 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_131 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_132 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_133 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_134 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_135 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_136 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_137 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_138 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_139 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_140 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_141 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_142 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_143 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_144 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_145 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_146 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_147 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_148 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_149 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_150 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_151 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_152 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_153 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_154 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_155 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_156 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_157 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_158 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_159 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_160 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_161 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_162 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_163 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_164 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_165 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_166 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_167 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_168 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_169 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_170 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_171 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_172 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_173 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_174 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_175 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_176 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_177 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_178 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_179 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_180 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_181 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_182 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_183 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_184 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_185 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_186 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_187 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_188 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_189 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_190 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_191 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_192 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_193 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_194 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_195 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");
	var mask_graphics_196 = new cjs.Graphics().p("ECNZA0SIgKibIK7zOICghGIBRAdMAskAZUIA7AcIAhC5IiDDnIqVQlIipAZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1316.8,y:507.5}).wait(1).to({graphics:mask_graphics_1,x:1316.5,y:507.7}).wait(1).to({graphics:mask_graphics_2,x:1316.3,y:508}).wait(1).to({graphics:mask_graphics_3,x:1316,y:508.2}).wait(1).to({graphics:mask_graphics_4,x:1315.6,y:507.8}).wait(1).to({graphics:mask_graphics_5,x:1315.1,y:507.3}).wait(1).to({graphics:mask_graphics_6,x:1314.7,y:506.9}).wait(1).to({graphics:mask_graphics_7,x:1314.3,y:506.5}).wait(1).to({graphics:mask_graphics_8,x:1313.6,y:506.8}).wait(1).to({graphics:mask_graphics_9,x:1313,y:507.1}).wait(1).to({graphics:mask_graphics_10,x:1312.3,y:507.4}).wait(1).to({graphics:mask_graphics_11,x:1311.7,y:507.7}).wait(1).to({graphics:mask_graphics_12,x:1311.1,y:508}).wait(1).to({graphics:mask_graphics_13,x:1310.4,y:508.2}).wait(1).to({graphics:mask_graphics_14,x:1309.8,y:508.5}).wait(1).to({graphics:mask_graphics_15,x:1308.8,y:508.3}).wait(1).to({graphics:mask_graphics_16,x:1307.9,y:508.1}).wait(1).to({graphics:mask_graphics_17,x:1307,y:507.9}).wait(1).to({graphics:mask_graphics_18,x:1306.1,y:507.7}).wait(1).to({graphics:mask_graphics_19,x:1305.1,y:507.5}).wait(1).to({graphics:mask_graphics_20,x:1304.2,y:507.2}).wait(1).to({graphics:mask_graphics_21,x:1303.3,y:507}).wait(1).to({graphics:mask_graphics_22,x:1302.3,y:507.1}).wait(1).to({graphics:mask_graphics_23,x:1301.4,y:507.2}).wait(1).to({graphics:mask_graphics_24,x:1300.5,y:507.2}).wait(1).to({graphics:mask_graphics_25,x:1299.5,y:507.3}).wait(1).to({graphics:mask_graphics_26,x:1298.6,y:507.3}).wait(1).to({graphics:mask_graphics_27,x:1297.7,y:507.4}).wait(1).to({graphics:mask_graphics_28,x:1296.7,y:507.5}).wait(1).to({graphics:mask_graphics_29,x:1295.8,y:507.5}).wait(1).to({graphics:mask_graphics_30,x:1295.5,y:507.4}).wait(1).to({graphics:mask_graphics_31,x:1295.2,y:507.3}).wait(1).to({graphics:mask_graphics_32,x:1294.9,y:507.2}).wait(1).to({graphics:mask_graphics_33,x:1294.6,y:507.1}).wait(1).to({graphics:mask_graphics_34,x:1294.3,y:507}).wait(1).to({graphics:mask_graphics_35,x:1294,y:506.9}).wait(1).to({graphics:mask_graphics_36,x:1293.7,y:506.8}).wait(1).to({graphics:mask_graphics_37,x:1293.4,y:506.7}).wait(1).to({graphics:mask_graphics_38,x:1293.1,y:506.6}).wait(1).to({graphics:mask_graphics_39,x:1292.8,y:506.5}).wait(1).to({graphics:mask_graphics_40,x:1293,y:506.6}).wait(1).to({graphics:mask_graphics_41,x:1293.3,y:506.8}).wait(1).to({graphics:mask_graphics_42,x:1293.6,y:506.9}).wait(1).to({graphics:mask_graphics_43,x:1293.9,y:507}).wait(1).to({graphics:mask_graphics_44,x:1294.1,y:507.1}).wait(1).to({graphics:mask_graphics_45,x:1294.4,y:507.2}).wait(1).to({graphics:mask_graphics_46,x:1294.7,y:507.3}).wait(1).to({graphics:mask_graphics_47,x:1294.9,y:507.4}).wait(1).to({graphics:mask_graphics_48,x:1295.2,y:507.6}).wait(1).to({graphics:mask_graphics_49,x:1295.5,y:507.7}).wait(1).to({graphics:mask_graphics_50,x:1295.7,y:507.8}).wait(1).to({graphics:mask_graphics_51,x:1296,y:507.9}).wait(1).to({graphics:mask_graphics_52,x:1296.3,y:508}).wait(1).to({graphics:mask_graphics_53,x:1297.2,y:507.8}).wait(1).to({graphics:mask_graphics_54,x:1298.1,y:507.6}).wait(1).to({graphics:mask_graphics_55,x:1299.1,y:507.4}).wait(1).to({graphics:mask_graphics_56,x:1300,y:507.2}).wait(1).to({graphics:mask_graphics_57,x:1300.9,y:507}).wait(1).to({graphics:mask_graphics_58,x:1301.8,y:506.7}).wait(1).to({graphics:mask_graphics_59,x:1302.8,y:506.5}).wait(1).to({graphics:mask_graphics_60,x:1303.8,y:506.6}).wait(1).to({graphics:mask_graphics_61,x:1304.8,y:506.7}).wait(1).to({graphics:mask_graphics_62,x:1305.8,y:506.7}).wait(1).to({graphics:mask_graphics_63,x:1306.8,y:506.8}).wait(1).to({graphics:mask_graphics_64,x:1307.8,y:506.9}).wait(1).to({graphics:mask_graphics_65,x:1308.8,y:507}).wait(1).to({graphics:mask_graphics_66,x:1309.8,y:507}).wait(1).to({graphics:mask_graphics_67,x:1310.4,y:507.2}).wait(1).to({graphics:mask_graphics_68,x:1311,y:507.4}).wait(1).to({graphics:mask_graphics_69,x:1311.6,y:507.5}).wait(1).to({graphics:mask_graphics_70,x:1312.2,y:507.7}).wait(1).to({graphics:mask_graphics_71,x:1312.8,y:507.9}).wait(1).to({graphics:mask_graphics_72,x:1313.4,y:508}).wait(1).to({graphics:mask_graphics_73,x:1314.1,y:508.2}).wait(1).to({graphics:mask_graphics_74,x:1314.7,y:508.4}).wait(1).to({graphics:mask_graphics_75,x:1315.3,y:508.5}).wait(1).to({graphics:mask_graphics_76,x:1315.5,y:508.3}).wait(1).to({graphics:mask_graphics_77,x:1315.8,y:508.1}).wait(1).to({graphics:mask_graphics_78,x:1316,y:507.9}).wait(1).to({graphics:mask_graphics_79,x:1316.3,y:507.7}).wait(1).to({graphics:mask_graphics_80,x:1316.5,y:507.5}).wait(1).to({graphics:mask_graphics_81,x:1316.8,y:507.3}).wait(1).to({graphics:mask_graphics_82,x:1317,y:507.1}).wait(1).to({graphics:mask_graphics_83,x:1317.3,y:506.9}).wait(1).to({graphics:mask_graphics_84,x:1317.5,y:506.7}).wait(1).to({graphics:mask_graphics_85,x:1317.8,y:506.5}).wait(1).to({graphics:mask_graphics_86,x:1317,y:506.5}).wait(1).to({graphics:mask_graphics_87,x:1316.2,y:506.4}).wait(1).to({graphics:mask_graphics_88,x:1315.4,y:506.4}).wait(1).to({graphics:mask_graphics_89,x:1314.6,y:506.4}).wait(1).to({graphics:mask_graphics_90,x:1313.8,y:506.3}).wait(1).to({graphics:mask_graphics_91,x:1313,y:506.3}).wait(1).to({graphics:mask_graphics_92,x:1312.2,y:506.2}).wait(1).to({graphics:mask_graphics_93,x:1311.4,y:506.2}).wait(1).to({graphics:mask_graphics_94,x:1310.7,y:506.2}).wait(1).to({graphics:mask_graphics_95,x:1309.9,y:506.1}).wait(1).to({graphics:mask_graphics_96,x:1309.1,y:506.1}).wait(1).to({graphics:mask_graphics_97,x:1308.3,y:506}).wait(1).to({graphics:mask_graphics_98,x:1307.4,y:506.2}).wait(1).to({graphics:mask_graphics_99,x:1306.5,y:506.3}).wait(1).to({graphics:mask_graphics_100,x:1305.6,y:506.5}).wait(1).to({graphics:mask_graphics_101,x:1304.7,y:506.6}).wait(1).to({graphics:mask_graphics_102,x:1303.8,y:506.8}).wait(1).to({graphics:mask_graphics_103,x:1302.9,y:506.9}).wait(1).to({graphics:mask_graphics_104,x:1302,y:507.1}).wait(1).to({graphics:mask_graphics_105,x:1301.1,y:507.2}).wait(1).to({graphics:mask_graphics_106,x:1300.2,y:507.4}).wait(1).to({graphics:mask_graphics_107,x:1299.3,y:507.5}).wait(1).to({graphics:mask_graphics_108,x:1298.6,y:507.4}).wait(1).to({graphics:mask_graphics_109,x:1297.9,y:507.2}).wait(1).to({graphics:mask_graphics_110,x:1297.3,y:507}).wait(1).to({graphics:mask_graphics_111,x:1296.6,y:506.9}).wait(1).to({graphics:mask_graphics_112,x:1295.9,y:506.7}).wait(1).to({graphics:mask_graphics_113,x:1295.3,y:506.5}).wait(1).to({graphics:mask_graphics_114,x:1294.6,y:506.4}).wait(1).to({graphics:mask_graphics_115,x:1293.9,y:506.2}).wait(1).to({graphics:mask_graphics_116,x:1293.3,y:506}).wait(1).to({graphics:mask_graphics_117,x:1293.1,y:506.2}).wait(1).to({graphics:mask_graphics_118,x:1292.9,y:506.4}).wait(1).to({graphics:mask_graphics_119,x:1292.8,y:506.5}).wait(1).to({graphics:mask_graphics_120,x:1292.6,y:506.7}).wait(1).to({graphics:mask_graphics_121,x:1292.4,y:506.9}).wait(1).to({graphics:mask_graphics_122,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_123,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_124,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_125,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_126,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_127,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_128,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_129,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_130,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_131,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_132,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_133,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_134,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_135,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_136,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_137,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_138,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_139,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_140,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_141,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_142,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_143,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_144,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_145,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_146,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_147,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_148,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_149,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_150,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_151,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_152,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_153,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_154,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_155,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_156,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_157,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_158,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_159,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_160,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_161,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_162,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_163,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_164,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_165,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_166,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_167,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_168,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_169,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_170,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_171,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_172,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_173,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_174,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_175,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_176,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_177,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_178,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_179,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_180,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_181,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_182,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_183,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_184,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_185,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_186,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_187,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_188,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_189,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_190,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_191,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_192,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_193,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_194,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_195,x:1292.3,y:507}).wait(1).to({graphics:mask_graphics_196,x:1292.3,y:507}).wait(1));

	// Слой_2
	this.fon = new lib.Символ2();
	this.fon.parent = this;
	this.fon.setTransform(1451.9,602,1,1,0,0,0,1207,684);

	var maskedShapeInstanceList = [this.fon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2215,595.8,617.3,538.3);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var r = this;
			r.visible=false;
		
		setTimeout(zeroInit, 25);
		
		function zeroInit ()
		{
			inter.initialization(r);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// рука
	this.hand = new lib.Символ3();
	this.hand.parent = this;
	this.hand.setTransform(-1664,-587);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// коробкаВерх
	this.boxtop = new lib.Символ8();
	this.boxtop.parent = this;
	this.boxtop.setTransform(281.8,206,1,1,0,0,0,248.8,171);

	this.timeline.addTween(cjs.Tween.get(this.boxtop).wait(1));

	// открытка
	this.card = new lib.Анимация1();
	this.card.parent = this;
	this.card.setTransform(280,209.7);

	this.timeline.addTween(cjs.Tween.get(this.card).wait(1));

	// пачка
	this.box = new lib.Символ9();
	this.box.parent = this;
	this.box.setTransform(313.5,206,1,1,0,0,0,280.5,171);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-911.6,-684.3,2587.5,1715.4);
// library properties:
lib.properties = {
	width: 1015,
	height: 449,
	fps: 60,
	color: "#9D0F52",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bclose.png", id:"bclose"},
		{src:"images/blose.png", id:"blose"},
		{src:"images/bver.png", id:"bver"},
		{src:"images/card.png", id:"card"},
		{src:"images/cardbig.png", id:"cardbig"},
		{src:"images/code.png", id:"code"},
		{src:"images/hand.png", id:"hand"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;