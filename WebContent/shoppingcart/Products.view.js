sap.ui.jsview("shoppingcart.Products", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.Products
	*/ 
	getControllerName : function() {
		return "shoppingcart.Products";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.Products
	*/ 
	createContent : function(oController) {
		
		jQuery.sap.require("sap.ui.core.IconPool");
		var aNames = sap.ui.core.IconPool.getIconNames(); 
		
		

		
		var oTable = new sap.m.Table("productsTable",{
			inset: true,
			columns: [
			          //image
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //title/desc
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //price
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //Set Hidden Column
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "10px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),

			          
			]
		});
		
		var oTemplate = new sap.m.ColumnListItem({
			type: sap.m.ListType.Active,
			cells: [
//			        new sap.m.Image({
//			        	src: "resources/sapui5.jpg",
//			        	//src :'sURI/{products>iConClass}',
//			        	height: "100px"
//			        }),
			        
			        new sap.ui.core.Icon({  
		                src : sap.ui.core.IconPool.getIconURI(aNames[10] ),  
		                size : "50px",  
		                color : "#333333",  
		                activeColor : "white",  
		                activeBackgroundColor : "#333333",  
		                hoverColor : "#eeeeee",  
		                hoverBackgroundColor : "#666666",  
		                width : "60px",  
		              visible :false,
		            }).addStyleClass( "fontIcon" ) ,
			        
			        new sap.m.Text({
			        	text: "Title :{products>description} ",
			        	
			        	//visible :false,
			        }),
			        
			        new sap.ui.core.Icon({  
		                src : sap.ui.core.IconPool.getIconURI( aNames[Math.floor((Math.random() * 10) + 1)] ),  
		                size : "50px",  
		                color : "#333333",  
		                activeColor : "white",  
		                activeBackgroundColor : "#333333",  
		                hoverColor : "#eeeeee",  
		                hoverBackgroundColor : "#666666",  
		                width : "60px",  
		                visible :false,
		            }),
		            new sap.m.Text({
			        	text: "{products>App}",
			        	visible :false,
			        }),
			        
			]
		});
		
			
		oTable.bindAggregation("items","products>App",oTemplate);
		
		oTemplate.attachPress(function(evt) {
			oController.productPress(evt);
					
		})
		
				
 		return new sap.m.Page({
			title: "App Name",
			content: [oTable],
			showNavButton: true,
			navButtonPress: function() {
				oController.navigation();
				//navigation;
//				alert(1);
//				this.router.navTo("Products");
//				window.history.go(-1);
			},
			footer: new sap.m.Bar({
				contentLeft: [
				              new sap.m.Text({text: "SmartPhoneBizApp",})
				]
			}),
			
		});
	}

});