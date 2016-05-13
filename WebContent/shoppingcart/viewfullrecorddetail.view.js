sap.ui
		.jsview(
				"shoppingcart.viewfullrecorddetail",
				{

					getControllerName : function() {
						return "shoppingcart.viewfullrecorddetail";
					},

					createContent : function(oController) {

						var tabDetails = sap.ui.getCore().getModel(
								"configListField");
						var DetailScreen = tabDetails.oData.Document.DetailScreen.element;

						tabDetails = tabDetails.oData.Document.DetailPageControl['TabDetails']['Tab'];

						jQuery.sap.require("sap.ui.core.IconPool");
						var aNames = sap.ui.core.IconPool.getIconNames();

						var string = '';
						var oLayout = [];

						for (var i = 0; i < tabDetails.length; i++) {
							var obj = tabDetails[i];

							var recordFields = '';
							var recordValues = '';
							var generalText = '';
							var generalValue = '';
							for (var j = 0; j < DetailScreen.length; j++) {
								var detailObj = DetailScreen[j];
								if (detailObj['Tab'] == obj['value']) {
									recordFields += detailObj['name'] + '\n';
									recordValues += '{appRecords>'
											+ detailObj['name'] + '}' + '\n';
								}
								if (detailObj['Tab'] == 'None') {
									generalText += detailObj['name'] + '\n';
									generalValue += '{appRecords>'
											+ detailObj['name'] + '}' + '\n';
								}
							}

							oLayout[i] = Array(new sap.ui.commons.layout.MatrixLayout(
									{
										layoutFixed : true,
										columns : 2,
										width : '80%',
										widths : [ '10%', '60%' ],

									}).createRow(new sap.ui.commons.TextView({
								text : recordFields,
								design : sap.ui.commons.TextViewDesign.Bold
							}), new sap.ui.commons.TextView({
								text : recordValues

							})));
						}

					    sap.ui.getCore().loadLibrary("openui5.googlemaps", "openui5/googlemaps/");  
						
					    var oMarkers = new openui5.googlemaps.Marker({
						     lat: '21.198240',
						     lng: '79.216919',
						     info: 'Map',
						     icon: 'resources/pinkball.png',
						     animation: 0,
						     draggable: true,
						     //dragEnd: onMarkerDragEnd
						  });
						
					   
						  var oMap = new openui5.googlemaps.Map("map1", {
							     lat: '21.198240',
							     lng: '79.216919',
							     zoom: 12,
//							     width: '600px',
//							     height: '400px',
							     layoutData: new sap.ui.layout.GridData({
							         span: "L8 M12 S12"
							     })
						  		,
							     markers: [oMarkers]
							  });

						  
						var tabArray = [];

						for (var i = 0; i < tabDetails.length; i++) {
							var obj = tabDetails[i];
							tabArray[i] = Array(new sap.m.IconTabFilter({ // Icon
								// Tabbar
								// text
								icon : "sap-icon://hint",
								text : obj['name'],
								key : i,
								content : [ oLayout[i] ]
							// Detail off pertiqular tab
							}));
						}
						
						
						tabArray[2]=Array(new sap.m.IconTabFilter({ // Icon
							icon : "sap-icon://hint",
							text : 'map',
							key : i,
							
							content : [oMap 
//							           new sap.ui.core.HTML(                                            
//				                    {                                                    
//				                        content : "<div id='mapCanvas' style='width:800px; height: 320px;'></div>",
//				                       // preferDOM : true, // boolean
//				                     }
//				                    ),
							]
						// Detail off pertiqular tab
						}));
						
						var generalText = new sap.ui.commons.layout.MatrixLayout(
								'generalRecords', {
									layoutFixed : true,
									columns : 2,
									width : '80%',
									widths : [ '10%', '60%' ],

								}).createRow(new sap.ui.commons.TextView({
							text : generalText,
							design : sap.ui.commons.TextViewDesign.Bold
						}), new sap.ui.commons.TextView({
							text : generalValue
						// text :recordValues
						}));
						var iconbar = new sap.m.IconTabBar({
							expanded : "{device>/isNoPhone}",
							select : function(evt){
								oController.selectedTab(evt);
							},
							items : [ tabArray ],
						})

						var oDialog = new sap.m.Dialog("Dialog", {
							title : "Details of New Entry",
							modal : true,
							contentWidth : "1em",
							// buttons : [ oButton2, oButton3 ],
							content : [ new sap.ui.layout.form.SimpleForm({
								maxContainerCols : 2,
								editable : true,
								content : [ new sap.ui.commons.Label({
									text : "Name"
								}), new sap.ui.commons.TextField({
									value : "Max"
								}),  new sap.ui.commons.Label({
									text : "Date of birth"
								}), new sap.ui.commons.DatePicker({
									yyyymmdd : "19990909"
								}), new sap.ui.commons.Label({
									text : "Gender"
								}), new sap.ui.commons.RadioButtonGroup({
									columns : 2,
									items : [ new sap.ui.core.Item({
										text : "male"
									}), new sap.ui.core.Item({
										text : "female"
									}) ]
								}),
								new sap.ui.core.Title({text:"Address"}),
								new sap.ui.commons.Label({text:"Street/ Number"}),
								new sap.ui.commons.TextField({value:"Musterstraße"}),
								new sap.ui.commons.TextField({value:"10"}),
								new sap.ui.commons.Label({text:"Zip Code/ City"}),
								new sap.ui.commons.TextField({value:"69190"}),
								new sap.ui.commons.TextField({value:"Walldorf"}),
								new sap.ui.commons.Label({text:"Country"}),
								new sap.ui.commons.TextField({value:"Germany"}),
								new sap.ui.core.Title({text:"Contact"}),
								new sap.ui.commons.Label({text:"Phone"}),
								new sap.ui.commons.TextField(),
								new sap.ui.commons.Label({text:"Mobile"}),
								new sap.ui.commons.TextField(),
								new sap.ui.commons.Label({text:"Email"}),
								new sap.ui.commons.TextField(),
								new sap.ui.core.Title({text:"Office"}),
								new sap.ui.commons.Label({text:"Location"}),
								new sap.ui.commons.TextField(),
								new sap.ui.commons.Label({text:"Building"}),
								new sap.ui.commons.TextField(),
								new sap.ui.commons.Label({text:"Room"}),
								new sap.ui.commons.TextField()
								]
							
							})

							]
						});

						return new sap.m.Page({
							title : "App Records views",
							content : [ generalText, iconbar ],
							showNavButton : true,
							navButtonPress : function() {
								oController.navigation();

							},

							footer : new sap.m.Bar({
								contentLeft : [

										new sap.m.Button({
											text : "Add",
											// style: sap.m.ButtonStyle.Emph,
											type : 'Emphasized',
											icon : sap.ui.core.IconPool
													.getIconURI('add'),
											press : function() {
												oController
														.openAddRecordModel();
											}
										}),
										new sap.m.Button({
											text : "Edit",
											type : "Reject",
											icon : sap.ui.core.IconPool
													.getIconURI('edit')
										}),
										new sap.m.Button({
											text : "Copy",
											icon : sap.ui.core.IconPool
													.getIconURI('duplicate'),
											type : "Accept"
										}),

								]
							}),

						});
					}

				});