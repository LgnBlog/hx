(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-531f4943"],{"4ab8":function(t,n,e){"use strict";var i=e("db49"),o=e("ab3e"),a=i["c"]+"/leanSeatingSkillController/themeLabelDisplay";function r(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:a})}var l=i["c"]+"/leanSeatingSkillController/labelUserDisplay";function s(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:l})}var c=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/topicRecAssociation";function u(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:c})}var p=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/proportionDistributionServiceTypes";function d(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:p})}var h=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/hotWordDistribution";function f(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:h})}var g=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/generalSituation";function m(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:g})}var b=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/userChurnRate";function C(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:b})}var v=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/intentionRecommendationCalls";function I(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:v})}var y=i["c"]+"/intentionInvokeCount/getIntentionInvokeCount";function T(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:y})}var j=i["c"]+"/intentionConfigController/getIntentionData";function w(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:j})}var k=i["c"]+"/intentionConfigController/addIntention";function S(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:k})}var O=i["c"]+"/intentionConfigController/updateIntention";function V(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:O})}var A=i["c"]+"/intentionConfigController/deleteIntention";function R(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:A})}var z=i["c"]+"/cptIntentionTag/getIntentionTagData";function x(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:z})}var L=i["c"]+"/cptIntentionTag/addIntentionTag";function N(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:L})}var D=i["c"]+"/cptIntentionTag/updateIntentionTag";function _(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:D})}var U=i["c"]+"/cptIntentionTag/deleteIntentionTag";function B(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:U})}var J=i["c"]+"/cptIntentionTag/modifySort";function W(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:J})}var Y=i["c"]+"/cptIntentionTag/modifyIsUse";function E(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Y})}var $=i["c"]+"/intentionInvokeCount/getIntentionInvokeStatistics";function q(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:$})}var F=i["b"]+"/tag/listTagTreeAndTagobj";function G(t){return Object(o["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:F})}var H=i["c"]+"/internetChannelController/getIVRStable";function K(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:H})}var M=i["c"]+"/internetChannelController/getIVRTrend";function P(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:M})}var Q=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/topTenTheYear";function X(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Q})}var Z=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/businessSituation";function tt(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Z})}var nt=i["c"]+"/intelligentIVRAndCustomerIntentionAnalysisController/businessTypeSpread";function et(t){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:nt})}n["a"]={data:function(){return{userBehavior:{list:[],page:null,limit:null,total:0,model:null}}},methods:{themeLabelDisplay:function(t){return r(t).then((function(t){return t}))},labelUserDisplay:function(t){return s(t).then((function(t){return t}))},topicRecAssociation:function(t){return u(t).then((function(t){return t}))},proportionDistributionServiceTypes:function(t){return d(t).then((function(t){return t}))},hotWordDistribution:function(t){return f(t).then((function(t){return t}))},generalSituation:function(t){return m(t).then((function(t){return t}))},userChurnRate:function(t){return C(t).then((function(t){return t}))},intentionRecommendationCalls:function(t){return I(t).then((function(t){return t}))},getIntentionInvokeCount:function(t){return T(t).then((function(t){return t}))},getIntentionData:function(t){return w(t).then((function(t){return t}))},addIntention:function(t){return S(t).then((function(t){return t}))},updateIntention:function(t){return V(t).then((function(t){return t}))},deleteIntention:function(t){return R(t).then((function(t){return t}))},getIntentionTagData:function(t){return x(t).then((function(t){return t}))},addIntentionTag:function(t){return N(t).then((function(t){return t}))},updateIntentionTag:function(t){return _(t).then((function(t){return t}))},deleteIntentionTag:function(t){return B(t).then((function(t){return t}))},modifySort:function(t){return W(t).then((function(t){return t}))},modifyIsUse:function(t){return E(t).then((function(t){return t}))},getIntentionInvokeStatistics:function(t){return q(t).then((function(t){return t}))},getBdaTagList:function(t){return G(t).then((function(t){return t}))},getIvrStable:function(t){return K(t).then((function(t){return t}))},getIvrTrend:function(t){return P(t).then((function(t){return t}))},topTenTheYear:function(t){return X(t).then((function(t){return t}))},businessSituation:function(t){return tt(t).then((function(t){return t}))},businessTypeSpread:function(t){return et(t).then((function(t){return t}))}}}},9001:function(t,n,e){},a639:function(t,n,e){"use strict";var i=e("9001"),o=e.n(i);o.a},e217:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"intentionConfiguration"},[e("div",{staticClass:"title"},[t._v("意图配置")]),e("div",{staticClass:"nav"},[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addSkillListOpen}},[t._v("新增")]),e("span",[t._v("意图名称：")]),e("el-input",{staticClass:"inputC",attrs:{placeholder:"请输入意图名称",size:"mini",clearable:""},model:{value:t.selectValue,callback:function(n){t.selectValue=n},expression:"selectValue"}}),e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.getIntentionList}},[t._v("搜索")])],1),e("div",{staticClass:"table-con"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"70"}}),e("el-table-column",{attrs:{prop:"intention",label:"意图名称"}}),e("el-table-column",{attrs:{prop:"welcome","min-width":"300",label:"播放欢迎语内容"}}),e("el-table-column",{attrs:{prop:"creatorName",label:"创建人"}}),e("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e("el-table-column",{attrs:{prop:"updateName",label:"修改人"}}),e("el-table-column",{attrs:{prop:"updateTime",label:"修改时间"}}),e("el-table-column",{attrs:{align:"center",width:"120",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.editOpen(n.row)}}},[t._v("修改")]),e("el-divider",{attrs:{direction:"vertical"}}),e("el-link",{attrs:{type:"danger"},on:{click:function(e){return t.deleteSkillList(n.row)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.pages.pageNo,"page-sizes":[8,10,20,50],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pages.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),e("el-dialog",{attrs:{title:t.dialogTit,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(n){t.dialogVisible=n}}},[e("div",{staticStyle:{padding:"10px 20px"}},[e("span",[t._v("意图名称：")]),e("el-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{placeholder:"请输入意图名称",size:"mini",clearable:""},model:{value:t.skillName,callback:function(n){t.skillName=n},expression:"skillName"}})],1),e("div",{staticStyle:{padding:"10px 20px"}},[e("span",[t._v(" 欢 迎 语 ：")]),e("el-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入欢迎语",size:"mini",clearable:""},model:{value:t.welcome,callback:function(n){t.welcome=n},expression:"welcome"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"mini"},on:{click:function(n){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.editSkillList}},[t._v("确 定")])],1)])],1)},o=[],a=e("4ab8"),r={name:"intentionConfiguration",mixins:[a["a"]],components:{},props:{},data:function(){return{selectValue:"",pages:{pageNo:1,pageSize:10,total:0},tableData:[],dialogVisible:!1,dialogTit:"新增",skillName:"",welcome:"",id:"",loading:!1}},mounted:function(){this.getIntentionList()},methods:{handleSizeChange:function(t){this.pages.pageSize=t,this.getIntentionList(),console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.pages.pageNo=t,this.getIntentionList(),console.log("当前页: ".concat(t))},tableRowClassName:function(t){t.row;var n=t.rowIndex;return n%2===0?"success-row":""},getIntentionList:function(){var t=this;this.loading=!0,this.getIntentionData({intention:this.selectValue,welcome:"",current:this.pages.pageNo,size:this.pages.pageSize}).then((function(n){t.loading=!1,t.tableData=n.list,t.pages.total=n.total})).catch((function(t){window.console.log(t)}))},addSkillListOpen:function(){this.dialogTit="新增",this.skillName="",this.welcome="",this.dialogVisible=!0},editOpen:function(t){this.dialogTit="修改",this.skillName=t.intention,this.welcome=t.welcome,this.dialogVisible=!0,this.id=t.id},editSkillList:function(){var t=this;"新增"===this.dialogTit?this.addIntention({intention:this.skillName,welcome:this.welcome}).then((function(){t.getIntentionList(),t.dialogVisible=!1})).catch((function(t){window.console.log(t)})):this.updateIntention({id:this.id,intention:this.skillName,welcome:this.welcome}).then((function(){t.getIntentionList(),t.dialogVisible=!1})).catch((function(t){window.console.log(t)}))},deleteSkillList:function(t){var n=this;this.deleteIntention({id:t.id}).then((function(){n.getIntentionList()})).catch((function(t){window.console.log(t)}))}}},l=r,s=(e("a639"),e("2877")),c=Object(s["a"])(l,i,o,!1,null,"0c5e70b0",null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-531f4943.2540c02a.js.map