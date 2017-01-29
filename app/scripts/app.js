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
    'pascalprecht.translate'
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
      .state('app.about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
      $resourceProvider.defaults.stripTrailingSlashes = false;
  });
