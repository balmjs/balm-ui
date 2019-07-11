!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="Np98")}({"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},Np98:function(t,e,n){"use strict";n.r(e);var r=n("PSzo"),o=function(){var t=this.$createElement;return(this._self._c||t)("ul",{class:this.className},[this._t("default")],2)};o._withStripped=!0;var i={name:"ui-image-list",props:{masonry:{type:Boolean,default:!1},withTextProtection:{type:Boolean,default:!1}},computed:{className:function(){return{"mdc-image-list":!0,"mdc-image-list--masonry":this.masonry,"mdc-image-list--with-text-protection":this.withTextProtection}}}},a=n("KHd+"),s=Object(a.a)(i,o,[],!1,null,null,null);s.options.__file="src/scripts/components/image-list/image-list.vue";var c=s.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"mdc-image-list__item"},[t.$parent.masonry?[t.block?n("div",{class:t.UI_IMAGE_LIST.CLASSNAME.IMAGE,style:t.style}):n("img",{class:t.UI_IMAGE_LIST.CLASSNAME.IMAGE,attrs:{src:t.src,alt:t.alt}})]:n("div",{staticClass:"mdc-image-list__image-aspect-container"},[t.block?n("div",{class:t.UI_IMAGE_LIST.CLASSNAME.IMAGE,style:t.style}):n("img",{class:t.UI_IMAGE_LIST.CLASSNAME.IMAGE,attrs:{src:t.src,alt:t.alt}})]),t._v(" "),t._t("default")],2)};u._withStripped=!0;var l={CLASSNAME:{IMAGE:"mdc-image-list__image"}},p={name:"ui-image-item",props:{src:String,alt:String,block:{type:Boolean,default:!1}},data:function(){return{UI_IMAGE_LIST:l}},computed:{style:function(){return!!this.src&&{"background-image":"url(".concat(this.src,")")}}}},f=Object(a.a)(p,u,[],!1,null,null,null);f.options.__file="src/scripts/components/image-list/image-item.vue";var m=f.exports,d=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc-image-list__supporting"},[e("span",{staticClass:"mdc-image-list__label"},[this._t("default")],2),this._v(" "),this._t("action")],2)};d._withStripped=!0;var y={name:"ui-image-supporting"},_=Object(a.a)(y,d,[],!1,null,null,null);_.options.__file="src/scripts/components/image-list/image-supporting.vue";var b=_.exports;e.default=Object(r.a)({UiImageList:c,UiImageItem:m,UiImageSupporting:b})},PE4B:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===o}(t)}(t)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function a(t,e,n){return t.concat(e).map(function(t){return i(t,n)})}function s(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return t.propertyIsEnumerable(e)}):[]}(t))}function c(t,e,n){var r={};return n.isMergeableObject(t)&&s(t).forEach(function(e){r[e]=i(t[e],n)}),s(e).forEach(function(o){n.isMergeableObject(e[o])&&t[o]?r[o]=function(t,e){if(!e.customMerge)return u;var n=e.customMerge(t);return"function"===typeof n?n:u}(o,n)(t[o],e[o],n):r[o]=i(e[o],n)}),r}function u(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r;var o=Array.isArray(e);return o===Array.isArray(t)?o?n.arrayMerge(t,e,n):c(t,e,n):i(e,n)}u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return u(t,n,e)},{})};var l=u;t.exports=l},PSzo:function(t,e,n){"use strict";var r=n("kUbF"),o=n("gVot"),i=function(t,e){Object.keys(e).forEach(function(n){if(void 0!==t[n]){var r=t[n],i=e[n];Object(o.a)(r,i)}})};e.a=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var r in i(t,n),t){var o=t[r];e.component(o.name,o)}}};return Object(r.a)(e),e}},QnW2:function(t,e,n){"use strict";var r=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(r,"$1").toLowerCase()}},gVot:function(t,e,n){"use strict";var r=n("PE4B"),o=n.n(r),i=n("QnW2"),a=function(t){var e=t.componentProps,n=t.propName,r=t.props,a=e[n].default,s=r[n];"object"!==Object(i.a)(a)?e[n].default=s:e[n].default=o()(a,s)},s=function(t){var e=t.componentMixins,n=t.propName,r=t.props;if(e.length)for(var o=e.length;o--;)if(void 0!==e[o].props[n]){a({componentProps:e[o].props,propName:n,props:r});break}};e.a=function(t,e){Object.keys(e).forEach(function(n){t.props?void 0===t.props[n]?s({componentMixins:t.mixins,propName:n,props:e}):a({componentProps:t.props,propName:n,props:e}):s({componentMixins:t.mixins,propName:n,props:e})})}},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}})});