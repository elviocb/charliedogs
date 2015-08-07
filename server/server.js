'use strict'
var config  = require('./server-config'),
    express = require('express'),
    app     = express();

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


// Configure server
app.use(express.static(config.static_site_root));

// Server listening
app.listen(config.port, function(){
  console.log('Server running on port', config.port);
})