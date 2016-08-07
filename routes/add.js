
/*
 * GET home page.
 */

exports.add = function(req, res) {
            res.render('add', {
                title : 'Express',
                msg : '送信してください',
	});
}