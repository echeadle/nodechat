module.exports.index = index;
// module.exports.login = login;
module.exports.loginProcess = loginProcess;
// module.exports.chat = chat;

// function index(req, res){
//   res.render('index', {title: 'Index'});
// };
// exports.index = function index(req, res){
//   res.render('index', {title: 'Index', cookie: JSON.stringify(req.
//     cookies)});
// };
// exports.index = function index(req, res){
//   res.cookie('IndexCookie', 'This was set from Index');
//   res.render('index', {title: 'Index', cookie: JSON.stringify(req.
//   cookies)});
// };
function index(req, res){
  res.cookie('IndexCookie', 'This was set from Index');
  res.render('index', {title: 'Index', cookie: JSON.stringify(req.
  cookies), session: JSON.stringify(req.session)});
};
exports.login = function chat(req, res){
res.render('login', {title: 'Login'});
};

exports.chat = function chat(req, res){
res.render('chat', {title: 'Chat'});
};

// function login(req, res){
//   res.send('Login');
// };
function loginProcess(req, res){
  res.redirect('/');
};
// function chat(req, res){
//   res.send('Chat');
// };
