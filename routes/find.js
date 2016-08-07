exports.find = function(req, res) {
        res.render('find', {
                title : 'Express',
                msg : '検索文字を入力ください。',
                find : '',
                datas : []
        });
};


exports.find_post = function(req, res) {
        var conf = "tcp://mynavi:nodejs@localhost:5432/mynavi_db";
        pg.connect(conf, function(err, client) {
                if (err) {
                        console.log(err);
                        res.redirect('/find');
                } else {
                        var sql = "select * from mydata where name like '%" + req.body.find
                                        + "%'";
                        client.query(sql, function(err, result) {
                                if (err) {
                                        console.log(err);
                                        res.redirect('/find');
                                } else {
                                        res.render('find', {
                                                title : 'Express',
                                                msg : '[' + req.body.find + ']の検索結果',
                                                find : req.body.find,
                                                datas : result.rows
                                        });
                                }
                        });
                }
        });
};