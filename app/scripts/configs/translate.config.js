'use strict';

/**
 * @ngdoc function
 * @name Rappi.config: TranslateProvider
 * @description
 * # Translate
 * Config of the Rappi
 */
angular.module('Rappi')
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
