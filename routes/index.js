module.exports.index = index;
// module.exports.login = login;
module.exports.loginProcess = loginProcess;
// module.exports.chat = chat;

function index(req, res){
  res.render('index', {title: 'Index'});
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
