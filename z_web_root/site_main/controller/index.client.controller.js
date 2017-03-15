/**
 * Created by Wayne on 16/4/19.
 */

'use strict';

AgilePopsWeb.controller('IndexController',
  ['$rootScope', '$scope', 'GlobalEvent',
    function ($rootScope, $scope, GlobalEvent) {

      $scope.onBodyClick = function (event) {
        $rootScope.$broadcast(GlobalEvent.onBodyClick, event);
      };


    }
  ]);
