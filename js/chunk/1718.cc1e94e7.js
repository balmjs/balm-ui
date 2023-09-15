"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1718],{61718:function(e,o,t){t.r(o),t.d(o,{default:function(){return w}});var n=t(73114);const l={class:"demo-wrapper"},a={class:"demo-wrapper"},r={class:"demo-wrapper"},i=["innerHTML"],d={class:"preview-code"};var s=t(50003),c=t(98197);const p=(0,n.reactive)({content1:"",content2:"",encodeContent:"",decodeContent:"",preview:{show:!1,type:0,content:""}}),u={preview:(e,o)=>{p.preview.show=!0,p.preview.content=p.decodeContent}};var m={metaInfo(){return{subtitle:"Editor"}},setup(e,o){const t=(0,n.ref)(null),{previewStyle:l,onEncodeContent:a,setToolbar:r}=(e=>({previewStyle:(0,n.computed)((()=>{let e;switch(p.preview.type){case 1:e="768px";break;case 2:e="375px";break;default:e="100%"}return{width:e}})),onEncodeContent:function(){p.encodeContent=e.value.encodeEmoji(p.decodeContent)},setToolbar:function(){let o=window.innerWidth>1024,t=e.value.$el.querySelector(".ql-preview");o?t.style.display="block":(t.style.display="none",p.preview.show=!1)}}))(t);return(0,n.onMounted)((()=>{setTimeout((()=>{p.content1='<p><a href="https://github.com/balmjs/balm-ui" rel="noopener noreferrer" target="_blank"><strong>BalmUI</strong></a> is a modular and customizable Material Design UI library for Vue.js.</p><p><br></p><ul><li>Enterprise-class UI designed for web applications</li><li>A set of high-quality Vue components/plugins/directives/utils out of the box</li><li>Powerful theme customization in every detail</li><li>Integrated a complete set of the latest Material Icons</li><li>All components and plugins is highly customizable, and can be used individually</li></ul>',p.content2="<p><strong>BalmJS</strong>: A flexible Front-End workflow for webapps</p>",t.value&&(p.decodeContent=t.value.decodeEmoji(`<h1 style="text-align: center;">Rich Text Editor</h1><p><br></p><p><a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill</a> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p><p><br></p><p style="text-align: center;"><img src="${c.domain}/images/demo/editor-image.png"></p><p><br></p><p style="text-align: center;">Hello BalmUI [oo] and BalmJS :smile: !</p>`),r(),window.addEventListener("balmResize",r))}),1e3)})),(0,n.onBeforeUnmount)((()=>{window.removeEventListener("balmResize",r)})),{editor:t,...(0,n.toRefs)(p),toolbar:s.toolbar,toolbarHandlers:u,previewStyle:l,onEncodeContent:a}},methods:{async onFileChange(e,o){console.log("upload file",e),o(e.name)}}};var w=(0,t(83744).Z)(m,[["render",function(e,o,t,s,c,p){const u=(0,n.resolveComponent)("ui-editor"),m=(0,n.resolveComponent)("ui-snippet"),w=(0,n.resolveComponent)("ui-icon-button"),h=(0,n.resolveComponent)("ui-dialog-title"),b=(0,n.resolveComponent)("ui-tabs"),v=(0,n.resolveComponent)("ui-dialog-content"),C=(0,n.resolveComponent)("ui-dialog"),V=(0,n.resolveComponent)("ui-button"),f=(0,n.resolveComponent)("docs-page"),g=(0,n.resolveDirective)("shadow");return(0,n.openBlock)(),(0,n.createBlock)(f,{name:"editor","demo-count":"3"},{hero:(0,n.withCtx)((()=>[(0,n.createElementVNode)("h1",{class:(0,n.normalizeClass)(e.$tt("headline1"))},"WYSIWYG",2)])),default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("section",l,[(0,n.createElementVNode)("h6",{class:(0,n.normalizeClass)(e.$tt("headline6"))},"1.1 Snow (Default)",2),(0,n.createVNode)(u,{modelValue:e.content1,"onUpdate:modelValue":o[0]||(o[0]=o=>e.content1=o)},null,8,["modelValue"]),(0,n.createVNode)(m,{code:e.$store.demos[1]},null,8,["code"])]),(0,n.createElementVNode)("section",a,[(0,n.createElementVNode)("h6",{class:(0,n.normalizeClass)(e.$tt("headline6"))},"1.2 Bubble",2),(0,n.createVNode)(u,{modelValue:e.content2,"onUpdate:modelValue":o[1]||(o[1]=o=>e.content2=o),theme:"bubble"},null,8,["modelValue"]),(0,n.createVNode)(m,{code:e.$store.demos[2]},null,8,["code"])]),(0,n.createElementVNode)("section",r,[(0,n.createElementVNode)("h6",{class:(0,n.normalizeClass)(e.$tt("headline6"))},"1.3 Custom Toolbar",2),(0,n.createVNode)(u,{ref:"editor",modelValue:e.decodeContent,"onUpdate:modelValue":o[2]||(o[2]=o=>e.decodeContent=o),placeholder:"Compose an epic...",toolbar:s.toolbar,"toolbar-handlers":s.toolbarHandlers},null,8,["modelValue","toolbar","toolbar-handlers"]),(0,n.createVNode)(C,{modelValue:e.preview.show,"onUpdate:modelValue":o[5]||(o[5]=o=>e.preview.show=o),class:"preview-dialog"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" Preview "),(0,n.createVNode)(w,{class:"close",icon:"close",onClick:o[3]||(o[3]=o=>e.preview.show=!1)})])),_:1}),(0,n.createVNode)(v,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(b,{modelValue:e.preview.type,"onUpdate:modelValue":o[4]||(o[4]=o=>e.preview.type=o),type:2,items:[{text:"Desktop",icon:"desktop_windows"},{text:"Tablet",icon:"tablet"},{text:"Mobile",icon:"phone_iphone"}]},null,8,["modelValue"]),(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"preview-content",style:(0,n.normalizeStyle)(s.previewStyle),innerHTML:e.preview.content},null,12,i),[[g,4]])])),_:1})])),_:1},8,["modelValue"]),(0,n.createElementVNode)("p",null,[(0,n.createVNode)(V,{outlined:"",onClick:s.onEncodeContent},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" Show Encode Content ")])),_:1},8,["onClick"])]),(0,n.createElementVNode)("div",d,(0,n.toDisplayString)(e.encodeContent),1),(0,n.createVNode)(m,{code:e.$store.demos[3]},null,8,["code"])])])),_:1})}]])}}]);