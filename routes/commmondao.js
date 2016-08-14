
/*
 * GET users listing.
 */

exports.dbinit = function(req, res){
	
	var connection = mysql.createConnection({
		host: 'localhost',
		database: 'test',
		user: 'root',
		password: 'oracle'
	});
	return connection;
};

exports.dbend = function(req, res){
	
	var connection = mysql.createConnection({
		host: 'localhost',
		database: 'test',
		user: 'root',
		password: 'oracle'
	});
	
	  connection.end(function() {
		    // 接続終了
		  });
};

