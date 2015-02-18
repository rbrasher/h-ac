/**
 * Created by ron on 2/18/2015.
 */

'use strict';

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', function($scope, $translate, $localStorage, $window) {
    //add ie classes to html
    var isIE = !!navigator.userAgent.match(/MSIE/i);
    isIE && angular.element($window.document.body).addClass('ie');
    isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

    //config
    $scope.app = {
      name: 'Hype.io',
      version: '0.1.0 alpha',
      copyright: 'Hype.io',
      baseUrl: 'http://hype.io',
      //chart colors
      color: {
        primary:  '#7266ba',
        info:     '#23b7e5',
        success:  '#27c24c',
        warning:  '#fad733',
        danger:   '#f05050',
        light:    '#e8eff0',
        dark:     '#3a3f51',
        black:    '#1c2b36'
      },
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: false,
        asideFolded: false,
        asideDock: false,
        container: false
      }
    }

    //save settings to local storage
    if(angular.isDefined($localStorage.settings)) {
      $scope.app.settings = $localStorage.settings;
    } else {
      $localStorage.settings = $scope.app.settings;
    }

    $scope.$watch('app.settings', function() {
      if($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
        //aside docked and fixed, must set header as fixed
        $scope.app.settings.headerFixed = true;
      }
      //save to local storage
      $localStorage.settings = $scope.app.settings;
    }, true);

    //angular translate
    $scope.lang = {isopen: false};
    $scope.langs = {en: 'English', de_DE: 'German', it_IT: 'Italian'};
    $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
    $scope.setLang = function(langKey, $event) {
      //set the current language
      $scope.selectLang = $scope.langs[langKey];
      //you can change the language during runtime
      $translate.use(langKey);
      $scope.lang.isopen = !$scope.lang.isopen;
    };

    function isSmartDevice($window) {
      // Adapted from http://www.detectmobilebrowsers.com
      var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
      // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
      return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }
  }]);
