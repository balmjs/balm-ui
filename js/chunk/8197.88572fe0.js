"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[8197],{98197:function(e,t,n){n.r(t);const s=n(6970).A;t.default=s},6970:function(e,t,n){n.d(t,{A:function(){return s.A}});var s=n(81555)},81555:function(e,t,n){var s=n(35720),c=n(46789),l=n(38796);const o=["textContent"],a={class:"mdc-alert__content"},r={name:"UiAlert",customOptions:{UI_GLOBAL:l.A}};t.A=Object.assign(r,{props:{state:{type:String,default:""},stateOutlined:{type:Boolean,default:!1},closable:{type:Boolean,default:!1}},setup(e){const t=e,n=(0,s.reactive)({closed:!1,destroyed:!1}),{closed:r,destroyed:i}=(0,s.toRefs)(n),{stateType:u,stateClassName:d,materialIcon:f}=(0,c.J)(t),m=(0,s.computed)((()=>["mdc-alert",`mdc-alert--${u.value}`,{"mdc-alert--closed":n.closed}]));function p(){n.closed=!0,setTimeout((()=>{n.destroyed=!0}),200)}return(t,n)=>(0,s.unref)(i)?(0,s.createCommentVNode)("",!0):((0,s.openBlock)(),(0,s.createElementBlock)("div",{key:0,class:(0,s.normalizeClass)(m.value)},[(0,s.renderSlot)(t.$slots,"icon",{},(()=>[(0,s.unref)(f)?((0,s.openBlock)(),(0,s.createElementBlock)("i",{key:0,class:(0,s.normalizeClass)((0,s.unref)(l.A).getMaterialIconClass((0,s.unref)(d),"mdc-alert__icon")),textContent:(0,s.toDisplayString)((0,s.unref)(f))},null,10,o)):(0,s.createCommentVNode)("",!0)])),(0,s.createElementVNode)("div",a,[(0,s.renderSlot)(t.$slots,"default")]),e.closable?((0,s.openBlock)(),(0,s.createElementBlock)("i",{key:0,class:(0,s.normalizeClass)((0,s.unref)(l.A).getMaterialIconClass("mdc-alert__close-button")),onClick:p}," clear ",2)):(0,s.createCommentVNode)("",!0)],2))}})},38796:function(e,t,n){n.d(t,{P:function(){return c}});const s={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return[s.cssClasses.icon,...t]}};function c(e){let{emit:t}=e;return{handleClick:function(e){t(s.EVENTS.CLICK,e)}}}t.A=s},46789:function(e,t,n){n.d(t,{J:function(){return o}});var s=n(35720);const c=["success","info","warn","warning","error","help"],l={defaults:{success:"check_circle",info:"error",error:"cancel",help:"help"},outlined:{success:"check_circle_outline",info:"error_outline",error:"highlight_off",help:"help_outline"}};function o(e){const t=(0,s.computed)((()=>{let t=!1;if(c.includes(e.state))switch(e.state){case"success":t="success";break;case"info":case"help":t="info";break;case"warn":case"warning":t="warning";break;case"error":t="error"}return t})),n=(0,s.computed)((()=>{let n="";return t.value&&(n=`md-${t.value}-icon`,e.stateOutlined&&(n+="--outlined")),n})),o=(0,s.computed)((()=>{let t=!1;if(c.includes(e.state)){const n=e.stateOutlined?"outlined":"defaults";t=["info","warn","warning"].includes(e.state)?l[n].info:l[n][e.state]}return t}));return{stateType:t,stateClassName:n,materialIcon:o}}}}]);