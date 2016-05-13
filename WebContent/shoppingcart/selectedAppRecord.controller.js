sap.ui
		.controller(
				"shoppingcart.selectedAppRecord",
				{

					onInit : function() {
						var string = '';
						this.router = sap.ui.core.UIComponent.getRouterFor(this);
						this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
						//this.router.attachRoutePatternMatched(this._onObjectMatched, this);
						
						
						
					},
					
					_onObjectMatched: function(oEvent) {
						
						
//						var configListField = sap.ui.getCore().getModel("configListField");
//						 configListField=configListField.oData.Document.ListField.element;
//						 console.log(configListField);
//						 return configListField;

					},
					_handleRouteMatched : function(evt) {
						
						this.onBeforeRendering();
						if ("selectedAppRecord" !== evt.getParameter("name")) {
							return;
						}
						this.subCatIndex = evt.getParameter("arguments").catIndex;
						this.appIndex = evt.getParameter("arguments").appIndex;
						
						var configListField = sap.ui.getCore().getModel("configListField");
						configListField=configListField.oData.Document.ListField.element;
						
					
//						this.string='';
//						for (var i = 0; i < configListField.length; i++) {
//							this.string += configListField[i].name + ': {appRecords>' + configListField[i].name+ '} \n';
//						}
//						alert(this.string);

					},
				
					selectedAppName : function(oEvent) {
						var oBindingContext = oEvent.getSource().getBindingContext('appRecords');
						var sPath = oBindingContext.sPath;
						var start = sPath.lastIndexOf("/") + 1;
						var recordOrder = sPath.substring(start, sPath.length);
						
						
						this.router.navTo("viewfullrecorddetail", {
							catIndex : this.subCatIndex,
							subCatIndex : this.appIndex,
							recordOrder :recordOrder
						})


					},

					handleNavButtonPress: function () {
						var oSplitApp = this.getView().getParent().getParent();
					    var oMaster = oSplitApp.getMasterPages()[1];
					    alert(oMaster);
					    oSplitApp.toMaster(oMaster, "flip");
					},

				
					onAfterRendering : function() {
						
					},
				
					onBeforeRendering : function(oEvent) {
						
					
					},
				

					onExit : function() {
						
					}

				});