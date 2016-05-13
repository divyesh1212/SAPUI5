sap.ui.jsview("shoppingcart.Category", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.Category
	*/ 
	getControllerName : function() {
		return "shoppingcart.Category";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.Category
	*/ 
	createContent : function(oController) {
		
		var sf = new sap.m.SearchField({
            placeholder: "Search",
            showRefreshButton: true,
            liveChange: oController.PR_Search,
            search: oController.PR_Search,
            tooltip: "Search for objects..",
        });
		
		
//		var po_list = new sap.m.List({
//			id: "listId",
//			mode: sap.m.ListMode.SingleSelectMaster,
//			select: function(evt) {
//				oController.itemSelect(evt);
//			}
//		})
		
		  var po_list = new sap.m.List("listId", {
             // inset: false,
  			id: "listId",
  			mode: sap.m.ListMode.SingleSelectMaster,
  			select: function(evt) {
  				oController.itemSelect(evt);
  			}
          });
		
		
		 var V_List_itemtemplate = new sap.m.StandardListItem({
			 title: "{products>model}",
				description:"{products>model} \n {products>model}",
				info :"{products>model}",
//				icon:"{products>model}",
//				infoState:{
//					path: 'Status',
//					formatter: 'sap.m.sample.StandardListItemInfo.Formatter.status'
//				},
				
				press:function(evt){
					oController.categoryListItemPress(evt);
				}
         });
		
		 po_list.bindItems({
             path: "products>/collection",
             template: V_List_itemtemplate,
         });
		
		
//		oList.bindItems({
//			path : "products>/collection", 
//			template : new sap.m.StandardListItem({
//				title: "{products>model}",
//				description:"{products>model} \n {products>model}",
//				info :"{products>model}",
//				
//				press:function(evt){
//					oController.categoryListItemPress(evt);
//				}
//			})
//		});
		
		
		
		
		
		
//	alert(oList);
 		return new sap.m.Page({
			title: "Model Name",
			
			content: [sf,po_list],
			
		});
	}

});