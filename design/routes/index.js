var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET Login page. */
router.get('/Login', function(req, res) {
  res.render('Login', { title: 'Sigin' });
});
/* GET home page. */
router.get('/home', function(req, res) {
  res.render('home', { title: 'home' });
});
/* GET Reg page. */
router.get('/reg', function(req, res) {
  res.render('reg', { title: 'reg' });
});
router.post('/Login',function(req, res){
    console.log('have a post with Login: '+req);
});

/* GET demo_multiparty */
router.get('/demo_multiparty', function(req, res){
    res.render('demo_multiparty', {title: 'demo_multiparty'});
});
module.exports = router;
