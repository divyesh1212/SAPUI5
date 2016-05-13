sap.ui.jsview("shoppingcart.selectedAppRecord", {

	getControllerName : function() {
		return "shoppingcart.selectedAppRecord";
	},

	createContent : function(oController) {

		
		
		var configListField = sap.ui.getCore().getModel("configListField");
		configListField=configListField.oData.Document.ListField.element;
		
	
		var string = '';
		for (var i = 0; i < configListField.length; i++) {
			string += configListField[i].name + ': {appRecords>' + configListField[i].name+ '} \n';
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

		oTable.bindAggregation("items", "appRecords>/", oTemplate);

		oTemplate.attachPress(function(evt) {
			
			oController.selectedAppName(evt);

		})

		return new sap.m.Page('selectedAppRecord',{
			title : "App Records",
			content : [ oTable ],
			
			showNavButton : "{device>/isPhone}",
			navButtonPress : function() {
				oController.handleNavButtonPress();

			},

			footer : new sap.m.Bar({
				contentLeft : [

				]
			}),

		});
	}

});