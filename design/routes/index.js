var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user');
var querystring = require('querystring');
var util = require('util');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET Login page. */
router.get('/Login', function(req, res) {
  res.render('Login', { title: '用户登录' });
});
/* GET home page. */
router.get('/home', function(req, res) {
  res.render('home', { title: '首页' });
});
/* GET Reg page. */
router.get('/reg', function(req, res) {
  res.render('reg', { title: '用户注册' });
});

/* Post Login page. */
router.post('/Login',function(req, res){
    console.log('have a post with Login: '+req);
});
/* Post reg page. */
router.post('/reg',function(req,res){
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');
  var newUser = new User({
  name : req.body.userName,
  email : req.body.email,
  password : password
  });
    //检查email是否已被注册
  User.get(newUser.email,function(err,user){
    if(user)err = '邮箱已被注册，请使用其他的邮箱注册';
    if(err){
        console.log(err);
        //newMessage = new Message({name : 'error', info : err,});
        //req.session.message = newMessage;
        //return res.redirect('/ureg');
    }

    newUser.save(function(err){
        if(err){
        //newMessage = new Message({name : 'error', info : err,});
        //req.session.message = newMessage;
        //return res.redirect('/ureg');
        console.log(err);
        }
    });
 
  });
  console.log(req.body.password);
  console.log('user:'+util.inspect(newUser));
  res.redirect('/home');
/*    
var post = ''+querystring.parse();
    fs.writeFile('req.txt',util.inspect(req),'UTF-8',function       (err,data){
    if(err){
    console.log(err);
}
});*/
   // console.log('a post , req :'+util.inspect(req.body));
    
});

/* GET demo_multiparty */
router.get('/demo_multiparty', function(req, res){
    res.render('demo_multiparty', {title: 'demo_multiparty'});
});
module.exports = router;
