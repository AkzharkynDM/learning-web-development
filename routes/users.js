var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the page responible for users, which doesnt have anything yet');
});

module.exports = router;
