'use strict'
var config  = require('./server-config'),
    express = require('express'),
    app     = express();

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Configure server
app.use(express.static(config.static_site_root));

// Router
var routes = require('./routes.js');
routes(app);

// Server listening
app.listen(config.port, function(){
  console.log('Server running on port', config.port);
})