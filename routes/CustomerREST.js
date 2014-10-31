/**
 * Created by bobkoo on 10/30/14.
 */
var express = require('express');
var debug = require('debug')('templating');
var model = require('../model/ModelMapper');
var router = express.Router();

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var customer;
    model.getCustomerByCustomerIDInOrder(id, function (err, currentCustomer) {
        if (currentCustomer[0]) {
            customer =currentCustomer[0];
        }else{
            customer = 'Your database is not working correctly therefore I cannot find information for this Customer :)';
        }
        res.render('customer', {customer: customer});
    });
});

module.exports = router;