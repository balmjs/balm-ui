"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1641],{81641:function(e,t,o){o.r(t);const c=o(97126).A;t.default=c},97126:function(e,t,o){o.d(t,{A:function(){return c.A}});var c=o(84043)},84043:function(e,t,o){var c=o(35720);const n={key:0,class:"mdc-bottom-sheet__content"},l={EVENTS:{CHANGE:"update:modelValue"}},s={name:"UiBottomSheet",customOptions:{UI_BOTTOM_SHEET:l}};t.A=Object.assign(s,{props:{modelValue:{type:Boolean,default:!1}},emits:[l.EVENTS.CHANGE],setup(e,t){let{emit:o}=t;const s=e,a=o,m=(0,c.reactive)({closing:!1}),i=(0,c.computed)((()=>({"mdc-bottom-sheet":!0,"mdc-bottom-sheet--open":s.modelValue,"mdc-bottom-sheet--closing":m.closing})));function u(){m.closing=!0,setTimeout((()=>{a(l.EVENTS.CHANGE,!1),m.closing=!1}),300)}return(t,o)=>((0,c.openBlock)(),(0,c.createElementBlock)("div",{class:(0,c.normalizeClass)(i.value)},[(0,c.createVNode)(c.Transition,{name:"mdc-slide"},{default:(0,c.withCtx)((()=>[e.modelValue?((0,c.openBlock)(),(0,c.createElementBlock)("div",n,[(0,c.renderSlot)(t.$slots,"default")])):(0,c.createCommentVNode)("",!0)])),_:3}),(0,c.createElementVNode)("div",{class:"mdc-bottom-sheet__scrim",onClick:u})],2))}})}}]);