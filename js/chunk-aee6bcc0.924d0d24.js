(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aee6bcc0"],{"2bc8":function(e,t,a){"use strict";var n=a("e33d"),i=a.n(n);i.a},"79ef":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userBehavior"},[a("div",{staticClass:"top-content"},e._l(e.menuData,(function(t,n){return a("div",{key:n,staticClass:"content-menu",class:e.active==="0"+(n+1)?"active":"",on:{click:function(a){return e.changeActive(n+1,t)}}},[a("span",{staticClass:"text"},[e._v(e._s(t.name))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.active!=="0"+(n+1),expression:"active!=='0'+(index+1)"}],staticClass:"shadow"})])})),0),a("div",{staticClass:"bottom-content"},[a("router-view")],1)])},i=[],s={components:{},name:"userBehavior",data:function(){return{active:"01",menuData:[{name:"智能IVR与客户意图分析",value:"01",path:"/userBehavior/panoramicAnalysis"},{name:"意图配置",value:"02",path:"/userBehavior/intentionConfiguration"},{name:"推荐匹配",value:"03",path:"/userBehavior/recommendMatch"},{name:"稳定性及趋势分析",value:"04",path:"/userBehavior/ivrLegendAnalysis"}]}},mounted:function(){this.$router.push({path:this.menuData[0].path})},methods:{changeActive:function(e,t){this.active="0"+e,this.$router.push({path:t.path})}}},c=s,o=(a("2bc8"),a("2877")),u=Object(o["a"])(c,n,i,!1,null,"32793226",null);t["default"]=u.exports},e33d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-aee6bcc0.924d0d24.js.map