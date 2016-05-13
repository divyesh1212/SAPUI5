sap.ui.jsview("shoppingcart.ProductInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.ProductInfo
	*/ 
	getControllerName : function() {
		return "shoppingcart.ProductInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.ProductInfo
	*/ 
	createContent : function(oController) {
		
		
		var oList = new sap.m.List({
			id: "productlistId",
			mode: sap.m.ListMode.SingleSelect,
			select: function(evt) {
				oController.itemSelect(evt);
			}
		})
		
		
		oList.bindItems({
			path : "products123>/collection", 
			template : new sap.m.StandardListItem({
				title: "{products123>/App>/description}",

			})
		});
		
 		
		
		
 		return new sap.m.Page({
			title: "Product Info",
			showNavButton: true,
			navButtonPress: function() {
				window.history.go(-1);
			},
			content: [oList],
			footer: new sap.m.Bar({
				contentLeft: [
				              new sap.m.Text({
				            	text: "SmartPhoneBizApp",
//				            	icon: "sap-icon://add",
//				            	press: function(evt) {
//				            		sap.demo.cart.common.addToCart(evt,this);
//				            	}
				              })
				]
			}),
			
		});
	}

});