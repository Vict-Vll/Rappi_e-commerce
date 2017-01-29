'use strict';

/**
 * @ngdoc function
 * @name rappiApp.config: TranslateProvider
 * @description
 * # Translate
 * Config of the rappiApp
 */
angular.module('rappiApp')
  .config(['$translateProvider', function ($translateProvider) {
    // add translation tables
    $translateProvider.useStaticFilesLoader({
      files: [{
        prefix: 'language/',
        suffix: '.json'
      }]
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }]);
