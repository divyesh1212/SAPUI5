sap.ui
		.controller(
				"shoppingcart.applist",
				{

					onInit : function() {

						this.router = sap.ui.core.UIComponent
								.getRouterFor(this);
						this.router.attachRoutePatternMatched(
								this._handleRouteMatched, this);
					},
					navigation : function() {

						this.router.navTo("App")
					},

					handleNavButtonPress : function() {

						var oSplitApp = this.getView().getParent().getParent();
						var oMaster = oSplitApp.getMasterPages()[0];
		
						oSplitApp.toMaster(oMaster, "flip");
					},

					_handleRouteMatched : function(evt) {
						if ("applist" !== evt.getParameter("name")) {
							return;
						}

						this.subCatIndex = evt.getParameter("arguments").subCatIndex;

						var context = sap.ui.getCore().byId("app").getModel(
								'products').getContext(
								'/collection/' + this.subCatIndex);
						this.getView().setBindingContext(context, 'products');

					},
					navigation : function() {

						var selectedAppRecordID = new sap.ui.getCore()
								.byId("selectedAppRecord");

						this.router.navTo("Category", {
							catIndex : 'model'
						})
					},

					itemSelect : function(evt) {

						var oItem = sap.ui.getCore().byId('appListId')
								.getSelectedItem();
						var App = oItem.getBindingContext('products')
								.getProperty('App');

						var UserSpecific = oItem.getBindingContext('products')
								.getProperty('UserSpecific');
						var App = oItem.getBindingContext('products')
								.getProperty('App');

						var router = this.router;
						var subCatIndex = this.subCatIndex;

						$
								.ajax({
									url : 'proxy/http/localhost/smartphonebiz/action/wbser/config_ws.php',
									//url : 'proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/config_ws.php',
									dataType : 'jSon',
									type : 'GET',
									data : {
										appName : App,
										userRole : oStorage.get('USERROLE')
									},
									success : function(configresponse) {
										var oconfigListFieldModel = new sap.ui.model.json.JSONModel(
												configresponse);
										
										sap.ui.getCore().setModel(oconfigListFieldModel,'configListField');
									}
								});

						$
								.ajax({
									url : 'proxy/http/localhost/smartphonebiz/action/wbser/dataconfig_ws.php',
									//url : 'proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/dataconfig_ws.php',
									
									dataType : 'jSon',
									type : 'GET',
									data : {
										appName : App,
										userID : oStorage.get('USERID'),
										userSpecific : UserSpecific
									},
									success : function(response) {

										var oModel = new sap.ui.model.json.JSONModel(
												response.Document.Item.ObjectItem);

										var appID = sap.ui.getCore()
												.byId("app");
										appID.setModel(oModel, 'appRecords');

										var list = sap.ui.getCore().byId(
												'appListId');
										var sItem = list.getSelectedItem();

										var oBindingContext = sItem
												.getBindingContext('products');
										var sPath = oBindingContext.sPath;

										var start = sPath.lastIndexOf("/") + 1;
										var appIndex = sPath.substring(start,
												sPath.length);

										router.navTo("selectedAppRecord", {
											catIndex : subCatIndex,
											appIndex : appIndex
										});
									}
								});

					},

					productPress : function(oEvent) {

						var oBindingContext = oEvent.getSource()
								.getBindingContext('products');
						var sPath = oBindingContext.sPath;

						var start = sPath.lastIndexOf("/") + 1;
						var context = sap.ui.getCore().byId("app").getModel(
								'products').getContext(sPath);

						var productIndex = sPath.substring(start, sPath.length);
						this.router.navTo("selectedAppRecord", {
							catIndex : this.catIndex,
							subCatIndex : this.subCatIndex,
							productIndex : productIndex
						})
						
					
						this.router.navTo("selectedAppRecord", {
							catIndex : 1,
							subCatIndex : 2
						})
					},

				// onAfterRendering: function() {
				//
				// },

				// onExit: function() {
				//
				// }
				});