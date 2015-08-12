'use strict';

var db = require('../db/config');
var Order = require('./order');

var Dog = db.Model.extend({
  tableName: 'dogs',
  hasTimestamps: true,
  order: function() {
    return this.belongsTo(Order);
  }
});

module.exports = Dog;