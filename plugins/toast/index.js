!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI_toast=n():t.BalmUI_toast=n()}(window,(function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="ux2C")}({"+6pO":function(t,n,e){e("mmui");var o=e("oWnS");t.exports=o("String").trim},"/5b1":function(t,n,e){var o=e("GHVm"),r="["+e("gfA+")+"]",i=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),u=function(t){return function(n){var e=String(o(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},"/EgQ":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"39uu":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"526F":function(t,n,e){t.exports=e("kE3c")},"9E9t":function(t,n,e){"use strict";var o=e("wbIY"),r=e("Bvq2"),i=e("oBZR"),a=e("ogVW"),u=e("cEPT"),c=e("T/97"),s=e("Y4yM"),f=Object.assign,l=Object.defineProperty;t.exports=!f||r((function(){if(o&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=f({},t)[e]||"abcdefghijklmnopqrst"!=i(f({},n)).join("")}))?function(t,n){for(var e=c(t),r=arguments.length,f=1,l=a.f,p=u.f;r>f;)for(var d,_=s(arguments[f++]),h=l?i(_).concat(l(_)):i(_),m=h.length,y=0;m>y;)d=h[y++],o&&!p.call(_,d)||(e[d]=_[d]);return e}:f},AnMC:function(t,n,e){var o=e("wbIY"),r=e("QYBB"),i=e("LGyv");t.exports=o?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},Bvq2:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},DkPT:function(t,n,e){var o=e("o4zr");t.exports=o},FWHo:function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},GHVm:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},Kwsy:function(t,n,e){t.exports=e("br0Y")},LGyv:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},LYCE:function(t,n,e){t.exports=e("DkPT")},OsYe:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("yLpj"))},Pkdo:function(t,n,e){var o=e("pevS"),r=e("wbIY");o({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperty:e("QYBB").f})},QYBB:function(t,n,e){var o=e("wbIY"),r=e("d7IX"),i=e("b42z"),a=e("cWgI"),u=Object.defineProperty;n.f=o?u:function(t,n,e){if(i(t),n=a(n,!0),i(e),r)try{return u(t,n,e)}catch(o){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},RKTd:function(t,n,e){t.exports=e("juuZ")},RLqH:function(t,n,e){var o=e("wbIY"),r=e("cEPT"),i=e("LGyv"),a=e("pCEo"),u=e("cWgI"),c=e("eOcF"),s=e("d7IX"),f=Object.getOwnPropertyDescriptor;n.f=o?f:function(t,n){if(t=a(t),n=u(n,!0),s)try{return f(t,n)}catch(e){}if(c(t,n))return i(!r.f.call(t,n),t[n])}},RQhY:function(t,n,e){var o=e("FWHo"),r=Math.max,i=Math.min;t.exports=function(t,n){var e=o(t);return e<0?r(e+n,0):i(e,n)}},"T/97":function(t,n,e){var o=e("GHVm");t.exports=function(t){return Object(o(t))}},VdC8:function(t,n,e){var o=e("pevS"),r=e("9E9t");o({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},Y4Ys:function(t,n,e){var o=e("pCEo"),r=e("ZyXh"),i=e("RQhY"),a=function(t){return function(n,e,a){var u,c=o(n),s=r(c.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},Y4yM:function(t,n,e){var o=e("Bvq2"),r=e("/EgQ"),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},ZBQp:function(t,n,e){var o=e("zJQS");t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},ZyXh:function(t,n,e){var o=e("FWHo"),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},b42z:function(t,n,e){var o=e("39uu");t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},bpon:function(t,n){t.exports={}},br0Y:function(t,n,e){e("xahd");var o=e("dktu");t.exports=o.setTimeout},cEPT:function(t,n,e){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);n.f=i?function(t){var n=r(this,t);return!!n&&n.enumerable}:o},cWgI:function(t,n,e){var o=e("39uu");t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},d7IX:function(t,n,e){var o=e("wbIY"),r=e("Bvq2"),i=e("ejc7");t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},dktu:function(t,n){t.exports={}},eOcF:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},ejc7:function(t,n,e){var o=e("OsYe"),r=e("39uu"),i=o.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},"g+4o":function(t,n,e){var o=e("Bvq2"),r=e("gfA+");t.exports=function(t){return o((function(){return!!r[t]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[t]()||r[t].name!==t}))}},"gfA+":function(t,n){t.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},juuZ:function(t,n,e){var o=e("vA9J");t.exports=o},kE3c:function(t,n,e){var o=e("uC8H");t.exports=o},kUbF:function(t,n,e){"use strict";(function(t){n.a=function(n){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof t&&(e=t.Vue),e&&e.use(n)}}).call(this,e("yLpj"))},lxfd:function(t,n,e){var o=e("mIMY");t.exports=o("navigator","userAgent")||""},mIMY:function(t,n,e){var o=e("dktu"),r=e("OsYe"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][n]||r[t]&&r[t][n]}},mmui:function(t,n,e){"use strict";var o=e("pevS"),r=e("/5b1").trim;o({target:"String",proto:!0,forced:e("g+4o")("trim")},{trim:function(){return r(this)}})},nleh:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},o4zr:function(t,n,e){e("Pkdo");var o=e("dktu").Object,r=t.exports=function(t,n,e){return o.defineProperty(t,n,e)};o.defineProperty.sham&&(r.sham=!0)},oBZR:function(t,n,e){var o=e("syO3"),r=e("nleh");t.exports=Object.keys||function(t){return o(t,r)}},oOVA:function(t,n,e){var o=e("Bvq2"),r=/#|\.prototype\./,i=function(t,n){var e=u[a(t)];return e==s||e!=c&&("function"==typeof n?o(n):!!n)},a=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},oWnS:function(t,n,e){var o=e("dktu");t.exports=function(t){return o[t+"Prototype"]}},ogVW:function(t,n){n.f=Object.getOwnPropertySymbols},pCEo:function(t,n,e){var o=e("Y4yM"),r=e("GHVm");t.exports=function(t){return o(r(t))}},pevS:function(t,n,e){"use strict";var o=e("OsYe"),r=e("RLqH").f,i=e("oOVA"),a=e("dktu"),u=e("ZBQp"),c=e("AnMC"),s=e("eOcF"),f=function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,l,p,d,_,h,m,y,b=t.target,v=t.global,g=t.stat,E=t.proto,O=v?o:g?o[b]:(o[b]||{}).prototype,S=v?a:a[b]||(a[b]={}),T=S.prototype;for(p in n)e=!i(v?p:b+(g?".":"#")+p,t.forced)&&O&&s(O,p),_=S[p],e&&(h=t.noTargetGet?(y=r(O,p))&&y.value:O[p]),d=e&&h?h:n[p],e&&typeof _===typeof d||(m=t.bind&&e?u(d,o):t.wrap&&e?f(d):E&&"function"==typeof d?u(Function.call,d):d,(t.sham||d&&d.sham||_&&_.sham)&&c(m,"sham",!0),S[p]=m,E&&(s(a,l=b+"Prototype")||c(a,l,{}),a[l][p]=d,t.real&&T&&!T[p]&&c(T,p,d)))}},syO3:function(t,n,e){var o=e("eOcF"),r=e("pCEo"),i=e("Y4Ys").indexOf,a=e("bpon");t.exports=function(t,n){var e,u=r(t),c=0,s=[];for(e in u)!o(a,e)&&o(u,e)&&s.push(e);for(;n.length>c;)o(u,e=n[c++])&&(~i(s,e)||s.push(e));return s}},uC8H:function(t,n,e){e("VdC8");var o=e("dktu");t.exports=o.Object.assign},ux2C:function(t,n,e){"use strict";e.r(n);var o=e("Kwsy"),r=e.n(o),i=e("526F"),a=e.n(i),u=e("kUbF"),c=e("RKTd"),s=e.n(c),f={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},l={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},p={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},d=p.ARIA_LIVE_DELAY_MS,_=l.ARIA_LIVE_LABEL_TEXT_ATTR;function h(t,n){var e;void 0===n&&(n=t);var o=t.getAttribute("aria-live"),i=s()(e=n.textContent).call(e);i&&o&&(t.setAttribute("aria-live","off"),n.textContent="",n.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',n.setAttribute(_,i),r()((function(){t.setAttribute("aria-live",o),n.removeAttribute(_),n.textContent=i}),d))}var m=e("LYCE"),y=e.n(m),b=e("zOht"),v=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return y()(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),y()(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),y()(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),y()(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),g=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,Object(b.__spread)(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new v({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"===typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}();function E(t,n){if(t.closest)return t.closest(n);for(var e=t;e;){if(O(e,n))return e;e=e.parentElement}return null}function O(t,n){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,n)}var S=f.OPENING,T=f.OPEN,C=f.CLOSING,I=l.REASON_ACTION,w=l.REASON_DISMISS,A=function(t){function n(e){var o=t.call(this,Object(b.__assign)(Object(b.__assign)({},n.defaultAdapter),e))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.autoDismissTimer_=0,o.autoDismissTimeoutMs_=p.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape_=!0,o}return Object(b.__extends)(n,t),y()(n,"cssClasses",{get:function(){return f},enumerable:!0,configurable:!0}),y()(n,"strings",{get:function(){return l},enumerable:!0,configurable:!0}),y()(n,"numbers",{get:function(){return p},enumerable:!0,configurable:!0}),y()(n,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(S),this.adapter_.removeClass(T),this.adapter_.removeClass(C)},n.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(C),this.adapter_.addClass(S),this.adapter_.announce(),this.runNextAnimationFrame_((function(){t.adapter_.addClass(T),t.animationTimer_=r()((function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),n!==p.INDETERMINATE&&(t.autoDismissTimer_=r()((function(){t.close(w)}),n))}),p.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},n.prototype.close=function(t){var n=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(f.CLOSING),this.adapter_.removeClass(f.OPEN),this.adapter_.removeClass(f.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=r()((function(){n.handleAnimationTimerEnd_(),n.adapter_.notifyClosed(t)}),p.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},n.prototype.isOpen=function(){return this.isOpen_},n.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},n.prototype.setTimeoutMs=function(t){var n=p.MIN_AUTO_DISMISS_TIMEOUT_MS,e=p.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===p.INDETERMINATE||t<=e&&t>=n))throw new Error("\n        timeoutMs must be an integer in the range "+n+"\u2013"+e+"\n        (or "+p.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},n.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},n.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},n.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(w)},n.prototype.handleActionButtonClick=function(t){this.close(I)},n.prototype.handleActionIconClick=function(t){this.close(w)},n.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},n.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(f.OPENING),this.adapter_.removeClass(f.CLOSING)},n.prototype.runNextAnimationFrame_=function(t){var n=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){n.animationFrame_=0,clearTimeout(n.animationTimer_),n.animationTimer_=r()(t,0)}))},n}(v),x=l.SURFACE_SELECTOR,M=l.LABEL_SELECTOR,N=l.ACTION_SELECTOR,k=l.DISMISS_SELECTOR,j=l.OPENING_EVENT,D=l.OPENED_EVENT,L=l.CLOSING_EVENT,P=l.CLOSED_EVENT,R=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(b.__extends)(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialize=function(t){void 0===t&&(t=function(){return h}),this.announce_=t()},n.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl_=this.root_.querySelector(x),this.labelEl_=this.root_.querySelector(M),this.actionEl_=this.root_.querySelector(N),this.handleKeyDown_=function(n){return t.foundation_.handleKeyDown(n)},this.handleSurfaceClick_=function(n){var e=n.target;t.isActionButton_(e)?t.foundation_.handleActionButtonClick(n):t.isActionIcon_(e)&&t.foundation_.handleActionIconClick(n)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},n.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},n.prototype.open=function(){this.foundation_.open()},n.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new A({addClass:function(n){return t.root_.classList.add(n)},announce:function(){return t.announce_(t.labelEl_)},notifyClosed:function(n){return t.emit(P,n?{reason:n}:{})},notifyClosing:function(n){return t.emit(L,n?{reason:n}:{})},notifyOpened:function(){return t.emit(D,{})},notifyOpening:function(){return t.emit(j,{})},removeClass:function(n){return t.root_.classList.remove(n)}})},y()(n.prototype,"timeoutMs",{get:function(){return this.foundation_.getTimeoutMs()},set:function(t){this.foundation_.setTimeoutMs(t)},enumerable:!0,configurable:!0}),y()(n.prototype,"closeOnEscape",{get:function(){return this.foundation_.getCloseOnEscape()},set:function(t){this.foundation_.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),y()(n.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),y()(n.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),y()(n.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),n.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},n.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},n.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},n.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},n.prototype.isActionButton_=function(t){return Boolean(E(t,N))},n.prototype.isActionIcon_=function(t){return Boolean(E(t,k))},n}(g),B={ACTION_BUTTON:0,DISMISS_ICON:1},F={MIN:4e3,MAX:1e4,DEFAULTS:5e3},Y={CHANGE:"change",CLOSED:"closed"};var U=function(t,n,e,o,r,i,a,u){var c,s="function"===typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):r&&(c=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,n){return c.call(n),f(t,n)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}({name:"ui-snackbar",model:{prop:"open",event:Y.CHANGE},props:{actionType:{type:Number,default:B.ACTION_BUTTON},open:{type:Boolean,default:!1},timeoutMs:{type:[Number,String],default:F.DEFAULTS},message:{type:String,default:""},actionButtonText:String,stacked:{type:Boolean,default:!1},leading:{type:Boolean,default:!1}},data:function(){return{$snackbar:null}},computed:{className:function(){return{"mdc-snackbar":!0,"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading}},canDismiss:function(){return this.actionType===B.DISMISS_ICON},actionButtonClassName:function(){return this.canDismiss?"mdc-icon-button mdc-snackbar__dismiss":"mdc-button mdc-snackbar__action"},hasAction:function(){return this.actionButtonText||this.canDismiss}},watch:{open:function(t){t&&this.$snackbar.open()},timeoutMs:function(t){this.setTimeoutMs(+t)},message:function(t){this.$snackbar.labelText=t}},mounted:function(){var t=this;this.$snackbar=new R(this.$el),this.timeoutMs!==F.DEFAULTS&&this.setTimeoutMs(+this.timeoutMs),this.message&&(this.$snackbar.labelText=this.message),this.$snackbar.listen("MDCSnackbar:closed",(function(){t.$emit(Y.CHANGE,!1),t.$emit(Y.CLOSED)}))},methods:{setTimeoutMs:function(t){t>=F.MIN&&t<=F.MAX?this.$snackbar.timeoutMs=t:console.warn("The timeoutMs of the snackbar must be between `4000` and `10000`")}}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.className},[e("div",{staticClass:"mdc-snackbar__surface"},[e("div",{staticClass:"mdc-snackbar__label",attrs:{role:"status","aria-live":"polite"}},[t._t("default",[t._v(t._s(t.message))])],2),t._v(" "),t.hasAction?e("div",{staticClass:"mdc-snackbar__actions"},[e("button",{class:t.actionButtonClassName,attrs:{type:"button"}},[t._t("action",[t._v(t._s(t.canDismiss?"X":t.actionButtonText))])],2)]):t._e()])])}),[],!1,null,null,null).exports,V=/(?:^\[object\s(.*?)\]$)/,G=function(t){return Object.prototype.toString.call(t).replace(V,"$1").toLowerCase()},$={className:"",timeoutMs:4e3,message:""},H='<ui-snackbar\n  :open="open"\n  :class="[\'mdc-toast\', options.className]"\n  :timeoutMs="options.timeoutMs"\n  :message="options.message"\n  @closed="handleClosed">\n</ui-snackbar>',K={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=a()({},$,n),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!document.querySelector(".mdc-toast"))new t({el:document.createElement("div"),components:{UiSnackbar:U},data:{open:!1,options:e},created:function(){var t=this;"string"===G(n)?this.options.message="".concat(n):"object"===G(n)&&(this.options=a()({},this.options,n)),this.$nextTick((function(){document.body.appendChild(t.$el),r()((function(){t.open=!0}),1)}))},methods:{handleClosed:function(){var t=this;this.open=!1,this.$nextTick((function(){document.body.removeChild(t.$el),null}))}},template:H})};t.prototype.$toast=o}};Object(u.a)(K);n.default=K},vA9J:function(t,n,e){var o=e("+6pO"),r=String.prototype;t.exports=function(t){var n=t.trim;return"string"===typeof t||t===r||t instanceof String&&n===r.trim?o:n}},wbIY:function(t,n,e){var o=e("Bvq2");t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},xahd:function(t,n,e){var o=e("pevS"),r=e("OsYe"),i=e("lxfd"),a=[].slice,u=function(t){return function(n,e){var o=arguments.length>2,r=o?a.call(arguments,2):void 0;return t(o?function(){("function"==typeof n?n:Function(n)).apply(this,r)}:n,e)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(o){"object"===typeof window&&(e=window)}t.exports=e},zJQS:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},zOht:function(t,n,e){(function(e){var o,r,i,a,u,c,s,f,l,p,d,_,h,m,y,b,v,g,E,O,S,T,C;!function(I){var w="object"===typeof e?e:"object"===typeof self?self:"object"===typeof this?this:{};function A(t,n){return t!==w&&("function"===typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,o){return t[e]=n?n(e,o):o}}void 0===(o=function(t){!function(t){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};r=function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},i=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},a=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e},u=function(t,n,e,o){var r,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(a=(i<3?r(a):i>3?r(n,e,a):r(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a},c=function(t,n){return function(e,o){n(e,o,t)}},s=function(t,n){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,n)},f=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(n){i(n)}}function u(t){try{c(o.throw(t))}catch(n){i(n)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,u)}c((o=o.apply(t,n||[])).next())}))},l=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(u){i=[6,u],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},p=function(t,n){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])},d=function(t){var n="function"===typeof Symbol&&Symbol.iterator,e=n&&t[n],o=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},_=function(t,n){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(u){r={error:u}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a},h=function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(_(arguments[n]));return t},m=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var o=Array(t),r=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,u=i.length;a<u;a++,r++)o[r]=i[a];return o},y=function(t){return this instanceof y?(this.v=t,this):new y(t)},b=function(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=e.apply(t,n||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(t){r[t]&&(o[t]=function(n){return new Promise((function(e,o){i.push([t,n,e,o])>1||u(t,n)}))})}function u(t,n){try{(e=r[t](n)).value instanceof y?Promise.resolve(e.value.v).then(c,s):f(i[0][2],e)}catch(o){f(i[0][3],o)}var e}function c(t){u("next",t)}function s(t){u("throw",t)}function f(t,n){t(n),i.shift(),i.length&&u(i[0][0],i[0][1])}},v=function(t){var n,e;return n={},o("next"),o("throw",(function(t){throw t})),o("return"),n[Symbol.iterator]=function(){return this},n;function o(o,r){n[o]=t[o]?function(n){return(e=!e)?{value:y(t[o](n)),done:"return"===o}:r?r(n):n}:r}},g=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=d(t),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(e){n[e]=t[e]&&function(n){return new Promise((function(o,r){(function(t,n,e,o){Promise.resolve(o).then((function(n){t({value:n,done:e})}),n)})(o,r,(n=t[e](n)).done,n.value)}))}}},E=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},O=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n},S=function(t){return t&&t.__esModule?t:{default:t}},T=function(t,n){if(!n.has(t))throw new TypeError("attempted to get private field on non-instance");return n.get(t)},C=function(t,n,e){if(!n.has(t))throw new TypeError("attempted to set private field on non-instance");return n.set(t,e),e},t("__extends",r),t("__assign",i),t("__rest",a),t("__decorate",u),t("__param",c),t("__metadata",s),t("__awaiter",f),t("__generator",l),t("__exportStar",p),t("__values",d),t("__read",_),t("__spread",h),t("__spreadArrays",m),t("__await",y),t("__asyncGenerator",b),t("__asyncDelegator",v),t("__asyncValues",g),t("__makeTemplateObject",E),t("__importStar",O),t("__importDefault",S),t("__classPrivateFieldGet",T),t("__classPrivateFieldSet",C)}(A(w,A(t)))}.apply(n,[n]))||(t.exports=o)}()}).call(this,e("yLpj"))}})}));