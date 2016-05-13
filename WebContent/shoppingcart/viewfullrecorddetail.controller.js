sap.ui.controller("shoppingcart.viewfullrecorddetail", {
	map: null,
	geocoder: null,
	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf shoppingcart.viewfullrecorddetail
	 */
	onInit : function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function(evt) {
		if ("viewfullrecorddetail" !== evt.getParameter("name")) {
			return;
		}

		this.catIndex = evt.getParameter("arguments").catIndex;
		this.subCatIndex = evt.getParameter("arguments").subCatIndex;
		this.recordOrder = evt.getParameter("arguments").recordOrder;
		
		
		
		var context = sap.ui.getCore().byId("app").getModel('appRecords')
				.getContext('/'+this.recordOrder);
		
		
		this.getView().setBindingContext(context, 'appRecords');

	},

	initialize_map : function () {
	
		
		
		var mapDiv = $('map_canvas');
		console.log(mapDiv);
		console.log(mapDiv.domManip());
		return false;
		geocoder = new google.maps.Geocoder();
		
	        var mapOptions = {  
	            center: new google.maps.LatLng(23.021098, 72.586670),  
	            zoom: 14,  
	            mapTypeId: google.maps.MapTypeId.ROADMAP  
        	};  
	        
	      var mapRef = mapDiv.getDomRef();
	        console.log(mapRef);
//	        console.log(mapOptions);
	        map = new google.maps.Map(mapDiv, mapOptions);
	        alert(5);
	        this.codeAddress();
	},
	
	codeAddress : function () {
		
		geocoder.geocode({
			'address' : 'D-702, Titanium City Centre, Road Near Sachin Tower, Prahladnagar, Anand Nagar, Prahlad Nagar, Ahmedabad, Gujarat 380015'
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
			
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map : map,
					position : results[0].geometry.location
				});
			} else {
				alert("Geocode was not successful for the following reason: "
						+ status);
			}
		});
	},
	

	selectedTab :function(oEvent){
		var selItem = oEvent.getParameters().selectedItem;
		if (selItem.sId === "__filter2_") {
			this.initialize_map();
		};
	},
	
	navigation : function() {
		this.router.navTo("selectedAppRecord", {
			catIndex : this.catIndex,
			appIndex : this.subCatIndex
		});
	},
	
	  openAddRecordModel :function(){
			 sap.ui.getCore().byId("Dialog").open();
		},
		
		save :function(){
			var form= sap.ui.getCore().byId("formId1");
			// insertContent
			console.log(sap.ui.getCore().byId("Dialog").getContent('form'));
			
			 console.log( $('form').serialize() );
		},
		cancel:function() {

	        sap.ui.getCore().byId("Dialog").close();

	  },




 onAfterRendering: function() {
		
 },

// onExit: function() {
//
// }
});