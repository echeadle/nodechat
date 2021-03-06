var csrf = require('csurf');
var express = require('express');
var app = express();
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var RedisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');

var routes = require('./routes');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');
var util = require('./middleware/utilities');
var config = require('./config');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser('secret'));
app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
    store: new RedisStore({ url: config.redisUrl })
  })
);
app.use(flash());
app.use(util.templateRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(csrf());
app.use(util.csrf);
app.use(util.authenticated);
console.log('Starting Routes');
console.log('Index');
app.get('/', routes.index);
console.log('login');
app.get('config.routes.login', routes.login);
console.log('post login');
app.post('config.routes.login', routes.loginProcess);
console.log('logout');
app.get('config.routes.login/logout', routes.logOut);
console.log('chat');
app.get('/chat', [util.requireAuthentication], routes.chat);
console.log('errors');
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(config.port);
console.log("App server running on port 3000");
