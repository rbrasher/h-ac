/**
 * Created by ron on 2/13/2015.
 */

var app = angular.module('app')
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function($controllerProvider, $compileProvider, $filterProvider, $provide) {
      //laxy controller, directive and service
      app.controller = $controllerProvider.register;
      app.directive = $compileProvider.directive;
      app.filter = $filterProvider.register;
      app.factory = $provide.factory;
      app.service = $provide.service;
      app.constant = $provide.constant;
      app.value = $provide.value;
  }])

  .config(['$translateProvider', function($translateProvider) {
    //register a loader for the static files
    //so, the module will search for missing translation tables under the specified urls.
    //Those urls are [prefix][langKey][suffex].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
    //tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    //tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }])
