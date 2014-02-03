
/* JavaScript content from js/jsonStore.js in folder common */
STORAGE = {};
var collectionName = 'reports';

STORAGE.init = function(){
	var collections = {};
	var options = {};
	collections[collectionName] = {};
	collections[collectionName].searchFields = {key:'string'};
	//実際はユーザ入力等で取得します。
	options.password = "secret";
	
	WL.JSONStore.init(collections, options)
	.fail(function(errorObject){
		WL.Logger.error("JSONStore の初期化に失敗しました： " + errorObject);
	});
};

STORAGE.put = function(){
	
	// マスタデータの用意
	var key1 = "A001";
	var reports1 = {
		"itemCode": "A001",
		"itemName": "商品A001"
	};
	reports1.key = key1;
	
	var key2 = "A002";
	var reports2 = {
		"itemCode": "A002",
		"itemName": "商品A002"
	};
	reports2.key = key2;
	
	var key3 = "A003";
	var reports3 = {
		"itemCode": "A003",
		"itemName": "商品A003"
	};
	reports3.key = key3;
	
	var key4 = "B001";
	var reports4 = {
		"itemCode": "B001",
		"itemName": "商品B001"
	};
	reports4.key = key4;
	
	var key5 = "B002";
	var reports5 = {
		"itemCode": "B002",
		"itemName": "商品B002"
	};
	reports5.key = key5;
	
	var key6 = "B003";
	var reports6 = {
		"itemCode": "B003",
		"itemName": "商品B003"
	};
	reports6.key = key6;
	
	//登録方法選択
	//1つずつ登録する場合
	kobetsu(reports1,reports2,reports3,reports4,reports5,reports6);
	
	//一括登録する場合
	//ikkatsu(reports1,reports2,reports3,reports4,reports5,reports6);

};

function kobetsu(reports1,reports2,reports3,reports4,reports5,reports6){

	var options = {};

	WL.JSONStore.get(collectionName).add(reports1,options)
	.then(function(){
		WL.Logger.debug("■A001とうろく");
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("A001マスタ登録に失敗しました。：  " + errorObject);
		}}]);
	});

	WL.JSONStore.get(collectionName).add(reports2,options)
	.then(function(){
		WL.Logger.debug("■A002とうろく");
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("A002マスタ登録に失敗しました。：  " + errorObject);
		}}]);
	});

	WL.JSONStore.get(collectionName).add(reports3,options)
	.then(function(){
		WL.Logger.debug("■A003とうろく");
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("A003マスタ登録に失敗しました。：  " + errorObject);
		}}]);
	});

	WL.JSONStore.get(collectionName).add(reports4,options)
	.then(function(){
		WL.Logger.debug("■B001とうろく");
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("B001マスタ登録に失敗しました。：  " + errorObject);
		}}]);
	});

	WL.JSONStore.get(collectionName).add(reports5,options)
	.then(function(){
		WL.Logger.debug("■B002とうろく");
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("B002マスタ登録に失敗しました。：  " + errorObject);
		}}]);
	});

	WL.JSONStore.get(collectionName).add(reports6,options)
	.then(function(){
		WL.Logger.debug("■B003とうろく");
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("B003マスタ登録に失敗しました。：  " + errorObject);
		}}]);
	});
	
};

function ikkatsu(reports1,reports2,reports3,reports4,reports5,reports6){
	
	var options = {};
	var repo = [reports1,reports2,reports3,reports4,reports5,reports6];
	
	WL.JSONStore.get(collectionName).add(repo,options)
	.then(function(){
		var dialogTitle = "更新完了";
		var dialogText = "マスタ更新が正常に完了しました。";
		WL.SimpleDialog.show(dialogTitle , dialogText , [{
			text : 'メニューに戻る',
			handler : function(){
				$.mobile.changePage('#page1');
			}
		}
		]);
	})
	.fail(function(errorObject){
		var dialogTitle = "エラー";
		var dialogText = "マスタ一括登録に失敗しました。";
		WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
			WL.Logger.error("マスタ一括登録に失敗しました。：  " + errorObject);
		}}]);
	});

};


STORAGE.get = function(key,callback){
	var options = {
			exact: false,
			limit:10
	};
	var query = {key: key};
	WL.JSONStore.get(collectionName)
	.find(query, options)
	.then(function(arrayResults){
		var dialogTitle = "確認";
		var dialogText = "該当商品は登録されていません。";
		if(arrayResults.length == 0)
			WL.SimpleDialog.show(dialogTitle,dialogText,[{text:"OK",handler:function(){
				
			}}]);
		else
			callback(arrayResults[arrayResults.length-1].json);
	});
};
