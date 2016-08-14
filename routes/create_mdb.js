
/*
 * GET home page.
 */


//MongoDB事前準備
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//今回利用するスキーマを定義
var mydataSchema = new Schema({
	'name' : String,
	'mail' : String,
	'memo' : String
});

//ベースとなるスキーマからmydataモデルを作成
var MyData = mongoose.model('mydata', mydataSchema);

//データベース接続
var db = mongoose.connect('mongodb://localhost/mydb');

//
exports.create_mdb = function(req, res) {
	var name = req.body.name;
	var mail = req.body.mail;
	var memo = req.body.memo;
	
	var data = new MyData ({
		'name' : name,
		'mail' : mail,
		'memo' : memo
	});
	
	data.save(function(err){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	});
};
