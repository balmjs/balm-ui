"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[6466],{16466:function(e,c,n){n.r(c);const l=n(89510).A;c.default=l},89510:function(e,c,n){n.d(c,{A:function(){return h}});var l=n(35720),t=n(3420),o=n(38796);const s=(0,l.createElementVNode)("div",{class:"mdc-chip__ripple"},null,-1),a={key:0,class:"mdc-chip__checkmark"},i=[(0,l.createElementVNode)("svg",{class:"mdc-chip__checkmark-svg",viewBox:"-2 -3 30 30"},[(0,l.createElementVNode)("path",{class:"mdc-chip__checkmark-path",fill:"none",stroke:"black",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})],-1)],r={role:"gridcell"},d=["role"],u={class:"mdc-chip__text"},p={key:0,role:"gridcell"},m={cssClasses:{icon:"mdc-chip__icon mdc-chip__icon--leading",removeIcon:"mdc-chip__icon mdc-chip__icon--trailing"},EVENTS:{REMOVE:"remove"}},C={name:"UiChip",customOptions:{UI_GLOBAL:o.A,UI_CHIP:m}};var h=Object.assign(C,{props:{...t.u,selected:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1}},emits:[o.A.EVENTS.CLICK,m.EVENTS.REMOVE],setup(e,c){let{emit:n}=c;const C=e,h=n,f=(0,l.getCurrentInstance)().parent,k=(0,l.ref)(null),{materialIcon:E}=(0,t.c)(C),v=(0,l.computed)((()=>[o.A.cssClasses.icon,m.cssClasses.icon,{"mdc-chip__icon--leading-hidden":C.selected}])),_=(0,l.computed)((()=>{var e,c;let n=null;return n=null!==f&&void 0!==f&&null!==(e=f.exposed)&&void 0!==e&&e.choiceChips.value?"radio":null!==f&&void 0!==f&&null!==(c=f.exposed)&&void 0!==c&&c.filterChips.value?"checkbox":"button",n}));function V(e){(0,l.nextTick)((()=>{var c;(null===f||void 0===f||null===(c=f.exposed)||void 0===c?void 0:c.choiceChips.value)&&(f.exposed.choiceChipId.value=k.value.id),h(o.A.EVENTS.CLICK,e)}))}function N(e){h(m.EVENTS.REMOVE,e)}return(c,n)=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{ref_key:"chip",ref:k,class:"mdc-chip",role:"row",onClick:V},[s,(0,l.renderSlot)(c.$slots,"before",{iconClass:m.cssClasses.icon},(()=>[(0,l.unref)(E)?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:0,class:(0,l.normalizeClass)(v.value)},(0,l.toDisplayString)((0,l.unref)(E)),3)):(0,l.createCommentVNode)("",!0)])),c.$parent.filterChips?((0,l.openBlock)(),(0,l.createElementBlock)("span",a,i)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("span",r,[(0,l.createElementVNode)("span",{role:_.value,class:"mdc-chip__primary-action"},[(0,l.createElementVNode)("span",u,[(0,l.renderSlot)(c.$slots,"default")])],8,d)]),(0,l.renderSlot)(c.$slots,"after",{iconClass:m.cssClasses.removeIcon},(()=>[c.$parent.inputChips||c.$parent.filterChips?((0,l.openBlock)(),(0,l.createElementBlock)("span",p,[e.deletable?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:0,class:(0,l.normalizeClass)((0,l.unref)(o.A).getMaterialIconClass(m.cssClasses.removeIcon)),tabindex:"-1","data-mdc-deletable":"true",onClick:N}," cancel ",2)):(0,l.createCommentVNode)("",!0)])):(0,l.createCommentVNode)("",!0)]))],512))}})},38796:function(e,c,n){n.d(c,{P:function(){return t}});const l={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var e=arguments.length,c=new Array(e),n=0;n<e;n++)c[n]=arguments[n];return[l.cssClasses.icon,...c]}};function t(e){let{emit:c}=e;return{handleClick:function(e){c(l.EVENTS.CLICK,e)}}}c.A=l},3420:function(e,c,n){n.d(c,{c:function(){return o},u:function(){return t}});var l=n(35720);const t={icon:{type:String,default:""}};function o(e){return{materialIcon:(0,l.computed)((()=>e.icon||!1))}}}}]);