'use strict';

/**
 * @ngdoc function
 * @name Rappi.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the Rappi
 */
angular.module('Rappi')
  .controller('ProductsCtrl', function ($scope, $http,localStorageService) {
    $scope.shoppingCart=[];
    if(localStorageService.isSupported) {
      $scope.shoppingCart=JSON.parse(localStorage.getItem("cart"));
      typeof($scope.products);
    }
    $http({
      method : "GET",
      url : "scripts/js/data.json"
    }).then(function mySucces(response) {
      $scope.products = response.data.products;
      $scope.categories = response.data.categories;
    }, function myError(response) {
      $scope.error = response.statusText;
    });

    angular.element( document ).ready(function() {
      angular.element('.carousel.carousel-slider').carousel({fullWidth: true});
      angular.element('.modal').modal();
      angular.element('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false,
        belowOrigin: true
      });
      angular.element('select').material_select();
    });
    $scope.infoProduct = function(id) {
      $scope.valid=id;
    }
    $scope.addCart = function(id) {
      $scope.shoppingCart.push(id);
      localStorage.setItem("cart", JSON.stringify($scope.shoppingCart));
    }
  });
