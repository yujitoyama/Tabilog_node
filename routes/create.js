
/*
 * GET home page.
 */

mysql = require('mysql');

exports.create = function(req, res) {
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
	
	var sql = "insert into test.mydata(name,mail,tel) values('";
	sql += req.body.name + "','" + req.body.mail + "','"	+ req.body.tel + "')";	
	
	var query = connection.query(sql, function (err, rows) {
		if (err) {
			console.log(err);
		} else 
			res.redirect('/');
	});
}