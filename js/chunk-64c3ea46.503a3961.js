(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64c3ea46"],{2909:function(t,e,a){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}function n(t){if(Array.isArray(t))return o(t)}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t,e){if(t){if("string"===typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||r(t)||i(t)||s()}a.d(e,"a",(function(){return l}))},"2f21":function(t,e,a){"use strict";var o=a("79e5");t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,e,a){"use strict";var o=a("5ca1"),n=a("d8e8"),r=a("4bf8"),i=a("79e5"),s=[].sort,l=[1,2,3];o(o.P+o.F*(i((function(){l.sort(void 0)}))||!i((function(){l.sort(null)}))||!a("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(r(this)):s.call(r(this),n(t))}})},"694d":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"word-cloud-style"},[a("div",{staticClass:"charts",attrs:{id:t.id}})])},n=[],r=a("2909"),i=(a("55dd"),a("7f7f"),a("313e")),s=a.n(i),l={name:"word-cloud",props:{wordCloudData:{type:Array,default:function(){return[]}},name:{type:String,default:function(){return""}}},data:function(){return{id:Math.random()+"_",dealData:[]}},watch:{},created:function(){},mounted:function(){this.init()},methods:{dataFilter:function(t){},init:function(){var t=document.getElementById(this.id),e=s.a.init(t),a={},o=this.wordCloudData;console.log(o,"data");var n=[{itemColor:"#fdf1e6",labelColor:"#F37508"},{itemColor:"#e6f8fd",labelColor:"#08BEF3"},{itemColor:"#eaf9ec",labelColor:"#2DC746"},{itemColor:"#e8f2fd",labelColor:"#1A84F4"},{itemColor:"#f0f9ee",labelColor:"#6cbf53"},{itemColor:"#eae7fd",labelColor:"#8a7cec"}],r=o.length,i=n.length;n=this.fillData(n,r,i);var l=document.body.clientWidth>1600?[[0,47],[6,24],[8,64],[14,38],[22,23],[20,63],[30,27],[28,64],[36,60],[40,22]]:[[0,40],[9,60],[14,20],[20,55],[30,64],[34,25]];this.randomSort(l),this.randomSort(o),this.randomSort(n);for(var c=[80,100,120],u=[],d=0;d<o.length;d++){var h=o[d],f=h.valueShow>=100?20:16,m=h.valueShow>=100?"#d97979":"#808080";u.push({name:h.name,value:l[d],valueShow:h.valueShow,symbolSize:h.symbolSize||c[Math.floor(Math.random()*c.length)],itemStyle:{color:n[d].itemColor},label:{formatter:function(t){var e="";return e=t.name.length>4?t.name.slice(0,4)+"…":t.name,["{a|"+e+"}","{b|"+t.data.valueShow+"次}"].join("\n")},textStyle:{rich:{a:{fontSize:14,align:"center",fontWeight:"bold",padding:[10,0,0,0],color:n[d].labelColor},b:{fontSize:f,align:"center",color:m}}}},emphasis:{itemStyle:{color:n[d].itemColor}}})}a={backgroundColor:"transparent",hoverAnimation:!1,grid:{show:!1,top:10,bottom:10},xAxis:[{show:!1}],yAxis:[{show:!1,max:80}],series:[{type:"scatter",symbol:"circle",symbolSize:120,label:{normal:{show:!0}},data:u}]},e.setOption(a),this.$emit("setOption",this.name,e)},randomSort:function(t){t.sort((function(){return Math.random()-.5}))},fillData:function(t,e,a){var o=Object(r["a"])(t);if(e>a)for(var n=0;n<e-a;n++)1===a?o.push(JSON.parse(JSON.stringify(o[0]))):o.push(JSON.parse(JSON.stringify(o[n-a*Math.floor(n/a)])));return o}}},c=l,u=(a("a97d"),a("2877")),d=Object(u["a"])(c,o,n,!1,null,"2e56e0de",null);e["a"]=d.exports},"6a90":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panoramicAnalysis"},[a("div",{staticClass:"header"},[a("el-select",{staticClass:"input",attrs:{size:"small",clearable:"",placeholder:"请选择地市局"},on:{change:t.dsjChange},model:{value:t.queryForm.dsj,callback:function(e){t.$set(t.queryForm,"dsj",e)},expression:"queryForm.dsj"}},t._l(t.dsjOptions,(function(t){return a("el-option",{key:t.ORG_CODE,attrs:{label:t.ORG_NAME,value:t.ORG_CODE}})})),1),a("el-select",{staticClass:"input",attrs:{clearable:"",placeholder:"请选择县区局",size:"small"},on:{change:t.qxjChange},model:{value:t.queryForm.xqj,callback:function(e){t.$set(t.queryForm,"xqj",e)},expression:"queryForm.xqj"}},t._l(t.xqjOptions,(function(t){return a("el-option",{key:t.ORG_CODE,attrs:{label:t.ORG_NAME,value:t.ORG_CODE}})})),1),a("el-select",{staticClass:"input",attrs:{size:"small",clearable:"",placeholder:"请选择供电所"},model:{value:t.queryForm.gds,callback:function(e){t.$set(t.queryForm,"gds",e)},expression:"queryForm.gds"}},t._l(t.gdsOptions,(function(t){return a("el-option",{key:t.ORG_CODE,attrs:{label:t.ORG_NAME,value:t.ORG_CODE}})})),1),a("el-date-picker",{staticClass:"input",attrs:{size:"small",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择时间"},model:{value:t.queryForm.time,callback:function(e){t.$set(t.queryForm,"time",e)},expression:"queryForm.time"}}),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:t.getHotWordData}},[t._v("查询")]),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:t.getExport}},[t._v("导出")])],1),a("div",{staticClass:"top content-border"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"chart-main",attrs:{id:"randomCircle"}},[t.hotWordRes?a("wordCloud",{attrs:{wordCloudData:t.hotWordData,name:"工单热点分布"},on:{setOption:t.setOption}}):t._e()],1)])]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"content"},[a("el-table",{staticClass:"content-table",attrs:{border:"",height:350,data:t.tableData,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"70"}}),a("el-table-column",{attrs:{prop:"gddwbqmc",label:"供电单位标签名称"}}),a("el-table-column",{attrs:{prop:"hdmc",label:"推荐营销活动名称"}}),a("el-table-column",{attrs:{prop:"hdyxq",label:"营销活动有效期"}}),a("el-table-column",{attrs:{prop:"updateTime",label:"数据更新时间"}}),a("el-table-column",{attrs:{align:"center",width:"200",label:"选择营销活动"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-checkbox",{attrs:{disabled:e.row.flagDisabled},on:{change:function(a){return t.flagBChange(e.row)}},model:{value:e.row.flagB,callback:function(a){t.$set(e.row,"flagB",a)},expression:"scope.row.flagB"}})]}}])})],1),a("div",{staticClass:"content-page"},[a("el-pagination",{attrs:{"current-page":this.queryForm.current,"page-sizes":[10,20,30,40],"page-size":this.queryForm.size,layout:"total, sizes, prev, pager, next, jumper",total:this.queryForm.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-title"},[a("div",{staticClass:"content-title-left"},[a("span",{staticClass:"block"}),a("span",[t._v("工单热点分布")])])])}],r=(a("ac6a"),a("2909")),i=a("6ed3"),s=a("80f2"),l=a("694d"),c=a("db49"),u={components:{wordCloud:l["a"]},name:"panoramicAnalysis",mixins:[i["a"],s["a"]],data:function(){return{dsjOptions:[],xqjOptions:[],gdsOptions:[],queryForm:{dsj:"",xqj:"",gds:"",time:"",current:1,size:10,total:0},hotWordData:{},hotWordRes:!1,tableData:[],setOptionData:{}}},mounted:function(){var t=this;this.getAreaCode(),this.getTableData(),window.addEventListener("resize",(function(){t.setOptionData["工单热点分布"]&&t.setOptionData["工单热点分布"].resize()})),this.hotPointDistribution({gddwbm:"03081032",rq:"2021-06-18"}).then((function(e){console.log(e,"hotWordDistribution"),e&&(t.hotWordData=e.map((function(t){return{name:t.rdmc,valueShow:t.sql}})),t.hotWordRes=!0)}))},methods:{getExport:function(){window.location.href=c["c"]+"/gddwztxx/exportHotPointDistribution?gddwbm="+this.queryForm.gds+"&rq="+this.queryForm.time},setOption:function(t,e){this.setOptionData[t]=e},tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===0?"success-row":""},dsjChange:function(){this.queryForm.gds="",this.gdsOptions=[],this.queryForm.xqj="",this.xqjOptions=[],this.getQxjPowerAreaCode()},qxjChange:function(){this.queryForm.gdj="",this.gdsOptions=[],this.getGdsPowerAreaCode()},handleSizeChange:function(t){this.queryForm.size=t,this.getTableData()},handleCurrentChange:function(t){this.queryForm.current=t,this.getTableData()},flagBChange:function(t){var e=this;this.$confirm("是否新启用销活动?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a=Object(r["a"])(e.tableData);e.tableData=[],e.tableData=Object(r["a"])(a),e.addActivityConfig({activityId:t.activityId,activityName:t.hdmc}).then((function(t){e.$message.success("启用营销活动成功"),e.getTableData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getAreaCode:function(){var t=this;this.getPowerAreaCode({orgLev:"2"}).then((function(e){t.dsjOptions=e}))},getQxjPowerAreaCode:function(){var t=this;this.getPowerAreaCode({orgLev:"3",orgCode:this.queryForm.dsj}).then((function(e){t.xqjOptions=e}))},getGdsPowerAreaCode:function(){var t=this;this.getPowerAreaCode({orgLev:"4",orgCode:this.queryForm.xqj}).then((function(e){t.gdsOptions=e}))},getHotWordData:function(){var t=this;this.hotWordRes=!1,this.queryForm.gds?this.hotPointDistribution({gddwbm:this.queryForm.gds,rq:this.queryForm.time}).then((function(e){console.log(e,"hotWordDistribution"),e&&(t.hotWordData=e.map((function(t){return{name:t.rdmc,valueShow:t.sql}})),t.hotWordRes=!0)})):this.$message.warning("请选择供电所")},getTableData:function(){var t=this;this.tableData=[],this.powerTagAndActivityList(this.queryForm).then((function(e){t.tableData=Object(r["a"])(e.records),t.tableData.forEach((function(t){t.flagB="1"===t.flag,t.flagDisabled="1"===t.flag})),t.queryForm.total=e.total}))}}},d=u,h=(a("9a75"),a("2877")),f=Object(h["a"])(d,o,n,!1,null,"72eaa120",null);e["default"]=f.exports},"700d":function(t,e,a){},"80f2":function(t,e,a){"use strict";var o=a("db49"),n=a("ab3e"),r=o["c"]+"/residentialElectricity/getPowerAreaCode";function i(t){return Object(n["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:r})}var s=o["b"]+"/tag/listTagTreeAndTagobj";function l(t){return Object(n["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:s})}var c=o["c"]+"/cptYxhdYdkh/getXl";function u(t){return Object(n["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:c})}e["a"]={data:function(){return{commonApi:{list:[],page:null,limit:null,total:0,model:null}}},methods:{getPowerAreaCode:function(t){return i(t).then((function(t){return t}))},getBdaTagList:function(t){return l(t).then((function(t){return t}))},getXl:function(t){return u(t).then((function(t){return t}))}}}},"9a75":function(t,e,a){"use strict";var o=a("700d"),n=a.n(o);n.a},a97d:function(t,e,a){"use strict";var o=a("b1d8"),n=a.n(o);n.a},b1d8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-64c3ea46.503a3961.js.map