!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_badge=t():e.BalmUI_badge=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="mvOO")}({mvOO:function(e,t,n){"use strict";n.r(t);var o={outer:"mdc-badge",overlap:"mdc-badge--overlap",inner:"mdc-badge__sup",hide:"mdc-badge__sup--hide",dot:"mdc-badge__sup--dot"},r=99,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t?e.classList.remove(o.hide):e.classList.add(o.hide),e.textContent=t>r?"".concat(r,"+"):t},i={name:"badge",inserted:function(e,t){!function(e,t){var n=t.value,r=t.modifiers;if(e.parentNode&&!e.parentNode.classList.contains(o.outer)){var i=document.createElement("div");i.className=o.outer;var a=document.createElement("sup");a.className=o.inner,r.overlap&&i.classList.add(o.overlap),r.dot?a.classList.add(o.dot):d(a,n),e.parentNode.insertBefore(i,e),e.parentNode.removeChild(e),i.appendChild(e),i.appendChild(a)}}(e,t)},update:function(e,t){!function(e,t){var n=t.value;if(!t.modifiers.dot){var o=e.nextElementSibling;d(o,n)}}(e,t)}};(function(e,t){"undefined"!==typeof window&&window.Vue&&window.Vue.directive(e,t)})(i.name,i);t.default=i}})}));