'use strict';

var dogs = require('./controllers/dogs-controller');


module.exports = function(app){
  // create a dog
  app.post('/dogs/new', dogs.addDog);

  // fetch all dogs
  app.get('/dogs', function(req, res, next){
    res.status(200).json({msg: 'hellooooo'});
  });

  // fetch individual dog by race
  app.get('dogs/:race', function(req, res, next){
    // code here
  });

  // create a new order
  app.post('/order/new', function(req, res, next){
    // code here
  });

};