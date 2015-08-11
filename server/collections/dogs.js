'use strict';

var Dog = require('../models/dog');

var Dogs = Bookshelf.Collection.extend({
  model: Dog
});