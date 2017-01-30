'use strict';

/**
 * @ngdoc function
 * @name Rappi.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the Rappi
 */
angular.module('Rappi')
  .controller('MenuCtrl', function ($scope,localStorageService) {
    angular.element('.button-collapse.right').sideNav({
      menuWidth: '300px',
      edge: 'right',
      closeOnClick: true,
      draggable: true
    });
    angular.element('.button-collapse.left').sideNav({
      menuWidth: '300px',
      edge: 'left',
      closeOnClick: true,
      draggable: true
    });
  });
