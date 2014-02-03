
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	
	$('#initbutton').on('tap', function() {
		STORAGE.init();
		WL.Logger.info('初期化しました。');
	});
	
	$('#putbutton').on('tap', function() {
		STORAGE.put();
		WL.Logger.info('データをプットしました。');
	});

	//find-name
	$('#searchButton').on('tap', function () {
		// Get value from the search field
		var searchField = $('input#searchInput').val();

		// Create the query object
		var ssk_options = {
			exact : false,
			limit : 10
		};
		var ssk_query = {
			key : searchField
		};

		// Perform the search
		WL.JSONStore.get(collectionName).find(ssk_query, ssk_options)
			.then(function (ssk_res) {
				WL.Logger.info(ssk_res);
			    // Replace with template
			    var ssk_result = $("#itemTemplate").render(ssk_res);
			    $("#listview").empty().append(ssk_result).listview("refresh");
			})
			.fail(function (errorObject) {
				WL.Logger.error(errorObject.msg);
			});
	});
	
}
/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}