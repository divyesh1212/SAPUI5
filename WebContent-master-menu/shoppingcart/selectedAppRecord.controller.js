sap.ui.controller("shoppingcart.selectedAppRecord", {

	onInit : function() {

		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

		var oModel = new sap.ui.model.json.JSONModel(
				'./shoppingcart/record.json');

		var appID = sap.ui.getCore().byId("app");
		appID.setModel(oModel, 'approcords');

	},
	_handleRouteMatched : function(evt) {
		if ("selectedAppRecord" !== evt.getParameter("name")) {
			return;
		}

		this.subCatIndex = evt.getParameter("arguments").catIndex;

		this.appIndex = evt.getParameter("arguments").appIndex;

		var context = sap.ui.getCore().byId("app").getModel('products')
				.getContext('/collection/' + this.subCatIndex);
		this.getView().setBindingContext(context, 'products');

	},
	selectedAppName : function(oEvent) {
		this.router.navTo("viewfullrecorddetail", {
			catIndex : this.subCatIndex,
			subCatIndex : this.appIndex,
			selected : 2
		});
	},
	
	handleNavButtonPress: function () {
	
	    var oSplitApp = this.getView().getParent().getParent();
	    var oMaster = oSplitApp.getMasterPages()[1];
	    oSplitApp.toMaster(oMaster, "flip");
	},

	navigation : function() {

	},

	onBeforeRendering : function() {

	},

	onAfterRendering : function() {

	},

	onExit : function() {

	}

});