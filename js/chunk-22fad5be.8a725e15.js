(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22fad5be"],{2909:function(t,e,a){"use strict";function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,l=new Array(e);a<e;a++)l[a]=t[a];return l}function i(t){if(Array.isArray(t))return l(t)}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return l(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(t,e):void 0}}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||s(t)||r()}a.d(e,"a",(function(){return c}))},"5c3a":function(t,e,a){},"80f2":function(t,e,a){"use strict";var l=a("db49"),i=a("ab3e"),o=l["c"]+"/residentialElectricity/getPowerAreaCode";function s(t){return Object(i["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:o})}var r=l["b"]+"/tag/listTagTreeAndTagobj";function c(t){return Object(i["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:r})}var n=l["c"]+"/cptYxhdYdkh/getXl";function d(t){return Object(i["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:n})}e["a"]={data:function(){return{commonApi:{list:[],page:null,limit:null,total:0,model:null}}},methods:{getPowerAreaCode:function(t){return s(t).then((function(t){return t}))},getBdaTagList:function(t){return c(t).then((function(t){return t}))},getXl:function(t){return d(t).then((function(t){return t}))}}}},d0a6:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pelationshipBasicInformation"},[a("div",{staticClass:"header"},[a("el-select",{staticClass:"select",attrs:{size:"small",placeholder:"请选择供电单位标签",filterable:"",clearable:""},model:{value:t.queryForm.gddwbq,callback:function(e){t.$set(t.queryForm,"gddwbq",e)},expression:"queryForm.gddwbq"}},t._l(t.gddwbqOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-select",{staticClass:"select",attrs:{size:"small",placeholder:"请选择营销活动标签",filterable:"",clearable:""},model:{value:t.queryForm.yxhdbq,callback:function(e){t.$set(t.queryForm,"yxhdbq",e)},expression:"queryForm.yxhdbq"}},t._l(t.yxhdbqOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getTableData}},[t._v("查询")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.clickAdd}},[t._v("新增关联关系")])],1),a("div",{staticClass:"content"},[a("el-table",{staticClass:"content-table",attrs:{border:"",data:t.tableData,height:500,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"70"}}),a("el-table-column",{attrs:{prop:"ygid",label:"关系编号"}}),a("el-table-column",{attrs:{prop:"gddwbq",label:"供电单位标签"}}),a("el-table-column",{attrs:{prop:"yxhdbq",label:"营销活动标签"}}),a("el-table-column",{attrs:{prop:"zdtjjgs",label:"最大推荐结果数"}}),a("el-table-column",{attrs:{prop:"tjjgwkj",label:"推荐结果为空时"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("1"===e.row.tjjgwkj?"随机分配":"不处理"))]}}])}),a("el-table-column",{attrs:{prop:"cjsj",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"gxsj",label:"更新时间"}}),a("el-table-column",{attrs:{align:"center",width:"200",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"text",staticStyle:{"margin-right":"10px"},attrs:{type:"text"},on:{click:function(a){return t.clickEdit(e.row)}}},[t._v("编辑任务")]),a("span",{staticClass:"text",attrs:{type:"text"},on:{click:function(a){return t.clickCheck(e.row)}}},[t._v("查看推荐生成结果")])]}}])})],1),a("div",{staticClass:"content-page"},[a("el-pagination",{attrs:{"current-page":this.queryForm.current,"page-sizes":[10,20,30,40],"page-size":this.queryForm.size,layout:"total, sizes, prev, pager, next, jumper",total:this.queryForm.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),a("el-dialog",{staticClass:"add-dialog",attrs:{title:"新增关联关系",visible:t.addDialogVisible,width:"80%","before-close":t.addDialogClose,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.addDialogVisible=e}}},[a("span",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"header-text"},[t._v(t._s(t.addDialogTitle))])]),a("el-form",{ref:"addDialogForm",staticClass:"addDialog-form",attrs:{model:t.addDialogForm,"label-width":"130px"}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v(t._s("关联标签设置:"))]),a("div",{staticClass:"form-content"},[a("el-table",{staticClass:"content-table",attrs:{border:"",data:t.addDialogForm.labelList}},[a("el-table-column",{attrs:{prop:"tagTargetId",label:"供电单位的标签"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row?"":e.row)+"\n                "),a("el-select",{staticStyle:{width:"80%",padding:"10px"},attrs:{size:"mini",filterable:"",clearable:"",placeholder:"请选择"},model:{value:t.addDialogForm.tagSource,callback:function(e){t.$set(t.addDialogForm,"tagSource",e)},expression:"addDialogForm.tagSource"}},t._l(t.gddwbqOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}])}),a("el-table-column",{attrs:{prop:"tagRecId",label:"营销活动的标签"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row?"":e.row)+"\n                "),a("el-select",{staticStyle:{width:"80%",padding:"10px"},attrs:{size:"mini",filterable:"",clearable:"",placeholder:"请选择"},model:{value:t.addDialogForm.tagTarget,callback:function(e){t.$set(t.addDialogForm,"tagTarget",e)},expression:"addDialogForm.tagTarget"}},t._l(t.yxhdbqOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}])})],1)],1)]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v(t._s("推荐结果设置:"))]),a("div",{staticClass:"form-content",staticStyle:{border:"1px solid #ebeef5"}},[a("el-form-item",{attrs:{label:"最大推荐结果数:"}},[a("el-input-number",{staticClass:"input",staticStyle:{width:"200px"},attrs:{min:1,max:1e6,size:"mini"},model:{value:t.addDialogForm.recResultNumber,callback:function(e){t.$set(t.addDialogForm,"recResultNumber",e)},expression:"addDialogForm.recResultNumber"}})],1),a("el-form-item",{attrs:{label:"推荐结果为空时:"}},[a("el-radio-group",{model:{value:t.addDialogForm.recEmpty,callback:function(e){t.$set(t.addDialogForm,"recEmpty",e)},expression:"addDialogForm.recEmpty"}},[a("el-radio",{attrs:{label:"0"}},[t._v("不处理")]),a("el-radio",{attrs:{label:"1"}},[t._v("随机分配")])],1),a("span",{staticClass:"tip"},[t._v(t._s("（当目标对象无具体推荐对象时，给目标对象随机分配主体内的对象）"))])],1)],1)])]),a("div",{staticClass:"dialog-pagination"}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addDialogConfirm}},[t._v("确定")]),a("el-button",{attrs:{size:"small"},on:{click:t.addDialogClose}},[t._v("关闭")])],1)],1),a("el-dialog",{staticClass:"check-dialog",attrs:{title:"推荐生成结果",visible:t.checkDialogVisible,width:"80%","before-close":t.checkDialogClose,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.checkDialogVisible=e}}},[a("span",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"header-text"},[t._v(t._s("推荐生成结果"))])]),a("div",{staticClass:"query-group"},[a("div",{staticClass:"search"},[a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:"请输入供电单位名称"},model:{value:t.checkDialogForm.gddwmc,callback:function(e){t.$set(t.checkDialogForm,"gddwmc","string"===typeof e?e.trim():e)},expression:"checkDialogForm.gddwmc"}}),a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:"请输入营销活动名称"},model:{value:t.checkDialogForm.yxhdmc,callback:function(e){t.$set(t.checkDialogForm,"yxhdmc","string"===typeof e?e.trim():e)},expression:"checkDialogForm.yxhdmc"}}),a("el-select",{staticClass:"select",attrs:{size:"small",placeholder:"请选择供电单位标签"},model:{value:t.checkDialogForm.gddwbq,callback:function(e){t.$set(t.checkDialogForm,"gddwbq",e)},expression:"checkDialogForm.gddwbq"}},t._l(t.gddwbqOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-select",{staticClass:"select",attrs:{size:"small",placeholder:"请选择营销活动标签"},model:{value:t.checkDialogForm.yxhdbq,callback:function(e){t.$set(t.checkDialogForm,"yxhdbq",e)},expression:"checkDialogForm.yxhdbq"}},t._l(t.yxhdbqOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getCheckDialogData}},[t._v("查询")])],1)]),a("el-table",{staticClass:"dialog-table",attrs:{border:"",data:t.checkDialogData,height:400,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"gddwmc",label:"供电单位"}}),a("el-table-column",{attrs:{prop:"yxhdmc",label:"营销活动名称"}}),a("el-table-column",{attrs:{prop:"yxhdbq",label:"营销活动编号"}})],1),a("div",{staticClass:"dialog-pagination"},[a("el-pagination",{attrs:{"current-page":this.checkDialogForm.current,"page-sizes":[10,20,30,40],"page-size":this.checkDialogForm.size,layout:"total, sizes, prev, pager, next, jumper",total:this.checkDialogForm.total},on:{"size-change":t.checkDialogSizeChange,"current-change":t.checkDialogCurrentChange}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:t.checkDialogClose}},[t._v("关闭")])],1)],1)],1)},i=[],o=a("2909"),s=a("6ed3"),r=a("80f2"),c=a("db49"),n={name:"pelationshipBasicInformation",components:{},mixins:[s["a"],r["a"]],props:{},data:function(){return{queryForm:{gddwbq:"",yxhdbq:"",current:1,size:10,total:0},gddwbqOptions:[],yxhdbqOptions:[],listId:"",tableData:[],addDialogVisible:!1,addDialogTitle:"新增关联关系",addDialogData:[],addDialogForm:{tagSource:"",tagTarget:"",labelList:[{}],recResultNumber:"",recEmpty:"",current:1,size:10,total:0},tagSourceOptions:[],tagTargetOptions:[],checkDialogVisible:!1,checkDialogData:[],checkDialogForm:{gddwmc:"",yxhdmc:"",gddwbq:"",yxhdbq:"",current:1,size:10,total:0},ygid:""}},mounted:function(){this.getGddwOptions(),this.getYxhdOptions(),this.getTableData()},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===0?"success-row":""},handleSizeChange:function(t){this.queryForm.size=t,this.getTableData()},handleCurrentChange:function(t){this.queryForm.current=t,this.getTableData()},clickAdd:function(){this.addDialogForm.tagSource="",this.addDialogForm.tagTarget="",this.addDialogForm.recResultNumber="",this.addDialogForm.recEmpty="",this.ygid="",this.addDialogTitle="新增关联关系",this.addDialogVisible=!0},addDialogClose:function(){this.addDialogVisible=!1},addDialogConfirm:function(){var t=this;if(this.addDialogForm.tagSource)if(this.addDialogForm.tagTarget)if(""!==this.addDialogForm.recEmpty){var e={gddwbq:this.addDialogForm.tagSource,yxhdbq:this.addDialogForm.tagTarget,zdtjjgs:this.addDialogForm.recResultNumber,tjjgwkj:this.addDialogForm.recEmpty};"编辑关联关系"===this.addDialogTitle?(e.ygid=this.ygid,this.updateGddwStrategy(e).then((function(){t.addDialogVisible=!1,t.getTableData()}))):this.addGddwStrategy(e).then((function(){t.addDialogVisible=!1,t.getTableData()}))}else this.$message.warning("请选择推荐结果为空时选项");else this.$message.warning("请选择营销活动标签");else this.$message.warning("请选择供电单位标签")},clickEdit:function(t){this.addDialogForm.tagSource=t.gddwbqId,this.addDialogForm.tagTarget=t.yxhdbqId,this.addDialogForm.recResultNumber=t.zdtjjgs,this.addDialogForm.recEmpty=t.tjjgwkj,this.ygid=t.ygid,this.addDialogTitle="编辑关联关系",this.addDialogVisible=!0},clickCheck:function(t){this.checkDialogForm.gddwbq="",this.checkDialogForm.yxhdbq="",this.checkDialogForm.gddwmc="",this.checkDialogForm.yxhdmc="",this.listId=t.ygid,this.getCheckDialogData(),this.checkDialogVisible=!0},checkDialogClose:function(){this.checkDialogVisible=!1},checkDialogSizeChange:function(t){this.checkDialogForm.size=t,this.getCheckDialogData()},checkDialogCurrentChange:function(t){this.checkDialogForm.current=t,this.getCheckDialogData()},getTableData:function(){var t=this;this.getGddwStrategy(this.queryForm).then((function(e){t.tableData=Object(o["a"])(e.records),t.queryForm.total=e.total}))},getCheckDialogData:function(){var t=this;this.getGddwResult({ygid:this.listId,gddwbq:this.checkDialogForm.gddwbq,yxhdbq:this.checkDialogForm.yxhdbq,gddwmc:this.checkDialogForm.gddwmc,yxhdmc:this.checkDialogForm.yxhdmc,size:this.checkDialogForm.size,current:this.checkDialogForm.current}).then((function(e){t.checkDialogData=Object(o["a"])(e.records),t.checkDialogForm.total=e.total}))},getGddwOptions:function(){var t=this;this.getLabel({tagobjId:c["e"],gddwbq:""}).then((function(e){t.gddwbqOptions=e.map((function(t){return{value:t.bqId,label:t.bqName}}))}))},getYxhdOptions:function(){var t=this;this.getLabel({tagobjId:c["j"],yxhdbq:""}).then((function(e){t.yxhdbqOptions=e.map((function(t){return{value:t.bqId,label:t.bqName}}))}))}}},d=n,g=(a("e889"),a("2877")),u=Object(g["a"])(d,l,i,!1,null,"1f135c10",null);e["default"]=u.exports},e889:function(t,e,a){"use strict";var l=a("5c3a"),i=a.n(l);i.a}}]);
//# sourceMappingURL=chunk-22fad5be.8a725e15.js.map