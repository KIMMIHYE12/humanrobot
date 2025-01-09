(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"unterricht03_atlas_1", frames: [[0,0,489,576],[0,578,140,153]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2346,2346);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4463,4458);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["unterricht03_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["unterricht03_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Sonnesystem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhboBbpMAAAi3RMC3RAAAMAAAC3Rg");
	mask.setTransform(586.5,586.5);

	// Layer_3
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sonnesystem, new cjs.Rectangle(0,0.1,1173,1172.9), null);


(lib.Kuipergürtel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiuUCuIMAAAlcQMFcoAAAMAAAFcQg");
	mask.setTransform(1115.65,1114.45);

	// Layer_3
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Kuipergürtel, new cjs.Rectangle(0,0,2231.3,2228.9), null);


(lib.GS_pluto_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GS_pluto_body, new cjs.Rectangle(0,0,244.5,288), null);


(lib.GS_pluto_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626165").s().p("AjxgSQgPAKgUAAQgaAAgSgSQgSgSAAgaQAAgaASgTQASgSAaAAQAbAAASASQASATAAAaQAAANgFAMIDpCHIClkcQAVgfAwADQArACASAVQAgAkgDAsQgCAWgJAOIkVEzg");
	this.shape.setTransform(33.9173,22.3405);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GS_pluto_arm, new cjs.Rectangle(0,0,67.9,44.7), null);


(lib.GS_Flag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,76.5);


(lib.drop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF2CD").s().p("AgjA/QgMgTAIgVIAnhoIAoBoQAJAWgNASQgNATgXAAQgWAAgNgTg");
	this.shape.setTransform(4.3369,8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.7,16.4);


(lib.GS_drop01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.drop("synched",0);
	this.instance.setTransform(4.4,8.2,1,1,0,0,0,4.4,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:42},9).to({alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.7,50.2);


// stage content:
(lib.unterricht03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10
	this.text = new cjs.Text("Ich bin nicht mehr als Planet angesehen.", "20px 'Sofia Pro Soft Bold'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(949.8,93.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF2CD").s().p("AiTI+QACgRAAgSQk1gbjoiTQkci0ABj+QgBj/Eci0QEdi0GRAAQGSAAEcC0QEdC0AAD/QAAD+kdC0QkTCvmEAFQguBThYAkQglAOgnAGIghABQA/gSAKhdg");
	this.shape.setTransform(949.25,132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(90));

	// Drop2
	this.instance = new lib.GS_drop01("synched",0,false);
	this.instance.setTransform(838,382.55,1,1,0,0,0,4.4,37.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(47));

	// Drop3
	this.instance_1 = new lib.GS_drop01("synched",0,false);
	this.instance_1.setTransform(771.45,357.15,0.6462,0.6462,0,0,0,4.4,10.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(64));

	// Drop
	this.instance_2 = new lib.GS_drop01("synched",0,false);
	this.instance_2.setTransform(827.8,359.9,0.6319,0.6319,0,0,0,4.4,8.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(81));

	// Puloto_arm
	this.instance_3 = new lib.GS_pluto_arm();
	this.instance_3.setTransform(895.2,395.15,1,1,0,0,0,33.9,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// Pluto_flag
	this.instance_4 = new lib.GS_Flag("synched",0);
	this.instance_4.setTransform(867.2,389.35,1,1,0,0,0,0,62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({regY:62.5,rotation:-11.1988,y:389.45},0).to({regY:62.4,rotation:0,y:389.35},5).to({regX:0.1,regY:62.5,rotation:12.1935,x:867.3,y:389.45},5).to({regX:0,regY:62.4,rotation:0,x:867.2,y:389.35},5).to({regY:62.5,rotation:-11.1988,y:389.45},5).to({regY:62.4,rotation:0,y:389.35},5).wait(36));

	// Pluto_body
	this.instance_5 = new lib.GS_pluto_body();
	this.instance_5.setTransform(863.25,345.1,1,1,0,0,0,122.2,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// Kuipergürtel
	this.instance_6 = new lib.Kuipergürtel();
	this.instance_6.setTransform(104.45,86.25,1,1,0,0,0,1115.7,1114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// Sonnensystem
	this.instance_7 = new lib.Sonnesystem();
	this.instance_7.setTransform(104.45,86.2,1,1,0,0,0,586.5,586.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EhXqgqyIAAgWMCvVAAAMAAABWRIgWAAMiu/AAA");
	this.shape_1.setTransform(561.175,274.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#28282B").s().p("EhXfAq+MAAAhV7MCu/AAAMAAABV7g");
	this.shape_2.setTransform(560.05,275.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-451.2,-753.2,1671.5,1954);
// library properties:
lib.properties = {
	id: 'AC42B195D07D491093A66D9868A869E9',
	width: 1120,
	height: 550,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_12.png?1736381154376", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1736381154376", id:"CachedBmp_11"},
		{src:"images/unterricht03_atlas_1.png?1736381154365", id:"unterricht03_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AC42B195D07D491093A66D9868A869E9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;