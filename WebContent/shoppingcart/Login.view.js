sap.ui.jsview("shoppingcart.Login", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf shoppingcart.Login
	 */
	getControllerName : function() {
		return "shoppingcart.Login";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf shoppingcart.Login
	 */
	createContent : function(oController) {

		var oButton2 = new sap.m.Button("closeErrorDialog", {
			text : "Close",
			tap : [ oController.closeErrorDialog, oController ]
		});
		var oDialog = new sap.m.Dialog("loginErrorDialog", {
			title : "Login Error Dialog",
			modal : true,
			contentWidth : "1em",
			buttons : [ oButton2 ],
			content : [

			new sap.ui.commons.TextView({
				text : 'Please enter username and password',
				design : sap.ui.commons.TextViewDesign.Bold
			}) ]
		});

		var oInvalidButton = new sap.m.Button("invalidErrorDialog", {
			text : "Close",
			tap : [ oController.invalidErrorDialog, oController ]
		});

		var oDialog123 = new sap.m.Dialog("login1ErrorDialog", {
			title : "Login Error Dialog",
			modal : true,
			contentWidth : "1em",
			buttons : [ oInvalidButton ],
			content : [ new sap.ui.commons.TextView({
				text : 'Please enter valid username and password',
				design : sap.ui.commons.TextViewDesign.Bold
			}) ]
		});

		return new sap.m.Page({
			title : "Login Page",

			content : [ new sap.m.VBox({
				items : [ new sap.m.Text('usernamelable', {
					text : 'User name'
				}), new sap.m.Input({
					'id' : 'username',
					placeholder : 'Enter user name ...'
				}), new sap.m.Text('passwordlabel', {
					text : 'Password'
				}), new sap.m.Input("inputPassword", {
					type : sap.m.InputType.Password,
					placeholder : 'Enter your password ...'
				}), new sap.m.Button('btn', {
					text : 'Submit',
					press : function(evt) {

						oController.login();
					}

				}) ],
				alignItems : sap.m.FlexAlignItems.Center,
				justifyContent : sap.m.FlexJustifyContent.Center
			})

			]
		});
	}

});