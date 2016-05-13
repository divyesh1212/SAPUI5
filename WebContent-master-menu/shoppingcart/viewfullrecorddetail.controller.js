sap.ui.controller("shoppingcart.viewfullrecorddetail", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf shoppingcart.viewfullrecorddetail
	 */
	onInit : function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

		var oModel = new sap.ui.model.json.JSONModel(
				'./shoppingcart/record.json');

		var appID = sap.ui.getCore().byId("app");
		appID.setModel(oModel, 'approcords');
	},

	_handleRouteMatched : function(evt) {
		if ("viewfullrecorddetail" !== evt.getParameter("name")) {
			return;
		}

		this.catIndex = evt.getParameter("arguments").catIndex;

		this.subCatIndex = evt.getParameter("arguments").subCatIndex;

		var context = sap.ui.getCore().byId("app").getModel('products')
				.getContext('/collection/' + this.subCatIndex);
		this.getView().setBindingContext(context, 'products');

	},

	navigation : function() {
		this.router.navTo("selectedAppRecord", {
			catIndex : this.catIndex,
			appIndex : this.subCatIndex
		});
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf shoppingcart.viewfullrecorddetail
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf shoppingcart.viewfullrecorddetail
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf shoppingcart.viewfullrecorddetail
 */
// onExit: function() {
//
// }
});