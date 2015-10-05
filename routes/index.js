var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var mongoose = require('mongoose');
var users = mongoose.model('User');

router.get('/users', function(req, res, next) {
  users.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
});

router.param('user', function(req, res, next, id) {
  var query = users.findById(id);

  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('can\'t find post')); }

    req.user = user;
    return next();
  });
});

router.get('/users/:user', function(req, res) {
  res.json(req.user);
});