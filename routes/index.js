var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' , name:'ABC'});
});


router.get('/signup', function(req, res, next) {

  res.render('signup', { title: 'Express' , name:'ABC'});
});

module.exports = router;
