(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96b66556"],{"38d0":function(t,a,n){},"5bae":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"incomingClient"},[n("div",{staticClass:"top-content"},t._l(t.menuData,(function(a,e){return n("div",{key:e,staticClass:"content-menu",class:t.active==="0"+(e+1)?"active":"",on:{click:function(n){return t.changeActive(e+1,a)}}},[n("span",{staticClass:"text"},[t._v(t._s(a.name))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.active!=="0"+(e+1),expression:"active!=='0'+(index+1)"}],staticClass:"shadow"})])})),0),n("div",{staticClass:"bottom-content"},[n("router-view")],1)])},i=[],c={components:{},name:"incomingClient",data:function(){return{active:"01",menuData:[{name:"网格化经理全景（主管)",value:"01",path:"/panoramicApplication/managerManagement"},{name:"网格化经理全景（经理)",value:"02",path:"/panoramicApplication/managerPanoramicNew"},{name:"渠道推荐匹配",value:"03",path:"/panoramicApplication/matching?mark=wgh"}]}},mounted:function(){this.$router.push({path:this.menuData[0].path})},methods:{changeActive:function(t,a){this.active="0"+t,this.$router.push({path:a.path})}}},s=c,o=(n("cea3"),n("2877")),u=Object(o["a"])(s,e,i,!1,null,"0730b552",null);a["default"]=u.exports},cea3:function(t,a,n){"use strict";var e=n("38d0"),i=n.n(e);i.a}}]);
//# sourceMappingURL=chunk-96b66556.32438f4c.js.map