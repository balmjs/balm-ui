"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1041],{31041:function(e,t,r){r.d(t,{Z:function(){return R}});var s=r(73114),o=r(97582),i=r(48315),c=r(85099),a={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},n={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"},l=function(e){function t(r){return e.call(this,(0,o.pi)((0,o.pi)({},t.defaultAdapter),r))||this}return(0,o.ZT)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return n},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.closed=this.adapter.hasClass(a.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(a.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(n.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(n.RADIUS))},t.prototype.setDeterminate=function(e){this.determinate=e,this.determinate?(this.adapter.removeClass(a.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(a.INDETERMINATE_CLASS),this.adapter.removeAttribute(n.ARIA_VALUENOW))},t.prototype.isDeterminate=function(){return this.determinate},t.prototype.setProgress=function(e){if(this.progress=e,this.determinate){var t=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(n.STROKE_DASHOFFSET,""+t),this.adapter.setAttribute(n.ARIA_VALUENOW,this.progress.toString())}},t.prototype.getProgress=function(){return this.progress},t.prototype.open=function(){this.closed=!1,this.adapter.removeClass(a.CLOSED_CLASS),this.adapter.removeAttribute(n.ARIA_HIDDEN)},t.prototype.close=function(){this.closed=!0,this.adapter.addClass(a.CLOSED_CLASS),this.adapter.setAttribute(n.ARIA_HIDDEN,"true")},t.prototype.isClosed=function(){return this.closed},t}(c.K),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.prototype.initialize=function(){this.determinateCircle=this.root.querySelector(l.strings.DETERMINATE_CIRCLE_SELECTOR)},t.attachTo=function(e){return new t(e)},Object.defineProperty(t.prototype,"determinate",{set:function(e){this.foundation.setDeterminate(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"progress",{set:function(e){this.foundation.setProgress(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isClosed",{get:function(){return this.foundation.isClosed()},enumerable:!1,configurable:!0}),t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(){this.foundation.close()},t.prototype.getDefaultFoundation=function(){var e=this;return new l({addClass:function(t){e.root.classList.add(t)},getDeterminateCircleAttribute:function(t){return e.determinateCircle.getAttribute(t)},hasClass:function(t){return e.root.classList.contains(t)},removeClass:function(t){e.root.classList.remove(t)},removeAttribute:function(t){e.root.removeAttribute(t)},setAttribute:function(t,r){e.root.setAttribute(t,r)},setDeterminateCircleAttribute:function(t,r){e.determinateCircle.setAttribute(t,r)}})},t}(i.B);const d={class:"mdc-circular-progress__spinner-layer"},p={class:"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"},m=["viewBox"],f=["cx","cy","r","stroke-dasharray","stroke-dashoffset","stroke-width"],g={class:"mdc-circular-progress__gap-patch"},h=["viewBox"],v=["cx","cy","r","stroke-dasharray","stroke-dashoffset","stroke-width"],A={class:"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"},E=["viewBox"],k=["cx","cy","r","stroke-dasharray","stroke-dashoffset","stroke-width"],C={cssClasses:{circle:"mdc-circular-progress__indeterminate-circle-graphic"}},y={name:"MdcSpinnerLayer",customOptions:{UI_CIRCULAR_PROGRESS_INDETERMINATE:C}};var b=Object.assign(y,{props:{svg:{type:Object,required:!0}},setup(e){const t=e,r=(0,s.computed)((()=>t.svg.stroke/2)),o=(0,s.computed)((()=>.8*t.svg.width));return(t,i)=>((0,s.openBlock)(),(0,s.createElementBlock)("div",d,[(0,s.createElementVNode)("div",p,[((0,s.openBlock)(),(0,s.createElementBlock)("svg",{class:(0,s.normalizeClass)(C.cssClasses.circle),viewBox:e.svg.viewBox},[(0,s.createElementVNode)("circle",{fill:"none",cx:e.svg.cx,cy:e.svg.cy,r:e.svg.r,"stroke-dasharray":e.svg.stroke,"stroke-dashoffset":r.value,"stroke-width":e.svg.width},null,8,f)],10,m))]),(0,s.createElementVNode)("div",g,[((0,s.openBlock)(),(0,s.createElementBlock)("svg",{class:(0,s.normalizeClass)(C.cssClasses.circle),viewBox:e.svg.viewBox},[(0,s.createElementVNode)("circle",{fill:"none",cx:e.svg.cx,cy:e.svg.cy,r:e.svg.r,"stroke-dasharray":e.svg.stroke,"stroke-dashoffset":r.value,"stroke-width":o.value},null,8,v)],10,h))]),(0,s.createElementVNode)("div",A,[((0,s.openBlock)(),(0,s.createElementBlock)("svg",{class:(0,s.normalizeClass)(C.cssClasses.circle),viewBox:e.svg.viewBox},[(0,s.createElementVNode)("circle",{fill:"none",cx:e.svg.cx,cy:e.svg.cy,r:e.svg.r,"stroke-dasharray":e.svg.stroke,"stroke-dashoffset":r.value,"stroke-width":e.svg.width},null,8,k)],10,E))])]))}}),S=r(50545);const _=["aria-label"],w={class:"mdc-circular-progress__determinate-container"},B=["viewBox"],I=["cx","cy","r","stroke-dasharray","stroke-dashoffset","stroke-width"],N={class:"mdc-circular-progress__indeterminate-container"},x="UiSpinner",D={SVG:{large:{viewBox:"0 0 48 48",cx:24,cy:24,r:18,stroke:113.097,width:4},medium:{viewBox:"0 0 32 32",cx:16,cy:16,r:12.5,stroke:78.54,width:3},small:{viewBox:"0 0 24 24",cx:"12",cy:"12",r:"8.75",stroke:"54.978",width:2.5}}},L={name:x,customOptions:{name:x,UI_CIRCULAR_PROGRESS:D}};var R=Object.assign(L,{props:{...S.O,size:{type:String,default:"large"},fourColored:{type:Boolean,default:!1}},setup(e){const t=e,r=(0,s.ref)(null),o=(0,s.reactive)({$circularProgress:null,currentSize:""}),i=(0,s.computed)((()=>["mdc-circular-progress",`mdc-circular-progress--${o.currentSize}`,{"mdc-circular-progress--indeterminate":t.active,"mdc-circular-progress--closed":t.closed}])),c=(0,s.computed)((()=>o.currentSize?D.SVG[o.currentSize]:{}));return(0,s.onBeforeMount)((()=>{switch(t.size){case"M":case"medium":o.currentSize="medium";break;case"S":case"small":o.currentSize="small";break;default:o.currentSize="large"}})),(0,s.onMounted)((()=>{if(o.currentSize){o.$circularProgress=new u(r.value);const{setProgress:e}=(0,S.S)(o.$circularProgress,t);e(t.progress)}else console.warn(`[${x}]: Please choose correct size`)})),(t,o)=>((0,s.openBlock)(),(0,s.createElementBlock)("div",{ref_key:"circularProgress",ref:r,role:"progressbar",class:(0,s.normalizeClass)(i.value),"aria-label":t.label,"aria-valuemin":"0","aria-valuemax":"1"},[(0,s.createElementVNode)("div",w,[((0,s.openBlock)(),(0,s.createElementBlock)("svg",{class:"mdc-circular-progress__determinate-circle-graphic",viewBox:c.value.viewBox},[(0,s.createElementVNode)("circle",{class:"mdc-circular-progress__determinate-circle",fill:"none",cx:c.value.cx,cy:c.value.cy,r:c.value.r,"stroke-dasharray":c.value.stroke,"stroke-dashoffset":c.value.stroke,"stroke-width":c.value.width},null,8,I)],8,B))]),(0,s.createElementVNode)("div",N,[e.fourColored?((0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,{key:0},(0,s.renderList)(4,(e=>(0,s.createVNode)(b,{key:e,class:(0,s.normalizeClass)(`mdc-circular-progress__color-${e}`),svg:c.value},null,8,["class","svg"]))),64)):((0,s.openBlock)(),(0,s.createBlock)(b,{key:1,svg:c.value},null,8,["svg"]))])],10,_))}})},85880:function(e,t){t.Z={VALUE:{MIN:0,MAX:1}}},50545:function(e,t,r){r.d(t,{O:function(){return i},S:function(){return c}});var s=r(73114),o=r(85880);const i={active:{type:Boolean,default:!1},progress:{type:Number,default:0},label:String,closed:{type:Boolean,default:!1}};function c(e,t){function r(t){e&&t>=o.Z.VALUE.MIN&&t<=o.Z.VALUE.MAX?e.progress=t:console.warn("[UiProgress/UiSpinner]","The value should be between [0, 1]")}return(0,s.watch)((()=>t.progress),(e=>r(e))),{setProgress:r}}}}]);