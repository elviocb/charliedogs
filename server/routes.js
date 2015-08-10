'use strict'

module.exports = function(app){
  // create a dog
  app.post('/dogs/new', function(req, res, next){
    // res.status(200).json('Helllllloooooooo');
  });

  // fetch all dogs
  app.get('dogs', function(req, res, next){
    // code here
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