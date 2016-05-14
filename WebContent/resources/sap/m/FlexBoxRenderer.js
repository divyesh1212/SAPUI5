/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./FlexBoxStylingHelper'],function(q,F){"use strict";if(!q.support.flexBoxLayout&&!q.support.newFlexBoxLayout&&!q.support.ie10FlexBoxLayout){q.sap.log.warning("This browser does not support flexible box layouts natively.");}var a={};a.render=function(r,c){if(c.getRenderType()===sap.m.FlexRendertype.List){r.write('<ul');}else{r.write('<div');}r.writeControlData(c);var p=c.getParent();if(c.getParent()instanceof sap.m.FlexBox){r.addClass("sapMFlexItem");var l=c.getLayoutData();if(l instanceof sap.m.FlexItemData){F.setFlexItemStyles(r,l);}if(p.getRenderType()===sap.m.FlexRendertype.List){r.write('<li');}}else if(c.getFitContainer()){r.addClass("sapMFlexBoxFit");}r.addClass("sapMFlexBox");if(c.getDisplayInline()){r.addClass("sapMFlexBoxInline");}if(c.getDirection()===sap.m.FlexDirection.Column||c.getDirection()===sap.m.FlexDirection.ColumnReverse){r.addClass("sapMVBox");}else{r.addClass("sapMHBox");}if(c.getDirection()===sap.m.FlexDirection.RowReverse||c.getDirection()===sap.m.FlexDirection.ColumnReverse){r.addClass("sapMFlexBoxReverse");}r.addClass("sapMFlexBoxJustify"+c.getJustifyContent());r.addClass("sapMFlexBoxAlignItems"+c.getAlignItems());r.addClass("sapMFlexBoxWrap"+c.getWrap());r.addClass("sapMFlexBoxAlignContent"+c.getAlignContent());r.writeClasses();if(c.getHeight()){r.addStyle("height",c.getHeight());}if(c.getWidth()){r.addStyle("width",c.getWidth());}r.writeStyles();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.write(">");a.renderItems(c,r);if(c.getRenderType()===sap.m.FlexRendertype.List){r.write("</ul>");}else{r.write("</div>");}};a.renderItems=function(c,r){var C=c.getItems(),w='';for(var i=0;i<C.length;i++){if(C[i]instanceof sap.m.FlexBox){w="";}else if(c.getRenderType()===sap.m.FlexRendertype.List){w="li";}else{w="div";}a.renderItem(C[i],w,r);}};a.renderItem=function(i,w,r){if(w){r.write('<'+w);var l=i.getLayoutData();if(l instanceof sap.m.FlexItemData){if(l.getId()){r.writeAttributeEscaped("id",l.getId());}if(l.getStyleClass()){r.addClass(q.sap.encodeHTML(l.getStyleClass()));}r.addClass("sapMFlexItemAlign"+l.getAlignSelf());F.setFlexItemStyles(r,l);r.writeStyles();if(i instanceof sap.m.ScrollContainer){r.addClass("sapMFlexBoxFit");}if(!i.getVisible()){r.addClass("sapUiHiddenPlaceholder");}}r.addClass("sapMFlexItem");r.writeClasses();r.write(">");}r.renderControl(i);if(w){r.write('</'+w+'>');}};return a;},true);
