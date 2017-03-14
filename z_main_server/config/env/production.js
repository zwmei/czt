'use strict';

module.exports = {
  env: 'production',
  appDb: 'mongodb://localhost/czt-dev',
  logDb: 'mongodb://localhost/czt-log-dev',
  serverAddress: 'http://localhost:3002/',
  port: process.env.PORT || 3002
};
