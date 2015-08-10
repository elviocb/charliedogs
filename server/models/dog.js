'use strict';

var db = require('../db/config');

var Dog = db.Model.extend({
  tableName: 'dogs',
  hasTimestamps: true
});

module.exports = Dog;