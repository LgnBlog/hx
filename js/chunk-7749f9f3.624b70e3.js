(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7749f9f3","chunk-471b3a43","chunk-474b2d11"],{"0016":function(e,t,a){},"0722":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskExecutionMonitoring"},[a("div",{staticClass:"right"},[a("div",{staticClass:"right-content"},[a("bdaTable",{staticClass:"content-table",attrs:{tableData:e.taskData,headerColor:e.taskHeaderColor,indexWidth:0,isPage:!0,pageConfig:e.pageConfig},on:{operate:e.taskOperate,changePage:e.changePage}})],1),e.resultDialogVisible?a("resultPreviewDialog",{attrs:{showData:e.resultDialogData,visible:e.resultDialogVisible,type:e.resultDialogType},on:{"update:visible":function(t){e.resultDialogVisible=t}}}):e._e()],1)])},r=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("2909")),n=a("ade3"),s=a("c286"),l=a("f9fe"),c=a("5d8d");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{bdaTable:l["a"],resultPreviewDialog:c["default"]},name:"taskExecutionMonitoring",mixins:[s["a"]],watch:{filterText:function(e){this.$refs.tree.filter(e)}},props:{menuType:{type:String,default:""}},data:function(){return{filterText:"",treeData:[],defaultProps:{children:"children",label:"label"},taskData:{},taskHeaderColor:"",queryForm:{current:1,size:10},pageConfig:{current:1,size:10,pageSizes:[10,20,30,40],layout:"prev, pager, next, sizes,jumper,total",total:0},resultDialogVisible:!1,resultDialogType:"",resultDialogData:[]}},mounted:function(){this.getTaskData()},methods:{nodeClick:function(e,t){console.log(e,t,"obj, node")},taskOperate:function(e,t){console.log(e,t),"executeResult"===e?(this.resultDialogType="executeResult",this.resultDialogData=t,this.resultDialogVisible=!0):(this.runExecute(t),this.resultDialogVisible=!1)},changePage:function(e){this.queryForm.size=e.size,this.queryForm.current=e.current,this.getTaskData()},filterNode:function(e,t){return console.log(e,t,"value, data"),!e||-1!==t.label.indexOf(e)},getTaskData:function(){var e=this;this.taskHeaderColor="#1899fa";var t=[{prop:"relationNumber",label:"关系编号"},{prop:"relationName",label:"关联关系名称"},{prop:"descibe",label:"关联关系描述"},{prop:"updateCycle",label:"更新周期"},{prop:"createTime",label:"创建时间"},{prop:"updateTime",label:"更新时间"},{prop:"executeStartTime",label:"执行开始时间"},{prop:"executeEndTime",label:"执行完成时间"},{prop:"state",label:"执行状态",width:"100px"},{prop:"Operate",label:"操作",align:"center",width:"200px",type:[{name:"立即执行",action:"execute"},{name:"执行结果查看",action:"executeResult"}]}];this.getTaskExecuteMonitor(p({menuType:this.menuType},this.queryForm)).then((function(a){e.pageConfig.total=a.total,e.pageConfig.size=e.queryForm.size,e.pageConfig.current=e.queryForm.current,e.taskData={tableData:Object(o["a"])(a.list),columnNameData:t}}))},runExecute:function(e){var t=this;this.runTask({relationNumber:e.relationNumber}).then((function(e){t.$message.success("正在执行中")}))}}},g=d,f=(a("ffe4"),a("2877")),b=Object(f["a"])(g,i,r,!1,null,"e6d5fb56",null);t["default"]=b.exports},"1f84":function(e,t,a){},"20b2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskExecutionSupervisionEvaluation"},[a("div",{staticClass:"content"},[a("bdaTable",{staticClass:"content-table",attrs:{tableData:e.taskData,headerColor:e.taskHeaderColor,isPage:!0,pageConfig:e.pageConfig},on:{operate:e.taskOperate,changePage:e.changePage}})],1),e.resultDialogVisible?a("resultPreviewDialog",{attrs:{visible:e.resultDialogVisible,showData:e.resultDialogData,type:e.resultDialogType},on:{"update:visible":function(t){e.resultDialogVisible=t}}}):e._e()],1)},r=[],o=(a("8e6e"),a("456d"),a("7f7f"),a("2909")),n=(a("ac6a"),a("ade3")),s=a("c286"),l=a("f9fe"),c=a("5d8d");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{bdaTable:l["a"],resultPreviewDialog:c["default"]},name:"taskExecutionSupervisionEvaluation",mixins:[s["a"]],watch:{filterText:function(e){this.$refs.tree.filter(e)}},props:{menuType:{type:String,default:""}},data:function(){return{taskData:{},taskRes:!1,taskHeaderColor:"",queryForm:{current:1,size:10,total:0},pageConfig:{current:1,size:10,pageSizes:[10,20,30,40],layout:"prev, pager, next, sizes,jumper,total",total:0},resultDialogVisible:!1,resultDialogType:"",resultDialogData:[],exeTypeOptions:[{name:"手工执行",value:"0"},{name:"自动执行",value:"1"}]}},mounted:function(){this.getTaskData()},methods:{taskOperate:function(e,t){console.log(e,t),"executeSupervision"===e?(this.resultDialogType="executeSupervision",this.resultDialogData=t,this.resultDialogVisible=!0):this.resultDialogVisible=!1},taskDialogClose:function(){this.taskDialogVisible=!1},submitApproval:function(){this.taskDialogVisible=!1},changePage:function(e){this.queryForm.size=e.size,this.queryForm.current=e.current,this.getTaskData()},getTaskData:function(){var e=this;this.taskHeaderColor="#1899fa";var t=[{prop:"relationName",label:"关联关系名称"},{prop:"descibe",label:"关联关系描述"},{prop:"exeTypeName",label:"执行方式"},{prop:"exeChannel",label:"执行渠道"},{prop:"exeTime",label:"执行完成时间"},{prop:"Operate",label:"操作",align:"center",width:"310px",type:[{name:"执行结果监督",action:"executeSupervision"}]}];this.taskMonitorList(p(p({},this.queryForm),{},{menuType:this.menuType})).then((function(a){e.pageConfig.total=a.total,e.pageConfig.size=e.queryForm.size,e.pageConfig.current=e.queryForm.current,a.records.forEach((function(t){return t.exeTypeName=e.translate(t.exeType,e.exeTypeOptions)})),e.taskData={tableData:Object(o["a"])(a.records),columnNameData:t}})).catch((function(a){a&&(e.taskData={tableData:[],columnNameData:t})}))},translate:function(e,t){var a="";return t.forEach((function(t){t.value===e&&(a=t.name)})),a}}},g=d,f=(a("b467"),a("2877")),b=Object(f["a"])(g,i,r,!1,null,"d1c64b10",null);t["default"]=b.exports},"35a9":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auditManagement"},[a("div",{staticClass:"content"},[a("bdaTable",{staticClass:"content-table",attrs:{tableData:e.taskData,headerColor:e.taskHeaderColor,indexWidth:0,isPage:!0,pageConfig:e.pageConfig},on:{operate:e.taskOperate,changePage:e.changePage}})],1),e.resultDialogVisible?a("resultPreviewDialog",{attrs:{visible:e.resultDialogVisible,type:e.resultDialogType,isNeedConfirm:e.isNeedConfirm,showData:e.resultDialogData},on:{"update:visible":function(t){e.resultDialogVisible=t}}}):e._e(),a("el-dialog",{staticClass:"task-dialog",attrs:{title:"提示",visible:e.taskDialogVisible,"before-close":e.taskDialogClose,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.taskDialogVisible=t}}},[a("div",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"header-text"},[e._v(e._s("任务信息"))])]),a("div",{staticClass:"dialog-content"},[a("el-form",{staticClass:"task-form",attrs:{model:e.taskForm,"label-width":"160px"}},[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-form-item",{attrs:{label:"执行方式：",prop:"exeType"}},[a("el-select",{staticClass:"input",staticStyle:{width:"100%"},attrs:{size:"mini",disabled:e.executeCheck,placeholder:"请选择"},model:{value:e.taskForm.exeType,callback:function(t){e.$set(e.taskForm,"exeType",t)},expression:"taskForm.exeType"}},e._l(e.exeTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:18}},[a("el-form-item",{attrs:{label:"执行渠道：",prop:"exeChannel"}},[a("el-select",{staticClass:"input",staticStyle:{width:"100%"},attrs:{size:"mini",disabled:e.executeCheck,placeholder:"请选择"},model:{value:e.taskForm.exeChannel,callback:function(t){e.$set(e.taskForm,"exeChannel",t)},expression:"taskForm.exeChannel"}},e._l(e.exeChannelOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.executeCheck?a("el-button",{attrs:{size:"mini"},on:{click:e.taskDialogClose}},[e._v("\n        "+e._s("确定")+"\n      ")]):a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submitApproval}},[e._v("提交审批")])],1)])],1)},r=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("2909")),n=a("ade3"),s=a("c286"),l=a("f9fe"),c=a("5d8d");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{bdaTable:l["a"],resultPreviewDialog:c["default"]},name:"auditManagement",mixins:[s["a"]],watch:{filterText:function(e){this.$refs.tree.filter(e)}},props:{menuType:{type:String,default:""}},data:function(){return{taskData:{},taskHeaderColor:"",queryForm:{current:1,size:10,total:0},pageConfig:{current:1,size:10,pageSizes:[10,20,30,40],layout:"prev, pager, next, sizes,jumper,total",total:0},resultDialogVisible:!1,resultDialogType:"",resultDialogData:{},taskDialogVisible:!1,taskForm:{relationNumber:"",exeType:"",exeChannel:""},exeTypeOptions:[],exeChannelOptions:[],executeCheck:!1,isNeedConfirm:!1}},mounted:function(){this.getTaskData(),this.getexeTypeOptions(),this.getexeChannelOptions()},methods:{taskOperate:function(e,t){console.log(e,t),"histroy"===e&&(this.resultDialogType="histroy",this.resultDialogData=t,this.isNeedConfirm=!1,this.resultDialogVisible=!0),"executeResult"===e&&(this.resultDialogType="executeResult",this.resultDialogData=t,this.isNeedConfirm=!0,this.resultDialogVisible=!0),"set"===e&&(this.taskForm.relationNumber=t.relationNumber,this.executeCheck=!1,this.taskForm.exeType="",this.taskForm.exeChannel="",this.taskDialogVisible=!0),"detail"===e&&(this.executeCheck=!0,this.taskForm.relationNumber=t.relationNumber,this.checkTaskDetail())},taskDialogClose:function(){this.taskDialogVisible=!1},submitApproval:function(){var e=this;this.saveTaskVerification(this.taskForm).then((function(t){e.$message.success("提交成功"),e.taskDialogVisible=!1}))},checkTaskDetail:function(){var e=this;this.getTaskDetailInfo({relationNumber:this.taskForm.relationNumber}).then((function(t){e.taskForm.exeType=t.exeType,e.taskForm.exeChannel=t.exeChannel,e.taskDialogVisible=!0}))},changePage:function(e){this.queryForm.size=e.size,this.queryForm.current=e.current,this.getTaskData()},getTaskData:function(){var e=this;this.taskHeaderColor="#1899fa";var t=[{prop:"relationName",label:"关联关系名称"},{prop:"updateTime",label:"任务更新时间"},{prop:"Operate",label:"历史匹配查看",align:"center",width:"140px",type:[{name:"详细结果",action:"histroy"}]},{prop:"executeEndTime",label:"执行完成时间"},{prop:"checkState",label:"执行申请状态",width:"140px"},{prop:"Operate",label:"操作",align:"center",width:"310px",type:[{name:"查看执行结果",action:"executeResult"},{name:"任务执行配置",action:"set"},{name:"任务详细信息",action:"detail"}]}];this.getTaskVerification(p(p({},this.queryForm),{},{menuType:this.menuType})).then((function(a){e.pageConfig.total=a.total,e.pageConfig.size=e.queryForm.size,e.pageConfig.current=e.queryForm.current,e.taskData={tableData:Object(o["a"])(a.list),columnNameData:t}})).catch((function(a){a&&(e.taskData={tableData:[],columnNameData:t})}))},getexeTypeOptions:function(){this.exeTypeOptions=[{name:"自动执行",value:"1"},{name:"手工执行",value:"0"}]},getexeChannelOptions:function(){this.exeChannelOptions=[{name:"智能IVR",value:"智能IVR"},{name:"语音平台",value:"语音平台"},{name:"短信平台",value:"短信平台"}]}}},g=d,f=(a("b010"),a("2877")),b=Object(f["a"])(g,i,r,!1,null,"8bcf25f0",null);t["default"]=b.exports},"443d":function(e,t,a){},4866:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recommendManagement"},[a("div",{staticClass:"left-content"},e._l(e.menuData,(function(t,i){return a("div",{key:i,staticClass:"content-menu",class:e.active==="0"+(i+1)?"active":"",on:{click:function(t){return e.changeActive(i+1)}}},[e._v(e._s(t.name))])})),0),a("div",{staticClass:"right-content"},["01"===e.active?a("taskManagement",{attrs:{menuType:e.menuType}}):e._e(),"02"===e.active?a("taskExecutionMonitoring",{attrs:{menuType:e.menuType}}):e._e(),"03"===e.active?a("auditManagement",{attrs:{menuType:e.menuType}}):e._e(),"04"===e.active?a("approvalTask",{attrs:{menuType:e.menuType}}):e._e(),"05"===e.active?a("executionInformation",{attrs:{menuType:e.menuType}}):e._e(),"06"===e.active?a("taskExecutionSupervisionEvaluation",{attrs:{menuType:e.menuType}}):e._e()],1)])},r=[],o=(a("28a5"),a("b604")),n=a("20b2"),s=a("e2b1"),l=a("35a9"),c=a("b4a7"),u=a("0722"),p={components:{approvalTask:s["default"],auditManagement:l["default"],executionInformation:c["default"],taskExecutionMonitoring:u["default"],taskExecutionSupervisionEvaluation:n["default"],taskManagement:o["default"]},name:"recommendManagement",data:function(){return{active:"01",menuType:"",menuData:[{name:"推荐生成任务管理",value:"01"},{name:"推荐生成任务执行监控",value:"02"},{name:"推荐生成结果审核校验",value:"03"},{name:"审批执行任务",value:"04"},{name:"任务执行信息录入与展示",value:"05"},{name:"任务执行监督及评估页面",value:"06"}]}},created:function(){this.menuType=window.location.href.split("/")[window.location.href.split("/").length-1]},methods:{changeActive:function(e){this.active="0"+e}}},d=p,g=(a("aa9f"),a("2877")),f=Object(g["a"])(d,i,r,!1,null,"201f802c",null);t["default"]=f.exports},"5e25":function(e,t,a){},7100:function(e,t,a){},"763b":function(e,t,a){"use strict";var i=a("7100"),r=a.n(i);r.a},aa9f:function(e,t,a){"use strict";var i=a("dcf1"),r=a.n(i);r.a},ab0d:function(e,t,a){"use strict";var i=a("ad8c"),r=a.n(i);r.a},ad8c:function(e,t,a){},b010:function(e,t,a){"use strict";var i=a("c4f9"),r=a.n(i);r.a},b467:function(e,t,a){"use strict";var i=a("443d"),r=a.n(i);r.a},b4a7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"executionInformation"},[a("div",{staticClass:"content"},[a("bdaTable",{staticClass:"content-table",attrs:{tableData:e.taskData,headerColor:e.taskHeaderColor,isPage:!0,pageConfig:e.pageConfig},on:{operate:e.taskOperate,changePage:e.changePage}})],1),e.resultDialogVisible?a("resultPreviewDialog",{attrs:{visible:e.resultDialogVisible,showData:e.resultDialogData,type:e.resultDialogType,isSelect:e.isSelect},on:{"update:visible":function(t){e.resultDialogVisible=t}}}):e._e()],1)},r=[],o=(a("8e6e"),a("456d"),a("7f7f"),a("2909")),n=(a("ac6a"),a("ade3")),s=a("c286"),l=a("f9fe"),c=a("5d8d");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{bdaTable:l["a"],resultPreviewDialog:c["default"]},name:"executionInformation",mixins:[s["a"]],watch:{filterText:function(e){this.$refs.tree.filter(e)}},props:{menuType:{type:String,default:""}},data:function(){return{taskData:{},taskRes:!1,taskHeaderColor:"",queryForm:{current:1,size:10,total:0},pageConfig:{current:1,size:10,pageSizes:[10,20,30,40],layout:"prev, pager, next, sizes,jumper,total",total:0},isSelect:!1,resultDialogVisible:!1,resultDialogType:"",resultDialogData:{},exeTypeOptions:[{name:"手工执行",value:"0"},{name:"自动执行",value:"1"}]}},mounted:function(){this.getTaskData()},methods:{taskOperate:function(e,t){console.log(e,t),"executeResultShow"===e&&(this.isSelect=!1,this.resultDialogType="executeResultShow",this.resultDialogData=t,this.resultDialogVisible=!0),"executeEntry"===e&&(this.isSelect=!0,this.resultDialogType="executeEntry",this.resultDialogData=t,this.resultDialogVisible=!0)},taskDialogClose:function(){this.taskDialogVisible=!1},submitApproval:function(){this.taskDialogVisible=!1},changePage:function(e){this.queryForm.size=e.size,this.queryForm.current=e.current,this.getTaskData()},getTaskData:function(){var e=this;this.taskHeaderColor="#1899fa";var t=[{prop:"relationName",label:"关联关系名称"},{prop:"descibe",label:"关联关系描述"},{prop:"exeTypeName",label:"执行方式"},{prop:"exeChannel",label:"执行渠道"},{prop:"exeTime",label:"执行完成时间"},{prop:"Operate",label:"操作",align:"center",width:"310px",type:[{name:"执行结果查看",action:"executeResultShow",disabledField:"executeWay",disabledValue:["02"]},{name:"执行结果录入",action:"executeEntry",disabledField:"executeWay",disabledValue:["01"]}]}];this.taskExecutionList(p(p({},this.queryForm),{},{menuType:this.menuType})).then((function(a){e.pageConfig.total=a.total,e.pageConfig.size=e.queryForm.size,e.pageConfig.current=e.queryForm.current,a.records.forEach((function(t){return t.exeTypeName=e.translate(t.exeType,e.exeTypeOptions)})),e.taskData={tableData:Object(o["a"])(a.records),columnNameData:t}})).catch((function(a){a&&(e.taskData={tableData:[],columnNameData:t})}))},translate:function(e,t){var a="";return t.forEach((function(t){t.value===e&&(a=t.name)})),a}}},g=d,f=(a("ab0d"),a("2877")),b=Object(f["a"])(g,i,r,!1,null,"6af52d70",null);t["default"]=b.exports},b604:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskManagement"},[a("div",{staticClass:"right"},[a("div",{staticClass:"right-button"},[a("el-button",{attrs:{type:"primary"},on:{click:e.createTask}},[e._v("新增推荐生成任务")])],1),a("div",{staticClass:"right-content"},[a("bdaTable",{staticClass:"content-table",attrs:{tableData:e.taskData,headerColor:e.taskHeaderColor,indexWidth:0,isPage:!0,pageConfig:e.pageConfig},on:{operate:e.taskOperate,changePage:e.changePage}})],1),a("el-dialog",{staticClass:"addNew-dialog",attrs:{title:e.addNewDialogTitle,visible:e.addNewDialogVisible,width:"70%","before-close":e.addNewDialogClose,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.addNewDialogVisible=t}}},[a("span",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"header-text"},[e._v(e._s("新增"))])]),a("div",{staticClass:"dialog-content"},[a("el-form",{attrs:{"label-width":"120px"},model:{value:e.addNewForm,callback:function(t){e.addNewForm=t},expression:"addNewForm"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"目录编码："}},[a("el-input",{staticClass:"input",attrs:{size:"mini"},model:{value:e.addNewForm.directoryCode,callback:function(t){e.$set(e.addNewForm,"directoryCode",t)},expression:"addNewForm.directoryCode"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"目录级数："}},[a("el-input",{staticClass:"input",attrs:{size:"mini"},model:{value:e.addNewForm.directoryLevel,callback:function(t){e.$set(e.addNewForm,"directoryLevel",t)},expression:"addNewForm.directoryLevel"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"目录排序号："}},[a("el-input",{staticClass:"input",attrs:{size:"mini"},model:{value:e.addNewForm.directorySort,callback:function(t){e.$set(e.addNewForm,"directorySort",t)},expression:"addNewForm.directorySort"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"标签目录名称："}},[a("el-input",{staticClass:"input-row",attrs:{size:"mini"},model:{value:e.addNewForm.labelDirectoryName,callback:function(t){e.$set(e.addNewForm,"labelDirectoryName",t)},expression:"addNewForm.labelDirectoryName"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"目录描述："}},[a("el-input",{staticClass:"input-row",attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:e.addNewForm.directoryDescription,callback:function(t){e.$set(e.addNewForm,"directoryDescription",t)},expression:"addNewForm.directoryDescription"}})],1)],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addNewSubmit}},[e._v("提交")])],1)]),e.createTaskDialogVisible?a("operateDialog",{attrs:{visible:e.createTaskDialogVisible,showData:e.createTaskDialogData,type:e.createTaskDialogType},on:{"update:visible":function(t){e.createTaskDialogVisible=t},operateStauts:e.operateStauts}}):e._e()],1)])},r=[],o=(a("8e6e"),a("456d"),a("7f7f"),a("2909")),n=(a("ac6a"),a("ade3")),s=a("c286"),l=a("f9fe"),c=a("3479");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{bdaTable:l["a"],operateDialog:c["default"]},name:"taskManagement",mixins:[s["a"]],watch:{filterText:function(e){this.$refs.tree.filter(e)}},props:{menuType:{type:String,default:""}},data:function(){return{filterText:"",treeData:[],defaultProps:{children:"children",label:"label"},addNewDialogVisible:!1,addNewDialogTitle:"",addNewDialogStatus:"",addNewForm:{directoryCode:"",directoryLevel:"",directorySort:"",labelDirectoryName:"",directoryDescription:""},taskData:{},taskHeaderColor:"",queryForm:{current:1,size:10},pageConfig:{current:1,size:10,pageSizes:[10,20,30,40],layout:"prev, pager, next, sizes,jumper,total",total:0},createTaskDialogVisible:!1,createTaskDialogData:{},createTaskDialogType:"add",updateCycleOptions:[{name:"指定日期",value:"0"},{name:"日更新",value:"1"},{name:"周更新",value:"2"},{name:"月更新",value:"3"},{name:"年更新",value:"4"}]}},mounted:function(){this.getTreeData(),this.getTaskData()},methods:{nodeClick:function(e,t){console.log(e,t,"obj, node")},addNewDirectory:function(){this.addNewDialogTitle="新增目录",this.addNewDialogStatus="add",this.addNewDialogVisible=!0},editNewDirectory:function(e){e.currentTarget===e.target&&(this.addNewDialogTitle="编辑目录",this.addNewDialogStatus="edit",this.addNewDialogVisible=!0)},delNewDirectory:function(){},addNewSubmit:function(){},addNewDialogClose:function(){this.addNewDialogVisible=!1},operateStauts:function(){this.getTaskData()},changePage:function(e){this.queryForm.size=e.size,this.queryForm.current=e.current,this.getTaskData()},createTask:function(){this.createTaskDialogVisible=!0,this.createTaskDialogType="add"},taskOperate:function(e,t){console.log(e,t),this.createTaskDialogType=e,"edit"===e&&this.getTaskDetail(t),"detail"===e&&this.getTaskDetail(t),"delete"===e&&this.deleteTaskList(t)},deleteTaskList:function(e){var t=this;this.$confirm("是否删除该条数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonClass:"btnFalses",type:"warning"}).then((function(){t.deleteRecommendGenerateTask({relationNumber:e.relationNumber,tagId:e.tagId}).then((function(e){t.$message.success(e),t.queryForm.current=1,t.queryForm.size=10,t.getTaskData()}))})).catch((function(){}))},filterNode:function(e,t){return console.log(e,t,"value, data"),!e||-1!==t.label.indexOf(e)},getTreeData:function(){this.selectDirectoryNavigation({}).then((function(e){console.log(e,"selectDirectoryNavigation")})),this.treeData=[{id:1,label:"一级 1",icon:"el-icon-folder-opened",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",icon:"el-icon-folder-opened",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",icon:"el-icon-folder-opened",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}]},getTaskData:function(){var e=this;this.taskHeaderColor="#1899fa";var t=[{prop:"relationNumber",label:"关系编号",width:120},{prop:"relationName",label:"关联关系名称"},{prop:"descibe",label:"关联关系描述"},{prop:"updateCycleName",label:"更新周期"},{prop:"createTime",label:"创建时间"},{prop:"updateTime",label:"更新时间"},{prop:"exeTime",label:"执行时间"},{prop:"Operate",label:"操作",align:"center",type:[{name:"编辑",action:"edit"},{name:"详情",action:"detail"},{name:"删除",action:"delete"}]}];this.selectRecommendGenerateTaskList(p(p({},this.queryForm),{},{menuType:this.menuType})).then((function(a){e.pageConfig.total=a.total,e.pageConfig.size=e.queryForm.size,e.pageConfig.current=e.queryForm.current,a.records.forEach((function(t){return t.updateCycleName=e.translate(t.updateCycle,e.updateCycleOptions)})),e.taskData={tableData:Object(o["a"])(a.records),columnNameData:t}})).catch((function(a){a&&(e.taskData={tableData:[],columnNameData:t})}))},getTaskDetail:function(e){var t=this;this.selectRecommendGenerateTaskDetail({relationNumber:e.relationNumber,targetId:e.targetId,recId:e.recId,tagId:e.tagId}).then((function(e){t.createTaskDialogData=e,t.createTaskDialogVisible=!0}))},translate:function(e,t){var a="";return t.forEach((function(t){t.value===e&&(a=t.name)})),a}}},g=d,f=(a("ced0"),a("763b"),a("2877")),b=Object(f["a"])(g,i,r,!1,null,"3a9b97da",null);t["default"]=b.exports},c4f9:function(e,t,a){},ced0:function(e,t,a){"use strict";var i=a("0016"),r=a.n(i);r.a},dc4b:function(e,t,a){"use strict";var i=a("1f84"),r=a.n(i);r.a},dcf1:function(e,t,a){},e2b1:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"approvalTask"},[a("div",{staticClass:"content"},[a("bdaTable",{staticClass:"content-table",attrs:{tableData:e.taskData,headerColor:e.taskHeaderColor,isPage:!0,pageConfig:e.pageConfig},on:{operate:e.taskOperate,changePage:e.changePage}})],1),e.resultDialogVisible?a("operateDialog",{attrs:{visible:e.resultDialogVisible,showData:e.resultDialogData,type:e.resultDialogType},on:{"update:visible":function(t){e.resultDialogVisible=t}}}):e._e()],1)},r=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("2909")),n=a("ade3"),s=a("c286"),l=a("f9fe"),c=a("3479");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{bdaTable:l["a"],operateDialog:c["default"]},name:"approvalTask",mixins:[s["a"]],watch:{filterText:function(e){this.$refs.tree.filter(e)}},props:{menuType:{type:String,default:""}},data:function(){return{taskData:{},taskRes:!1,taskHeaderColor:"",queryForm:{relationNumber:"",current:1,size:10,total:0},pageConfig:{current:1,size:10,pageSizes:[10,20,30,40],layout:"prev, pager, next, sizes,jumper,total",total:0},resultDialogVisible:!1,resultDialogType:"",resultDialogData:{}}},mounted:function(){this.getTaskData()},methods:{taskOperate:function(e,t){console.log(e,t),this.queryForm.relationNumber=t.relationNumber,"approval"===e?this.getTaskDetailData(t):("approvalPass"===e&&this.approvalResult("1"),"approvalFail"===e&&this.approvalResult("2"),this.resultDialogVisible=!1)},approvalResult:function(e){var t=this;this.approvalThrough({relationNumber:this.queryForm.relationNumber,approvalState:e}).then((function(e){t.getTaskData()}))},taskDialogClose:function(){this.taskDialogVisible=!1},submitApproval:function(){this.taskDialogVisible=!1},changePage:function(e){this.queryForm.size=e.size,this.queryForm.current=e.current,this.getTaskData()},getTaskData:function(){var e=this;this.taskHeaderColor="#1899fa";var t=[{prop:"relationName",label:"关联关系名称"},{prop:"descibe",label:"关联关系描述"},{prop:"Operate",label:"任务结果",align:"center",width:"120px",type:[{name:"任务详细信息",action:"approval"}]},{prop:"exeTime",label:"执行完成时间"},{prop:"Operate",label:"操作",align:"center",width:"200px",type:[{name:"审批通过",action:"approvalPass"},{name:"审批不通过",action:"approvalFail"}]}];this.approvalExecutionList(p(p({},this.queryForm),{},{menuType:this.menuType})).then((function(a){e.pageConfig.total=a.total,e.pageConfig.size=e.queryForm.size,e.pageConfig.current=e.queryForm.current,e.taskData={tableData:Object(o["a"])(a.records),columnNameData:t},e.taskRes=!0})).catch((function(a){a&&(e.taskData={tableData:[],columnNameData:t})}))},getTaskDetailData:function(e){var t=this;console.log(e,"data"),this.selectTaskDetail({relationNumber:e.relationNumber,targetId:e.targetId,recId:e.recId,tagId:e.tagId}).then((function(e){t.resultDialogType="approval",t.resultDialogData=e,t.resultDialogVisible=!0}))}}},g=d,f=(a("dc4b"),a("2877")),b=Object(f["a"])(g,i,r,!1,null,"6994f682",null);t["default"]=b.exports},ffe4:function(e,t,a){"use strict";var i=a("5e25"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-7749f9f3.624b70e3.js.map