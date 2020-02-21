/*
 *  Bootstrap Duallistbox - v4.0.1
 *  A responsive dual listbox widget optimized for Twitter Bootstrap. It works on all modern browsers and on touch devices.
 *  http://www.virtuosoft.eu/code/bootstrap-duallistbox/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */

!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(a){var i="bootstrapDualListbox",n={filterTextClear:"show all",filterPlaceHolder:"Filter",moveSelectedLabel:"Move selected",moveAllLabel:"Move all",removeSelectedLabel:"Remove selected",removeAllLabel:"Remove all",moveOnSelect:!0,moveOnDoubleClick:!0,preserveSelectionOnMove:!1,selectedListLabel:!1,nonSelectedListLabel:!1,helperSelectNamePostfix:"_helper",selectorMinimalHeight:100,showFilterInputs:!0,nonSelectedFilter:"",selectedFilter:"",infoText:"Showing all {0}",infoTextFiltered:'<span class="badge badge-warning">Filtered</span> {0} from {1}',infoTextEmpty:"Empty list",filterOnValues:!1,sortByInputOrder:!1,eventMoveOverride:!1,eventMoveAllOverride:!1,eventRemoveOverride:!1,eventRemoveAllOverride:!1,btnClass:"btn-primary",btnMoveText:"&gt;",btnRemoveText:"&lt;",btnMoveAllText:"&gt;&gt;",btnRemoveAllText:"&lt;&lt;"},s=/android/i.test(navigator.userAgent.toLowerCase());function l(e,t){this.element=a(e),this.settings=a.extend({},n,t),this._defaults=n,this._name=i,this.init()}function t(e){e.element.trigger("change")}function o(s){s.element.find("option").each(function(e,t){var n=a(t);void 0===n.data("original-index")&&n.data("original-index",s.elementCount++),void 0===n.data("_selected")&&n.data("_selected",!1)})}function r(s,i,l){s.element.find("option").each(function(e,t){var n=a(t);n.data("original-index")===i&&(n.prop("selected",l),l?(n.attr("data-sortindex",s.sortIndex),s.sortIndex++):n.removeAttr("data-sortindex"))})}function c(e,n){return console.log(e,n),e.replace(/{(\d+)}/g,function(e,t){return void 0!==n[t]?n[t]:e})}function h(e){if(e.settings.infoText){var t=e.elements.select1.find("option").length,n=e.elements.select2.find("option").length,s=e.element.find("option").length-e.selectedElements,i=e.selectedElements,l="";l=0===s?e.settings.infoTextEmpty:c(t===s?e.settings.infoText:e.settings.infoTextFiltered,[t,s]),e.elements.info1.html(l),e.elements.box1.toggleClass("filtered",!(t===s||0===s)),l=0===i?e.settings.infoTextEmpty:c(n===i?e.settings.infoText:e.settings.infoTextFiltered,[n,i]),e.elements.info2.html(l),e.elements.box2.toggleClass("filtered",!(n===i||0===i))}}function m(s){s.selectedElements=0,s.elements.select1.empty(),s.elements.select2.empty(),s.element.find("option").each(function(e,t){var n=a(t);n.prop("selected")?(s.selectedElements++,s.elements.select2.append(n.clone(!0).prop("selected",n.data("_selected")))):s.elements.select1.append(n.clone(!0).prop("selected",n.data("_selected")))}),s.settings.showFilterInputs&&(e(s,1),e(s,2)),h(s)}function e(i,l){if(i.settings.showFilterInputs){d(i,l),i.elements["select"+l].empty().scrollTop(0);var o,r=i.element.find("option"),e=i.element;e=1===l?r.not(":selected"):e.find("option:selected");try{o=new RegExp(a.trim(i.elements["filterInput"+l].val()),"gi")}catch(e){o=new RegExp("/a^/","gi")}e.each(function(e,t){var n=a(t),s=!0;(t.text.match(o)||i.settings.filterOnValues&&n.attr("value").match(o))&&(s=!1,i.elements["select"+l].append(n.clone(!0).prop("selected",n.data("_selected")))),r.eq(n.data("original-index")).data("filtered"+l,s)}),h(i)}}function d(e,t){var s=e.element.find("option");e.elements["select"+t].find("option").each(function(e,t){var n=a(t);s.eq(n.data("original-index")).data("_selected",n.prop("selected"))})}function u(e){var t=e.children("option");t.sort(function(e,t){var n=parseInt(e.getAttribute("data-sortindex")),s=parseInt(t.getAttribute("data-sortindex"));return s<n?1:n<s?-1:0}),t.detach().appendTo(e)}function v(e){e.find("option").sort(function(e,t){return a(e).data("original-index")>a(t).data("original-index")?1:-1}).appendTo(e)}function f(s){"all"!==s.settings.preserveSelectionOnMove||s.settings.moveOnSelect?"moved"!==s.settings.preserveSelectionOnMove||s.settings.moveOnSelect||d(s,1):(d(s,1),d(s,2)),s.elements.select1.find("option:selected").each(function(e,t){var n=a(t);n.data("filtered1")||r(s,n.data("original-index"),!0)}),m(s),t(s),s.settings.sortByInputOrder?u(s.elements.select2):v(s.elements.select2)}function p(s){"all"!==s.settings.preserveSelectionOnMove||s.settings.moveOnSelect?"moved"!==s.settings.preserveSelectionOnMove||s.settings.moveOnSelect||d(s,2):(d(s,1),d(s,2)),s.elements.select2.find("option:selected").each(function(e,t){var n=a(t);n.data("filtered2")||r(s,n.data("original-index"),!1)}),m(s),t(s),v(s.elements.select1),s.settings.sortByInputOrder&&u(s.elements.select2)}function g(n){n.elements.form.submit(function(e){n.elements.filterInput1.is(":focus")?(e.preventDefault(),n.elements.filterInput1.focusout()):n.elements.filterInput2.is(":focus")&&(e.preventDefault(),n.elements.filterInput2.focusout())}),n.element.on("bootstrapDualListbox.refresh",function(e,t){n.refresh(t)}),n.elements.filterClear1.on("click",function(){n.setNonSelectedFilter("",!0)}),n.elements.filterClear2.on("click",function(){n.setSelectedFilter("",!0)}),!1===n.settings.eventMoveOverride&&n.elements.moveButton.on("click",function(){f(n)}),!1===n.settings.eventMoveAllOverride&&n.elements.moveAllButton.on("click",function(){var s;"all"!==(s=n).settings.preserveSelectionOnMove||s.settings.moveOnSelect?"moved"!==s.settings.preserveSelectionOnMove||s.settings.moveOnSelect||d(s,1):(d(s,1),d(s,2)),s.element.find("option").each(function(e,t){var n=a(t);n.data("filtered1")||(n.prop("selected",!0),n.attr("data-sortindex",s.sortIndex),s.sortIndex++)}),m(s),t(s)}),!1===n.settings.eventRemoveOverride&&n.elements.removeButton.on("click",function(){p(n)}),!1===n.settings.eventRemoveAllOverride&&n.elements.removeAllButton.on("click",function(){var e;"all"!==(e=n).settings.preserveSelectionOnMove||e.settings.moveOnSelect?"moved"!==e.settings.preserveSelectionOnMove||e.settings.moveOnSelect||d(e,2):(d(e,1),d(e,2)),e.element.find("option").each(function(e,t){var n=a(t);n.data("filtered2")||(n.prop("selected",!1),n.removeAttr("data-sortindex"))}),m(e),t(e)}),n.elements.filterInput1.on("change keyup",function(){e(n,1)}),n.elements.filterInput2.on("change keyup",function(){e(n,2)})}l.prototype={init:function(){this.container=a('<div class="bootstrap-duallistbox-container row"> <div class="box1 col-md-6">   <label></label>   <span class="info-container">     <span class="info"></span>     <button type="button" class="btn btn-sm clear1" style="float:right!important;"></button>   </span>   <input class="form-control filter" type="text">   <div class="btn-group buttons">     <button type="button" class="btn moveall"></button>     <button type="button" class="btn move"></button>   </div>   <select multiple="multiple"></select> </div> <div class="box2 col-md-6">   <label></label>   <span class="info-container">     <span class="info"></span>     <button type="button" class="btn btn-sm clear2" style="float:right!important;"></button>   </span>   <input class="form-control filter" type="text">   <div class="btn-group buttons">     <button type="button" class="btn remove"></button>     <button type="button" class="btn removeall"></button>   </div>   <select multiple="multiple"></select> </div></div>').insertBefore(this.element),this.elements={originalSelect:this.element,box1:a(".box1",this.container),box2:a(".box2",this.container),filterInput1:a(".box1 .filter",this.container),filterInput2:a(".box2 .filter",this.container),filterClear1:a(".box1 .clear1",this.container),filterClear2:a(".box2 .clear2",this.container),label1:a(".box1 > label",this.container),label2:a(".box2 > label",this.container),info1:a(".box1 .info",this.container),info2:a(".box2 .info",this.container),select1:a(".box1 select",this.container),select2:a(".box2 select",this.container),moveButton:a(".box1 .move",this.container),removeButton:a(".box2 .remove",this.container),moveAllButton:a(".box1 .moveall",this.container),removeAllButton:a(".box2 .removeall",this.container),form:a(a(".box1 .filter",this.container)[0].form)},this.originalSelectName=this.element.attr("name")||"";var e="bootstrap-duallistbox-nonselected-list_"+this.originalSelectName,t="bootstrap-duallistbox-selected-list_"+this.originalSelectName;return this.elements.select1.attr("id",e),this.elements.select2.attr("id",t),this.elements.label1.attr("for",e),this.elements.label2.attr("for",t),this.selectedElements=0,this.sortIndex=0,this.elementCount=0,this.setFilterTextClear(this.settings.filterTextClear),this.setFilterPlaceHolder(this.settings.filterPlaceHolder),this.setMoveSelectedLabel(this.settings.moveSelectedLabel),this.setMoveAllLabel(this.settings.moveAllLabel),this.setRemoveSelectedLabel(this.settings.removeSelectedLabel),this.setRemoveAllLabel(this.settings.removeAllLabel),this.setMoveOnSelect(this.settings.moveOnSelect),this.setMoveOnDoubleClick(this.settings.moveOnDoubleClick),this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove),this.setSelectedListLabel(this.settings.selectedListLabel),this.setNonSelectedListLabel(this.settings.nonSelectedListLabel),this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix),this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight),o(this),this.setShowFilterInputs(this.settings.showFilterInputs),this.setNonSelectedFilter(this.settings.nonSelectedFilter),this.setSelectedFilter(this.settings.selectedFilter),this.setInfoText(this.settings.infoText),this.setInfoTextFiltered(this.settings.infoTextFiltered),this.setInfoTextEmpty(this.settings.infoTextEmpty),this.setFilterOnValues(this.settings.filterOnValues),this.setSortByInputOrder(this.settings.sortByInputOrder),this.setEventMoveOverride(this.settings.eventMoveOverride),this.setEventMoveAllOverride(this.settings.eventMoveAllOverride),this.setEventRemoveOverride(this.settings.eventRemoveOverride),this.setEventRemoveAllOverride(this.settings.eventRemoveAllOverride),this.setBtnClass(this.settings.btnClass),this.setBtnMoveText(this.settings.btnMoveText),this.setBtnRemoveText(this.settings.btnRemoveText),this.setBtnMoveAllText(this.settings.btnMoveAllText),this.setBtnRemoveAllText(this.settings.btnRemoveAllText),this.element.hide(),g(this),m(this),this.element},setFilterTextClear:function(e,t){return this.settings.filterTextClear=e,this.elements.filterClear1.html(e),this.elements.filterClear2.html(e),t&&m(this),this.element},setFilterPlaceHolder:function(e,t){return this.settings.filterPlaceHolder=e,this.elements.filterInput1.attr("placeholder",e),this.elements.filterInput2.attr("placeholder",e),t&&m(this),this.element},setMoveSelectedLabel:function(e,t){return this.settings.moveSelectedLabel=e,this.elements.moveButton.attr("title",e),t&&m(this),this.element},setMoveAllLabel:function(e,t){return this.settings.moveAllLabel=e,this.elements.moveAllButton.attr("title",e),t&&m(this),this.element},setRemoveSelectedLabel:function(e,t){return this.settings.removeSelectedLabel=e,this.elements.removeButton.attr("title",e),t&&m(this),this.element},setRemoveAllLabel:function(e,t){return this.settings.removeAllLabel=e,this.elements.removeAllButton.attr("title",e),t&&m(this),this.element},setMoveOnSelect:function(e,t){if(s&&(e=!0),this.settings.moveOnSelect=e,this.settings.moveOnSelect){this.container.addClass("moveonselect");var n=this;this.elements.select1.on("change",function(){f(n)}),this.elements.select2.on("change",function(){p(n)}),this.elements.moveButton.detach(),this.elements.removeButton.detach()}else this.container.removeClass("moveonselect"),this.elements.select1.off("change"),this.elements.select2.off("change"),this.elements.moveButton.insertAfter(this.elements.moveAllButton),this.elements.removeButton.insertBefore(this.elements.removeAllButton);return t&&m(this),this.element},setMoveOnDoubleClick:function(e,t){if(s&&(e=!1),this.settings.moveOnDoubleClick=e,this.settings.moveOnDoubleClick){this.container.addClass("moveondoubleclick");var n=this;this.elements.select1.on("dblclick",function(){f(n)}),this.elements.select2.on("dblclick",function(){p(n)})}else this.container.removeClass("moveondoubleclick"),this.elements.select1.off("dblclick"),this.elements.select2.off("dblclick");return t&&m(this),this.element},setPreserveSelectionOnMove:function(e,t){return s&&(e=!1),this.settings.preserveSelectionOnMove=e,t&&m(this),this.element},setSelectedListLabel:function(e,t){return(this.settings.selectedListLabel=e)?this.elements.label2.show().html(e):this.elements.label2.hide().html(e),t&&m(this),this.element},setNonSelectedListLabel:function(e,t){return(this.settings.nonSelectedListLabel=e)?this.elements.label1.show().html(e):this.elements.label1.hide().html(e),t&&m(this),this.element},setHelperSelectNamePostfix:function(e,t){return(this.settings.helperSelectNamePostfix=e)?(this.elements.select1.attr("name",this.originalSelectName+e+"1"),this.elements.select2.attr("name",this.originalSelectName+e+"2")):(this.elements.select1.removeAttr("name"),this.elements.select2.removeAttr("name")),t&&m(this),this.element},setSelectOrMinimalHeight:function(e,t){this.settings.selectorMinimalHeight=e;var n=this.element.height();return this.element.height()<e&&(n=e),this.elements.select1.height(n),this.elements.select2.height(n),t&&m(this),this.element},setShowFilterInputs:function(e,t){return e?(this.elements.filterInput1.show(),this.elements.filterInput2.show()):(this.setNonSelectedFilter(""),this.setSelectedFilter(""),m(this),this.elements.filterInput1.hide(),this.elements.filterInput2.hide()),this.settings.showFilterInputs=e,t&&m(this),this.element},setNonSelectedFilter:function(e,t){if(this.settings.showFilterInputs)return this.settings.nonSelectedFilter=e,this.elements.filterInput1.val(e),t&&m(this),this.element},setSelectedFilter:function(e,t){if(this.settings.showFilterInputs)return this.settings.selectedFilter=e,this.elements.filterInput2.val(e),t&&m(this),this.element},setInfoText:function(e,t){return(this.settings.infoText=e)?(this.elements.info1.show(),this.elements.info2.show()):(this.elements.info1.hide(),this.elements.info2.hide()),t&&m(this),this.element},setInfoTextFiltered:function(e,t){return this.settings.infoTextFiltered=e,t&&m(this),this.element},setInfoTextEmpty:function(e,t){return this.settings.infoTextEmpty=e,t&&m(this),this.element},setFilterOnValues:function(e,t){return this.settings.filterOnValues=e,t&&m(this),this.element},setSortByInputOrder:function(e,t){return this.settings.sortByInputOrder=e,t&&m(this),this.element},setEventMoveOverride:function(e,t){return this.settings.eventMoveOverride=e,t&&m(this),this.element},setEventMoveAllOverride:function(e,t){return this.settings.eventMoveAllOverride=e,t&&m(this),this.element},setEventRemoveOverride:function(e,t){return this.settings.eventRemoveOverride=e,t&&m(this),this.element},setEventRemoveAllOverride:function(e,t){return this.settings.eventRemoveAllOverride=e,t&&m(this),this.element},setBtnClass:function(e,t){return this.settings.btnClass=e,this.elements.moveButton.attr("class","btn move").addClass(e),this.elements.removeButton.attr("class","btn remove").addClass(e),this.elements.moveAllButton.attr("class","btn moveall").addClass(e),this.elements.removeAllButton.attr("class","btn removeall").addClass(e),t&&m(this),this.element},setBtnMoveText:function(e,t){return this.settings.btnMoveText=e,this.elements.moveButton.html(e),t&&m(this),this.element},setBtnRemoveText:function(e,t){return this.settings.btnMoveText=e,this.elements.removeButton.html(e),t&&m(this),this.element},setBtnMoveAllText:function(e,t){return this.settings.btnMoveText=e,this.elements.moveAllButton.html(e),t&&m(this),this.element},setBtnRemoveAllText:function(e,t){return this.settings.btnMoveText=e,this.elements.removeAllButton.html(e),t&&m(this),this.element},getContainer:function(){return this.container},refresh:function(e){var t;o(this),e?(t=this).elements.select1.find("option").each(function(){t.element.find("option").data("_selected",!1)}):(d(this,1),d(this,2)),m(this)},destroy:function(){return this.container.remove(),this.element.show(),a.data(this,"plugin_"+i,null),this.element}},a.fn[i]=function(n){var t,s=arguments;return void 0===n||"object"==typeof n?this.each(function(){a(this).is("select")?a.data(this,"plugin_"+i)||a.data(this,"plugin_"+i,new l(this,n)):a(this).find("select").each(function(e,t){a(t).bootstrapDualListbox(n)})}):"string"==typeof n&&"_"!==n[0]&&"init"!==n?(this.each(function(){var e=a.data(this,"plugin_"+i);e instanceof l&&"function"==typeof e[n]&&(t=e[n].apply(e,Array.prototype.slice.call(s,1)))}),void 0!==t?t:this):void 0}});