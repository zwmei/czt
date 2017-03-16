'use strict';

CZT.factory('PublicInterceptor', [function () {
  return {
    'request': function (req) {
      req.data = req.data ? req.data : {};
      req.params = req.params ? req.params : {};
      req.params.no_cache = new Date().getTime();
      req.params.access_token = new Date().getTime();

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
