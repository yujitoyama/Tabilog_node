
/*
 * GET home page.
 */

mysql = require('mysql');

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
}