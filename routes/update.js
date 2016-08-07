
/*
 * GET home page.
 */

mysql = require('mysql');

exports.update = function(req, res) {
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
	
//    var sql = "update mydata set name = '" + req.body.name
//    + "',mail = '" + req.body.mail + "', tel = '"
//    + req.body.tel + "' where id = " + req.body.id;
	
	var sql = "update test.mydata set name = ?, mail = ?, tel = ? where id = ?";
	var query = connection.query(sql, [req.body.name, req.body.mail,
                                        req.body.tel, req.body.id ],function (err, rows) {
		if (err) {
			console.log(err);
		} else 
			res.redirect('/');
	});
}