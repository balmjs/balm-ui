"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4808],{49033:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(73114),n=a(76580),d=a(8727),r=a(5522);const s={key:0,class:"mdc-tree-node__indent"},c={class:"mdc-tree-node__icon"},o=["onClick"],i=["onClick"],u=["onClick"],h={name:"UiTreeNode",customOptions:{UI_GLOBAL:r.Z}};var p=Object.assign(h,{props:{children:{type:Array,default:()=>[]},treeData:{type:Object,default:()=>({})}},setup(e){const t=e,a=t.treeData.dataFormat;function h(e){e.disabled||n.w.onCheck(t.treeData,e)}function p(e){const{children:t,...l}=e;return e[a.isLeaf]?e:l}return(m,f)=>{const k=(0,l.resolveComponent)("ui-tree-node");return(0,l.openBlock)(),(0,l.createElementBlock)("ul",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.children,((f,y)=>((0,l.openBlock)(),(0,l.createElementBlock)("li",{key:y,class:(0,l.normalizeClass)(["mdc-tree-node",{"mdc-tree-node--root":f.isRoot,"mdc-tree-node--leaf":f.isLeaf}])},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)(["mdc-tree-node__content",{"mdc-tree-node--selected":f.selected||f.checked}])},[(0,l.renderSlot)(m.$slots,"before",{data:p(f)}),f.level?((0,l.openBlock)(),(0,l.createElementBlock)("div",s,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(f.level,(e=>((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:e,class:"mdc-tree-node__indent-unit"})))),128))])):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",c,[f[(0,l.unref)(a).isLeaf]?(0,l.createCommentVNode)("",!0):((0,l.openBlock)(),(0,l.createElementBlock)("span",{key:0,onClick:e=>{return a=f,void n.w.onExpand(t.treeData,a);var a}},[f.expanded?(0,l.renderSlot)(m.$slots,"expand-more-icon",{key:0},(()=>[(0,l.createElementVNode)("i",{class:(0,l.normalizeClass)((0,l.unref)(r.Z).cssClasses.icon),"aria-hidden":"true"}," expand_more ",2)])):(0,l.renderSlot)(m.$slots,"expand-less-icon",{key:1},(()=>[(0,l.createElementVNode)("i",{class:(0,l.normalizeClass)((0,l.unref)(r.Z).cssClasses.icon),"aria-hidden":"true"}," chevron_right ",2)]))],8,o))]),e.treeData.multiple?((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:1,class:"mdc-tree-node__checkbox",onClick:e=>h(f)},[f[(0,l.unref)(a).isLeaf]?((0,l.openBlock)(),(0,l.createBlock)(d.Z,{key:0,checked:f.checked,disabled:f.disabled},null,8,["checked","disabled"])):((0,l.openBlock)(),(0,l.createBlock)(d.Z,{key:1,checked:f.checked,indeterminate:f.indeterminate,disabled:f.disabled},null,8,["checked","indeterminate","disabled"]))],8,i)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("label",{class:"mdc-tree-node__label",onClick:a=>{return e.treeData.multiple?h(f):(l=f,void n.w.onSelect(t.treeData,l));var l}},[(0,l.renderSlot)(m.$slots,"title",{data:p(f)},(()=>[(0,l.createTextVNode)((0,l.toDisplayString)(f[(0,l.unref)(a).label]),1)]))],8,u),(0,l.renderSlot)(m.$slots,"after",{data:p(f)})],2),!f[(0,l.unref)(a).isLeaf]&&f.expanded?((0,l.openBlock)(),(0,l.createBlock)(k,{key:0,class:"mdc-tree-node__children",children:f[(0,l.unref)(a).children],"tree-data":e.treeData},(0,l.createSlots)({_:2},[(0,l.renderList)(m.$slots,((e,t)=>({name:t,fn:(0,l.withCtx)((e=>[(0,l.renderSlot)(m.$slots,t,(0,l.normalizeProps)((0,l.guardReactiveProps)(e)))]))})))]),1032,["children","tree-data"])):(0,l.createCommentVNode)("",!0)],2)))),128))])}}})},92219:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(73114),n=a(76580),d=a(16253);const r={dataFormat:{label:"label",value:"value",children:"children",hasChildren:"hasChildren",isLeaf:"isLeaf",disabled:"disabled"},EVENTS:{CHANGE:"update:modelValue",SELECTED:"selected"}},s={name:"UiTree",customOptions:{UI_TREE:r}};var c=Object.assign(s,{props:{modelValue:{type:[String,Array],default:""},filterParentNode:{type:Boolean,default:!1},data:{type:Array,default:()=>[]},dataFormat:{type:Object,default:()=>({})},maxLevel:{type:Number,default:0},multiple:{type:Boolean,default:!1},singleChecked:{type:Boolean,default:!1},loadData:{type:[Function,null],default:null},autoExpandParent:{type:Boolean,default:!1},defaultExpandedKeys:{type:Array,default:()=>[]}},emits:[r.EVENTS.CHANGE,r.EVENTS.SELECTED],setup(e,t){let{expose:a,emit:s}=t;const c=e,o=(0,l.reactive)({$tree:null,nodeList:[],treeData:{dataFormat:Object.assign(r.dataFormat,c.dataFormat),maxLevel:c.maxLevel,nodeMap:new Map,selectedValue:c.modelValue,filterParentNode:c.filterParentNode,multiple:c.multiple,singleChecked:c.singleChecked,loadData:c.loadData,selectedEvent:{}}}),{nodeList:i,treeData:u}=(0,l.toRefs)(o),h=(0,l.computed)((()=>({"mdc-tree":!0,"mdc-tree--multiple":c.multiple})));function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.data;o.nodeList=o.$tree.getData(e),o.nodeList.length&&(n.w.setExpanded(o.treeData,o.nodeList,{autoExpandParent:c.autoExpandParent,defaultExpandedKeys:c.defaultExpandedKeys}),n.w.setSelected(o.treeData,o.treeData.selectedValue))}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,l.nextTick)((()=>{t.length&&n.w.resetSelected(o.treeData,t),n.w.setSelected(o.treeData,e),o.treeData.selectedValue=e}))}(0,l.watch)((()=>c.modelValue),((e,t)=>{Array.isArray(e)?((e,t)=>{for(const a of new Set([...e,...t]))if(e.filter((e=>e===a)).length!==t.filter((e=>e===a)).length)return!1;return!0})(o.treeData.selectedValue,e)||m(e,t):o.treeData.selectedValue!==e&&m(e)})),(0,l.watch)((()=>c.data),(e=>p(e))),(0,l.watch)((()=>o.treeData.selectedValue),(e=>{s(r.EVENTS.CHANGE,e,o.treeData.selectedEvent),s(r.EVENTS.SELECTED,Array.isArray(e)?e.map((e=>f(e))):f(e))})),(0,l.onBeforeMount)((()=>{if(c.multiple&&!Array.isArray(o.treeData.selectedValue))throw new Error("[UiTree]: The 'modelValue' prop must be an array in the multiple tree")})),(0,l.onMounted)((()=>{o.$tree=new n.w(o.treeData),p()}));const f=e=>o.treeData.nodeMap.get(e);return a({updateNode:function(e,t,a){switch(e){case"create":n.w.createNode(o.treeData,t,a);break;case"delete":n.w.deleteNode(o.treeData,t,a);break;default:n.w.updateNode(o.treeData,t,a)}},getNode:f}),(e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{class:(0,l.normalizeClass)((0,l.unref)(h))},[(0,l.renderSlot)(e.$slots,"default"),(0,l.createVNode)(d.default,{children:(0,l.unref)(i),"tree-data":(0,l.unref)(u)},(0,l.createSlots)({_:2},[(0,l.renderList)(e.$slots,((t,a)=>({name:a,fn:(0,l.withCtx)((t=>[(0,l.renderSlot)(e.$slots,a,(0,l.normalizeProps)((0,l.guardReactiveProps)(t)))]))})))]),1032,["children","tree-data"])],2))}})},76580:function(e,t,a){a.d(t,{w:function(){return d}});const l=(e,t,a)=>{let{selectedValue:l,nodeMap:n,dataFormat:d}=e,{level:r,parentKey:s}=a,c=Object.assign({},t);const{value:o,children:i,hasChildren:u,isLeaf:h,disabled:p}=d,m=c[o],f=c[i],k=((e,t,a)=>e[t]||!a)(c,h,c[u]||f);return c.level=r,c.isRoot=!r,c.isLeaf=k,c.expanded=!1,c.selected=!Array.isArray(l)&&m===l,c.checked=Array.isArray(l)&&l.includes(m),c.parentKey=s,c.disabled=c[p],f||(c[i]=[]),k||(c.indeterminate=!1),n.has(m)||n.set(m,c),c};let n=[];class d{constructor(e){this.treeData=e}getData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const{dataFormat:n,maxLevel:d}=this.treeData,r=[],{value:s,children:c,hasChildren:o}=n;for(let i=0,u=e.length;i<u;i++){let n=l(this.treeData,e[i],{level:t,parentKey:a});const u=n[c],h=n[o]||u;t<d&&h&&(n[c]=this.getData(u,t+1,n[s])),r.push(n)}return r}static addData(e,t,a){const{dataFormat:n,nodeMap:d}=e,r=[],{value:s,children:c}=n,o=t.level+1,i=t[s];for(let u=0,h=a.length;u<h;u++){let t=l(e,a[u],{level:o,parentKey:i});t.checked&&this.setMultipleSelectedValue(e,t[s],!0),r.push(t)}t[c]=r,t.expanded=!0,d.set(i,t)}static async onExpand(e,t){if(e.loadData){const{dataFormat:a}=e;if(t[a.children]&&t[a.children].length)t.expanded=!t.expanded;else{let l=await e.loadData(t[a.value]);Array.isArray(l)?this.addData(e,t,l):console.warn("[UiTree]","Invalid data")}}else t.expanded=!t.expanded}static setSingleSelectedValue(e,t,a){const{nodeMap:l}=e,n=l.get(t);n&&(n.selected=a,e.selectedEvent={selected:a,selectedNodes:t,node:n})}static onSelect(e,t){const{dataFormat:a,selectedValue:l}=e,n=t[a.value];l&&this.setSingleSelectedValue(e,l,!1),e.selectedValue=n,this.setSingleSelectedValue(e,n,!0)}static setMultipleSelectedValue(e,t,a){const{dataFormat:l,nodeMap:n,filterParentNode:d}=e,{isLeaf:r}=l,s=n.get(t);a&&!s.indeterminate?e.selectedValue.includes(t)||(d?s[r]?e.selectedValue.push(t):console.warn("[UiTree]","Tree node is missing `isLeaf`"):e.selectedValue.push(t)):e.selectedValue=e.selectedValue.filter((e=>e!==t))}static setChildrenCheckedValue(e,t,a){const{dataFormat:l,nodeMap:d}=e,{value:r,children:s,isLeaf:c}=l;for(let o=0,i=t.length;o<i;o++){let l=Object.assign({},t[o]);const i=l[r],u=l[s],h=d.get(i);h&&(a?!h.checked&&n.push(i):h.checked&&n.push(i),h.indeterminate=!1,h.checked=a,this.setMultipleSelectedValue(e,i,a)),!l[c]&&u.length&&this.setChildrenCheckedValue(e,u,a)}}static setParentCheckedValue(e,t){const{dataFormat:a,nodeMap:l}=e,{value:d,children:r}=a;if(t){const a=t[d],s=t[r],c=s.filter((e=>e.checked||e.indeterminate)),o=l.get(a);if(c.length){const t=c.filter((e=>e.checked)).length,l=t===s.length;l?!o.checked&&n.push(a):o.checked&&n.push(a),o.checked=l,o.indeterminate=!l,this.setMultipleSelectedValue(e,a,l)}else o.checked=!1,o.indeterminate=!1;t.isRoot||this.setParentCheckedValue(e,l.get(t.parentKey))}}static onCheck(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=!t.checked;"boolean"===typeof a&&(l=a);const{dataFormat:d,nodeMap:r,singleChecked:s}=e,{value:c,children:o,isLeaf:i}=d,u=t[c],h=t[o];s?(t.checked=l,this.setMultipleSelectedValue(e,u,l),e.selectedEvent={checked:l,checkedNodes:[u],node:t}):(n=[u],t[i]?(t.checked=l,this.setMultipleSelectedValue(e,u,l)):(t.indeterminate&&(t.indeterminate=!1,l=!0),t.checked=l,this.setMultipleSelectedValue(e,u,l),this.setChildrenCheckedValue(e,h,l)),t.isRoot||this.setParentCheckedValue(e,r.get(t.parentKey)),e.selectedEvent={checked:l,checkedNodes:n,node:t})}static async handleExpandKeys(e,t,a){const{dataFormat:l,nodeMap:n}=e;for await(let d of t){const t=d[l.value],r=n.get(t);a.includes(t)&&this.onExpand(e,r),d.children&&d.children.length&&this.handleExpandKeys(e,d.children,a)}}static async setExpanded(e,t,a){let{autoExpandParent:l,defaultExpandedKeys:n}=a;const{dataFormat:d,nodeMap:r}=e;if(l)if(n.length)this.handleExpandKeys(e,t,n);else for await(let s of t){const t=s[d.value],a=r.get(t);this.onExpand(e,a)}}static resetSelected(e,t){const{nodeMap:a}=e;for(let l=0,n=t.length;l<n;l++){const n=t[l],d=a.get(n);d&&this.onCheck(e,d,!1)}}static setSelected(e,t){const{nodeMap:a,multiple:l}=e,n=Array.isArray(t)?t:[t];for(let d=0,r=n.length;d<r;d++){const t=n[d],r=a.get(t);r&&(l?this.onCheck(e,r,!0):this.onSelect(e,r))}}static async createNode(e,t,a){const{dataFormat:n,nodeMap:d}=e,{value:r,children:s,hasChildren:c,isLeaf:o}=n,i=d.get(t),u=a[r];let h=l(e,a,{level:i.level+1,parentKey:t,checked:!1});i[o]?(i[s].unshift(h),i[c]||(i[c]=!0),i[o]=!1):i[c]?i[s].length?i[s].unshift(h):await this.onExpand(e,i):(i[s].unshift(h),i[c]=!0,i.expanded=!0),d.set(t,i),d.set(u,h)}static updateNode(e,t,a){const{dataFormat:l,nodeMap:n}=e,{value:d,children:r}=l,s=a[d],c=n.get(s);Object.keys(c).forEach((e=>{"undefined"!==typeof a[e]&&(c[e]=a[e])}));const o=n.get(t),i=o[r].findIndex((e=>e[d]===s));o[r][i]=c,n.set(t,o),n.set(s,c)}static deleteNode(e,t,a){const{dataFormat:l,nodeMap:n}=e,{value:d,children:r,hasChildren:s}=l,c=a[d];if(n.has(c)){const e=n.get(t),a=e[r];a.splice(a.findIndex((e=>e[d]===c)),1),e[s]=a.length,e[s]||(e.isLeaf=!0,e.expanded=!1),n.set(t,e),n.delete(c)}}}}}]);