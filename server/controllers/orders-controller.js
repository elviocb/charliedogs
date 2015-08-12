'use strict';

var Order = require('../models/order');

exports.createOrder = function(req, res, next) {
  // Grab new order info from the request
  var orderInfo = {
    'client_name': req.body.name,
    'client_cpf': req.body.cpf,
    'client_email': req.body.email,
    'client_address': req.body.address,
    'dog_id': req.body.dog_id,
    'quantity': req.body.quantity
  }



  // Make sure all dog's informations are filled;
  for(var info in orderInfo) {
    if(orderInfo[info] === undefined) {
      console.log('Missing data from createOrder:', info);
      return res.status(401).json({error: true, data:{msg:'Missing data: ' + info}});
    }
  }

  // Save the order
  Order.forge(orderInfo)
     .save()
     .then(function(order){
          console.log('Order successfuly placed');
          res.status(201).json({error: false, data: order});
        });
};