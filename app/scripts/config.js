/**
 * Created by ron on 2/13/2015.
 */

'use strict';

var app = angular.module('app')
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function($controllerProvider, $compileProvider, $filterProvider, $provide) {
      //lazy controller, directive and service
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
    //Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
    //tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    //tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }])
//where to redirect users if they need to authenticate (see routeSecurity.js)
.constant('loginRedirectPath', '/access/signin')

.constant('FBURL', 'https://hype-io.firebaseio.com')

//double check that the app has been configured before running ut and blowing up space and time
.run(['FBURL', '$timeout', function(FBURL, $timeout) {
    if(FBURL.match('//INSTANCE.firebaseio.com')) {
      angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
      $timeout(function() {
        angular.element(document.body).removeClass('hide');
      }, 250);
    }
  }]);
