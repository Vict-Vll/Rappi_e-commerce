'use strict';

/**
 * @ngdoc function
 * @name Rappi.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the Rappi
 */
angular.module('Rappi')
  .controller('CartCtrl', function ($scope, $state, localStorageService) {
    angular.element( document ).ready(function() {
      angular.element('.modal').modal();
    });
    $scope.products=JSON.parse(localStorage.getItem("cart"));
    typeof($scope.products);
    $scope.total=0;
    $scope.products.forEach(function (element, index, array) {
      $scope.total+=element.price;
    });
    $scope.clearAll = function(n) {
      $scope.products = [] ;
      localStorage.setItem("cart", JSON.stringify($scope.products));
      $scope.total=0;
    }
    $scope.infoProduct = function(id) {
      $scope.valid=id;
    }
    $scope.removeCart = function (index) {
      $scope.products.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify($scope.products));
    }
    $scope.refresh = function(){
      $scope.products=JSON.parse(localStorage.getItem("cart"));
      typeof($scope.products);
    }
  });
