/**
 * Created by Wayne on 16/4/19.
 */

'use strict';

CZT.controller('IndexController',
  ['$rootScope', '$scope', 'GlobalEvent',
    function ($rootScope, $scope, GlobalEvent) {

      $scope.onBodyClick = function (event) {
        console.log('body click');
        $rootScope.$broadcast(GlobalEvent.onBodyClick, event);
      };

      $scope.isCurrentNavigation = function (pathname) {
        return window.location.href.indexOf(pathname) > 0;
      }
    }
  ]);
