
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , index_post = require('./routes/index_post')  
  , add = require('./routes/add')
  , create = require('./routes/create')
  , create_mdb = require('./routes/create_mdb')
  , update = require('./routes/update')
  , edit = require('./routes/edit')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');
	
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('secret','mycom_sercred_key'));
app.use(express.session({key:'session_id'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/', index_post.index);
app.get('/add', add.add);
app.post('/create', create.create);
app.post('/create_mdb',create_mdb.create_mdb)
app.get('/edit/:id', edit.edit);
app.post('/update', update.update);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port fi ' + app.get('port'));
});
