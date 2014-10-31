var mongoose = require('mongoose');
//var dbSearch = mongoose.model('DetailsSchemaModel');

var model = require('../database/model');

function getAllOrders(callback) {
    model.OrderModel.find(function (err, orders) {
        if (err) {
            callback(err);
        }
        callback(null, orders);
    });
}

function getAllOrderDetails(callback) {
    model.DetailsModel.find(function (err, orderDetails) {
        if (err) {
            callback(err);
        }
        callback(null, orderDetails);
    });
}

function getParticularOrder(id, callback) {
    model.OrderModel.find({_id: id}, function (err, currentOrder) {
        if (err) {
            callback(err);
        }
        callback(null, currentOrder);
    });
}

function getOrderDetailsByOrderID(orderID, callback) {
    model.DetailsModel.find({orderId: orderID}, function (err, currentOrder) {
        if (err) {
            callback(err);
        }
        callback(null, currentOrder);
    });
}

function getCustomerByCustomerIDInOrder(customerID, callback) {
  model.CustomerModel.find({_id: customerID}, function (err, customers) {
      if (err){
          callback(err)
      }
      callback(null, customers)
  })
};

function getEmployeeByEmployeeIDinOrder(employeeID, callback) {
    model.EmployeeModel.find({_id: employeeID}, function (err, employees) {
        if (err){
            callback(err)
        }
        callback(null, employees)
    });
};

function getProductByOrderDetailID(orderDetailID, callback) {
    model.ProductModel.find({_id: orderDetailID}, function (err, product) {
        if (err){
            callback(err)
        }
        callback(null, product)
    });
};

module.exports = {
    getAllOrders: getAllOrders,
    getAllOrderDetails: getAllOrderDetails,
    getParticularOrder : getParticularOrder,
    getOrderDetailsByOrderID : getOrderDetailsByOrderID,
    getCustomerByCustomerIDInOrder : getCustomerByCustomerIDInOrder,
    getEmployeeByEmployeeIDinOrder: getEmployeeByEmployeeIDinOrder,
    getProductByOrderDetailID : getProductByOrderDetailID
}