!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI=n():t.BalmUI=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s="eeVU")}({"+MZ2":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"+SdG":function(t,n,e){var r=e("a/OS")("keys"),o=e("GmwO");t.exports=function(t){return r[t]||(r[t]=o(t))}},"30vf":function(t,n,e){var r=e("Wdy1"),o=e("iANj"),u=e("zyKz");t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],i={};i[t]=n(e),r(r.S+r.F*u(function(){e(1)}),"Object",i)}},"3fMt":function(t,n,e){var r=e("SWGL");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},6794:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mvHQ"),o=function(t){return t&&t.__esModule?t:{default:t}}(r),u=["primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","background"],i=["primary","secondary","hint","disabled","icon"],c=["light","dark"],f=u.concat(c);n.default={methods:{themeColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="",r=t.toLowerCase();if(u.includes(r)){e="mdc-theme--"+r;n&&"background"!==r&&(e+="-bg")}else console.warn("Please choose a theme color: "+(0,o.default)(u));return e},textColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e="";return i.includes(t.toLowerCase())?f.includes(n.toLowerCase())?e="mdc-theme--text-"+t+"-on-"+n:console.warn("Please choose a text theme color: "+(0,o.default)(f)):console.warn("Please choose a text color: "+(0,o.default)(i)),e}}}},"7TqZ":function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("fZjL"),u=r(o),i=e("woOf"),c=r(i),f=e("9r4T"),a=r(f),s=e("6794"),l=r(s),d=e("XwkT"),p=r(d),h=(0,c.default)({},a.default.methods,l.default.methods,p.default.methods);n.default={install:function(t){(0,u.default)(h).forEach(function(n){t.prototype[n]=h[n]})}}},"8ANE":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9MbE":function(t,n,e){var r=e("8ANE");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"9r4T":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={props:{z:{type:[Number,String],default:0},zTransition:{type:Boolean,default:!1}},computed:{zSpaceValue:function(){return this.zSpace(+this.z,this.zTransition)}},methods:{zSpace:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t,r=n?["mdc-elevation-transition"]:[];return e>=0&&e<=24&&r.push("mdc-elevation--z"+e),r.join(" ")}}}},B5V0:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DvwR:function(t,n,e){var r=e("x//u"),o=e("ksFB"),u=e("PbQV")(!1),i=e("+SdG")("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=i&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~u(a,e)||a.push(e));return a}},EWRu:function(t,n,e){var r=e("W6Rd"),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},Eif7:function(t,n,e){e("JyN8"),t.exports=e("iANj").Object.assign},FHn5:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("fZjL"),u=r(o),i=e("mvHQ"),c=r(i),f=["margin","gutter","column-width"],a=["desktop","tablet","phone"],s={onChange:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return new Function("value","this."+t+" = value;").call(this,n),e(n),this},onOpen:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Function("this."+t+" = true;").call(this),n(),this},onClose:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Function("this."+t+" = false;").call(this),n(),this},onShow:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Function("this."+t+" = true;").call(this),n(),this},onHide:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Function("this."+t+" = false;").call(this),n(),this},setGrid:function(t,n,e){f.includes(t)?a.includes(n)?document.documentElement.style.setProperty("--mdc-layout-grid-"+t+"-"+n,e):console.warn("Please set a screen size: "+(0,c.default)(a)):console.warn("Please set a grid property: "+(0,c.default)(f))}};n.default={install:function(t){(0,u.default)(s).forEach(function(n){t.prototype[n]=s[n]})}}},FKWp:function(t,n,e){var r=e("8ANE");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},GCs6:function(t,n,e){var r=e("FKWp"),o=e("LocR"),u=e("9MbE"),i=Object.defineProperty;n.f=e("qs+f")?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},GhAV:function(t,n,e){var r=e("W6Rd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},GmwO:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},JyN8:function(t,n,e){var r=e("Wdy1");r(r.S+r.F,"Object",{assign:e("xVc6")})},LocR:function(t,n,e){t.exports=!e("qs+f")&&!e("zyKz")(function(){return 7!=Object.defineProperty(e("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},PY1i:function(t,n,e){var r=e("8ANE"),o=e("YjQv").document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},PbQV:function(t,n,e){var r=e("ksFB"),o=e("GhAV"),u=e("EWRu");t.exports=function(t){return function(n,e,i){var c,f=r(n),a=o(f.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},SWGL:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},THEY:function(t,n){n.f=Object.getOwnPropertySymbols},W6Rd:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},Wdy1:function(t,n,e){var r=e("YjQv"),o=e("iANj"),u=e("3fMt"),i=e("aLzV"),c=function(t,n,e){var f,a,s,l=t&c.F,d=t&c.G,p=t&c.S,h=t&c.P,v=t&c.B,y=t&c.W,b=d?o:o[n]||(o[n]={}),m=b.prototype,g=d?r:p?r[n]:(r[n]||{}).prototype;d&&(e=n);for(f in e)(a=!l&&g&&void 0!==g[f])&&f in b||(s=a?g[f]:e[f],b[f]=d&&"function"!=typeof g[f]?e[f]:v&&a?u(s,r):y&&g[f]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):h&&"function"==typeof s?u(Function.call,s):s,h&&((b.virtual||(b.virtual={}))[f]=s,t&c.R&&m&&!m[f]&&i(m,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},XwkT:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=["display4","display3","display2","display1","headline","title","subheading2","subheading1","body2","body1","caption"];n.default={methods:{typography:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=r.includes(t.toLowerCase())?["mdc-typography--"+t]:[];return n&&e.push("mdc-typography--adjust-margin"),e.join(" ")}}}},YTz9:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},YjQv:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},Zbun:function(t,n,e){var r=e("iANj"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},ZhOs:function(t,n,e){e("rZAI"),t.exports=e("iANj").Object.keys},"a/OS":function(t,n,e){var r=e("YjQv"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},aLzV:function(t,n,e){var r=e("GCs6"),o=e("YTz9");t.exports=e("qs+f")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},bSeU:function(t,n){n.f={}.propertyIsEnumerable},eeVU:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("7TqZ"),u=r(o),i=e("FHn5"),c=r(i),f={mixin:u.default,event:c.default};if("undefined"!==typeof window&&window.Vue){document.querySelector("body").classList.add("mdc-typography");for(var a in f)window.Vue.use(f[a])}n.default=f},fZjL:function(t,n,e){t.exports={default:e("ZhOs"),__esModule:!0}},iANj:function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},ksFB:function(t,n,e){var r=e("wiaE"),o=e("+MZ2");t.exports=function(t){return r(o(t))}},mvHQ:function(t,n,e){t.exports={default:e("Zbun"),__esModule:!0}},pEGt:function(t,n,e){var r=e("DvwR"),o=e("B5V0");t.exports=Object.keys||function(t){return r(t,o)}},"qs+f":function(t,n,e){t.exports=!e("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rZAI:function(t,n,e){var r=e("wXdB"),o=e("pEGt");e("30vf")("keys",function(){return function(t){return o(r(t))}})},wXdB:function(t,n,e){var r=e("+MZ2");t.exports=function(t){return Object(r(t))}},wiaE:function(t,n,e){var r=e("NZra");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},woOf:function(t,n,e){t.exports={default:e("Eif7"),__esModule:!0}},"x//u":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},xVc6:function(t,n,e){"use strict";var r=e("pEGt"),o=e("THEY"),u=e("bSeU"),i=e("wXdB"),c=e("wiaE"),f=Object.assign;t.exports=!f||e("zyKz")(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=i(t),f=arguments.length,a=1,s=o.f,l=u.f;f>a;)for(var d,p=c(arguments[a++]),h=s?r(p).concat(s(p)):r(p),v=h.length,y=0;v>y;)l.call(p,d=h[y++])&&(e[d]=p[d]);return e}:f},zyKz:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}}})});