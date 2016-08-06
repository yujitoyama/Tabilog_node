
/*
 * GET home page.
 */

exports.index = function(req, res){
	var msg = ''
	if(req.session.login != true){
		msg = 'ログインしてください';
	}else{
		msg = 'ID' + req.session.name + 'でログインしています。';
	}
	res.render('index', {
	  title: 'Express',
	  msg: msg
  });
};