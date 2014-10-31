/**
 * Created by Desting on 31-10-2014.
 */

var express = require('express');
var router = express.Router();
var model = require('../model/ModelMapper');

router.get('/', function(req, res) {
    res.render('about', { title: 'Bonipe' });
});

module.exports = router;