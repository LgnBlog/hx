(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48c767e9"],{"032b":function(t,e,n){},4852:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"acrossBar"},[n("div",{ref:"acrossBar",staticClass:"acrossBar_chart"}),n("el-dialog",{attrs:{title:"提示",visible:t.lineDialogVisible,width:"88%"},on:{"update:visible":function(e){t.lineDialogVisible=e}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.lineChartsLoading,expression:"lineChartsLoading"}],staticClass:"line-charts"}),n("span",{attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"table_title"},[t._v("业务办理明细"),n("br"),n("span",{staticStyle:{"font-weight":"normal","font-size":"12px",color:"#ff8000"}},[t._v("业务类别、业务子类、单位只能有一个多选")])]),n("span",{staticClass:"label"},[t._v("业务类别：")]),n("el-select",{staticStyle:{width:"160px","margin-right":"10px"},attrs:{"multiple-limit":t.gnflLimit,size:"mini",multiple:"",filterable:"","collapse-tags":"","allow-create":"","default-first-option":"",placeholder:"请选择业务类别"},on:{change:t.handleGnfl},model:{value:t.gnflValue,callback:function(e){t.gnflValue=e},expression:"gnflValue"}},t._l(t.gnflList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("span",{staticClass:"label"},[t._v("业务子类：")]),n("el-select",{staticStyle:{width:"160px","margin-right":"10px"},attrs:{"multiple-limit":t.gnxLimit,size:"mini",multiple:"",filterable:"","collapse-tags":"","allow-create":"","default-first-option":"",placeholder:"请选择业务子类"},on:{change:t.handleGnx},model:{value:t.gnxValue,callback:function(e){t.gnxValue=e},expression:"gnxValue"}},t._l(t.gnxList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("span",{staticClass:"label"},[t._v("单位：")]),n("el-select",{staticStyle:{width:"160px","margin-right":"10px"},attrs:{size:"mini","multiple-limit":t.qdLimit,multiple:"",filterable:"","collapse-tags":"","allow-create":"","default-first-option":"",placeholder:"请选择单位"},on:{change:t.handleQd},model:{value:t.qdValue,callback:function(e){t.qdValue=e},expression:"qdValue"}},t._l(t.qdOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("span",[t._v(" 时间：")]),n("el-radio-group",{model:{value:t.hyfbWd,callback:function(e){t.hyfbWd=e},expression:"hyfbWd"}},[n("el-radio",{attrs:{label:"年"}},[t._v("年")]),n("el-radio",{attrs:{label:"月"}},[t._v("月")]),n("el-radio",{attrs:{label:"日"}},[t._v("日")])],1),n("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"年"===t.hyfbWd?"year":"月"===t.hyfbWd?"month":"date",size:"mini",placeholder:"选择日期","value-format":"年"===t.hyfbWd?"yyyy":"月"===t.hyfbWd?"yyyy-MM":"yyyy-MM-dd"},model:{value:t.hyfbDate,callback:function(e){t.hyfbDate=e},expression:"hyfbDate"}},[t._v(">\n            ")]),n("el-button",{staticStyle:{margin:"0px 10px"},attrs:{type:"primary",size:"mini"},on:{click:t.getFunctionalActiveDistributionDetail}},[t._v("查询")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.exportExcel}},[t._v("导出Excel")])],1),n("div",{staticStyle:{"text-align":"center"}},[n("el-radio-group",{on:{change:t.getFunctionalActiveDistributionDetail},model:{value:t.lineType,callback:function(e){t.lineType=e},expression:"lineType"}},[n("el-radio",{attrs:{label:"1"}},[t._v("分线")]),n("el-radio",{attrs:{label:"2"}},[t._v("合线")])],1)],1),n("div",{ref:"gnfnLineChart",staticStyle:{height:"260px",margin:"10px 8px"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.lineDialogVisible=!1}}},[t._v("关闭")])],1)])],1)},a=[],r=(n("7f7f"),n("db49")),o=n("bb51"),l={dataset:{source:[["score","amount","product"],[89.3,58212,"Matcha"],[57.1,78254,"Milk"],[74.4,41032,"Cheese"],[89.7,20145,"Matcha"],[68.1,79146,"Tea"],[19.6,91852,"Orange"],[10.6,101852,"Lemon"],[32.7,20112,"Walnut"]]},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,top:0,bottom:10,left:10,right:30},xAxis:{name:" ",axisTick:{show:!0},axisLine:{show:!1},splitLine:{show:!0},axisLabel:{textStyle:{color:"#636363"}}},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#636363"}}},series:[{type:"bar",showBackground:!0,backgroundStyle:{color:"#e7fcff"},encode:{x:"score",y:"product"},barMaxWidth:32,itemStyle:{normal:{color:function(t){var e=["#264bcd","#00cbcb","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622"];return e[t.dataIndex]}}}}]},s={name:"acrossBar",mixins:[o["a"]],components:{},props:{},data:function(){return{lineType:"1",barOption:l,lineChartsLoading:!1,lineDialogVisible:!1,gnflValue:[],gnflList:[],gnxValue:[],gnxList:[],qdValue:[],qdOptions:[],hyfbWd:"月",hyfbDate:"2021-2-1",lineOption:{grid:{left:"3%",right:"4%",bottom:"10",top:"10",containLabel:!0},tooltip:{trigger:"axis"},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{name:"",color:"#3c86e0",data:[],type:"line"}]},gnflLimit:20,gnxLimit:20,qdLimit:20}},mounted:function(){},methods:{handleGnfl:function(){this.gnxValue=[],this.GetFeature(),this.gnflValue.length>1?(this.gnxLimit=1,this.qdLimit=1):this.gnxValue.length>1?(this.gnflLimit=1,this.qdLimit=1):this.qdValue.length>1?(this.gnxLimit=1,this.gnflLimit=1):(this.gnflLimit=20,this.gnxLimit=20,this.qdLimit=20)},handleGnx:function(){this.gnflValue.length>1?(this.gnxLimit=1,this.qdLimit=1):this.gnxValue.length>1?(this.gnflLimit=1,this.qdLimit=1):this.qdValue.length>1?(this.gnxLimit=1,this.gnflLimit=1):(this.gnflLimit=20,this.gnxLimit=20,this.qdLimit=20)},handleQd:function(){this.gnflValue.length>1?(this.gnxLimit=1,this.qdLimit=1):this.gnxValue.length>1?(this.gnflLimit=1,this.qdLimit=1):this.qdValue.length>1?(this.gnxLimit=1,this.gnflLimit=1):(this.gnflLimit=20,this.gnxLimit=20,this.qdLimit=20)},GetFunctionDistribution:function(t,e,n){var i=this;this.getBusinessType({}).then((function(t){i.gnflList=t})).finally((function(){}))},GetFeature:function(){var t=this;this.getBusinessSubclass({businessType:this.gnflValue}).then((function(e){t.gnxList=e}))},handleGnf:function(t,e){window.console.log(t),window.console.log(e)},getFunctionalActiveDistributionDetail:function(){var t=this;this.lineChartsLoading=!0,this.getTopTenDetail({cities:this.qdValue,dimension:this.hyfbWd,time:this.hyfbDate,businessType:this.gnflValue,businessSubclass:this.gnxValue,type:this.lineType}).then((function(e){"1"===t.lineType?t.init2(e):t.init2({"合线":e})})),this.lineChartsLoading=!1},exportExcel:function(){window.location.href=r["c"]+"/internetChannelController/exportTopTenDetail?cities="+this.qdValue+"&dimension="+this.hyfbWd+"&businessSubclass="+this.gnxValue+"&businessType="+this.gnflValue+"&time="+this.hyfbDate+"&type="+this.lineType},init2:function(t){this.lineOption.xAxis.data=[],this.lineOption.series=[];var e=[];for(var i in t)e.push({yD:t[i],type:"line",name:i,smooth:!0});for(var a=["#3c86e0","#e0c53c","#14e5cd","#c96f20","#68b45b","#722dc1","#87dbc7","#0812d2"],r=0;r<e.length;r++){e[r].data=[];for(var o=0;o<e[r].yD.length;o++)e[r].color=a[r],e[r].data.push(e[r].yD[o].num),0===r&&this.lineOption.xAxis.data.push(e[r].yD[o].resultDate)}this.lineOption.series=e;var l=n("313e");this.mychart=l.init(this.$refs.gnfnLineChart),this.mychart.setOption(this.lineOption,!0);var s=l.init(this.$refs.gnfnLineChart,!0);window.addEventListener("resize",s.resize)},init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Date;t&&(this.barOption.dataset.source=t),this.qdValue=i,this.hyfbWd=a,this.hyfbDate=r;var o=n("313e");this.mychart=o.init(this.$refs.acrossBar),this.mychart.setOption(this.barOption);var l=o.init(this.$refs.acrossBar,!0);window.addEventListener("resize",l.resize),this.qdOptions=e;var s=this;this.mychart.off("click"),this.mychart.on("click",(function(t){s.gnflValue=[t.name],window.console.log(t),s.lineDialogVisible=!0,s.GetFunctionDistribution(t),s.GetFeature(),s.getFunctionalActiveDistributionDetail()}))}}},u=s,c=(n("e9c4"),n("2877")),h=Object(c["a"])(u,i,a,!1,null,"257f45f4",null);e["default"]=h.exports},bb51:function(t,e,n){"use strict";var i=n("db49"),a=n("ab3e"),r=i["c"]+"/internetChannelController/getFunctionChannel";function o(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:r})}var l=i["c"]+"/internetChannelController/functionDistribution";function s(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:l})}var u=i["c"]+"/internetChannelController/getBusinessType";function c(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:u})}var h=i["c"]+"/internetChannelController/businessSituation";function f(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:h})}var d=i["c"]+"/internetChannelController/getBusinessChannel";function p(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:d})}var g=i["c"]+"/internetChannelController/businessSituationDetail";function b(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:g})}var m=i["c"]+"/internetChannelController/getRegisterChannel";function y(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:m})}var v=i["c"]+"/internetChannelController/getDetail";function C(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:v})}var x=i["c"]+"/internetChannelController/getNumber";function j(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:x})}var T=i["c"]+"/internetChannelController/getTotalNumber";function L(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:T})}var D=i["c"]+"/internetChannelController/functionalActiveDistribution";function O(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:D})}var w=i["c"]+"/internetChannelController/getFunctionDistribution";function V(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:w})}var q=i["c"]+"/internetChannelController/getFeature";function k(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:q})}var S=i["c"]+"/internetChannelController/functionalActiveDistributionDetail";function _(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:S})}var A=i["c"]+"/internetChannelController/getUnit";function B(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:A})}var F=i["c"]+"/internetChannelController/getTopTen";function W(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:F})}var z=i["c"]+"/internetChannelController/getBusinessSubclass";function G(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:z})}var Q=i["c"]+"/internetChannelController/getTopTenDetail";function M(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Q})}var E=i["c"]+"/qdtj/saveQdtj";function N(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:E})}var R=i["c"]+"/qdtj/list";function $(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:R})}var P=i["c"]+"/qdtj/delete";function I(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:P})}var J=i["c"]+"/qdtj/getDeail";function U(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:J})}var H=i["c"]+"/customerConfig/tagByCustomers";function K(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:H})}var X=i["c"]+"/qdtj/downLoad";function Y(t){return Object(a["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:X})}var Z=i["c"]+"/internetChannelController/getQDVisit";function tt(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Z})}var et=i["c"]+"/internetChannelController/getQDAnalysis";function nt(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:et})}var it=i["c"]+"/qdtj/executeTask";function at(t){return Object(a["a"])({method:"GET",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:it})}var rt=i["c"]+"/customerConfig/updateCustomersTotal";function ot(t){return Object(a["a"])({method:"POST",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:rt})}e["a"]={data:function(){return{channelPreference:{list:[],page:null,limit:null,total:0,model:null}}},methods:{getFunctionChannel:function(t){return o(t).then((function(t){return t}))},functionDistribution:function(t){return s(t).then((function(t){return t}))},getBusinessType:function(t){return c(t).then((function(t){return t}))},businessSituation:function(t){return f(t).then((function(t){return t}))},getBusinessChannel:function(t){return p(t).then((function(t){return t}))},businessSituationDetail:function(t){return b(t).then((function(t){return t}))},getRegisterChannel:function(t){return y(t).then((function(t){return t}))},getDetail:function(t){return C(t).then((function(t){return t}))},getNumber:function(t){return j(t).then((function(t){return t}))},getTotalNumber:function(t){return L(t).then((function(t){return t}))},functionalActiveDistribution:function(t){return O(t).then((function(t){return t}))},getFunctionDistribution:function(t){return V(t).then((function(t){return t}))},getFeature:function(t){return k(t).then((function(t){return t}))},functionalActiveDistributionDetail:function(t){return _(t).then((function(t){return t}))},getUnit:function(t){return B(t).then((function(t){return t}))},getTopTen:function(t){return W(t).then((function(t){return t}))},getBusinessSubclass:function(t){return G(t).then((function(t){return t}))},getTopTenDetail:function(t){return M(t).then((function(t){return t}))},saveQdtj:function(t){return N(t).then((function(t){return t}))},getQdRcList:function(t){return $(t).then((function(t){return t}))},deleteQdRcList:function(t){return I(t).then((function(t){return t}))},getQdRcDeail:function(t){return U(t).then((function(t){return t}))},tagByCustomers:function(t){return K(t).then((function(t){return t}))},downLoad:function(t){return Y(t).then((function(t){return t}))},getQdVisit:function(t){return tt(t).then((function(t){return t}))},getQdAnalysis:function(t){return nt(t).then((function(t){return t}))},executeTask:function(t){return at(t).then((function(t){return t}))},updateCustomersTotal:function(t){return ot(t).then((function(t){return t}))}}}},e9c4:function(t,e,n){"use strict";var i=n("032b"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-48c767e9.d0cd8d88.js.map