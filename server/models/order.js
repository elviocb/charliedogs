'use strict';

var db = require('../db/config');
var Dog = require('./dog');

var Order = db.Model.extend({
  tableName: 'orders',
  hasTimestamps: true,
  dogs: function() {
    return this.hasOne(Dog);
  }
});

module.exports = Order;