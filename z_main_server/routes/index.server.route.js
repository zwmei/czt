/**
 * Created by Wayne on 16/4/13.
 */

'use strict';

var index = require('../controllers/index');

module.exports = function (app) {
  app.route('/').get(index.homePage);
};
