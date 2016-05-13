sap.ui.jsview("shoppingcart.applist", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.applist
	*/ 
	getControllerName : function() {
		return "shoppingcart.applist";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.applist
	*/ 
	createContent : function(oController) {
		
		
		
			var oList = new sap.m.List({
			id: "appListId",
			mode: sap.m.ListMode.SingleSelect,
			select: function(evt) {
				oController.itemSelect(evt);
			}
		})
		
		oList.bindItems({
			path : "products>App", 
			template : new sap.m.StandardListItem({
				title: "{products>description}",

				press:function(evt){
					oController.categoryListItemPress(evt);
				}
			})
		});
			
		return new sap.m.Page({
			title: "Application List",
			
			showNavButton : "{device>/isPhone}",
			navButtonPress : function() {
				
				oController.handleNavButtonPress();

			},
			
//			showNavButton: true,
//			navButtonPress: function() {
//			oController.navigation();
//		},
			content: [oList],
		});
	
	}

});