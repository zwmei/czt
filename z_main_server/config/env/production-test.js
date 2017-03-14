'use strict';

module.exports = {
  env: 'production-test',
  appDb: 'mongodb://localhost/czt-dev',
  logDb: 'mongodb://localhost/czt-log-dev',
  serverAddress: 'http://cvs001.com:3002/',
  port: process.env.PORT || 3002
};
