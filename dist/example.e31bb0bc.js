parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aQ0S":[function(require,module,exports) {
var t;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s="SmoothScrollTo",a=400,c="asc",h="desc",u="x",l="y",f="linear",m="easeOut",d="easeIn",b="easeInOut",g=[f,m,d,b],v=(r(t={},f,function(t){return t}),r(t,m,function(t){return t*t}),r(t,d,function(t){return t*(2-t)}),r(t,b,function(t){return t<.5?2*t*t:(4-2*t)*t-1}),t),y=function(){function t(e){n(this,t);var i=e.axis,o=e.callback,r=e.duration,s=e.easing,c=e.target,h=e.to;this.axis=i||l,this.callback=o||function(){},this.duration=r||a,this.easing=s||m,this.target=c||document.documentElement,this.to=h}return o(t,[{key:"init",value:function(){this.validateOptions(),this.startTime=performance.now(),this.from=this.getFromCoordinate(),this.to=this.getToCoordinate(),this.direction=this.to>this.from?c:h,this.distance=this.getDistance(),this.easingFn=v[this.easing],this.hasBeenInterrupted=!1,this.boundScrollStop=this.onScrollStop.bind(this),0!==this.distance?this.onScrollStart():console.warn("".concat(s,": no distance to be scrolled."))}},{key:"validateOptions",value:function(){if(this.axis!==u&&this.axis!==l)throw new Error("".concat(s,": 'axis' must be either 'x' or 'y'."));if("function"!=typeof this.callback)throw new Error("".concat(s,": 'callback' must be a function."));if("number"!=typeof this.duration)throw new Error("".concat(s,": 'duration' must be a number."));if(!g.includes(this.easing))throw new Error("".concat(s,": 'easing' must be one of: ").concat(g.join(", "),"."));if("number"!=typeof this.to)throw new Error("".concat(s,": 'to' must be a number."));if("object"!==e(this.target)||null===this.target)throw new Error("".concat(s,": 'target' must be an object (DOM element)."))}},{key:"getFromCoordinate",value:function(){return this.axis===l?this.target.scrollTop:this.target.scrollLeft}},{key:"getToCoordinate",value:function(){return this.axis===l?Math.max(Math.min(this.to,this.target.scrollHeight-this.target.clientHeight),0):Math.max(Math.min(this.to,this.target.scrollWidth-this.target.clientWidth),0)}},{key:"getDistance",value:function(){return this.direction===c?this.to-this.from:this.from-this.to}},{key:"getProgressCoordinate",value:function(t){return this.direction===c?this.from+t:this.from-t}},{key:"addEventListeners",value:function(){this.target.addEventListener("mousewheel",this.boundScrollStop),this.target.addEventListener("touchmove",this.boundScrollStop)}},{key:"removeEventListeners",value:function(){this.target.removeEventListener("mousewheel",this.boundScrollStop),this.target.removeEventListener("touchmove",this.boundScrollStop)}},{key:"onScrollStart",value:function(){requestAnimationFrame(this.tick.bind(this)),this.addEventListeners()}},{key:"onScrollStop",value:function(){this.hasBeenInterrupted=!0,this.removeEventListeners()}},{key:"onScrollEnd",value:function(){this.callback(),this.removeEventListeners()}},{key:"scroll",value:function(t){this.axis===l?this.target.scrollTop=t:this.target.scrollLeft=t}},{key:"tick",value:function(){if(!this.hasBeenInterrupted){var t=performance.now()-this.startTime,e=Math.min(t/this.duration,1),n=this.easingFn(e)*this.distance,i=this.getProgressCoordinate(n);e<1?(this.scroll(i),requestAnimationFrame(this.tick.bind(this))):(this.scroll(this.to),requestAnimationFrame(this.onScrollEnd.bind(this)))}}}]),t}();module.exports=y;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("../smooth-scroll-to"));function n(e){return e&&e.__esModule?e:{default:e}}console.log(e.default),window.addEventListener("load",function(){document.querySelector("#box-x-asc").addEventListener("click",function(){new e.default({to:400,target:document.querySelector("#parent-x"),axis:"x",callback:function(){console.log("end")}}).init()}),document.querySelector("#box-x-desc").addEventListener("click",function(){new e.default({to:0,target:document.querySelector("#parent-x"),axis:"x",callback:function(){console.log("end")}}).init()}),document.querySelector("#box-y-asc").addEventListener("click",function(){new e.default({to:1200,target:document.querySelector("#parent-y"),axis:"y",callback:function(){console.log("end")}}).init()}),document.querySelector("#box-y-desc").addEventListener("click",function(){new e.default({to:0,target:document.querySelector("#parent-y"),axis:"y",callback:function(){console.log("end")}}).init()}),document.querySelector("#window-y-asc").addEventListener("click",function(){new e.default({to:window.pageYOffset+400,callback:function(){console.log("end")}}).init()}),document.querySelector("#window-y-desc").addEventListener("click",function(){new e.default({to:-1200,callback:function(){console.log("end")}}).init()})});
},{"../smooth-scroll-to":"aQ0S"}]},{},["Focm"], null)