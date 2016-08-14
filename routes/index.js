
/*
 * GET home page.
 */

mysql = require('mysql');

//MongoDB事前準備
var mongoose = require('mongoose');
/*
var Schema = mongoose.Schema;

//今回利用するスキーマを定義
var mydataSchema = new Schema({
	'name' : String,
	'mail' : String,
	'memo' : String
});

//ベースとなるスキーマからmydataモデルを作成
//var MyData = mongoose.model('mydata', mydataSchema);
*/
//データベース接続
var db = mongoose.connect('mongodb://localhost/mydb');

exports.index = function(req, res) {
	
	
	
	
//var conf = "tcp://root:oracle@localhost:3306/test";

	var connection = mysql.createConnection({
		host: 'localhost',
		database: 'test',
		user: 'root',
		password: 'oracle'
	});
	
	connection.connect(function(err) {
		  if (err) {
		    console.error('error connecting: ' + err.stack);
		    return;
		  }
		  console.log('connected as id ' + connection.threadId);
		});
	
	var query = connection.query('select * from test.mydata', function (err, rows) {
		if (err) {
			console.log(err);
			res.redirect('/');
		} else 
            res.render('index', {
                title : 'Express',
                msg : 'MyDataの一覧リスト2',
                datas : rows
        });
	});


db.mydatas.find(function(err,docs){
	if(err){
		console.log(err);
	}
	res.render('add',{
		title: 'Express&MongoDB',
		datas:docs
	});
});

};