var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('welcome', { title: 'MongoDB Viewer' });
});

module.exports = router;
