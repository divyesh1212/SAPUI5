sap.ui
		.controller(
				"shoppingcart.Login",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf shoppingcart.Login
					 */
					onInit : function() {
						this.router = sap.ui.core.UIComponent
								.getRouterFor(this);
					},
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf shoppingcart.Login
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf shoppingcart.Login
					 */
					// onAfterRendering: function() {
					//
					// },
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf shoppingcart.Login
					 */
					// onExit: function() {
					//
					// }
					login : function() {

						var oModel = new sap.ui.model.json.JSONModel();

						oModel.oHeaders = {
							"DataServiceVersion" : "3.0",
							"MaxDataServiceVersion" : "3.0"
						};

						var userName = 'atgupta';
						var Password = 'admin123';

						var oModel = new sap.ui.model.json.JSONModel(
								'proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/login1.php?Userid='
										+ userName
										+ '&Password='
										+ Password
										+ '&device=iOS');

						var appID = sap.ui.getCore().byId("app");
						appID.setModel(oModel, 'products');
						this.router.navTo("Category", {
							catIndex : 'model'
						})

						
					}

				});