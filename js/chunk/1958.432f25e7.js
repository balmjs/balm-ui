"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1958],{31958:function(e,t,o){o.r(t),o.d(t,{default:function(){return N}});var l=o(73114);const a={class:"demo-wrapper"},n=(0,l.createElementVNode)("label",null,"Vue methods",-1),d=(0,l.createElementVNode)("label",null,"balmUI methods",-1),s={class:"demo-wrapper"},c=(0,l.createElementVNode)("label",null,"Vue methods",-1),r=(0,l.createElementVNode)("p",null,"Open dialog: `open = true`",-1),i=(0,l.createElementVNode)("p",null,"Close dialog: `open = false`",-1),u=(0,l.createElementVNode)("label",null,"balmUI methods",-1),m=(0,l.createElementVNode)("p",null,"Open dialog: `balmUI.onShow('open')`",-1),V=(0,l.createElementVNode)("p",null,"Close dialog: `balmUI.onHide('open')`",-1);var p=o(13361),C={metaInfo(){return{subtitle:"Event"}},setup(){return{balmUI:(0,p.zX)()}},data(){return{message1:"No message",message2:"No message",open1:!1,open2:!1}},methods:{showMessage(){this.message1="Hello BalmUI"},clearMessage(){this.message1=""},openDialog(){this.open1=!0},closeDialog(){this.open1=!1}}};var N=(0,o(83744).Z)(C,[["render",function(e,t,o,p,C,N){const h=(0,l.resolveComponent)("ui-button"),g=(0,l.resolveComponent)("ui-snippet"),w=(0,l.resolveComponent)("ui-grid-cell"),x=(0,l.resolveComponent)("ui-grid"),f=(0,l.resolveComponent)("ui-dialog-content"),_=(0,l.resolveComponent)("ui-dialog-actions"),E=(0,l.resolveComponent)("ui-dialog"),b=(0,l.resolveComponent)("docs-page");return(0,l.openBlock)(),(0,l.createBlock)(b,{type:"plugin",name:"event","demo-count":"4","without-css":""},{hero:(0,l.withCtx)((()=>[(0,l.createElementVNode)("h1",{class:(0,l.normalizeClass)(e.$tt("headline1"))},"useEvent();",2)])),default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("section",a,[(0,l.createElementVNode)("h6",{class:(0,l.normalizeClass)(e.$tt("headline6"))},"1.1 onChange",2),(0,l.createVNode)(x,null,{default:(0,l.withCtx)((()=>[(0,l.createVNode)(w,{columns:"6"},{default:(0,l.withCtx)((()=>[n,(0,l.createElementVNode)("p",null,[(0,l.createVNode)(h,{raised:"",onClick:N.showMessage},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("Show message")])),_:1},8,["onClick"]),(0,l.createVNode)(h,{outlined:"",onClick:N.clearMessage},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("Clear")])),_:1},8,["onClick"])]),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(C.message1),1),(0,l.createVNode)(g,{code:e.$store.demos[1]},null,8,["code"])])),_:1}),(0,l.createVNode)(w,{columns:"6"},{default:(0,l.withCtx)((()=>[d,(0,l.createElementVNode)("p",null,[(0,l.createVNode)(h,{raised:"",onClick:t[0]||(t[0]=e=>p.balmUI.onChange("message2","Hello BalmUI"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)(" Show message ")])),_:1}),(0,l.createVNode)(h,{outlined:"",onClick:t[1]||(t[1]=e=>p.balmUI.onChange("message2",""))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)(" Clear ")])),_:1})]),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(C.message2),1),(0,l.createVNode)(g,{code:e.$store.demos[2]},null,8,["code"])])),_:1})])),_:1})]),(0,l.createElementVNode)("section",s,[(0,l.createElementVNode)("h6",{class:(0,l.normalizeClass)(e.$tt("headline6"))},"1.2 onShow/onHide",2),(0,l.createVNode)(x,null,{default:(0,l.withCtx)((()=>[(0,l.createVNode)(w,{columns:"6"},{default:(0,l.withCtx)((()=>[c,(0,l.createElementVNode)("p",null,[(0,l.createVNode)(h,{raised:"",onClick:N.openDialog},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("Open dialog")])),_:1},8,["onClick"])]),(0,l.createVNode)(E,{modelValue:C.open1,"onUpdate:modelValue":t[2]||(t[2]=e=>C.open1=e)},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(f,null,{default:(0,l.withCtx)((()=>[r,i])),_:1}),(0,l.createVNode)(_,null,{default:(0,l.withCtx)((()=>[(0,l.createVNode)(h,{onClick:N.closeDialog},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("Close dialog")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue"]),(0,l.createVNode)(g,{code:e.$store.demos[3]},null,8,["code"])])),_:1}),(0,l.createVNode)(w,{columns:"6"},{default:(0,l.withCtx)((()=>[u,(0,l.createElementVNode)("p",null,[(0,l.createVNode)(h,{raised:"",onClick:t[3]||(t[3]=e=>p.balmUI.onShow("open2"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)(" Open dialog ")])),_:1})]),(0,l.createVNode)(E,{modelValue:C.open2,"onUpdate:modelValue":t[5]||(t[5]=e=>C.open2=e)},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(f,null,{default:(0,l.withCtx)((()=>[m,V])),_:1}),(0,l.createVNode)(_,null,{default:(0,l.withCtx)((()=>[(0,l.createVNode)(h,{onClick:t[4]||(t[4]=e=>p.balmUI.onHide("open2"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)(" Close dialog ")])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.createVNode)(g,{code:e.$store.demos[4]},null,8,["code"])])),_:1})])),_:1})])])),_:1})}]])}}]);