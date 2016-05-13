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
						
						 sap.ui.getCore().attachValidationError(function (oEvent) {

					            oEvent.getParameter("element").setValueState(ValueState.Error);

					        });

					        sap.ui.getCore().attachValidationSuccess(function (oEvent) {

					            oEvent.getParameter("element").setValueState(ValueState.None);

					        });
					},
					
					invalidErrorDialog :function(){
				
						 sap.ui.getCore().byId("login1ErrorDialog").close();
						
					},
					closeErrorDialog:function() {

				        sap.ui.getCore().byId("loginErrorDialog").close();

				  },
					login : function() {
						
						//var userName = $('#username-inner').val();
						//var Password = $('#inputPassword-inner').val();
						
						 oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
					
						 
							
						var userName = 'atgupta';
						var Password = 'admin123';

						if(userName === "" || Password === "") {
							sap.ui.getCore().byId("loginErrorDialog").open();
												
						}else{
							var oModel = new sap.ui.model.json.JSONModel();

							oModel.oHeaders = {
								"DataServiceVersion" : "3.0",
								"MaxDataServiceVersion" : "3.0"
							};
							
						
							var router = this.router;

							$
									.ajax({
										url : 'proxy/http/localhost/smartphonebiz/action/wbser/login1.php',
										//url : 'proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/login1.php',
										data : {
											Userid : userName,
											Password : Password,
											device : 'iOS'
										},

										dataType : 'jSon',
										success : function(result) {
											
											oStorage.put('USERROLE',result.userData.Role);
											oStorage.put('USERID',result.userData.Userid);
											 
											if (result.status == 3) {
												sap.ui.getCore().byId("login1ErrorDialog").open();
												
											} else {
												var oModel = new sap.ui.model.json.JSONModel(
														result.collection);
												var appID = sap.ui.getCore().byId(
														"app");
												appID.setModel(oModel, 'products');
												router.navTo("Category", {
													catIndex : 'model'
												})
											}

										}
									});
						}
					}

				});