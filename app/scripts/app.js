'use strict';

/**
 * @ngdoc overview
 * @name Rappi
 * @description
 * # Rappi
 *
 * Main module of the application.
 */
angular
  .module('Rappi', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate',
    'LocalStorageModule'
  ])
  .config(function ($stateProvider,$urlRouterProvider,$resourceProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('app', {
        url: "",
        templateUrl:'views/main.html',
        controller: 'MainCtrl',
        abstract:true
      })
      .state('app.products', {
        url: "/",
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .state('app.cart', {
        url: "/cart",
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .state('app.search', {
        url: "/search",
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      });
      $resourceProvider.defaults.stripTrailingSlashes = false;
  });
