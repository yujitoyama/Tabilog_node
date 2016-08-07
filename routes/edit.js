
/*
 * GET home page.
 */

mysql = require('mysql');

exports.edit = function(req, res) {
//var conf = "tcp://root:oracle@localhost:3306/test";
	var connection = mysql.createConnection({
		host: 'localhost',
		database: 'test',
		user: 'root',
		password: 'oracle'
	});
	
	var query = connection.query('select * from test.mydata', function (err, rows) {
		if (err) {
			console.log(err);
			res.redirect('/');
		} else 
            res.render('edit', {
                title : 'Express',
                msg : 'MyDataの一覧リスト2',
                datas : rows
        });
	});
}