(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb129e6"],{1380:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"marketingActivityAllocation"},[a("div",{staticClass:"header"},[a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:"请输入活动标签"},model:{value:t.queryForm.hdbq,callback:function(e){t.$set(t.queryForm,"hdbq","string"===typeof e?e.trim():e)},expression:"queryForm.hdbq"}}),a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:"请输入营销活动内容关键词"},model:{value:t.queryForm.idtypeKey,callback:function(e){t.$set(t.queryForm,"idtypeKey","string"===typeof e?e.trim():e)},expression:"queryForm.idtypeKey"}}),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getTableData}},[t._v("查询")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.clickAdd}},[t._v("新增营销活动")])],1),a("div",{staticClass:"content"},[a("el-table",{staticClass:"content-table",attrs:{border:"",data:t.tableData,height:500,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"70"}}),a("el-table-column",{attrs:{prop:"hdmc",label:"营销活动名称",width:"120"}}),a("el-table-column",{attrs:{prop:"hdmd",label:"营销活动目的"}}),a("el-table-column",{attrs:{prop:"hdnr",label:"营销活动内容"}}),a("el-table-column",{attrs:{prop:"yxhdbq",label:"活动分类标签"}}),a("el-table-column",{attrs:{prop:"sjywj",label:"设计源文件",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"text",attrs:{type:"text"},on:{click:function(a){return t.importFile(e.row.hdbh)}}},[t._v("导出源文件")])]}}])}),a("el-table-column",{attrs:{prop:"tplj",label:"图片",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"text",attrs:{type:"text"},on:{click:function(a){return t.importImg(e.row.hdbh)}}},[t._v("导出图片")])]}}])}),a("el-table-column",{attrs:{align:"center",width:"120",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"text",attrs:{type:"text"},on:{click:function(a){return t.exportContent(e.row.hdbh)}}},[t._v("导出活动内容")])]}}])}),a("el-table-column",{attrs:{prop:"czsj",label:"创建时间",width:"120"}}),a("el-table-column",{attrs:{prop:"czr",label:"创建人",width:"120"}})],1),a("div",{staticClass:"content-page"},[a("el-pagination",{attrs:{"current-page":this.queryForm.current,"page-sizes":[10,20,30,40],"page-size":this.queryForm.size,layout:"total, sizes, prev, pager, next, jumper",total:this.queryForm.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),a("el-dialog",{staticClass:"add-dialog",attrs:{title:"新增营销活动",visible:t.addDialogVisible,width:"80%",fullscreen:"","before-close":t.addDialogClose,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.addDialogVisible=e}}},[a("span",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"header-text"},[t._v(t._s("新增营销活动"))])]),a("div",{staticClass:"dialog-pagination"},[a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"label"},[t._v("活动名称 ：")])]),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入活动名称"},model:{value:t.addDialogForm.activeName,callback:function(e){t.$set(t.addDialogForm,"activeName",e)},expression:"addDialogForm.activeName"}})],1)],1),a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"label"},[t._v("活动目的 ：")])]),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入活动目的"},model:{value:t.addDialogForm.activeObjective,callback:function(e){t.$set(t.addDialogForm,"activeObjective",e)},expression:"addDialogForm.activeObjective"}})],1)],1),a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"label"},[t._v("活动内容 ：")])]),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入活动名称"},model:{value:t.addDialogForm.activeCon,callback:function(e){t.$set(t.addDialogForm,"activeCon",e)},expression:"addDialogForm.activeCon"}})],1)],1),a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"label"},[t._v("活动有效期选择 ：")])]),a("el-col",{attrs:{span:18}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.addDialogForm.activeYxq,callback:function(e){t.$set(t.addDialogForm,"activeYxq",e)},expression:"addDialogForm.activeYxq"}})],1)],1),a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"label"},[t._v("分类标签选择 ：")])]),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"left"},[a("el-input",{staticStyle:{width:"calc(100% - 66px)"},attrs:{placeholder:"输入关键字进行过滤",size:"medium"},model:{value:t.filterText2,callback:function(e){t.filterText2=e},expression:"filterText2"}}),a("el-button",{attrs:{icon:"el-icon-search",size:"medium"},on:{click:function(e){return t.selectTree(t.filterText2)}}}),a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.treeLoading,expression:"treeLoading"},{name:"show",rawName:"v-show",value:!t.showSelectTree,expression:"!showSelectTree"}],ref:"tree",staticClass:"filter-tree",style:t.treeStyleObject,attrs:{"filter-node-method":t.filterNode,props:t.defaultProps,load:t.loadNode,"highlight-current":!0,"expand-on-click-node":!1,lazy:""},on:{"node-click":t.nodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node,l=e.data;return a("span",{staticClass:"custom-tree-node"},[a("span",["tagobj"===l.type?a("i",{staticClass:"el-icon-office-building"}):"index"===l.type?a("i",{staticClass:"el-icon-folder-opened"}):"tag"===l.type?a("i",{staticClass:"el-icon-price-tag"}):t._e(),t._v("\n                                  "+t._s(i.label)+"\n                              ")])])}}])}),a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.treeLoading,expression:"treeLoading"},{name:"show",rawName:"v-show",value:t.showSelectTree,expression:"showSelectTree"}],style:{treeStyleObject:t.treeStyleObject},attrs:{data:t.dataTree,"default-expand-all":"",props:t.defaultProps2,"expand-on-click-node":!1,"highlight-current":!0},on:{"node-click":t.nodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node,l=e.data;return a("span",{staticClass:"custom-tree-node"},[a("span",["tagobj"===l.type?a("i",{staticClass:"el-icon-office-building"}):"index"===l.type?a("i",{staticClass:"el-icon-folder-opened"}):"tag"===l.type?a("i",{staticClass:"el-icon-price-tag"}):t._e(),t._v("\n                                  "+t._s(i.label)+"\n                              ")])])}}])})],1),a("div",{staticClass:"right"},[a("div",{staticClass:"title"},[a("span",{staticStyle:{"margin-right":"20px"}},[t._v("已选标签名称")]),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"small"},on:{click:t.delAllTag}},[t._v("全部清除")])],1),t._l(t.tagSelectList,(function(e){return a("el-tag",{key:e.tagId,staticClass:"tag"},[t._v(t._s(e.tagName)),a("span",{staticClass:"el-icon-close closeTag",on:{click:function(a){return t.deleteTag(e)}}})])}))],2)])],1),a("div",{staticClass:"bottom"},[a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadFileUrl,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccessFile,multiple:"",limit:1,"on-exceed":t.handleExceed,"file-list":t.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传设计源文件")])],1)],1),a("el-col",{attrs:{span:12}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadImgUrl,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccessImg,multiple:"",limit:1,"on-exceed":t.handleExceed,"file-list":t.imgList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传活动图片")])],1)],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addData}},[t._v("确认")]),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:t.addDialogClose}},[t._v("关闭")])],1)])],1)},l=[],s=(a("7f7f"),a("ac6a"),a("6ed3")),o=a("80f2"),n=a("db49"),r={name:"marketingActivityAllocation",components:{},mixins:[s["a"],o["a"]],props:{},data:function(){return{queryForm:{hdbq:"",idtypeKey:"",current:1,size:10,total:0},tableData:[],addDialogVisible:!1,addDialogData:[],addDialogForm:{activeName:"",activeCon:"",activeObjective:"",activeYxq:"",current:1,size:10,total:0},defaultProps:{children:"children",label:"text",isLeaf:"leaf"},defaultProps2:{children:"children",label:"text"},filterText2:"",treeLoading:!1,showSelectTree:!1,dataTree:[],node:[],resolve:[],numb:1,treeStyleObject:{maxHeight:"400px",minHeight:"300px",overflow:"scroll"},tagSelectList:[],imgList:[],uploadImgUrl:"",imgUrl:"",fileList:[],uploadFileUrl:"",fileUrl:""}},created:function(){},mounted:function(){this.uploadFileUrl=n["c"]+"/cptYxhdjbxx/uploadYFile",this.uploadImgUrl=n["c"]+"/cptYxhdjbxx/uploadPhoto",this.getTableData()},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===0?"success-row":""},handleSizeChange:function(t){this.queryForm.size=t,this.getTableData()},handleCurrentChange:function(t){this.queryForm.current=t,this.getTableData()},clickAdd:function(t){this.addDialogVisible=!0},addDialogClose:function(){this.addDialogVisible=!1},addDialogSizeChange:function(t){this.addDialogForm.size=t,this.getAddDialogData()},addDialogCurrentChange:function(t){this.addDialogForm.current=t,this.getAddDialogData()},exportContent:function(t){window.location.href=n["c"]+"/cptYxhdjbxx/exportHdNr?hdbh="+t},getTableData:function(){var t=this;this.getXcyxActive({hdbq:this.queryForm.hdbq,hdnr:this.queryForm.idtypeKey,size:this.queryForm.size,current:this.queryForm.current}).then((function(e){t.queryForm.total=e.total,t.tableData=e.list,window.console.log(e,"ttt")}))},getAddDialogData:function(){},selectTree:function(t){var e=this;this.treeLoading=!0;var a="";""!=t&&null!=t?(a=t,this.showSelectTree=!0,this.value=""):(this.showSelectTree=!1,a=this.value,this.filterText2=""),this.node.childNodes=[],this.getBdaTagList({keyword:a,id:0}).then((function(t){e.dataTree=t,e.treeLoading=!1,e.resolve(e.dataTree)})).catch((function(){}))},filterNode:function(t,e){return!t||-1!==e.text.indexOf(t)},loadNode:function(t,e){var a=this;1===this.numb&&(this.node=t,this.resolve=e,this.node.childNodes=[],this.numb++),this.dataTree=[];var i=this;if(t.data)t.data.type?this.getBdaTagList({id:t.data.entryId,type:t.data.type,tagobjId:n["j"]}).then((function(t){i.dataTree=t,i.dataTree.forEach((function(t){"tag"==t.type&&(t.leaf=!0)})),a.treeLoading=!1,e(i.dataTree)})).catch((function(){})):e([]);else{var l={tagobjId:n["j"]};this.treeLoading=!0,this.getBdaTagList(l).then((function(t){i.options=t;for(var l=0;l<t.length;l++)t[l].disabled=!0;a.dataTree=t,a.treeLoading=!1,e(a.dataTree)})).catch((function(){}))}},nodeClick:function(t){if("tag"===t.type){if(0===this.tagSelectList.length)return void this.tagSelectList.push({tagName:t.name,tagId:t.entryId});for(var e=0;e<this.tagSelectList.length;e++)if(this.tagSelectList[e].tagId===t.entryId)return void this.$message.success("当前标签以经存在");this.tagSelectList.push({tagName:t.name,tagId:t.entryId})}},deleteTag:function(t){this.tagSelectList=this.tagSelectList.filter((function(e){if(e.tagId!==t.tagId)return e}))},delAllTag:function(){this.tagSelectList=[]},handleRemove:function(t,e){window.console.log(t,e)},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},handleAvatarSuccessFile:function(t,e){this.fileUrl=e.response.data},handleAvatarSuccessImg:function(t,e){this.imgUrl=e.response.data},addData:function(){var t=this;if(this.tagSelectList.length<1)this.$message.warning("请选择标签");else{for(var e=[],a=[],i=0;i<this.tagSelectList.length;i++)e.push(this.tagSelectList[i].tagId),a.push(this.tagSelectList[i].tagName);this.addXcyxActive({hdmc:this.addDialogForm.activeName,hdmd:this.addDialogForm.activeObjective,hdnr:this.addDialogForm.activeCon,hdyxq:this.addDialogForm.activeYxq,yxhdbq:a.join(),yxhdbqId:e.join(),sjywj:this.fileUrl,tplj:this.imgUrl}).then((function(e){t.$message.success(e),t.getTableData(),t.addDialogVisible=!1}))}},importFile:function(t){window.location.href=n["c"]+"/cptYxhdjbxx/downYFile?hdbh="+t},importImg:function(t){window.location.href=n["c"]+"/cptYxhdjbxx/downPhoto?hdbh="+t}}},c=r,d=(a("3a0c"),a("2877")),u=Object(d["a"])(c,i,l,!1,null,"24a76d5a",null);e["default"]=u.exports},"3a0c":function(t,e,a){"use strict";var i=a("7d8f"),l=a.n(i);l.a},"7d8f":function(t,e,a){},"80f2":function(t,e,a){"use strict";var i=a("db49"),l=a("ab3e"),s=i["c"]+"/residentialElectricity/getPowerAreaCode";function o(t){return Object(l["a"])({method:"post",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:s})}var n=i["b"]+"/tag/listTagTreeAndTagobj";function r(t){return Object(l["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:n})}var c=i["c"]+"/cptYxhdYdkh/getXl";function d(t){return Object(l["a"])({method:"get",headers:{"Content-Type":"application/json;charset=utf8"},data:t,url:c})}e["a"]={data:function(){return{commonApi:{list:[],page:null,limit:null,total:0,model:null}}},methods:{getPowerAreaCode:function(t){return o(t).then((function(t){return t}))},getBdaTagList:function(t){return r(t).then((function(t){return t}))},getXl:function(t){return d(t).then((function(t){return t}))}}}}}]);
//# sourceMappingURL=chunk-5cb129e6.211a5d75.js.map