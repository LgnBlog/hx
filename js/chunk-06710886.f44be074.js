(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06710886"],{2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return r(t)}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){return a(t)||o(t)||c(t)||u()}n.d(e,"a",(function(){return i}))},c286:function(t,e,n){"use strict";var r=n("db49"),a=n("ab3e"),o=r["c"]+"/recommendTaskManage/selectDirectoryNavigation";function c(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:o})}var u=r["c"]+"/recommendTaskManage/insertDirectoryNavigation";function i(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:u})}var s=r["c"]+"/recommendTaskManage/updateDirectoryNavigation";function p(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:s})}var d=r["c"]+"/recommendTaskManage/deleteDirectoryNavigation";function f(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:d})}var l=r["c"]+"/recommendTaskManage/selectRecommendGenerateTaskList";function h(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:l})}var m=r["c"]+"/blackList/filterHistoryForSelect";function T(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:m})}var j=r["c"]+"/recommendTaskManage/deleteRecommendGenerateTask";function k(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:j})}var y=r["c"]+"/recommendTaskManage/insertRecommendGenerateTask";function v(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:y})}var b=r["c"]+"/recommendTaskManage/updateRecommendGenerateTask";function g(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:b})}var C=r["c"]+"/recommendTaskManage/selectRecommendGenerateTaskDetail";function O(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:C})}var S=r["c"]+"/recommendTaskManage/selectSubordinateDirectory";function D(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:S})}var M=r["c"]+"/recommendTaskManage/selectTargetAndSecSubject";function R(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:M})}var A=r["c"]+"/recommendTaskManage/selectTargetSubjectDesc";function E(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:A})}var w=r["c"]+"/recommendTaskManage/selectSecSubjectDesc";function x(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:w})}var G=r["c"]+"/approveAndExecuteTasks/approvalExecutionList";function L(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:G})}var N=r["c"]+"/recommendTaskManage/selectTaskDetail";function V(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:N})}var I=r["c"]+"/approveAndExecuteTasks/approvalThrough";function U(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:I})}var F=r["c"]+"/taskEntryAndDisplay/taskExecutionList";function H(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:F})}var J=r["c"]+"/taskMonitorAndEvaluation/taskMonitorList";function P(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:J})}var $=r["c"]+"/taskExecute/runTask";function q(t){return Object(a["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:$})}var z=r["c"]+"/cptTaskExecuteMonitorController/getTaskExecuteMonitor";function B(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:z})}var K=r["c"]+"/cptTaskVerificationController/getTaskVerification";function Q(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:K})}var W=r["c"]+"/cptTaskVerificationController/saveTaskVerification";function X(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:W})}var Y=r["c"]+"/cptTaskVerificationController/getTaskDetailInfo";function Z(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:Y})}var _=r["c"]+"/recTaskResult/resultCrate";function tt(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:_})}var et=r["c"]+"/recTaskResult/resultPreview";function nt(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:et})}var rt=r["c"]+"/taskEntryAndDisplay/recommendationCorrelation";function at(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:rt})}var ot=r["c"]+"/cptTaskVerificationController/updateCheckState";function ct(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:ot})}var ut=r["c"]+"/recTaskResult/resultReadUpdate";function it(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:ut})}var st=r["c"]+"/recTaskResult/resultSupervision";function pt(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:st})}e["a"]={data:function(){return{recommendManagement:{list:[],page:null,limit:null,total:0,model:null}}},methods:{selectDirectoryNavigation:function(t){return c(t).then((function(t){return t}))},insertDirectoryNavigation:function(t){return i(t).then((function(t){return t}))},updateDirectoryNavigation:function(t){return p(t).then((function(t){return t}))},deleteDirectoryNavigation:function(t){return f(t).then((function(t){return t}))},selectRecommendGenerateTaskList:function(t){return h(t).then((function(t){return t}))},filterHistoryForSelect:function(t){return T(t).then((function(t){return t}))},deleteRecommendGenerateTask:function(t){return k(t).then((function(t){return t}))},insertRecommendGenerateTask:function(t){return v(t).then((function(t){return t}))},updateRecommendGenerateTask:function(t){return g(t).then((function(t){return t}))},selectRecommendGenerateTaskDetail:function(t){return O(t).then((function(t){return t}))},selectSubordinateDirectory:function(t){return D(t).then((function(t){return t}))},selectTargetAndSecSubject:function(t){return R(t).then((function(t){return t}))},selectTargetSubjectDesc:function(t){return E(t).then((function(t){return t}))},selectSecSubjectDesc:function(t){return x(t).then((function(t){return t}))},approvalExecutionList:function(t){return L(t).then((function(t){return t}))},selectTaskDetail:function(t){return V(t).then((function(t){return t}))},approvalThrough:function(t){return U(t).then((function(t){return t}))},taskExecutionList:function(t){return H(t).then((function(t){return t}))},taskMonitorList:function(t){return P(t).then((function(t){return t}))},runTask:function(t){return q(t).then((function(t){return t}))},getTaskExecuteMonitor:function(t){return B(t).then((function(t){return t}))},getTaskVerification:function(t){return Q(t).then((function(t){return t}))},saveTaskVerification:function(t){return X(t).then((function(t){return t}))},getTaskDetailInfo:function(t){return Z(t).then((function(t){return t}))},resultCrate:function(t){return tt(t).then((function(t){return t}))},resultPreview:function(t){return nt(t).then((function(t){return t}))},recommendationCorrelation:function(t){return at(t).then((function(t){return t}))},updateCheckState:function(t){return ct(t).then((function(t){return t}))},resultReadUpdate:function(t){return it(t).then((function(t){return t}))},resultSupervision:function(t){return pt(t).then((function(t){return t}))}}}}}]);
//# sourceMappingURL=chunk-06710886.f44be074.js.map