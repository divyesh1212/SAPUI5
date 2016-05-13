sap.ui
		.jsview(
				"shoppingcart.viewfullrecorddetail",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf shoppingcart.viewfullrecorddetail
					 */
					getControllerName : function() {
						return "shoppingcart.viewfullrecorddetail";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf shoppingcart.viewfullrecorddetail
					 */
					createContent : function(oController) {

						jQuery.sap.require("sap.ui.core.IconPool");
						var aNames = sap.ui.core.IconPool.getIconNames();

						var elementArray = [ 'ReportNo', 'RoadDetails',
								'ProblemDetails', 'ProblemType', 'ReportDate',
								'Time', 'YourName', 'LastName', 'PhNo',
								'EmailID', 'Location', 'AdditionalInfo',
								'Status' ];

						var string = '';

//						for (var i = 0; i < elementArray.length; i++) {
//							string += elementArray[i] + ': {approcords>'
//									+ elementArray[i] + '} \n';
//						}
//
//						var oTable = new sap.m.Table("viewFullRecord", {
//							inset : true,
//							columns : [ new sap.m.Column({
//								hAlign : "Left",
//								demandPopin : true,
//								popinDisplay : "Block",
//								minScreenWidth : sap.m.ScreenSize.Medium
//							}),
//
//							]
//						});
//
//						var oTemplate = new sap.m.ColumnListItem({
//							type : sap.m.ListType.Active,
//							cells : [ new sap.m.Text({
//								text : string,
//							}),
//
//							]
//						});
//
//						oTable.bindAggregation("items", "approcords>/",
//								oTemplate);
//
//						oTemplate.attachPress(function(evt) {
//							oController.selectedAppName(evt);
//
//						})

						var oButton2 = new sap.m.Button("Save", {
							text : "Save",
							tap : [ oController.save, oController ]
						});

						var oButton3 = new sap.m.Button("Cancel", {
							text : "Cancel",
							tap : [ oController.cancel, oController ]

						});
						
						var iconbar = new sap.m.IconTabBar(
								{
									expanded : "{device>/isNoPhone}",
									items : [
											new sap.m.IconTabFilter(
													{
														icon : "sap-icon://hint",
														text : "sap-icon",
														key : 1,
														content : [
																new sap.m.Label(
																		'',
																		{
																			text : 'User name'
																		}

																),
																new sap.ui.commons.TextField(
																		'username2',
																		{
																			width : '200px',

																		}),
																new sap.m.Label(
																		{
																			text : 'Password'
																		}),
																new sap.ui.commons.PasswordField(
																		'password2',
																		{
																			width : '200px'
																		})

														]
													}),

											new sap.m.IconTabFilter(
													{
														icon : "https://sapui5.netweaver.ondemand.com/sdk/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png",
														text : "Custom icon",
														key : 4,
														content : [
																new sap.m.Text(
																		{
																			text : "Custom icon from url"
																		}),

														]
													}),
											new sap.m.IconTabFilter(
													{
														icon : "sap-icon://hint",
														text : "Custom icon",
														key : 4,
														content : [
																new sap.m.Text(
																		{
																			text : "Custom icon from url"
																		}),

														]
													}),
											new sap.m.IconTabFilter(
													{
														icon : "https://sapui5.netweaver.ondemand.com/sdk/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png",
														text : "Custom icon",
														key : 4,
														content : [
																new sap.m.Text(
																		{
																			text : "Custom icon from url"
																		}),

														]
													}),
											new sap.m.IconTabFilter(
													{
														icon : "https://sapui5.netweaver.ondemand.com/sdk/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png",
														text : "Custom icon",
														key : 4,
														content : [
																new sap.m.Text(
																		{
																			text : "Custom icon from url"
																		}),

														]
													})

									],

								})
						

						var oDialog = new sap.m.Dialog(
								"Dialog",
								{
									title : "Details of New Entry",
									modal : true,
									contentWidth : "1em",
									buttons : [ oButton2, oButton3 ],
									content : [ new sap.ui.layout.form.SimpleForm(
											'formId1',
											{

												// title : 'Login Page',

												content : [
												           new sap.m.IconTabBar(
														{
															expanded : "{device>/isNoPhone}",
															items : [
																	new sap.m.IconTabFilter(
																			{
																				icon : "sap-icon://hint",
																				text : "sap-icon",
																				key : 1,
																				content : [
																						new sap.m.Label(
																								'',
																								{
																									text : 'User name'
																								}

																						),
																						new sap.ui.commons.TextField(
																								'username1',
																								{
																									width : '200px',

																								}),
																						new sap.m.Label(
																								{
																									text : 'Password'
																								}),
																						new sap.ui.commons.PasswordField(
																								'password1',
																								{
																									width : '200px'
																								})

																				]
																			}),

																	new sap.m.IconTabFilter(
																			{
																				icon : "https://sapui5.netweaver.ondemand.com/sdk/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png",
																				text : "Custom icon",
																				key : 4,
																				content : [
																						new sap.m.Text(
																								{
																									text : "Custom icon from url"
																								}),

																				]
																			}),
																	new sap.m.IconTabFilter(
																			{
																				icon : "sap-icon://hint",
																				text : "Custom icon",
																				key : 4,
																				content : [
																						new sap.m.Text(
																								{
																									text : "Custom icon from url"
																								}),

																				]
																			}),
																	new sap.m.IconTabFilter(
																			{
																				icon : "https://sapui5.netweaver.ondemand.com/sdk/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png",
																				text : "Custom icon",
																				key : 4,
																				content : [
																						new sap.m.Text(
																								{
																									text : "Custom icon from url"
																								}),

																				]
																			}),
																	new sap.m.IconTabFilter(
																			{
																				icon : "https://sapui5.netweaver.ondemand.com/sdk/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png",
																				text : "Custom icon",
																				key : 4,
																				content : [
																						new sap.m.Text(
																								{
																									text : "Custom icon from url"
																								}),

																				]
																			})

															],

														})

												]
											}) ]
								});

						return new sap.m.Page({
							title : "App Records views",
							content : [ iconbar ],
							showNavButton : true,
							navButtonPress : function() {
								oController.navigation();

							},

							footer : new sap.m.Bar({
								contentLeft : [
										// new sap.m.Text({
										// text : "SmartPhoneBizApp",
										// }) ,

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
										// sap.ui.core.IconPool.getIconURI('account')
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