sap.ui.controller("shoppingcart.Welcome", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.Welcome
*/
	onInit: function() {

	},

	handleNavButtonPress: function () {
		
//	    var oSplitApp = this.getView().getParent().getParent();
//	    var oMaster = oSplitApp.getMasterPages();
//	    oSplitApp1.toMaster(oMaster, "flip");
	   
	    var oSplitApp = this.getView().getParent().getParent();
	    var oMaster = oSplitApp.getMasterPages()[0];
	  
	    oSplitApp.toMaster(oMaster, "flip");
	    
	    
	},
	

	onBeforeRendering: function() {

	},


	onAfterRendering: function() {

	},


	onExit: function() {

	}

});