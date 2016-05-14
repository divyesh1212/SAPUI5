/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ComboBox','./library','jquery.sap.strings'],function(q,C,l){"use strict";var A=C.extend("sap.ui.commons.AutoComplete",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],library:"sap.ui.commons",properties:{enableScrolling:{type:"boolean",group:"Misc",defaultValue:true}},events:{suggest:{parameters:{suggestValue:{type:"string"}}}}}});A._DEFAULTFILTER=function(v,i){if(this._skipFilter){return true;}return q.sap.startsWithIgnoreCase(i.getText(),v);};A.prototype.init=function(){C.prototype.init.apply(this,arguments);this.mobile=false;this._filter=A._DEFAULTFILTER;};A.prototype.exit=function(){if(this._oListBox){this._oListBox.removeAllItems();}C.prototype.exit.apply(this,arguments);};A.prototype.setFilterFunction=function(f){if(typeof(f)=="function"){this._filter=f;}else{this._filter=A._DEFAULTFILTER;}};A.prototype.onkeypress=function(e){var k=e.which||e.keyCode;if(k===q.sap.KeyCodes.ESCAPE){sap.ui.commons.TextField.prototype.onkeypress.apply(this,arguments);q(this.getInputDomRef()).removeAttr("aria-posinset");}};A.prototype.onfocusin=function(e){if(!this.$().hasClass("sapUiTfFoc")){C.prototype.onfocusin.apply(this,arguments);}};(function(){function g(a,I){var d=a.getAriaDescribedBy();var D="";for(var i=0;i<d.length;i++){D+=d[i];if(i<d.length-1){D+=" ";}}if(I){D+=" "+a.getId()+"-ariaLbl";}return D;}function u(a){var $=q(a.getInputDomRef());var d=g(a,false);if(d.length>0){$.attr("aria-describedby",d);}else{$.removeAttr("aria-describedby");}$.removeAttr("aria-posinset");$.removeAttr("aria-setsize");}A.prototype._close=function(){u(this);C.prototype._close.apply(this,arguments);};A.prototype._handleClosed=function(){u(this);C.prototype._handleClosed.apply(this,arguments);};A.prototype.onAfterRendering=function(){C.prototype.onAfterRendering.apply(this,arguments);q(this.getInputDomRef()).removeAttr("aria-setsize");};A.prototype._prepareOpen=function(L){var $=q(this.getInputDomRef());var d=g(this,true);$.attr("aria-describedby",d);$.removeAttr("aria-posinset");};A.prototype._fireLiveChange=function(e){var f=false;var k;if(!this.getEnabled()||!this.getEditable()){this._close();}else{this._sTypedChars=q(this.getInputDomRef()).val();switch(e.type){case"keyup":case"sapup":case"sapdown":case"saphome":case"sapend":if(!C._isHotKey(e)){f=true;}else{break;}case"sapescape":this._close();break;case"keypress":k=e.which||e.keyCode;if(k===q.sap.KeyCodes.ESCAPE){this._close();break;}default:r(this);f=true;}}if(f){this.fireSuggest({suggestValue:this._sTypedChars});}C.prototype._fireLiveChange.apply(this,arguments);};A.prototype._doTypeAhead=function(){this._sTypeAhead=null;this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;this._sTypedChars=q(this.getInputDomRef()).val();r(this);};A.prototype.refreshItems=function(R){var b=this.getBinding("items");if(R=="filter"&&b){b.getContexts();}else{A.prototype.updateItems.apply(this,arguments);}};A.prototype._handleItemsChanged=function(e,d){if(d){this._sHandleItemsChanged=null;this._bNoItemCheck=undefined;}if(this._bNoItemCheck){return;}var i=[];if(this._getExistingListBox()){i=this._getListBox().getItems();}var D=this.getDomRef();if(D){q(this.getInputDomRef()).attr("aria-setsize",i.length);}};A.prototype.getItems=function(){return this.getAggregation("items",[]);};A.prototype.insertItem=function(i,I){this.insertAggregation("items",I,i,true);r(this);return this;};A.prototype.addItem=function(i){this.addAggregation("items",i,true);r(this);return this;};A.prototype.removeItem=function(i){var a=this.removeAggregation("items",i,true);r(this);return a;};A.prototype.removeAllItems=function(){var a=this.removeAllAggregation("items");r(this);return a;};A.prototype.indexOfItem=function(i){return this.indexOfAggregation("items",i);};A.prototype.destroyItems=function(){this.destroyAggregation("items",true);r(this);return this;};A.prototype.setEnableScrolling=function(e){this.setProperty("enableScrolling",e,true);if(this.oPopup&&this.oPopup.isOpen()){r(this);}return this;};function r(a){if(!a.getDomRef()||!a.$().hasClass("sapUiTfFoc")){return false;}var I,b=a.getItems(),f=a._sTypedChars&&a._sTypedChars.length>0,L=a._getListBox(),m=a.getMaxPopupItems(),s=a.getEnableScrolling(),h=[];if(!f){a._close();return;}L.removeAllItems();L.clearSelection();for(var i=0;i<b.length;i++){I=b[i];if(!I.__CLONE){I.__CLONE=I.clone(I.getId()+"-CLONE",null,{cloneBindings:false});I.__origexit=I.exit;I.exit=function(){this.__CLONE.destroy();delete this.__CLONE;this.exit=this.__origexit;delete this.__origexit;if(typeof this.exit==="function"){this.exit.apply(this,arguments);}};}if((!f||a._filter(a._sTypedChars,I))&&(s||(!s&&h.length<m))){h.push(I.__CLONE);}}var c=h.length;if(c>0){if(a._sort){h.sort(function(o,d){if(o.getText()>d.getText()){return 1;}if(o.getText()<d.getText()){return-1;}return 0;});}for(var i=0;i<c;i++){L.addItem(h[i]);}L.setVisibleItems(m<c?m:c);if(!a.oPopup||!a.oPopup.isOpen()){a._open();}}else{a._close();}}})();A.prototype.setListBox=function(){return this;};A.prototype.setSelectedKey=function(){return this;};A.prototype.setSelectedItemId=function(){return this;};return A;},true);
