(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c24ea2c"],{"3a6e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skillConfig"},[n("div",{staticClass:"title"},[t._v("技能组配置")]),n("div",{staticClass:"nav"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addSkillListOpen}},[t._v("新增")]),n("span",[t._v("技能组名称：")]),n("el-input",{staticClass:"inputC",attrs:{placeholder:"请输入技能组名称",size:"mini",clearable:""},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}}),n("span",[t._v("创建人：")]),n("el-input",{staticClass:"inputC",attrs:{placeholder:"请输入创建人",size:"mini",clearable:""},model:{value:t.creatorName,callback:function(e){t.creatorName=e},expression:"creatorName"}}),n("span",[t._v("创建时间：")]),n("el-date-picker",{staticClass:"inputC",attrs:{size:"mini",type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.ctime,callback:function(e){t.ctime=e},expression:"ctime"}}),n("span",[t._v("修改时间：")]),n("el-date-picker",{staticClass:"inputC",attrs:{size:"mini",type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.utime,callback:function(e){t.utime=e},expression:"utime"}}),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.getSkillList}},[t._v("搜索")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.importJnCongigExcel}},[t._v("导出技能组配置")])],1),n("div",{staticClass:"table-con"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData,"row-class-name":t.tableRowClassName}},[n("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"70"}}),n("el-table-column",{attrs:{prop:"skillGroup",label:"技能组名称"}}),n("el-table-column",{attrs:{prop:"creatorName",label:"创建人"}}),n("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),n("el-table-column",{attrs:{prop:"updateName",label:"修改人"}}),n("el-table-column",{attrs:{prop:"updateTime",label:"修改时间"}}),n("el-table-column",{attrs:{align:"center",width:"120",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{type:"primary"},on:{click:function(n){return t.editOpen(e.row)}}},[t._v("修改")]),n("el-divider",{attrs:{direction:"vertical"}}),n("el-link",{attrs:{type:"danger"},on:{click:function(n){return t.deleteSkillList(e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":t.pages.pageNo,"page-sizes":[8,10,20,50],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pages.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),n("el-dialog",{attrs:{title:t.dialogTit,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticStyle:{padding:"10px 20px"}},[n("span",[t._v("技能组名称：")]),n("el-input",{staticClass:"inputC",attrs:{placeholder:"请输入技能组名称",size:"mini",clearable:""},model:{value:t.skillName,callback:function(e){t.skillName=e},expression:"skillName"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.editSkillList}},[t._v("确 定")])],1)])],1)},a=[],l=n("4251"),o=n("db49"),r={name:"skillConfig",mixins:[l["a"]],components:{},props:{},data:function(){return{selectValue:"",pages:{pageNo:1,pageSize:10,total:0},tableData:[],dialogVisible:!1,dialogTit:"新增",skillName:"",id:"",loading:!1,utime:"",ctime:"",creatorName:""}},mounted:function(){this.getSkillList()},methods:{importJnCongigExcel:function(){window.location.href=o["c"]+"/cpt-skillgroup-config/exportSkillGroup?creatorName="+this.creatorName+"&ctime="+this.ctime+"&utime="+this.utime+"&skillGroup="+this.selectValue},handleSizeChange:function(t){this.pages.pageSize=t,this.getSkillList(),console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.pages.pageNo=t,this.getSkillList(),console.log("当前页: ".concat(t))},tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===0?"success-row":""},getSkillList:function(){var t=this;this.loading=!0,this.getSkillGroupData({creatorName:this.creatorName,ctime:this.ctime,utime:this.utime,skillGroup:this.selectValue,current:this.pages.pageNo,size:this.pages.pageSize}).then((function(e){t.loading=!1,t.tableData=e.list,t.pages.total=e.total})).catch((function(t){window.console.log(t)}))},addSkillListOpen:function(){this.dialogTit="新增",this.skillName="",this.dialogVisible=!0},editOpen:function(t){this.dialogTit="修改",this.skillName=t.skillGroup,this.dialogVisible=!0,this.id=t.id},editSkillList:function(){var t=this;"新增"===this.dialogTit?this.addSkillGroup({skillGroup:this.skillName}).then((function(){t.getSkillList(),t.dialogVisible=!1})).catch((function(t){window.console.log(t)})):this.updateSkillGroup({skillGroup:this.skillName,id:this.id}).then((function(){t.getSkillList(),t.dialogVisible=!1})).catch((function(t){window.console.log(t)}))},deleteSkillList:function(t){var e=this;this.deleteSkillGroup({id:t.id}).then((function(){e.getSkillList()})).catch((function(t){window.console.log(t)}))}}},s=r,u=(n("a0eb"),n("2877")),c=Object(u["a"])(s,i,a,!1,null,"9b5c49f6",null);e["default"]=c.exports},4251:function(t,e,n){"use strict";var i=n("db49"),a=n("ab3e"),l=i["c"]+"/leanSeatingSkillController/selectSkillGroupSeatDistribution";function o(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:l})}var r=i["c"]+"/leanSeatingSkillController/selectSeatDetails";function s(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:r})}var u=i["c"]+"/leanSeatingSkillController/selectSkillQueue";function c(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:u})}var p=i["c"]+"/seatPreciseMatchStrategyController/selectResultSkillGroupSeatDistribution";function d(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:p})}var h=i["c"]+"/seatPreciseMatchStrategyController/selectSkillGroupSeatDistribution";function f(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:h})}var g=i["c"]+"/leanSeatingSkillController/seatSubject";function k(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:g})}var m=i["c"]+"/leanSeatingSkillController/userPrincipalLabel";function b(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:m})}var S=i["c"]+"/leanSeatingSkillController/seatUserDisplay";function v(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:S})}var C=i["c"]+"/cpt-skillgroup-config/getSkillGroupData";function y(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:C})}var j=i["c"]+"/cpt-skillgroup-config/addSkillGroup";function G(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:j})}var T=i["c"]+"/cpt-skillgroup-config/updateSkillGroup";function w(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:T})}var O=i["c"]+"/cpt-skillgroup-config/deleteSkillGroup";function N(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:O})}var D=i["c"]+"/cpt-skillgroup-tag/getSkillGroupTagData";function z(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:D})}var L=i["c"]+"/cpt-skillgroup-tag/addSkillGroupTag";function x(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:L})}var _=i["c"]+"/cpt-skillgroup-tag/updateSkillGroupTag";function V(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:_})}var I=i["c"]+"/cpt-skillgroup-tag/deleteSkillGroup";function M(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:I})}var J=i["c"]+"/cpt-skillgroup-tag/modifySort";function P(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:J})}var R=i["c"]+"/cpt-skillgroup-tag/modifyIsUse";function U(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:R})}var B=i["b"]+"/tag/listTagTreeAndTagobj";function E(t){return Object(a["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:B})}var Q=i["c"]+"/skillGroupInvokeCount/getSkillGroupInvokeDetails";function A(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Q})}var $=i["c"]+"/skillGroupInvokeCount/getSkillGroupInvokeStatistics";function q(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:$})}var F=i["c"]+"/skillGroupInvokeCount/getSkillGroupInvokeCount";function H(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:F})}var K=i["c"]+"/cpt-skillgroup-config/selectSkillGroupByDel";function W(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:K})}e["a"]={data:function(){return{seatSkills:{list:[],page:null,limit:null,total:0,model:null}}},methods:{skillSelectSkillGroupSeatDistribution:function(t){return o(t).then((function(t){return t}))},selectSeatDetails:function(t){return s(t).then((function(t){return t}))},selectSkillQueue:function(t){return c(t).then((function(t){return t}))},selectResultSkillGroupSeatDistribution:function(t){return d(t).then((function(t){return t}))},selectSkillGroupSeatDistribution:function(t){return f(t).then((function(t){return t}))},seatSubject:function(t){return k(t).then((function(t){return t}))},userPrincipalLabel:function(t){return b(t).then((function(t){return t}))},seatUserDisplay:function(t){return v(t).then((function(t){return t}))},getSkillGroupData:function(t){return y(t).then((function(t){return t}))},addSkillGroup:function(t){return G(t).then((function(t){return t}))},updateSkillGroup:function(t){return w(t).then((function(t){return t}))},deleteSkillGroup:function(t){return N(t).then((function(t){return t}))},getSkillGroupTagData:function(t){return z(t).then((function(t){return t}))},addSkillGroupTag:function(t){return x(t).then((function(t){return t}))},updateSkillGroupTag:function(t){return V(t).then((function(t){return t}))},deleteSkillGroupTag:function(t){return M(t).then((function(t){return t}))},modifySort:function(t){return P(t).then((function(t){return t}))},modifyIsUse:function(t){return U(t).then((function(t){return t}))},getBdaTagList:function(t){return E(t).then((function(t){return t}))},getIntentionInvokeDetails:function(t){return A(t).then((function(t){return t}))},getSkillGroupInvokeStatistics:function(t){return q(t).then((function(t){return t}))},getSkillGroupInvokeCount:function(t){return H(t).then((function(t){return t}))},selectSkillGroupByDel:function(t){return W(t).then((function(t){return t}))}}}},"6f8e":function(t,e,n){},a0eb:function(t,e,n){"use strict";var i=n("6f8e"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-0c24ea2c.dcea5d11.js.map