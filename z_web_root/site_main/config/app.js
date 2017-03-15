/**
 * Created by Wayne on 16/4/19.
 */

'use strict';

var AgilePopsWeb = angular.module('AgilePopsWeb', [
  'ui.router',
  'LocalStorageModule',
  'base64'
]);

AgilePopsWeb.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
