sap.ui.jsview("shoppingcart.selectedAppRecord", {


	getControllerName : function() {
		return "shoppingcart.selectedAppRecord";
	},

	createContent : function(oController) {

		jQuery.sap.require("sap.ui.core.IconPool");
		var aNames = sap.ui.core.IconPool.getIconNames();

		var elementArray = [ 'ReportNo', 'RoadDetails', 'ProblemDetails'];

		var string = '';

		 for (var i = 0; i < elementArray.length; i++) {
		 string += elementArray[i] + ': {approcords>' + elementArray[i]
		 + '} \n';
		 }

		var oTable = new sap.m.Table("appRecordList", {
			inset : true,
			columns : [ new sap.m.Column({
				hAlign : "Left",
				demandPopin : true,
				popinDisplay : "Block",
				minScreenWidth : sap.m.ScreenSize.Medium
			}),

			]
		});

		var oTemplate = new sap.m.ColumnListItem({
			type : sap.m.ListType.Active,
			cells : [ new sap.m.Text({
				text : string,
			}),

			]
		});

		oTable.bindAggregation("items", "approcords>/", oTemplate);
				
		oTemplate.attachPress(function(evt) {
			oController.selectedAppName(evt);
					
		})

		return new sap.m.Page({
			title : "App Records",
			content : [ oTable ],
			showNavButton : "{device>/isPhone}",
			navButtonPress : function() {
				oController.handleNavButtonPress();

			},

			footer : new sap.m.Bar({
				contentLeft : [

				               
//				               new sap.m.Button({
//				            		text : "Add",
//				            		//style: sap.m.ButtonStyle.Emph,
//				            		type:'Emphasized',
//				            		 icon : sap.ui.core.IconPool.getIconURI('add'),
//				            		press : function() {alert('Alert from ' + oButton4.getText());}
//				            	}),
//				            	//sap.ui.core.IconPool.getIconURI('account')
//				            	new sap.m.Button({
//				            	      text : "Edit",
//				            	      type : "Reject",
//				            	      icon : sap.ui.core.IconPool.getIconURI('edit')
//				            	      }),
//				            	      new sap.m.Button({
//				            	      text : "Copy",
//				            	      icon : sap.ui.core.IconPool.getIconURI('duplicate'),
//				            	      type : "Accept"
//				            	      }),
				               
				]
			}),

		});
	}

});