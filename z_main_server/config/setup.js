/**
 * Created by Wayne on 15/10/10.
 */

//配置环境

'use strict';

 var config = require('./config');

module.exports = function () {

  if (!process.env) {
    process.env = {};
  }

  process.env.appDb = config.appDb;
  process.env.logDb = config.logDb;

  // var mongo = require('../../libraries/mongoose');
  // require('../../models/all')(mongo.appDb, mongo.mapDb, mongo.logDb, null, mongo.authDb, null, mongo.newAppDb);
};
