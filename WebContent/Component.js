jQuery.sap.declare("sap.demo.cart.Component");

sap.ui.core.UIComponent
		.extend(
				"sap.demo.cart.Component",
				{

					metadata : {
						routing : {
							config : {
								viewType : "JS",
								viewPath : "shoppingcart",
								targetControl : "splitApp",
								clearTarget : false,
								transition : "slide",
								setMode:'ShowHideMode'
							},

							routes : [
									{
										pattern : "",
										name : "Login",
										 view : "Login",
										targetAggregation : "detailPages",
									
									},
									
									{
										pattern : "model",
										name : "Category",
										 view : "Category",
										targetAggregation : "masterPages",
										subroutes : [ {
											pattern : "model",
											name : "Welcome",
											view : "Welcome",
											targetAggregation : "detailPages",
										}

										]
									},
									
									{
										pattern : "model/{catIndex}/{subCatIndex}/{recordOrder}",
										name : "viewfullrecorddetail",
										view : "viewfullrecorddetail",
										targetAggregation : "detailPages",

									},
									
									
									{
										pattern : "model/{catIndex}/{appIndex}",
										id:'selectedAppRecord',
										name : "selectedAppRecord",
										view : "selectedAppRecord",
										targetAggregation : "detailPages",
									
										callback:function(){
											
										}

									},
					
									{
										pattern : "model/{subCatIndex}",
										name : "applist",
										view : "applist",
										targetAggregation : "masterPages",
										subroutes : [
												{
													pattern : "model/{subCatIndex}/{subCatIndex}",
													name : "ProductInfo",
													view : "ProductInfo",
													targetAggregation : "detailPages",
												}, ]
									} ]

						}

					},
					init : function() {

						jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
						jQuery.sap.require("sap.ui.core.routing.HashChanger");

						// call createContent
						sap.ui.core.UIComponent.prototype.init.apply(this,
								arguments);

						this._router = this.getRouter();

						// initlialize the router
						this._routeHandler = new sap.m.routing.RouteMatchedHandler(
								this._router);
						this._router.initialize();
						
						/* Master menu */
						var deviceModel = new sap.ui.model.json.JSONModel({
						    isPhone: sap.ui.Device.system.phone
						});
						this.setModel(deviceModel, "device");
                      /* End master menu */
					},
					createContent : function() {
						var oView = sap.ui.view({
							id : "app",
							viewName : "shoppingcart.App",
							type : "JS",
							viewData : {
								component : this
							}
						});
					return oView;
					}
				})
