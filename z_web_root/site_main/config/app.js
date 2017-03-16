/**
 * Created by Wayne on 16/4/19.
 */

'use strict';

var CZT = angular.module('CZT', [
  'ui.router',
  'LocalStorageModule',
  'base64'
]);

CZT.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/site_main/template/home.client.view.html',
      controller: 'HomeController'
    })
    .state('about_us', {
      url: '/about_us',
      templateUrl: '/site_main/template/about_us.client.view.html',
      controller: 'AboutUsController'
    })
    .state('success_case', {
      url: '/success_case',
      templateUrl: '/site_main/template/success_case.client.view.html',
      controller: 'SuccessCaseController'
    })
    .state('business_scope', {
      url: '/business_scope',
      templateUrl: '/site_main/template/business_scope.client.view.html',
      controller: 'BusinessScopeController'
    })
    .state('news_info', {
      url: '/news_info',
      templateUrl: '/site_main/template/news_info.client.view.html',
      controller: 'NewsInfoController'
    })
    .state('contact_us', {
      url: '/contact_us',
      templateUrl: '/site_main/template/contact_us.client.view.html',
      controller: 'ContactUsController'
    })
  ;

  $urlRouterProvider.otherwise('/home');
}]);


CZT.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('zz');
}]);

CZT.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('PublicInterceptor');

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function (obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
    for (name in obj) {
      value = obj[name];

      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if (value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function (data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
}]);

CZT.config(function () {
  //为了解决IE9下，console对象为空的问题。
  // 此时浏览器没有log输出，如果打开了调试器，则console对象存在，可正常输出log，不过需要刷新。
  if (!window.console) {
    window.console = {
      log: function () {
      }
    };
  }
});