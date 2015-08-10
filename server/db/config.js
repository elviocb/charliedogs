'use strict';

var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: 'password',
    database: 'charliedogs',
    charset: 'utf8'
  }
});

db.knex.schema.hasTable('dogs').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('dogs', function (dog) {
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

module.exports = db;