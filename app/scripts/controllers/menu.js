'use strict';

/**
 * @ngdoc function
 * @name rappiApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the rappiApp
 */
angular.module('rappiApp')
  .controller('MenuCtrl', function ($scope) {
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
