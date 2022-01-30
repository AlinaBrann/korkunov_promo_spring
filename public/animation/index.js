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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,315,531), null);


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

	// Слой_4
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(2138.3,907.3,1,1,0,0,0,53.5,60.5);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,111,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:907.2,alpha:0.967},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.933},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:2138.2,alpha:0.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:907.3,alpha:0.867},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.833},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:2138.3,alpha:0.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:907.2,alpha:0.767},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.733},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:2138.2,alpha:0.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:907.3,alpha:0.667},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.633},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:2138.3,alpha:0.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:907.2,alpha:0.567},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.533},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:907.3,alpha:0.5},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:2138.2,alpha:0.467},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.433},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:2138.3,alpha:0.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:907.2,alpha:0.367},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.333},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:2138.2,alpha:0.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,y:907.3,alpha:0.267},0).wait(1).to({scaleX:1.38,scaleY:1.38,alpha:0.233},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:2138.3,alpha:0.2},0).wait(1).to({scaleX:1.42,scaleY:1.42,y:907.2,alpha:0.167},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.133},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:2138.2,alpha:0.1},0).wait(1).to({scaleX:1.47,scaleY:1.47,y:907.3,alpha:0.067},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.033},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:2138.3,alpha:0},0).wait(1).to({regX:53.6,regY:60.6,x:2138.4,y:907.4},0).wait(12));

	// Слой_3
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2255.5,1039.5,1,1,0,0,0,157.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:2255.4,y:1039.9},0).wait(1).to({x:2254.9,y:1040.2},0).wait(1).to({x:2254.2,y:1040.6},0).wait(1).to({x:2253.2,y:1041},0).wait(1).to({x:2251.9,y:1041.3},0).wait(1).to({x:2250.3,y:1041.7},0).wait(1).to({x:2248.5,y:1042.1},0).wait(1).to({x:2246.4,y:1042.5},0).wait(1).to({x:2244,y:1042.8},0).wait(1).to({x:2241.5,y:1043.2},0).wait(1).to({x:2238.7,y:1043.6},0).wait(1).to({x:2235.7,y:1043.9},0).wait(1).to({x:2232.6,y:1044.3},0).wait(1).to({x:2229.9,y:1044.7},0).wait(1).to({x:2227.2,y:1045},0).wait(1).to({x:2224.5,y:1045.4},0).wait(1).to({x:2221.6,y:1045.8},0).wait(1).to({x:2218.8,y:1046.1},0).wait(1).to({x:2215.8,y:1046.5},0).wait(1).to({x:2212.8,y:1046.9},0).wait(1).to({x:2209.6,y:1047.3},0).wait(1).to({x:2206.3,y:1047.6},0).wait(1).to({x:2203.1,y:1048},0).wait(1).to({x:2199.9,y:1048.4},0).wait(1).to({x:2196.8,y:1048.7},0).wait(1).to({x:2193.8,y:1049.1},0).wait(1).to({x:2190.9,y:1049.5},0).wait(1).to({x:2188.2,y:1049.8},0).wait(1).to({x:2185.5,y:1050.2},0).wait(1).to({x:2183.1,y:1050.5},0).wait(1).to({x:2180.7,y:1050.7},0).wait(1).to({x:2178.6,y:1051},0).wait(1).to({x:2176.7,y:1051.2},0).wait(1).to({x:2175,y:1051.5},0).wait(1).to({x:2173.5,y:1051.7},0).wait(1).to({x:2172.2,y:1052},0).wait(1).to({x:2171.2,y:1052.2},0).wait(1).to({x:2170.4,y:1052.5},0).wait(1).to({x:2169.8,y:1052.7},0).wait(1).to({x:2169.6,y:1053},0).wait(1).to({x:2169.5,y:1053.2},0).wait(1).to({x:2169.7,y:1053.5},0).wait(1).to({x:2170.2,y:1053.7},0).wait(1).to({x:2170.9,y:1054},0).wait(1).to({x:2171.8,y:1054.2},0).wait(1).to({x:2173,y:1054.5},0).wait(1).to({x:2174.5,y:1054.7},0).wait(1).to({x:2176.1,y:1055},0).wait(1).to({x:2178,y:1055.2},0).wait(1).to({x:2180,y:1055.5},0).wait(1).to({x:2182.3,y:1055.7},0).wait(1).to({x:2184.7,y:1056},0).wait(1).to({x:2187.3,y:1056.2},0).wait(1).to({x:2190,y:1056.5},0).wait(1).to({x:2192.9,y:1056.7},0).wait(1).to({x:2195.8,y:1057},0).wait(1).to({x:2198.9,y:1057.2},0).wait(1).to({x:2202,y:1057.5},0).wait(1).to({x:2205.2,y:1057.7},0).wait(1).to({x:2208.5,y:1057.5},0).wait(1).to({x:2211.7,y:1057.2},0).wait(1).to({x:2214.8,y:1056.9},0).wait(1).to({x:2217.8,y:1056.6},0).wait(1).to({x:2220.7,y:1056.4},0).wait(1).to({x:2223.5,y:1056.1},0).wait(1).to({x:2226.3,y:1055.8},0).wait(1).to({x:2229,y:1055.5},0).wait(1).to({x:2231.6,y:1055.3},0).wait(1).to({x:2234.7,y:1055},0).wait(1).to({x:2237.7,y:1054.7},0).wait(1).to({x:2240.6,y:1054.4},0).wait(1).to({x:2243.2,y:1054.2},0).wait(1).to({x:2245.6,y:1053.9},0).wait(1).to({x:2247.8,y:1053.6},0).wait(1).to({x:2249.7,y:1053.4},0).wait(1).to({x:2251.4,y:1053.1},0).wait(1).to({x:2252.8,y:1052.8},0).wait(1).to({x:2253.9,y:1052.5},0).wait(1).to({x:2254.7,y:1052.3},0).wait(1).to({x:2255.2,y:1052},0).wait(1).to({x:2255.5,y:1051.7},0).wait(1).to({x:2255.4,y:1051.4},0).wait(1).to({x:2255.1,y:1051.2},0).wait(1).to({x:2254.5,y:1050.9},0).wait(1).to({x:2253.5,y:1050.6},0).wait(1).to({x:2252.3,y:1050.3},0).wait(1).to({x:2250.8,y:1050.1},0).wait(1).to({x:2249.1,y:1049.8},0).wait(1).to({x:2247.1,y:1049.5},0).wait(1).to({x:2244.8,y:1049.2},0).wait(1).to({x:2242.4,y:1049},0).wait(1).to({x:2239.7,y:1048.7},0).wait(1).to({x:2236.8,y:1048.4},0).wait(1).to({x:2233.7,y:1048.2},0).wait(1).to({x:2230.8,y:1047.9},0).wait(1).to({x:2228.1,y:1047.6},0).wait(1).to({x:2225.4,y:1047.3},0).wait(1).to({x:2222.6,y:1047.1},0).wait(1).to({x:2219.7,y:1046.8},0).wait(1).to({x:2216.8,y:1046.5},0).wait(1).to({x:2213.9,y:1046.2},0).wait(1).to({x:2210.7,y:1046},0).wait(1).to({x:2207.4,y:1045.7},0).wait(1).to({x:2204.2,y:1045.4},0).wait(1).to({x:2201,y:1045.1},0).wait(1).to({x:2197.9,y:1044.9},0).wait(1).to({x:2194.8,y:1044.6},0).wait(1).to({x:2191.9,y:1044.3},0).wait(1).to({x:2189.1,y:1044.1},0).wait(1).to({x:2186.4,y:1043.8},0).wait(1).to({x:2183.9,y:1043.5},0).wait(1).to({x:2181.5,y:1043.2},0).wait(1).to({x:2179.3,y:1043},0).wait(1).to({x:2177.3,y:1042.7},0).wait(1).to({x:2175.5,y:1042.4},0).wait(1).to({x:2174,y:1042.1},0).wait(1).to({x:2172.6,y:1041.9},0).wait(1).to({x:2171.5,y:1041.6},0).wait(1).to({x:2170.6,y:1041.3},0).wait(1).to({x:2170,y:1041},0).wait(1).to({x:2169.6,y:1040.8},0).wait(1).to({x:2169.5,y:1040.5},0).wait(1).to({x:2169.6},0).wait(74));

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ECttBZcIzhgxIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBBIiSB3g");
	var mask_graphics_1 = new cjs.Graphics().p("ECtrBZfIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_2 = new cjs.Graphics().p("ECtoBZhIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_3 = new cjs.Graphics().p("ECtmBZjIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_4 = new cjs.Graphics().p("ECtfBZlIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_5 = new cjs.Graphics().p("ECtYBZnIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_6 = new cjs.Graphics().p("ECtRBZpIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_7 = new cjs.Graphics().p("ECtKBZrIzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_8 = new cjs.Graphics().p("ECtABZuIzhgyIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBBIiSB4g");
	var mask_graphics_9 = new cjs.Graphics().p("ECs3BZwIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBBIiRB4g");
	var mask_graphics_10 = new cjs.Graphics().p("ECstBZyIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_11 = new cjs.Graphics().p("ECsiBZ0IzhgyIhpiGMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_12 = new cjs.Graphics().p("ECsYBZ2IzhgyIhpiGMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_13 = new cjs.Graphics().p("ECsPBZ4IzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_14 = new cjs.Graphics().p("ECsFBZ7IzigzIhpiGMAA8g05ICChVIWGAAICMBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_15 = new cjs.Graphics().p("ECr1BZ9IzhgyIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBBIiRB4g");
	var mask_graphics_16 = new cjs.Graphics().p("ECrmBZ/IzhgyIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBBIiSB4g");
	var mask_graphics_17 = new cjs.Graphics().p("ECrYBaBIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_18 = new cjs.Graphics().p("ECrIBaDIzhgyIhpiGMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_19 = new cjs.Graphics().p("ECq5BaFIzhgyIhpiGMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiSB4g");
	var mask_graphics_20 = new cjs.Graphics().p("ECqrBaHIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_21 = new cjs.Graphics().p("ECqbBaJIzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBBIiRB3g");
	var mask_graphics_22 = new cjs.Graphics().p("ECqLBaLIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_23 = new cjs.Graphics().p("ECp6BaNIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_24 = new cjs.Graphics().p("ECppBaPIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_25 = new cjs.Graphics().p("ECpYBaRIzigyIhpiGMAA8g05ICDhWIWGAAICMBqIAPBUMAAAAzRIAFBAIiRB4g");
	var mask_graphics_26 = new cjs.Graphics().p("ECpHBaTIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_27 = new cjs.Graphics().p("ECo2BaVIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_28 = new cjs.Graphics().p("EColBaXIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_29 = new cjs.Graphics().p("ECoUBaYIzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_30 = new cjs.Graphics().p("ECoMBaYIzigxIhoiHMAA7g05ICDhVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_31 = new cjs.Graphics().p("ECoEBaYIzigxIhpiHMAA8g05ICChVIWGAAICMBpIAQBVMAAAAzQIAEBAIiRB4g");
	var mask_graphics_32 = new cjs.Graphics().p("ECn7BaYIzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_33 = new cjs.Graphics().p("ECnyBaYIzhgxIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_34 = new cjs.Graphics().p("ECnqBaYIzhgxIhpiHMAA8g05ICBhVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_35 = new cjs.Graphics().p("ECniBaYIzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_36 = new cjs.Graphics().p("ECnZBaYIzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_37 = new cjs.Graphics().p("ECnQBaYIzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_38 = new cjs.Graphics().p("ECnIBaYIzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_39 = new cjs.Graphics().p("ECm/BaYIzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAFBAIiQB4g");
	var mask_graphics_40 = new cjs.Graphics().p("ECnHBabIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_41 = new cjs.Graphics().p("ECnPBaeIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_42 = new cjs.Graphics().p("ECnXBahIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_43 = new cjs.Graphics().p("ECneBajIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_44 = new cjs.Graphics().p("ECnmBamIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_45 = new cjs.Graphics().p("ECnuBapIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_46 = new cjs.Graphics().p("ECn1BarIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_47 = new cjs.Graphics().p("ECn9BauIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_48 = new cjs.Graphics().p("ECoFBaxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_49 = new cjs.Graphics().p("ECoMBazIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_50 = new cjs.Graphics().p("ECoUBa2IzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_51 = new cjs.Graphics().p("ECocBa5IzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_52 = new cjs.Graphics().p("ECokBa7IzigxIhpiHMAA8g05ICChVIWGAAICMBpIAQBVMAAAAzQIAEBBIiRB3g");
	var mask_graphics_53 = new cjs.Graphics().p("ECoxBa7IzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_54 = new cjs.Graphics().p("ECo/Ba7IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_55 = new cjs.Graphics().p("ECpMBa7IzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_56 = new cjs.Graphics().p("ECpaBa7IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_57 = new cjs.Graphics().p("ECpnBa7IzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_58 = new cjs.Graphics().p("ECp1Ba7IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_59 = new cjs.Graphics().p("ECqDBa7IzigxIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBBIiRB3g");
	var mask_graphics_60 = new cjs.Graphics().p("ECqSBa7IzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_61 = new cjs.Graphics().p("ECqiBa7IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_62 = new cjs.Graphics().p("ECqyBa7IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_63 = new cjs.Graphics().p("ECrBBa7IzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_64 = new cjs.Graphics().p("ECrRBa7IzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_65 = new cjs.Graphics().p("ECrhBa7IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_66 = new cjs.Graphics().p("ECrwBa7IzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBBIiRB3g");
	var mask_graphics_67 = new cjs.Graphics().p("ECr9Ba5IzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_68 = new cjs.Graphics().p("ECsJBa3IzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_69 = new cjs.Graphics().p("ECsVBa1IzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_70 = new cjs.Graphics().p("ECshBazIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_71 = new cjs.Graphics().p("ECsuBawIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_72 = new cjs.Graphics().p("ECs6BauIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_73 = new cjs.Graphics().p("ECtGBasIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_74 = new cjs.Graphics().p("ECtSBaqIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_75 = new cjs.Graphics().p("ECtfBaoIzigzIhpiGMAA8g05ICChVIWGAAICMBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_76 = new cjs.Graphics().p("ECtgBamIzhgyIhpiHMAA8g05ICChUIWGAAICMBpIAPBUMAAAAzQIAGBBIiSB4g");
	var mask_graphics_77 = new cjs.Graphics().p("ECtjBakIzigxIhpiHMAA8g05ICChVIWGAAICNBpIAPBVMAAAAzQIAEBBIiRB3g");
	var mask_graphics_78 = new cjs.Graphics().p("ECtlBajIzigyIhpiGMAA8g05ICChVIWHAAICLBoIAQBWMAAAAzQIAEBAIiRB4g");
	var mask_graphics_79 = new cjs.Graphics().p("ECtnBahIzigxIhpiHMAA8g05ICChVIWGAAICNBpIAPBVMAAAAzQIAEBAIiRB4g");
	var mask_graphics_80 = new cjs.Graphics().p("ECtpBagIzigyIhpiHMAA8g04ICChVIWHAAICLBoIAQBWMAAAAzPIAEBBIiRB4g");
	var mask_graphics_81 = new cjs.Graphics().p("ECtqBafIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAGBBIiSB4g");
	var mask_graphics_82 = new cjs.Graphics().p("ECtsBadIzhgyIhpiGMAA8g05ICChWIWGAAICNBqIAOBUMAAAAzRIAFBAIiRB4g");
	var mask_graphics_83 = new cjs.Graphics().p("ECtuBabIzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAFBBIiQB3g");
	var mask_graphics_84 = new cjs.Graphics().p("ECtxBaaIzigyIhpiGMAA8g05ICChWIWHAAICLBqIAQBUMAAAAzRIAEBAIiRB4g");
	var mask_graphics_85 = new cjs.Graphics().p("ECtyBaYIzhgxIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiRB4g");
	var mask_graphics_86 = new cjs.Graphics().p("ECtmBaXIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_87 = new cjs.Graphics().p("ECtZBaVIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_88 = new cjs.Graphics().p("ECtMBaTIzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_89 = new cjs.Graphics().p("ECs/BaSIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_90 = new cjs.Graphics().p("ECsyBaQIzigyIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_91 = new cjs.Graphics().p("ECslBaOIzhgxIhpiHMAA8g05ICBhVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_92 = new cjs.Graphics().p("ECsYBaNIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_93 = new cjs.Graphics().p("ECsLBaLIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_94 = new cjs.Graphics().p("ECr+BaJIzhgxIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_95 = new cjs.Graphics().p("ECrxBaIIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_96 = new cjs.Graphics().p("ECrkBaGIzhgyIhpiGMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB4g");
	var mask_graphics_97 = new cjs.Graphics().p("ECrYBaFIzigzIhpiGMAA8g05ICChVIWGAAICMBpIAQBVMAAAAzQIAEBBIiRB4g");
	var mask_graphics_98 = new cjs.Graphics().p("ECrIBaDIzhgyIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBAIiRB5g");
	var mask_graphics_99 = new cjs.Graphics().p("ECq5BaAIzhgyIhpiGMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBBIiSB3g");
	var mask_graphics_100 = new cjs.Graphics().p("ECqrBZ/IzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB4g");
	var mask_graphics_101 = new cjs.Graphics().p("ECqbBZ8IzhgxIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBBIiRB3g");
	var mask_graphics_102 = new cjs.Graphics().p("ECqMBZ7IzhgzIhpiGMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiSB5g");
	var mask_graphics_103 = new cjs.Graphics().p("ECp+BZ5IzigzIhpiGMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_104 = new cjs.Graphics().p("ECpvBZ2IzigxIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBBIiRB3g");
	var mask_graphics_105 = new cjs.Graphics().p("ECpfBZ0IzhgxIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiSB4g");
	var mask_graphics_106 = new cjs.Graphics().p("ECpRBZyIzigyIhpiGMAA8g05ICChVIWGAAICMBpIAQBVMAAAAzQIAEBBIiRB3g");
	var mask_graphics_107 = new cjs.Graphics().p("ECpBBZxIzhgyIhpiHMAA8g05ICChVIWGAAICNBpIAOBVMAAAAzQIAGBAIiRB5g");
	var mask_graphics_108 = new cjs.Graphics().p("ECo2BZxIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_109 = new cjs.Graphics().p("ECorBZxIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_110 = new cjs.Graphics().p("ECogBZxIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_111 = new cjs.Graphics().p("ECoVBZxIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_112 = new cjs.Graphics().p("ECoKBZxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_113 = new cjs.Graphics().p("ECn/BZxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_114 = new cjs.Graphics().p("ECn0BZxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_115 = new cjs.Graphics().p("ECnpBZxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_116 = new cjs.Graphics().p("ECndBZxIzhgyIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiRB5g");
	var mask_graphics_117 = new cjs.Graphics().p("ECncBZxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_118 = new cjs.Graphics().p("ECnaBZxIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_119 = new cjs.Graphics().p("ECnYBZxIzhgyIhpiHMAA8g05ICChVIWHAAICLBpIAPBVMAAAAzQIAGBAIiSB5g");
	var mask_graphics_120 = new cjs.Graphics().p("ECnXBZxIzigyIhpiHMAA8g05ICChVIWHAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_121 = new cjs.Graphics().p("ECnVBZxIzhgyIhpiHMAA8g05ICChVIWGAAICMBpIAPBVMAAAAzQIAFBAIiRB5g");
	var mask_graphics_122 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_123 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_124 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_125 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_126 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_127 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_128 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_129 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_130 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_131 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_132 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_133 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_134 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_135 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_136 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_137 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_138 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_139 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_140 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_141 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_142 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_143 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_144 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_145 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_146 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_147 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_148 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_149 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_150 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_151 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_152 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_153 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_154 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_155 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_156 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_157 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_158 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_159 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_160 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_161 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_162 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_163 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_164 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_165 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_166 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_167 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_168 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_169 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_170 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_171 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_172 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_173 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_174 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_175 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_176 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_177 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_178 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_179 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_180 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_181 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_182 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_183 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_184 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_185 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_186 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_187 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_188 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_189 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_190 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_191 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_192 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_193 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_194 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_195 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");
	var mask_graphics_196 = new cjs.Graphics().p("ECnUBZxIzigyIhpiHMAA8g05ICChVIWHAAICLBpIAQBVMAAAAzQIAEBAIiRB5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1152.8,y:572.5}).wait(1).to({graphics:mask_graphics_1,x:1152.5,y:572.7}).wait(1).to({graphics:mask_graphics_2,x:1152.2,y:572.9}).wait(1).to({graphics:mask_graphics_3,x:1152,y:573.1}).wait(1).to({graphics:mask_graphics_4,x:1151.3,y:573.3}).wait(1).to({graphics:mask_graphics_5,x:1150.6,y:573.5}).wait(1).to({graphics:mask_graphics_6,x:1149.9,y:573.7}).wait(1).to({graphics:mask_graphics_7,x:1149.3,y:574}).wait(1).to({graphics:mask_graphics_8,x:1148.3,y:574.2}).wait(1).to({graphics:mask_graphics_9,x:1147.3,y:574.4}).wait(1).to({graphics:mask_graphics_10,x:1146.3,y:574.6}).wait(1).to({graphics:mask_graphics_11,x:1145.3,y:574.8}).wait(1).to({graphics:mask_graphics_12,x:1144.3,y:575}).wait(1).to({graphics:mask_graphics_13,x:1143.3,y:575.2}).wait(1).to({graphics:mask_graphics_14,x:1142.3,y:575.5}).wait(1).to({graphics:mask_graphics_15,x:1140.8,y:575.7}).wait(1).to({graphics:mask_graphics_16,x:1139.3,y:575.9}).wait(1).to({graphics:mask_graphics_17,x:1137.8,y:576.1}).wait(1).to({graphics:mask_graphics_18,x:1136.3,y:576.3}).wait(1).to({graphics:mask_graphics_19,x:1134.8,y:576.5}).wait(1).to({graphics:mask_graphics_20,x:1133.3,y:576.7}).wait(1).to({graphics:mask_graphics_21,x:1131.8,y:577}).wait(1).to({graphics:mask_graphics_22,x:1130.1,y:577.1}).wait(1).to({graphics:mask_graphics_23,x:1128.4,y:577.3}).wait(1).to({graphics:mask_graphics_24,x:1126.7,y:577.5}).wait(1).to({graphics:mask_graphics_25,x:1125,y:577.7}).wait(1).to({graphics:mask_graphics_26,x:1123.3,y:577.9}).wait(1).to({graphics:mask_graphics_27,x:1121.6,y:578.1}).wait(1).to({graphics:mask_graphics_28,x:1119.9,y:578.3}).wait(1).to({graphics:mask_graphics_29,x:1118.3,y:578.5}).wait(1).to({graphics:mask_graphics_30,x:1117.4,y:578.5}).wait(1).to({graphics:mask_graphics_31,x:1116.6,y:578.5}).wait(1).to({graphics:mask_graphics_32,x:1115.7,y:578.5}).wait(1).to({graphics:mask_graphics_33,x:1114.9,y:578.5}).wait(1).to({graphics:mask_graphics_34,x:1114,y:578.5}).wait(1).to({graphics:mask_graphics_35,x:1113.2,y:578.5}).wait(1).to({graphics:mask_graphics_36,x:1112.3,y:578.5}).wait(1).to({graphics:mask_graphics_37,x:1111.5,y:578.5}).wait(1).to({graphics:mask_graphics_38,x:1110.6,y:578.5}).wait(1).to({graphics:mask_graphics_39,x:1109.8,y:578.5}).wait(1).to({graphics:mask_graphics_40,x:1110.5,y:578.7}).wait(1).to({graphics:mask_graphics_41,x:1111.3,y:579}).wait(1).to({graphics:mask_graphics_42,x:1112.1,y:579.3}).wait(1).to({graphics:mask_graphics_43,x:1112.8,y:579.5}).wait(1).to({graphics:mask_graphics_44,x:1113.6,y:579.8}).wait(1).to({graphics:mask_graphics_45,x:1114.4,y:580.1}).wait(1).to({graphics:mask_graphics_46,x:1115.1,y:580.3}).wait(1).to({graphics:mask_graphics_47,x:1115.9,y:580.6}).wait(1).to({graphics:mask_graphics_48,x:1116.7,y:580.9}).wait(1).to({graphics:mask_graphics_49,x:1117.4,y:581.1}).wait(1).to({graphics:mask_graphics_50,x:1118.2,y:581.4}).wait(1).to({graphics:mask_graphics_51,x:1119,y:581.7}).wait(1).to({graphics:mask_graphics_52,x:1119.8,y:582}).wait(1).to({graphics:mask_graphics_53,x:1121.1,y:582}).wait(1).to({graphics:mask_graphics_54,x:1122.5,y:582}).wait(1).to({graphics:mask_graphics_55,x:1123.8,y:582}).wait(1).to({graphics:mask_graphics_56,x:1125.2,y:582}).wait(1).to({graphics:mask_graphics_57,x:1126.5,y:582}).wait(1).to({graphics:mask_graphics_58,x:1127.9,y:582}).wait(1).to({graphics:mask_graphics_59,x:1129.3,y:582}).wait(1).to({graphics:mask_graphics_60,x:1130.8,y:582}).wait(1).to({graphics:mask_graphics_61,x:1132.4,y:582}).wait(1).to({graphics:mask_graphics_62,x:1134,y:582}).wait(1).to({graphics:mask_graphics_63,x:1135.5,y:582}).wait(1).to({graphics:mask_graphics_64,x:1137.1,y:582}).wait(1).to({graphics:mask_graphics_65,x:1138.7,y:582}).wait(1).to({graphics:mask_graphics_66,x:1140.3,y:582}).wait(1).to({graphics:mask_graphics_67,x:1141.5,y:581.7}).wait(1).to({graphics:mask_graphics_68,x:1142.7,y:581.5}).wait(1).to({graphics:mask_graphics_69,x:1143.9,y:581.3}).wait(1).to({graphics:mask_graphics_70,x:1145.1,y:581.1}).wait(1).to({graphics:mask_graphics_71,x:1146.4,y:580.8}).wait(1).to({graphics:mask_graphics_72,x:1147.6,y:580.6}).wait(1).to({graphics:mask_graphics_73,x:1148.8,y:580.4}).wait(1).to({graphics:mask_graphics_74,x:1150,y:580.2}).wait(1).to({graphics:mask_graphics_75,x:1151.3,y:580}).wait(1).to({graphics:mask_graphics_76,x:1151.5,y:579.8}).wait(1).to({graphics:mask_graphics_77,x:1151.7,y:579.7}).wait(1).to({graphics:mask_graphics_78,x:1151.8,y:579.5}).wait(1).to({graphics:mask_graphics_79,x:1152.1,y:579.4}).wait(1).to({graphics:mask_graphics_80,x:1152.3,y:579.2}).wait(1).to({graphics:mask_graphics_81,x:1152.4,y:579.1}).wait(1).to({graphics:mask_graphics_82,x:1152.6,y:578.9}).wait(1).to({graphics:mask_graphics_83,x:1152.9,y:578.8}).wait(1).to({graphics:mask_graphics_84,x:1153.1,y:578.6}).wait(1).to({graphics:mask_graphics_85,x:1153.3,y:578.5}).wait(1).to({graphics:mask_graphics_86,x:1152,y:578.3}).wait(1).to({graphics:mask_graphics_87,x:1150.7,y:578.1}).wait(1).to({graphics:mask_graphics_88,x:1149.4,y:578}).wait(1).to({graphics:mask_graphics_89,x:1148.1,y:577.8}).wait(1).to({graphics:mask_graphics_90,x:1146.8,y:577.6}).wait(1).to({graphics:mask_graphics_91,x:1145.5,y:577.5}).wait(1).to({graphics:mask_graphics_92,x:1144.2,y:577.3}).wait(1).to({graphics:mask_graphics_93,x:1142.9,y:577.1}).wait(1).to({graphics:mask_graphics_94,x:1141.6,y:577}).wait(1).to({graphics:mask_graphics_95,x:1140.3,y:576.8}).wait(1).to({graphics:mask_graphics_96,x:1139,y:576.6}).wait(1).to({graphics:mask_graphics_97,x:1137.8,y:576.5}).wait(1).to({graphics:mask_graphics_98,x:1136.3,y:576.3}).wait(1).to({graphics:mask_graphics_99,x:1134.8,y:576.1}).wait(1).to({graphics:mask_graphics_100,x:1133.3,y:575.9}).wait(1).to({graphics:mask_graphics_101,x:1131.8,y:575.7}).wait(1).to({graphics:mask_graphics_102,x:1130.3,y:575.5}).wait(1).to({graphics:mask_graphics_103,x:1128.8,y:575.3}).wait(1).to({graphics:mask_graphics_104,x:1127.3,y:575.1}).wait(1).to({graphics:mask_graphics_105,x:1125.8,y:574.9}).wait(1).to({graphics:mask_graphics_106,x:1124.3,y:574.7}).wait(1).to({graphics:mask_graphics_107,x:1122.8,y:574.5}).wait(1).to({graphics:mask_graphics_108,x:1121.6,y:574.5}).wait(1).to({graphics:mask_graphics_109,x:1120.5,y:574.5}).wait(1).to({graphics:mask_graphics_110,x:1119.4,y:574.5}).wait(1).to({graphics:mask_graphics_111,x:1118.3,y:574.5}).wait(1).to({graphics:mask_graphics_112,x:1117.2,y:574.5}).wait(1).to({graphics:mask_graphics_113,x:1116.1,y:574.5}).wait(1).to({graphics:mask_graphics_114,x:1115,y:574.5}).wait(1).to({graphics:mask_graphics_115,x:1113.9,y:574.5}).wait(1).to({graphics:mask_graphics_116,x:1112.8,y:574.5}).wait(1).to({graphics:mask_graphics_117,x:1112.6,y:574.5}).wait(1).to({graphics:mask_graphics_118,x:1112.4,y:574.5}).wait(1).to({graphics:mask_graphics_119,x:1112.3,y:574.5}).wait(1).to({graphics:mask_graphics_120,x:1112.1,y:574.5}).wait(1).to({graphics:mask_graphics_121,x:1111.9,y:574.5}).wait(1).to({graphics:mask_graphics_122,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_123,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_124,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_125,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_126,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_127,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_128,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_129,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_130,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_131,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_132,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_133,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_134,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_135,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_136,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_137,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_138,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_139,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_140,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_141,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_142,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_143,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_144,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_145,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_146,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_147,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_148,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_149,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_150,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_151,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_152,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_153,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_154,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_155,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_156,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_157,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_158,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_159,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_160,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_161,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_162,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_163,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_164,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_165,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_166,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_167,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_168,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_169,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_170,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_171,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_172,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_173,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_174,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_175,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_176,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_177,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_178,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_179,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_180,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_181,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_182,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_183,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_184,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_185,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_186,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_187,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_188,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_189,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_190,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_191,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_192,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_193,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_194,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_195,x:1111.8,y:574.5}).wait(1).to({graphics:mask_graphics_196,x:1111.8,y:574.5}).wait(1));

	// Слой_2
	this.fon = new lib.Символ2();
	this.fon.parent = this;
	this.fon.setTransform(1244,684,1,1,0,0,0,1207,684);

	var maskedShapeInstanceList = [this.fon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2098,774,315,531);


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
	this.hand.setTransform(-1660,-675);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// коробкаВерх
	this.boxtop = new lib.Символ8();
	this.boxtop.parent = this;
	this.boxtop.setTransform(285.8,208,1,1,0,0,0,248.8,171);

	this.timeline.addTween(cjs.Tween.get(this.boxtop).wait(1));

	// открытка
	this.card = new lib.Анимация1();
	this.card.parent = this;
	this.card.setTransform(284.1,211.8);

	this.timeline.addTween(cjs.Tween.get(this.card).wait(1));

	// пачка
	this.box = new lib.Символ9();
	this.box.parent = this;
	this.box.setTransform(317.5,208,1,1,0,0,0,280.5,171);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1258,-360,2527,1368);
// library properties:
lib.properties = {
	width: 730,
	height: 630,
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