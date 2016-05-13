sap.ui.controller("shoppingcart.ProductInfo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.ProductInfo
*/
	onInit: function() {
		
//		this.router = sap.ui.core.UIComponent.getRouterFor(this);
//		 var oModel = new sap.ui.model.json.JSONModel(
//			'proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/login1.php?Userid=smartAppall&Password=admin123&device=iOS');
////sap.ui.getCore().setModel(oModel,'products123');
//		
//var appID =  sap.ui.getCore().byId("app");
//appID.setModel(oModel, 'products123');
		 
		
		
		
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	
	_handleRouteMatched: function(evt) {
		
		if("ProductInfo" !== evt.getParameter("name")){
			return;
		} 
		
//		this.catIndex = evt.getParameter("arguments").catIndex;
//		this.subCatIndex = evt.getParameter("arguments").subCatIndex;
//		this.productIndex = evt.getParameter("arguments").subCatIndex;
		
		//var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection/' + this.catIndex + '/items/subcat/' + this.subCatIndex + '/product/'+ this.productIndex);
		//var context = sap.ui.getCore().byId("app").getModel('products').getContext('/model/0/0' );
		
		//this.getView().setBindingContext(context,'products');
		
		
	},

});