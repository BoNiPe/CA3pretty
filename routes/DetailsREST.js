var express = require('express');
var debug = require('debug')('templating');
var model = require('../model/ModelMapper');
var models = require('../database/model');
var router = express.Router();

router.get('/', function(req, res) {
    model.getAllOrderDetails(function (err, orderDetails) {
        console.log('Hello from detailsREST (getAllOrderDetails)');
        res.render('orderdetails',{title:"Details List", orders: orderDetails});
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var order;
    var details;

    model.getParticularOrder(id, function (err, particularOrder) {
        console.log("Hello from detailsREST (getParticularOrder) "+ particularOrder);
        order = particularOrder[0];

        model.getOrderDetailsByOrderID(id, function (err, OrderDetailsByProduct) {
            console.log("Hello from detailsREST (getOrderDetailsByOrderID) "+ OrderDetailsByProduct);
            details = OrderDetailsByProduct;

            var price = new Array();
            details.forEach(function(current) {
                price.push(current.unitPrice*current.quantity*(1-current.discount));
            });
            var sum = 0;
            price.forEach(function(current) {
                sum += current;
            });

            var productName = new Array();
            details.forEach(function(current) {
                model.getProductByOrderDetailID(current.productId, function(err, currentProduct){
                    console.log('Hello from detailsREST (getProductByOrderDetailID)' + currentProduct);
                    if (currentProduct[0]) {
                        console.log('My name: '+ currentProduct[0].name);
                        productName.push(currentProduct[0].name);
                    }else{
                        productName.push('NO PRODUCT');
                    }
                });
            });
            model.getEmployeeByEmployeeIDinOrder(particularOrder[0].employeeId, function (err, currentEmployee){
            console.log('Hello from detailsREST (getEmployeeByEmployeeIDinOrder)' + currentEmployee);

                    res.render('index', {product: order, details : details, price: price, sum: sum,
                        employee: currentEmployee[0].firstName + ' ' +  currentEmployee[0].lastName,
                    productName : productName});
            });
        });
    });
});

module.exports = router;