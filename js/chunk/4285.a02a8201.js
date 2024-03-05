(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4285],{50645:function(e){e.exports=function(){"use strict";function e(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),l=0;for(t=0;t<n;t++)for(var u=arguments[t],o=0,i=u.length;o<i;o++,l++)a[l]=u[o];return a}function t(t){return void 0===t&&(t={}),function(n){var a,l,u,o="",i=function(){if(t.input){if(!(a=t.input instanceof Element?t.input:window.document.querySelector(t.input)))return void n.config.errorHandler(new Error("Invalid input element specified"));n.config.wrap&&(a=a.querySelector("[data-input]"))}else(a=n._input.cloneNode()).removeAttribute("id"),a._flatpickr=void 0;if(a.value){var e=n.parseDate(a.value);e&&n.selectedDates.push(e)}a.setAttribute("data-fp-omit",""),n.config.clickOpens&&(n._bind(a,["focus","click"],(function(){n.selectedDates[1]&&(n.latestSelectedDateObj=n.selectedDates[1],n._setHoursFromDate(n.selectedDates[1]),n.jumpToDate(n.selectedDates[1])),l=!0,n.isOpen=!1,n.open(void 0,"left"===t.position?n._input:a)})),n._bind(n._input,["focus","click"],(function(e){e.preventDefault(),n.isOpen=!1,n.open()}))),n.config.allowInput&&n._bind(a,"keydown",(function(e){"Enter"===e.key&&(n.setDate([n.selectedDates[0],a.value],!0,o),a.click())})),t.input||n._input.parentNode&&n._input.parentNode.insertBefore(a,n._input.nextSibling)},r={onParseConfig:function(){n.config.mode="range",o=n.config.altInput?n.config.altFormat:n.config.dateFormat},onReady:function(){i(),n.config.ignoredFocusElements.push(a),n.config.allowInput?(n._input.removeAttribute("readonly"),a.removeAttribute("readonly")):a.setAttribute("readonly","readonly"),n._bind(n._input,"focus",(function(){n.latestSelectedDateObj=n.selectedDates[0],n._setHoursFromDate(n.selectedDates[0]),l=!1,n.jumpToDate(n.selectedDates[0])})),n.config.allowInput&&n._bind(n._input,"keydown",(function(e){"Enter"===e.key&&n.setDate([n._input.value,n.selectedDates[1]],!0,o)})),n.setDate(n.selectedDates,!1),r.onValueUpdate(n.selectedDates),n.loadedPlugins.push("range")},onPreCalendarPosition:function(){l&&(n._positionElement=a,setTimeout((function(){n._positionElement=n._input}),0))},onChange:function(){n.selectedDates.length||setTimeout((function(){n.selectedDates.length||(a.value="",u=[])}),10),l&&setTimeout((function(){a.focus()}),0)},onDestroy:function(){t.input||a.parentNode&&a.parentNode.removeChild(a)},onValueUpdate:function(t){var i,r,d;if(a){if((u=!u||t.length>=u.length?e(t):u).length>t.length){var s=t[0],c=l?[u[0],s]:[s,u[1]];c[0].getTime()>c[1].getTime()&&(l?c[0]=c[1]:c[1]=c[0]),n.setDate(c,!1),u=e(c)}r=(i=n.selectedDates.map((function(e){return n.formatDate(e,o)})))[0],n._input.value=void 0===r?"":r,d=i[1],a.value=void 0===d?"":d}}};return r}}return t}()},64285:function(e,t,n){"use strict";n.r(t);const a=n(52338).A;t.default=a},98457:function(e,t,n){"use strict";n.r(t);const a=n(2519).A;t.default=a},52338:function(e,t,n){"use strict";n.d(t,{A:function(){return a.A}});var a=n(51611)},51611:function(e,t,n){"use strict";var a=n(35720),l=n(46430),u=n(50645),o=n.n(u),i=n(98457);const r={class:"mdc-rangepicker"},d={class:"mdc-rangepicker__separator"},s={EVENTS:{CHANGE:"update:modelValue"}},c={name:"UiRangepicker",customOptions:{UI_RANGEPICKER:s}};t.A=Object.assign(c,{props:{outlined:{type:Boolean,default:!1},modelValue:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},placeholders:{type:Array,default:()=>[]},labels:{type:Array,default:()=>[]},config:{type:Object,default:()=>({})},disableRangePlugin:{type:Boolean,default:!1}},emits:[s.EVENTS.CHANGE],setup(e,t){let{emit:n}=t;const u=e,c=n,p=(0,a.computed)((()=>u.labels[0]||"")),f=(0,a.computed)((()=>u.labels[1]||"")),m=(0,a.computed)((()=>u.placeholders[0]||"")),g=(0,a.computed)((()=>u.placeholders[1]||"")),v=(0,a.ref)(null),b=(0,a.ref)(null),V=(0,a.reactive)({picker:null,startInputValue:"",endInputValue:""}),{startInputValue:k,endInputValue:D}=(0,a.toRefs)(V);function _(e){let t=!1;if(2===e.length){const n=e.map((e=>e?l.A.formatDate(new Date(e),u.config.dateFormat||"Y-m-d"):"")),a=n[0],o=n[1];V.startInputValue===a&&V.endInputValue===o||(V.startInputValue=a,V.endInputValue=o,t=a&&o)}return t}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.picker;const t=V.startInputValue&&V.endInputValue?[V.startInputValue,V.endInputValue]:[];if(u.disableRangePlugin)V.picker&&2===V.picker.length&&V.picker.forEach(((e,t)=>e.setDate(u.modelValue[t])));else{e.setDate(t,!0);v.value.$textField.foundation.deactivateFocus()}}return(0,a.onMounted)((()=>{const e=v.value,t=e.textfield.querySelector("input"),n=b.value.textfield.querySelector("input");if(!V.picker){const a=function(e,t,n){let a=Object.assign({},u.config,{disableMobile:!0,plugins:u.disableRangePlugin?[]:[new(o())({input:n})]});a.onChange=(e,a,l)=>{_([t.value,n.value])&&c(s.EVENTS.CHANGE,[V.startInputValue,V.endInputValue])},a.onClose=()=>{setTimeout((()=>{e.$textField.foundation.deactivateFocus(),t.blur()}),1)},a.onReady=(e,t,n)=>{_(u.modelValue)&&(h(n),c(s.EVENTS.CHANGE,[V.startInputValue,V.endInputValue]))},u.disableRangePlugin||(a.onValueUpdate=()=>{!function(){if(u.config.enableTime){const e=b.value.$textField.value;if(e!==V.endInputValue){_([V.startInputValue,e])&&c(s.EVENTS.CHANGE,[V.startInputValue,V.endInputValue])}}}()});return a}(e,t,n);V.picker=u.disableRangePlugin?[(0,l.A)(t,a),(0,l.A)(n,a)]:(0,l.A)(t,a)}(0,a.watch)((()=>u.modelValue),((e,t)=>{const n=t[0]||t[1],a=e[0]&&e[1];!n&&a?(_(e),h()):n&&!a&&(V.startInputValue="",V.endInputValue="",h())}))})),(0,a.onBeforeUnmount)((function(){V.picker&&(u.disableRangePlugin?V.picker.forEach((e=>e.destroy())):V.picker.destroy(),V.picker=null)})),(t,n)=>((0,a.openBlock)(),(0,a.createElementBlock)("div",r,[(0,a.createVNode)(i.default,{ref_key:"startDatepicker",ref:v,modelValue:(0,a.unref)(k),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.isRef)(k)?k.value=e:null),class:"mdc-rangepicker__start",outlined:e.outlined,label:p.value,placeholder:m.value,disabled:e.disabled},null,8,["modelValue","outlined","label","placeholder","disabled"]),(0,a.createElementVNode)("span",d,[(0,a.renderSlot)(t.$slots,"separator")]),(0,a.createVNode)(i.default,{ref_key:"endDatepicker",ref:b,modelValue:(0,a.unref)(D),"onUpdate:modelValue":n[1]||(n[1]=e=>(0,a.isRef)(D)?D.value=e:null),class:"mdc-rangepicker__end",outlined:e.outlined,label:f.value,placeholder:g.value,disabled:e.disabled},null,8,["modelValue","outlined","label","placeholder","disabled"])]))}})}}]);