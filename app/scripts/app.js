'use strict';

/**
 * @ngdoc overview
 * @name rappiApp
 * @description
 * # rappiApp
 *
 * Main module of the application.
 */
angular
  .module('rappiApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
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
      .state('app.home', {
        url: "/",
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('app.about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
      $resourceProvider.defaults.stripTrailingSlashes = false;
  });
