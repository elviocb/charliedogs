'use strict';

// Import knex and define the dabase connection setup
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: 'password',
    database: 'charliesdogs',
    charset: 'utf8'
  }
});

// Instantiate the Bookshelf module passing the connection setup
var Bookshelf = require('bookshelf')(knex);

// Define the Database schema for dogs
Bookshelf.knex.schema.hasTable('dogs').then(function(exists) {
  if (!exists) {
    Bookshelf.knex.schema.createTable('dogs', function (dog) {
      dog.increments('id').primary();
      dog.string('race', 100);
      dog.string('color', 100);
      dog.string('age', 100);
      dog.integer('price');
      dog.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

// Define the Database schema for orders
Bookshelf.knex.schema.hasTable('orders').then(function(exists) {
  if (!exists) {
    Bookshelf.knex.schema.createTable('orders', function (order) {
      order.increments('id').primary();
      order.string('client_name', 200);
      order.string('client_cpf', 100);
      order.string('client_email', 100);
      order.string('client_address', 500);
      order.string('race', 100);
      order.string('color', 100);
      order.integer('quantity', 100);
      order.integer('price');
      order.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = Bookshelf;