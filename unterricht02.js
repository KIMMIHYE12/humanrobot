(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"unterricht02_atlas_1", frames: [[1327,782,99,99],[0,782,303,322],[305,782,282,282],[1188,782,137,137],[589,782,597,40],[0,0,1998,780]]}
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
	this.initialize(ss["unterricht02_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["unterricht02_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["unterricht02_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["unterricht02_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["unterricht02_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["unterricht02_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.GS_Venus = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.4545,0.4545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


(lib.GS_Uranus = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AoFHuIAAvbIQLAAIAAPbg");
	mask.setTransform(51.775,49.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCC4BE").s().p("AnrHjIgFgEQgTgRgCgdQgFhRBqibQBqicCjiWQCpieCKhhQDHiMBiANQAmAEAQAaQAiA2iFDCQgeAsgpA1IgJgiQAagiAfgtQBBheAYg+QASgvgJgOIgGgHQgJgIgSgCQhcgNjNCUQiCBgibCPQiaCPhqCYQhqCZAFBIQACAUAMAJQAaASBUgiQBPghBqhGIAiALIhSA0QhVAzg+AXQgtAQgfAAQgYAAgQgLg");
	this.shape.setTransform(51.7608,49.3497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0B356").s().p("AkEEmQh6hsgJiiQgKiiBsh6QBsh6CigJQCigKB6BsQB6BsAJCiQAKCihsB6QhsB6iiAJIgbABQiRAAhwhjg");
	this.shape_1.setTransform(47.625,46.625);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.6,98.7);


(lib.GS_Sonne = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.5,161);


(lib.GS_Saturn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ED8254").s().p("AmxDnQi9gYh8gwQh/gxgag+QgchCBhhGQCMhkEQgpQgRAegMAfQhqAahFAhQhIAjgEAfQgGBAC5AqQDGAtE2gJQECgIC7gjQDhgqA9hGQAgglhKgqQhIgnh8gUQgQghgPgXQDYAfB8A6QCNBCgeBUQgsB5lYBLQkGA5kUAIIhTABQiqAAicgUg");
	this.shape.setTransform(90.6496,48.7831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8C848").s().p("AlmFnQiUiVAAjSQAAjRCUiUQCViVDRAAQDSAACVCVQCUCUAADRQAADSiUCVQiVCUjSAAQjRAAiViUg");
	this.shape_1.setTransform(92.875,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,101.4);


(lib.GS_Neptun = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#889D9B").s().p("AkJEKQhuhuAAicQAAibBuhuQBuhuCbAAQCcAABuBuQBuBuAACbQAACchuBuQhuBuicAAQibAAhuhug");
	this.shape.setTransform(37.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,75.2);


(lib.GS_Mercur = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D1BEAC").s().p("AhZBbQgmgmAAg1QAAg0AmglQAlgmA0AAQA1AAAmAmQAlAlAAA0QAAA1glAmQgmAlg1AAQg0AAglglg");
	this.shape.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,25.6);


(lib.GS_Mars = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FB8A5A").s().p("AjEDFQhRhSAAhzQAAhyBRhRQBShSByAAQBzAABRBSQBSBRAAByQAABzhSBSQhRBRhzAAQhyAAhShRg");
	this.shape.setTransform(27.775,27.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.6,55.6);


(lib.GS_Jupiter = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AqAKBIAA0BIUBAAIAAUBg");
	mask.setTransform(64.075,64.075);

	// Layer_3
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.4545,0.4545);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.2,128.2);


(lib.GS_Gestein = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Gesteinsplaneten", "20px 'Sofia Pro Soft Bold'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 166;
	this.text.parent = this;
	this.text.setTransform(84.8,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.6,24);


(lib.GS_Gasriesen = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Gasriesen", "20px 'Sofia Pro Soft Bold'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 166;
	this.text.parent = this;
	this.text.setTransform(84.8,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.6,24);


(lib.GS_Erde = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.4545,0.4545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,62.3);


(lib.ball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,6.8);


(lib.GS_Ball02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ball("synched",0);
	this.instance.setTransform(35,-15,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:233.95},16,cjs.Ease.cubicOut).to({alpha:0},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.6,-18.4,6.799999999999997,255.8);


(lib.GS_Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ball
	this.instance = new lib.ball("synched",0,false);
	this.instance.setTransform(224.55,56.1,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[224.5,56.2,224,121.7,223.5,187.2,223.5,187.1,223.6,187]}},9,cjs.Ease.quadOut).to({guide:{path:[223.6,187.1,225.8,174,232.2,155,239,135.2,244.6,127.2]}},7,cjs.Ease.quadIn).to({alpha:0},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(220.2,52.7,27.80000000000001,137.8);


// stage content:
(lib.unterricht02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ball04
	this.instance = new lib.GS_Ball("synched",0,false);
	this.instance.setTransform(613.25,299.2,1,1,0,0,0,375.7,271.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).wait(261));

	// ball03
	this.instance_1 = new lib.GS_Ball("synched",0,false);
	this.instance_1.setTransform(526.25,296.2,1,1,0,0,0,375.7,271.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).wait(276));

	// ball02
	this.instance_2 = new lib.GS_Ball("synched",0,false);
	this.instance_2.setTransform(446.25,303.2,1,1,0,0,0,375.7,271.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(290));

	// ball01
	this.instance_3 = new lib.GS_Ball("synched",0,false);
	this.instance_3.setTransform(376.25,314.2,1,1,0,0,0,375.7,271.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(306));

	// Gas
	this.instance_4 = new lib.GS_Gasriesen("synched",0);
	this.instance_4.setTransform(833.15,470.05,1,1,0,0,0,84.8,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(193).to({startPosition:0},0).to({regY:12.1,scaleX:1.0999,scaleY:1.0999,y:470.1},6).to({regY:12,scaleX:1,scaleY:1,y:470.05},5).wait(125));

	// Neptun
	this.instance_5 = new lib.GS_Neptun();
	this.instance_5.setTransform(1043.9,243.6,1,1,0,0,0,37.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177).to({scaleX:1.1,scaleY:1.1,x:1043.85,y:243.55},6).to({scaleX:1,scaleY:1,x:1043.9,y:243.6},6).wait(140));

	// Uranus
	this.instance_6 = new lib.GS_Uranus();
	this.instance_6.setTransform(936.95,243.65,1,1,0,0,0,51.8,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(177).to({scaleX:1.1,scaleY:1.1},6).to({scaleX:1,scaleY:1},6).wait(140));

	// Saturn
	this.instance_7 = new lib.GS_Saturn();
	this.instance_7.setTransform(787.7,243.6,1,1,0,0,0,90.7,50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(177).to({regY:50.8,scaleX:1.1,scaleY:1.1,x:787.65,y:243.7},6).to({regY:50.7,scaleX:1,scaleY:1,x:787.7,y:243.6},6).wait(140));

	// Jupiter
	this.instance_8 = new lib.GS_Jupiter();
	this.instance_8.setTransform(616.8,243.55,1,1,0,0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(177).to({regX:64.1,scaleX:1.1,scaleY:1.1,x:616.85},6).to({regX:64,scaleX:1,scaleY:1,x:616.8},6).wait(140));

	// Ball_08
	this.instance_9 = new lib.GS_Ball02("synched",0,false);
	this.instance_9.setTransform(1058.25,253.6,1,1,0,0,0,49.1,134.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(157).to({_off:false},0).wait(172));

	// Ball_07
	this.instance_10 = new lib.GS_Ball02("synched",0,false);
	this.instance_10.setTransform(945.2,253.6,1,1,0,0,0,49.1,134.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(148).to({_off:false},0).wait(181));

	// Ball_06
	this.instance_11 = new lib.GS_Ball02("synched",0,false);
	this.instance_11.setTransform(802.4,253.6,1,1,0,0,0,49.1,134.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(139).to({_off:false},0).wait(190));

	// Ball_05
	this.instance_12 = new lib.GS_Ball02("synched",0,false);
	this.instance_12.setTransform(625.6,253.6,1,1,0,0,0,49.1,134.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).wait(199));

	// Mars
	this.instance_13 = new lib.GS_Mars();
	this.instance_13.setTransform(462.35,243.65,1,1,0,0,0,27.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86).to({scaleX:1.1,scaleY:1.1,x:473.5},6).to({scaleX:1,scaleY:1,x:462.35},6).wait(231));

	// Erde
	this.instance_14 = new lib.GS_Erde();
	this.instance_14.setTransform(376.35,243.65,1,1,0,0,0,31.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(86).to({scaleX:1.1,scaleY:1.1,x:378.85},6).to({scaleX:1,scaleY:1,x:376.35},6).wait(231));

	// Venus
	this.instance_15 = new lib.GS_Venus();
	this.instance_15.setTransform(295.25,243.55,1,1,0,0,0,22.4,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86).to({regX:22.5,scaleX:1.1,scaleY:1.1,x:289.75},6).to({regX:22.4,scaleX:1,scaleY:1,x:295.25},6).wait(231));

	// Merkur
	this.instance_16 = new lib.GS_Mercur("synched",0);
	this.instance_16.setTransform(224.55,243.6,1,1,0,0,0,12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(86).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,x:211.9},6).to({scaleX:1,scaleY:1,x:224.55},6).wait(231));

	// Sonne
	this.instance_17 = new lib.GS_Sonne();
	this.instance_17.setTransform(102.05,243.6,1,1,0,0,0,75.7,80.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(329));

	// Gestein
	this.instance_18 = new lib.GS_Gestein("synched",0);
	this.instance_18.setTransform(347.85,470.05,1,1,0,0,0,84.8,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(86).to({startPosition:0},0).wait(16).to({startPosition:0},0).to({regX:84.9,regY:12.1,scaleX:1.0999,scaleY:1.0999,x:347.9,y:470.1},6).to({regX:84.8,regY:12,scaleX:1,scaleY:1,x:347.85,y:470.05},5).wait(216));

	// line_text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B31CD").s().p("AtTCxQgyAAAAgyIAAj9QAAgyAyAAIanAAQAyAAAAAyIAAD9QAAAygyAAg");
	this.shape.setTransform(348.15,469.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57B7AD").s().p("AtTCxQgyAAAAgyIAAj9QAAgyAyAAIanAAQAyAAAAAyIAAD9QAAAygyAAg");
	this.shape_1.setTransform(832.85,469.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(329));

	// line
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#57B7AD").ss(4,1,1).p("EAg2gCWIAADiQAABLipAAMg8YAAAQiqAAABhLIAAji");
	this.shape_2.setTransform(828.8997,455.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8B31CD").ss(4,1,1).p("AS8iWIAADiQAABLhigBMgizAAAQhiABABhLIAAji");
	this.shape_3.setTransform(345.9499,453.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(329));

	// Text
	this.text = new cjs.Text("Jupiter", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 54;
	this.text.parent = this;
	this.text.setTransform(616.25,399.35);

	this.text_1 = new cjs.Text("Neptun", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 54;
	this.text_1.parent = this;
	this.text_1.setTransform(1039.7,399.35);

	this.text_2 = new cjs.Text("Uranus", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 54;
	this.text_2.parent = this;
	this.text_2.setTransform(932.7,399.35);

	this.text_3 = new cjs.Text("Saturn", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 54;
	this.text_3.parent = this;
	this.text_3.setTransform(790.25,399.35);

	this.text_4 = new cjs.Text("Mars", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 54;
	this.text_4.parent = this;
	this.text_4.setTransform(465.75,399.35);

	this.text_5 = new cjs.Text("Erde", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 54;
	this.text_5.parent = this;
	this.text_5.setTransform(380.45,399.35);

	this.text_6 = new cjs.Text("Venus", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 54;
	this.text_6.parent = this;
	this.text_6.setTransform(301.3,399.35);

	this.text_7 = new cjs.Text("Merkur", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 54;
	this.text_7.parent = this;
	this.text_7.setTransform(229.1,399.35);

	this.text_8 = new cjs.Text("Sonne", "16px 'Sofia Pro Soft Medium'", "#FFFFFF");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 54;
	this.text_8.parent = this;
	this.text_8.setTransform(102.95,399.35);

	this.instance_19 = new lib.CachedBmp_8();
	this.instance_19.setTransform(198.15,397.35,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_7();
	this.instance_20.setTransform(71.75,139.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(329));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("EhXqgqyIAAgWMCvVAAAMAAABWRIgWAAMiu/AAA");
	this.shape_4.setTransform(561.175,274.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#28282B").s().p("EhXfAq+MAAAhV7MCu/AAAMAAABV7g");
	this.shape_5.setTransform(560.05,275.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(329));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(559.1,272,564.1999999999999,279.20000000000005);
// library properties:
lib.properties = {
	id: 'AC42B195D07D491093A66D9868A869E9',
	width: 1120,
	height: 550,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/unterricht02_atlas_1.png?1735787283350", id:"unterricht02_atlas_1"}
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