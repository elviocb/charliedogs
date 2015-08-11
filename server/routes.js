'use strict';

var dogs = require('./controllers/dogs-controller');


module.exports = function(app){
  // create a dog
  app.post('/dogs/new', dogs.addDog);

  // fetch all dogs
  app.get('/dogs', dogs.getDogs);

  // fetch individual dog by race
  app.get('/dogs/:race', dogs.getDogsRace);

  // create a new order
  app.post('/order/new', function(req, res, next){
    // code here
  });

};