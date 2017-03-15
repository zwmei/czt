'use strict';

CZT.factory('PublicInterceptor', [function () {
  return {
    'request': function (req) {
      req.data = req.data ? req.data : {};
      req.params = req.params ? req.params : {};
      //如果不是html请求，则取最新数据
      if (req.url && req.url.indexOf('.html') === -1) {
        req.params.no_cache = new Date().getTime();
      }
      return req;
    },
    'response': function (resp) {
      return resp;
    },
    'requestError': function (rejection) {
      return rejection;
    },
    'responseError': function (rejection) {
      return rejection;
    }
  };
}]);
