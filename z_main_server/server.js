'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
  config = require('./config/config'),
  setup = require('./config/setup')();

// Init the express application
var app = require('./config/express')();
app.listen(config.port);


console.log('========================Main Server=====================');
console.log('Main Server!');
console.log('enviroment:', process.env.NODE_ENV);
console.log('z application started on address ' + config.serverAddress);
console.log('z application started on port ' + config.port);
console.log('========================Main End=====================');