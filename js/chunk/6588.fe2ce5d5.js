"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[6588],{56588:function(e,t,a){a.r(t);var n=a(35720),u=a(89416);const s=(0,n.reactive)({demoMenu:[]});async function c(){const e=(0,u.useHttp)();s.demoMenu=await e.get("/data/table.json")}t.default=()=>({...(0,n.toRefs)(s),getDemoMenu:c})}}]);