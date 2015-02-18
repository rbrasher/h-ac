'use strict';

/**
 * @ngdoc overview
 * @name hAcApp
 * @description
 * # hAcApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    //'ngAria',
    'ngCookies',
    //'ngMessages',
    'ngResource',
    //'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.load',
    'ui.jq',
    'oc.lazyLoad',
    'pascalprecht.translate',
    'firebase.utils'
  ]);

/*
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {

      })
      .when('/about', {

      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/
