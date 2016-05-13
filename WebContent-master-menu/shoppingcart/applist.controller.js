sap.ui.controller("shoppingcart.applist", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf shoppingcart.applist
	 */
	onInit : function() {

		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},
	navigation : function() {
		
		this.router.navTo("App")
	},
	
	handleNavButtonPress: function () {
		
	    var oSplitApp = this.getView().getParent().getParent();
	    var oMaster = oSplitApp.getMasterPages()[0];
	    oSplitApp.toMaster(oMaster, "flip");
	},

	_handleRouteMatched : function(evt) {
		if ("applist" !== evt.getParameter("name")) {
			return;
		}

		this.subCatIndex = evt.getParameter("arguments").subCatIndex;

		
		
		var context = sap.ui.getCore().byId("app").getModel('products')
				.getContext('/collection/' + this.subCatIndex);
		this.getView().setBindingContext(context, 'products');

	},
	navigation : function() {

		
		this.router.navTo("Category", {
			catIndex : 'model'
		})
	},

	itemSelect : function(evt) {
		
		var oItem = sap.ui.getCore().byId('appListId').getSelectedItem();
	var test=	oItem.getBindingContext('products').getProperty('description');
		

		
		var list = sap.ui.getCore().byId('appListId');
		var sItem = list.getSelectedItem();

		var oBindingContext = sItem.getBindingContext('products');
		var sPath = oBindingContext.sPath;
		
		
		
		var context = sap.ui.getCore().byId("appListId").getModel('products')
		.getContext(sPath);

		var start = sPath.lastIndexOf("/") + 1;
		var appIndex = sPath.substring(start, sPath.length);

		this.router.navTo("selectedAppRecord", {
			catIndex : this.subCatIndex,
			appIndex : appIndex
		});

	},

	productPress : function(oEvent) {

		var oBindingContext = oEvent.getSource().getBindingContext('products');
		var sPath = oBindingContext.sPath;

		var start = sPath.lastIndexOf("/") + 1;
		var context = sap.ui.getCore().byId("app").getModel('products')
				.getContext(sPath);
		alert(context);

		var productIndex = sPath.substring(start, sPath.length);

		this.router.navTo("selectedAppRecord", {
			catIndex : this.catIndex,
			subCatIndex : this.subCatIndex,
			productIndex : productIndex
		})
		this.router.navTo("selectedAppRecord", {
			catIndex : 1,
			subCatIndex : 2
		})

	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf shoppingcart.applist
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf shoppingcart.applist
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf shoppingcart.applist
 */
// onExit: function() {
//
// }
});