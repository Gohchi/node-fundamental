var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res) {
  // GET customers
  //res.render('index', { title: 'Express' });
});

router.put('/customer', function(req, res) {
  // PUT customers
  //res.render('index', { title: 'Express' });
});

module.exports = router;