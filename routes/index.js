var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Welcome to my solution for task developed by Dream Broker', { title: result });
});
module.exports = router;
