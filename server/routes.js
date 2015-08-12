'use strict';

var dogs = require('./controllers/dogs-controller');
var orders = require('./controllers/orders-controller');


module.exports = function(app){
  // create a dog
  app.post('/dogs/new', dogs.addDog);

  // fetch all dogs
  app.get('/dogs', dogs.getDogs);

  // fetch individual dog by race
  app.get('/dogs/:race', dogs.getDogsRace);

  // create a new order
  app.post('/orders/new', orders.createOrder);

};