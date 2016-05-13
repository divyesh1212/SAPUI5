sap.ui.controller("shoppingcart.Products", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf shoppingcart.Products
	 */
	onInit : function() {

		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

		// var oModel = new sap.ui.model.json.JSONModel([ {
		// fname : "Joe",
		// lname : "Doe"
		// }, {
		// fname : "Mary",
		// lname : "Ann"
		// } ]);

		// var appID = sap.ui.getCore().byId("app");
		// appID.setModel(oModel);

	},

	navigation : function() {
		this.router.navTo("App")
	},

	_handleRouteMatched : function(evt) {
		if ("Products" !== evt.getParameter("name")) {
			return;
		}
		// this.catIndex = evt.getParameter("arguments").catIndex;
		this.subCatIndex = evt.getParameter("arguments").subCatIndex;
		var context = sap.ui.getCore().byId("app").getModel('products')
				.getContext('/collection/' + this.subCatIndex);
		this.getView().setBindingContext(context, 'products');

	},

	productPress : function(oEvent) {

		var oBindingContext = oEvent.getSource().getBindingContext('products');
		var sPath = oBindingContext.sPath;

		var start = sPath.lastIndexOf("/") + 1;
		var context = sap.ui.getCore().byId("app").getModel('products')
				.getContext(sPath);
		alert(context);

		var productIndex = sPath.substring(start, sPath.length);

		this.router.navTo("ProductInfo", {
			catIndex : this.catIndex,
			subCatIndex : this.subCatIndex,
			productIndex : productIndex
		})
		this.router.navTo("ProductInfo", {
			catIndex : 1,
			subCatIndex : 2
		})

	},

// productPress : function(oEvent) {
//
// var list = sap.ui.getCore().byId('productsTable');
//
// var sItem = list.getSelectedItem();
//
// // $.ajax({
// // url :
// //
// 'proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/login1.php',
// // data : {
// // Userid : userName,
// // Password : Password,
// // device : 'iOS'
// // },
// // method : 'POST',
// // success : function(response) {
// // oView.setModel(oModel, 'products');
// //
// // //oModel.setData(response.data);
// // oModel.setData(response,'production');
// //
// // sap.ui.getCore().setModel(oModel);
// //
// // }
// // });
//
// this.router.navTo("ProductInfo", {
// catIndex : 1,
// subCatIndex : 2
// })
//
// }

});