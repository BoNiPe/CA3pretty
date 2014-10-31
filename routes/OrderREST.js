var express = require('express');
var debug = require('debug')('templating');
var model = require('../model/ModelMapper');
var router = express.Router();

router.get('/', function(req, res) {
    model.getAllOrders(function (err, orders) {
        console.log('Hello from OrderREST (getAllOrders)');
        orders.sort(function(a, b) {
            a = new Date(a.orderDate);
            b = new Date(b.orderDate);
            return b-a;
        });
        res.render('orderlist',{title:"Order List", orders: orders});
    });
});

router.get('/', function(req, res) {
    model.getAllOrderDetails(function (err, orderDetails) {
        console.log('Hello from OrderREST (getAllOrderDetails)');
        res.render('orderdetails',{title:"Order List", orders: orderDetails});
    });
});

module.exports = router;
