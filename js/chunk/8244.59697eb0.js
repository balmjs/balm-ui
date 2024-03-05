"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[8244],{8244:function(e,t,l){l.r(t),l.d(t,{default:function(){return I}});var o=l(35720);const a=(0,o.createElementVNode)("label",{for:"hero-checkbox"},"Checkbox",-1),c={class:"demo-wrapper"},d={class:"demo"},n=(0,o.createElementVNode)("label",{for:"basic-checkbox"},"Default checkbox",-1),i=(0,o.createElementVNode)("code",null,"--align-end",-1),r={class:"demo"},u=(0,o.createElementVNode)("label",{for:"basic-checkbox-disabled"},"Disabled checkbox",-1),m=(0,o.createElementVNode)("code",null,"disabled",-1),s={class:"demo"},h=(0,o.createElementVNode)("label",{for:"basic-checkbox-indeterminate"}," Indeterminate checkbox ",-1),b=(0,o.createElementVNode)("code",null,"indeterminate",-1),V={class:"demo"},k=(0,o.createElementVNode)("label",{for:"basic-checkbox-custom-all"}," Custom colored checkbox (stroke, fill, ripple, and focus) ",-1),N={class:"demo"},x=(0,o.createElementVNode)("label",{for:"basic-checkbox-custom-stroke-and-fill"}," Custom colored checkbox (stroke and fill only) ",-1),p={class:"demo-wrapper"},f=(0,o.createElementVNode)("p",null,"Single checkbox, boolean value:",-1),C={class:"demo"},E={for:"checkbox"},v={class:"demo-wrapper"},w={class:"demo"},g=(0,o.createElementVNode)("label",{for:"jack"},"Jack",-1),_=(0,o.createElementVNode)("label",{for:"john"},"John",-1),U=(0,o.createElementVNode)("label",{for:"mike"},"Mike",-1);var T=l(21125),D={metaInfo(){return{subtitle:"Checkbox"}},setup(){return{balmUI:(0,T._q)()}},data(){return{hero:!1,alignEnd:!1,indeterminate:!0,disabled:!0,checked:!1,checkedNames:[]}},mounted(){setTimeout((()=>{this.hero=!0}),1e3)}};var I=(0,l(66262).A)(D,[["render",function(e,t,l,T,D,I){const y=(0,o.resolveComponent)("ui-checkbox"),j=(0,o.resolveComponent)("ui-form-field"),J=(0,o.resolveComponent)("ui-button"),M=(0,o.resolveComponent)("ui-snippet"),S=(0,o.resolveComponent)("docs-page"),A=(0,o.resolveDirective)("a11y");return(0,o.openBlock)(),(0,o.createBlock)(S,{name:"checkbox","demo-count":"2"},{hero:(0,o.withCtx)((()=>[(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.withDirectives)((0,o.createVNode)(y,{modelValue:D.hero,"onUpdate:modelValue":t[0]||(t[0]=e=>D.hero=e),"input-id":"hero-checkbox"},null,8,["modelValue"]),[[A]]),a])),_:1})])),default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("section",c,[(0,o.createElementVNode)("div",d,[(0,o.createVNode)(j,{"align-end":D.alignEnd},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{"input-id":"basic-checkbox"}),n])),_:1},8,["align-end"]),(0,o.createVNode)(J,{outlined:"",onClick:t[1]||(t[1]=e=>T.balmUI.onChange("alignEnd",!D.alignEnd))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Toggle "),i])),_:1})]),(0,o.createElementVNode)("div",r,[(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{"input-id":"basic-checkbox-disabled",disabled:D.disabled},null,8,["disabled"]),u])),_:1}),(0,o.createVNode)(J,{outlined:"",onClick:t[2]||(t[2]=e=>T.balmUI.onChange("disabled",!D.disabled))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Toggle "),m])),_:1})]),(0,o.createElementVNode)("div",s,[(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{"input-id":"basic-checkbox-indeterminate",indeterminate:D.indeterminate},null,8,["indeterminate"]),h])),_:1}),(0,o.createVNode)(J,{outlined:"",onClick:t[3]||(t[3]=e=>T.balmUI.onChange("indeterminate",!D.indeterminate))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Toggle "),b])),_:1})]),(0,o.createElementVNode)("div",V,[(0,o.createVNode)(j,{class:"demo-checkbox--custom-all"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{"input-id":"basic-checkbox-custom-all"}),k])),_:1})]),(0,o.createElementVNode)("div",N,[(0,o.createVNode)(j,{class:"demo-checkbox--custom-stroke-and-fill"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{"input-id":"basic-checkbox-custom-stroke-and-fill"}),x])),_:1})])]),(0,o.createElementVNode)("section",p,[f,(0,o.createElementVNode)("div",C,[(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{modelValue:D.checked,"onUpdate:modelValue":t[4]||(t[4]=e=>D.checked=e),"input-id":"checkbox"},null,8,["modelValue"]),(0,o.createElementVNode)("label",E,(0,o.toDisplayString)(D.checked),1)])),_:1})]),(0,o.createVNode)(M,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",v,[(0,o.createElementVNode)("p",null,"Multiple checkboxes, bound to the same Array: "+(0,o.toDisplayString)(D.checkedNames),1),(0,o.createElementVNode)("div",w,[(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{modelValue:D.checkedNames,"onUpdate:modelValue":t[5]||(t[5]=e=>D.checkedNames=e),"input-id":"jack",value:"Jack"},null,8,["modelValue"]),g])),_:1}),(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{modelValue:D.checkedNames,"onUpdate:modelValue":t[6]||(t[6]=e=>D.checkedNames=e),"input-id":"john",value:"John"},null,8,["modelValue"]),_])),_:1}),(0,o.createVNode)(j,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{modelValue:D.checkedNames,"onUpdate:modelValue":t[7]||(t[7]=e=>D.checkedNames=e),"input-id":"mike",value:"Mike"},null,8,["modelValue"]),U])),_:1})]),(0,o.createVNode)(M,{code:e.$store.demos[2]},null,8,["code"])])])),_:1})}]])}}]);