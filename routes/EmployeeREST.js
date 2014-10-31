/**
 * Created by bobkoo on 10/30/14.
 */
var express = require('express');
var debug = require('debug')('templating');
var model = require('../model/ModelMapper');
var router = express.Router();

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var employee;
    model.getEmployeeByEmployeeIDinOrder(id, function (err, currentEmployee) {
        if (currentEmployee[0]) {
            employee =currentEmployee[0];
        }else{
            employee = 'Your database is not working correctly therefore I cannot find information for this Employee :)';
        }
        res.render('employee', {employee: employee });
    });
});

module.exports = router;