"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2183],{2183:function(e,s,l){l.r(s);const n=l(23161).Z;s.default=n},23161:function(e,s,l){l.d(s,{Z:function(){return n.Z}});var n=l(35889)},35889:function(e,s,l){var n=l(73114),a=l(5522);const t=["src"],i={key:1,class:"mdc-image-list__image-aspect-container"},c=["src"],o="UiImageItem",r={cssClasses:{image:"mdc-image-list__image"}},m={name:o,customOptions:{name:o,UI_GLOBAL:a.Z,UI_IMAGE_ITEM:r}};s.Z=Object.assign(m,{props:{image:{type:[String,null],default:null},bgImage:{type:[String,null],default:null}},emits:[a.Z.EVENTS.CLICK],setup(e,s){let{emit:l}=s;const m=e,u=(0,n.getCurrentInstance)().parent,{handleClick:g}=(0,a.O)({emit:l}),C=(0,n.computed)((()=>({"background-image":`url(${m.bgImage})`})));return(0,n.onBeforeMount)((()=>{var e;null!==u&&void 0!==u&&null!==(e=u.exposed)&&void 0!==e&&e.isMasonry.value&&m.bgImage&&console.warn(`[${o}]: The 'bgImage' prop is not compatible with the masonry image list, you need to set the 'image' prop`)})),(s,l)=>((0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"mdc-image-list__item",onClick:l[0]||(l[0]=function(){return(0,n.unref)(g)&&(0,n.unref)(g)(...arguments)})},[s.$parent.isMasonry?(0,n.renderSlot)(s.$slots,"image",{key:0,imageClass:r.cssClasses.image},(()=>[(0,n.createElementVNode)("img",{class:(0,n.normalizeClass)(r.cssClasses.image),src:e.image},null,10,t)])):((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.renderSlot)(s.$slots,"image",{imageClass:r.cssClasses.image},(()=>[e.bgImage?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:(0,n.normalizeClass)(r.cssClasses.image),style:(0,n.normalizeStyle)(C.value)},null,6)):((0,n.openBlock)(),(0,n.createElementBlock)("img",{key:1,class:(0,n.normalizeClass)(r.cssClasses.image),src:e.image},null,10,c))]))])),(0,n.renderSlot)(s.$slots,"default")]))}})},5522:function(e,s,l){l.d(s,{O:function(){return a}});const n={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];return[n.cssClasses.icon,...s]}};function a(e){let{emit:s}=e;return{handleClick:function(e){s(n.EVENTS.CLICK,e)}}}s.Z=n}}]);