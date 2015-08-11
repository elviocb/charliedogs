'use strict';
var db = require('../db/config');
var Dog = require('../models/dog');

var Dogs = db.Collection.extend({
  model: Dog
});

module.exports = Dogs;