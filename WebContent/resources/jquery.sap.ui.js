/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/Global'],function(q){"use strict";function u(i){return sap.ui.getCore().getUIArea(this.id)!=null;}function f(i,o){return sap.ui.getCore().getUIArea(this.id);}function a(c,i){return c.getUIArea().getInterface();}q.fn.root=function(r){if(r){sap.ui.getCore().setRoot(this.get(0),r);return this;}var c=this.control();if(c.length>0){return q.map(c,a);}var U=this.uiarea();if(U.length>0){return U;}this.each(function(i){sap.ui.getCore().createUIArea(this);});return this;};q.fn.uiarea=function(i){var U=this.slice("[id]").filter(u).map(f).get();return typeof(i)==="number"?U[i]:U;};function b(){if(!this||!this.nodeType||this.nodeType===9){return null;}try{var i=q(this).closest("[data-sap-ui]").attr("id");return i?sap.ui.getCore().byId(i):null;}catch(e){return null;}}q.fn.control=function(i){var c=this.map(b);if(i===undefined||isNaN(i)){return c.get();}else{return c.get(i);}};q.fn.sapui=function(c,i,C){return this.each(function(){var o=null;if(this){if(c.indexOf(".")==-1){c="sap.ui.commons."+c;}var d=q.sap.getObject(c);if(d){if(typeof C=='object'&&typeof C.press=='function'){C.press=q.proxy(C.press,this);}o=new(d)(i,C);o.placeAt(this);}}});};return q;});
