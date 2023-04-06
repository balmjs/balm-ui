"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1739],{91739:function(t,e,o){o.d(e,{Z:function(){return I}});var a=o(73114),n=o(70655),r=o(48315),s=o(43800),i={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},l={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},p={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},c=function(t){function e(o){return t.call(this,(0,n.pi)((0,n.pi)({},e.defaultAdapter),o))||this}return(0,n.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(o(85099).K),d=function(t){function e(e){var o=t.call(this,e)||this;return o.wasDocked=!0,o.isDockedShowing=!0,o.currentAppBarOffsetTop=0,o.isCurrentlyBeingResized=!1,o.resizeThrottleId=0,o.resizeDebounceId=0,o.lastScrollPosition=o.adapter.getViewportScrollY(),o.topAppBarHeight=o.adapter.getTopAppBarHeight(),o}return(0,n.ZT)(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=e,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout((function(){t.resizeThrottleId=0,t.throttledResizeHandler()}),l.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=0}),l.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,e=this.currentAppBarOffsetTop<0,o=this.currentAppBarOffsetTop>t,a=e&&o;if(a)this.wasDocked=!1;else{if(!this.wasDocked)return this.wasDocked=!0,!0;if(this.isDockedShowing!==o)return this.isDockedShowing=o,!0}return a},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-l.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(c),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled=!1,e}return(0,n.ZT)(e,t),e.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled&&(this.adapter.removeClass(i.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(i.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(d),h=function(t){function e(e){var o=t.call(this,e)||this;return o.collapsed=!1,o.isAlwaysCollapsed=!1,o}return(0,n.ZT)(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(i.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(i.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){this.isAlwaysCollapsed||(this.adapter.getViewportScrollY()<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse())},e.prototype.uncollapse=function(){this.adapter.removeClass(i.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(i.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(c),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ZT)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return s.F.attachTo(t)}),this.navIcon=this.root.querySelector(p.NAVIGATION_ICON_SELECTOR);var e=Array.from(this.root.querySelectorAll(p.ACTION_ITEM_SELECTOR));this.navIcon&&e.push(this.navIcon),this.iconRipples=e.map((function(e){var o=t(e);return o.unbounded=!0,o})),this.scrollTarget=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.addEventListener("click",this.handleNavigationClick);var t=this.root.classList.contains(i.FIXED_CLASS);this.root.classList.contains(i.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize)},e.prototype.destroy=function(){var e,o;try{for(var a=(0,n.XA)(this.iconRipples),r=a.next();!r.done;r=a.next()){r.value.destroy()}}catch(l){e={error:l}}finally{try{r&&!r.done&&(o=a.return)&&o.call(a)}finally{if(e)throw e.error}}this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.removeEventListener("click",this.handleNavigationClick);var s=this.root.classList.contains(i.FIXED_CLASS);this.root.classList.contains(i.SHORT_CLASS)||s||window.removeEventListener("resize",this.handleWindowResize),t.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.scrollTarget=t,this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll)},e.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root.classList.contains(e)},addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},setStyle:function(e,o){t.root.style.setProperty(e,o)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){t.emit(p.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var e=t.scrollTarget,o=t.scrollTarget;return void 0!==e.pageYOffset?e.pageYOffset:o.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(p.ACTION_ITEM_SELECTOR).length}};return this.root.classList.contains(i.SHORT_CLASS)?new h(e):this.root.classList.contains(i.FIXED_CLASS)?new u(e):new d(e)},e}(r.B),S=o(15998),T=o(42818);const E={class:"mdc-top-app-bar__row"},m={class:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},A={class:"mdc-top-app-bar__brand"},_={class:"mdc-top-app-bar__title"},C={class:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",role:"toolbar"},g="UiTopAppBar",y={TYPES:{nonRegular:-1,standard:0,fixed:1,dense:2,prominent:3,prominentDense:4,short:5,shortCollapsed:6},cssClasses:{navIcon:"mdc-top-app-bar__navigation-icon",actionItem:"mdc-top-app-bar__action-item"},FIXED_ADJUST:{STANDARD:"mdc-top-app-bar--fixed-adjust",PROMINENT:"mdc-top-app-bar--prominent-fixed-adjust",DENSE:"mdc-top-app-bar--dense-fixed-adjust",DENSE_PROMINENT:"mdc-top-app-bar--dense-prominent-fixed-adjust",SHORT:"mdc-top-app-bar--short-fixed-adjust"},EVENTS:{NAV:"nav",CLOSE:"close"}},v={name:g,customOptions:{name:g,UI_TOP_APP_BAR:y}};var I=Object.assign(v,{props:{contentSelector:{type:String,required:!0},type:{type:[String,Number],default:0},fixed:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},prominent:{type:Boolean,default:!1},prominentDense:{type:Boolean,default:!1},short:{type:Boolean,default:!1},shortCollapsed:{type:Boolean,default:!1},title:{type:String,default:""},navIcon:{type:[String,Boolean],default:"menu"},navId:{type:[String,null],default:null}},emits:[y.EVENTS.NAV,y.EVENTS.CLOSE],setup(t,e){let{emit:o}=e;const n=t,r=(0,a.ref)(null),s=(0,a.reactive)({$topAppBar:null}),i=(0,a.computed)((()=>(0,T.Z)(n,y.TYPES,"nonRegular"))),l=(0,a.computed)((()=>(0,T.Z)(n,y.TYPES,"fixed"))),c=(0,a.computed)((()=>(0,T.Z)(n,y.TYPES,"dense"))),d=(0,a.computed)((()=>(0,T.Z)(n,y.TYPES,"prominent"))),u=(0,a.computed)((()=>n.dense&&n.prominent||(0,T.Z)(n,y.TYPES,"prominentDense"))),h=(0,a.computed)((()=>(0,T.Z)(n,y.TYPES,"short"))),v=(0,a.computed)((()=>(0,T.Z)(n,y.TYPES,"shortCollapsed"))),I=(0,a.computed)((()=>({"mdc-top-app-bar":!0,"mdc-top-app-bar--fixed":l.value,"mdc-top-app-bar--dense":c.value||u.value,"mdc-top-app-bar--prominent":d.value||u.value,"mdc-top-app-bar--short":h.value||v.value,"mdc-top-app-bar--short-collapsed":v.value}))),O=(0,a.computed)((()=>i.value?y.EVENTS.CLOSE:n.navIcon));function b(){if(n.contentSelector){const t=document.querySelector(n.contentSelector),e=t?function(t){let e;const o=document.createElement("div"),a=t.children[0];a?a.classList.contains("mdc-drawer")?e=t:/^mdc-top-app-bar--([a-z]+-)*fixed-adjust$/.test(a.className)?e=a:(e=o,t.insertBefore(o,t.firstChild)):(e=o,t.insertBefore(o,t.firstChild));return e}(t):null;e&&(e.classList.remove(...Object.values(y.FIXED_ADJUST)),c.value?e.classList.add(y.FIXED_ADJUST.DENSE):d.value?e.classList.add(y.FIXED_ADJUST.PROMINENT):u.value?e.classList.add(y.FIXED_ADJUST.DENSE_PROMINENT):h.value||v.value?e.classList.add(y.FIXED_ADJUST.SHORT):e.classList.add(y.FIXED_ADJUST.STANDARD))}else console.warn(`[${g}]: The 'contentSelector' prop is required`)}function L(){s.$topAppBar&&s.$topAppBar.destroy(),(0,a.nextTick)((()=>{b(),s.$topAppBar=new f(r.value),s.$topAppBar.listen(p.NAVIGATION_EVENT,(()=>{o(i.value?y.EVENTS.CLOSE:y.EVENTS.NAV)}))}))}return(0,a.onMounted)((()=>{L(),(0,a.watch)((()=>n.type),(()=>L()))})),(e,o)=>((0,a.openBlock)(),(0,a.createElementBlock)("header",{ref_key:"topAppBar",ref:r,class:(0,a.normalizeClass)((0,a.unref)(I))},[(0,a.createElementVNode)("div",E,[(0,a.createElementVNode)("section",m,[(0,a.createElementVNode)("span",A,[(0,a.renderSlot)(e.$slots,"nav-icon",{navIconClass:y.cssClasses.navIcon},(()=>[(0,a.unref)(O)?((0,a.openBlock)(),(0,a.createBlock)(S.Z,{key:0,id:t.navId,class:(0,a.normalizeClass)(y.cssClasses.navIcon),textContent:(0,a.toDisplayString)((0,a.unref)(O))},null,8,["id","class","textContent"])):(0,a.createCommentVNode)("",!0)]))]),(0,a.createElementVNode)("span",_,[(0,a.renderSlot)(e.$slots,"default",{},(()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.title),1)]))])]),(0,a.createElementVNode)("section",C,[(0,a.renderSlot)(e.$slots,"toolbar",{toolbarItemClass:y.cssClasses.actionItem})])])],2))}})}}]);