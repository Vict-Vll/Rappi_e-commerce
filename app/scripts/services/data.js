'use strict';
/**
 * @ngdoc function
 * @name Rappi.factory:Data
 * @description
 * # Data
 * Factory of the Rappi
 */
angular.module('Rappi')
  .factory('Data', function ($resource, Config) {
    return $resource(Config.URL,{},{ get: { method: "GET", isArray: true }
    })
  });
