"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[5363],{5363:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var a=o(73114);const n=(0,a.createElementVNode)("span",{class:"catalog-title"},"Navigation Bar",-1);var l={metaInfo(){return{subtitle:"Navigation Bar"}},components:{TopAppToolbar:o(83260).default},data(){return{items:[{text:"Favorites",icon:"favorite",url:"url 1"},{text:"Music",icon:"music_note",url:"url 2"},{text:"Places",icon:"place"},{text:"News",icon:"newspaper"}],active:1}},methods:{onChange(e){console.log(e)}}};var r=(0,o(83744).Z)(l,[["render",function(e,t,o,l,r,c){const s=(0,a.resolveComponent)("ui-icon-button"),i=(0,a.resolveComponent)("top-app-toolbar"),u=(0,a.resolveComponent)("ui-top-app-bar"),d=(0,a.resolveComponent)("ui-snippet"),m=(0,a.resolveComponent)("docs-page"),p=(0,a.resolveComponent)("ui-tabs"),v=(0,a.resolveComponent)("ui-navigation-bar");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(u,{"content-selector":".demo-content",fixed:""},{"nav-icon":(0,a.withCtx)((o=>{let{navIconClass:n}=o;return[(0,a.createVNode)(s,{icon:"arrow_back",class:(0,a.normalizeClass)(n),onClick:t[0]||(t[0]=t=>e.$router.back())},null,8,["class"])]})),toolbar:(0,a.withCtx)((e=>{let{toolbarItemClass:t}=e;return[(0,a.createVNode)(i,{"item-class":t},null,8,["item-class"])]})),default:(0,a.withCtx)((()=>[n])),_:1}),(0,a.createVNode)(m,{class:"demo-content",name:"navigation-bar","demo-count":"1"},{hero:(0,a.withCtx)((()=>[(0,a.createElementVNode)("h3",{class:(0,a.normalizeClass)(e.$tt("headline3"))},"Navigation Bar",2)])),default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{code:e.$store.demos[1]},null,8,["code"])])),_:1}),(0,a.createVNode)(v,{"content-selector":".demo-content",stacked:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,{modelValue:r.active,"onUpdate:modelValue":[t[1]||(t[1]=e=>r.active=e),c.onChange],type:"textWithIcon",items:r.items,stacked:""},null,8,["modelValue","items","onUpdate:modelValue"])])),_:1})])}]])}}]);