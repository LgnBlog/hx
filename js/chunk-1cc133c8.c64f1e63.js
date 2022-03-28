(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc133c8"],{"06e6":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"electCalendar"},[a("div",{staticClass:"header"},[a("el-radio-group",{staticClass:"radio",on:{change:t.electTypeChange},model:{value:t.electType,callback:function(e){t.electType=e},expression:"electType"}},[a("el-radio",{attrs:{label:"1"}},[t._v("用户")]),a("el-radio",{attrs:{label:"2"}},[t._v("计量点")])],1),"2"===t.electType?a("div",{staticClass:"header-right"},[a("el-select",{staticClass:"select",attrs:{size:"mini",placeholder:"请选择"},on:{change:t.measuringPointChange},model:{value:t.measuringPoint,callback:function(e){t.measuringPoint=e},expression:"measuringPoint"}},t._l(t.measuringPointOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("div",{staticClass:"unit"},[t._v("单位：度")])],1):a("div",{staticClass:"header-right"},[a("el-input",{staticClass:"input",attrs:{size:"mini",placeholder:"请输入用户编号"},model:{value:t.yhbh,callback:function(e){t.yhbh=e},expression:"yhbh"}}),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.yhbhSearch}},[t._v("查询")])],1)],1),t.calendarShow?a("el-calendar",{staticClass:"calendar",scopedSlots:t._u([{key:"dateCell",fn:function(e){var l=e.date,n=e.data;return[a("div",{staticClass:"calendar-item"},[a("div",{staticClass:"calendar-day"},[t._v(t._s(n.day.split("-").slice(2).join("-")))]),t._l(t.calendarData,(function(e,i){return a("div",{key:i,on:{click:function(e){return t.clickItem(l,n)}}},[e.date===n.day?a("div",{staticClass:"calendar-value",style:{background:e.color}},[a("el-tooltip",{staticClass:"calendar-tooltip",attrs:{effect:"light",content:e.weather,placement:"top"}},[a("div",[t._v(t._s(e.value))])])],1):a("div")])}))],2)]}}],null,!1,2096211177),model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("template",{slot:"header"},[t._v("111")])],2):t._e(),a("div",{staticClass:"footer"},[a("div",{staticClass:"current footer-item"},[a("span",[t._v("当前计量点累计电量：")]),a("span",[t._v(t._s(t.currentElectric))])]),a("div",{staticClass:"total footer-item"},[a("span",[t._v("总累计电量：")]),a("span",[t._v(t._s(t.totalElectric))])]),a("div",{staticClass:"button",on:{click:t.exportExcel}},[t._v("导出excel")])])],1)},n=[],i=(a("ac6a"),a("89e8")),c=a("db49"),o={name:"electCalendar",mixins:[i["a"]],data:function(){return{electType:"1",yhbh:"",measuringPoint:"",measuringPointOptions:[],time:null,calendarData:[],calendarShow:!0,currentElectric:0,totalElectric:0,allElectric:[]}},components:{},watch:{time:{handler:function(t){window.console.log(t);var e="";e=t.getMonth()<10?"0"+(t.getMonth()+1):t.getMonth()+1,window.console.log(t.getFullYear()+"-"+e),this.setAllElectric(t.getFullYear()+"-"+e)},deep:!0,immediate:!0}},mounted:function(){var t=this;this.$nextTick((function(){var e=document.querySelector(".el-calendar__button-group .el-button-group>button:nth-child(1)");e.addEventListener("click",(function(){console.log("上个月")}));var a=document.querySelector(".el-calendar__button-group .el-button-group>button:nth-child(2)");a.addEventListener("click",(function(){console.log("今天")}));var l=document.querySelector(".el-calendar__button-group .el-button-group>button:nth-child(3)");l.addEventListener("click",(function(){console.log("下个月"),console.log(t.time,"下个月")}))}))},methods:{clickItem:function(t,e){},setAllElectric:function(t){this.currentElectric="",this.totalElectric="";for(var e=0;e<this.allElectric.length;e++)"jld"===this.allElectric[e].type&&this.allElectric[e].month===t&&(this.currentElectric=this.allElectric[e].elec),"yhbh"===this.allElectric[e].type&&this.allElectric[e].month===t&&(this.totalElectric=this.allElectric[e].elec)},electTypeChange:function(t){this.measuringPoint="",this.measuringPointOptions=[],this.currentElectric="",this.totalElectric="",this.calendarData=[],"1"===t?this.yhbhSearch():"2"===t&&this.getMeasuringPointOptions()},dealData:function(t){this.calendarData.forEach((function(t){var e=parseFloat(t.value);e>0&&e<=5?t.color="#CAF982":e>5&&e<=15?t.color="#FFFF80":e>15&&e<=25?t.color="#FBB48D":e>25&&(t.color="#F54F23")}))},exportExcel:function(){"1"===this.electType?window.location.href=c["f"]+"/elecCalendar/exportData?yhbh="+this.yhbh:window.location.href=c["f"]+"/elecCalendar/exportData?jldbh="+this.measuringPoint},yhbhSearch:function(){var t={yhbh:this.yhbh};this.getCalendarData(t)},measuringPointChange:function(){var t={jldbh:this.measuringPoint};this.getCalendarData(t)},getMeasuringPointOptions:function(){var t=this;this.getAllJlPoint({}).then((function(e){var a=[];if(e&&0!==e.length){var l=e;l.forEach((function(t){a.push({label:t,value:t})})),t.measuringPointOptions=a,window.console.log(t.measuringPointOptions,"kkkk")}}))},getCalendarData:function(t){var e=this;this.calendarShow=!1,this.getData({yhbh:t.yhbh,jldbh:t.jldbh}).then((function(t){t.detail.forEach((function(t){t.color=""})),e.calendarData=t.detail,e.allElectric=t.totalElec,e.time=new Date,e.dealData(),e.calendarShow=!0}))}}},r=o,s=(a("e23a"),a("2877")),h=Object(s["a"])(r,l,n,!1,null,null,null);e["default"]=h.exports},"7afa":function(t,e,a){},e23a:function(t,e,a){"use strict";var l=a("7afa"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-1cc133c8.c64f1e63.js.map