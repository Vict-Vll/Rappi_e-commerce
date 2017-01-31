'use strict';

/**
 * @ngdoc function
 * @name Rappi.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the Rappi
 */
angular.module('Rappi')
  .controller('SearchCtrl', function ($scope, $http, localStorageService) {
    $http({
      method : "GET",
      url : "scripts/js/data.json"
    }).then(function mySucces(response) {
      $scope.products = response.data.products;
      $scope.products.forEach(function (element, index, array) {
        var index = index;
        $scope.price = element ;
        $scope.price = $scope.price.price.replace(".", "");
        $scope.price = parseFloat($scope.price);
        $scope.products[index].price = $scope.price;
      });
      $scope.categories = response.data.categories;
    }, function myError(response) {
      $scope.error = response.statusText;
    });
  });
