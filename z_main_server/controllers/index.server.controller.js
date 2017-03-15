/**
 * Created by Wayne on 16/4/13.
 */

'use strict';

var path = require('path');

exports.homePage = function (req, res, next) {
  return res.redirect('/site_main/index');
};
exports.mainPage = function (req, res, next) {
  return res.sendfile(path.join(__dirname, '../../z_web_root/site_main/index.html'));
};

exports.homeMapLocation = function (req, res, next) {
  return res.sendfile(path.join(__dirname, '../../z_web_root/site_main/template/map_location.client.view.html'));
};
