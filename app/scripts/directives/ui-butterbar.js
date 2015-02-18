/**
 * Created by ron on 2/18/2015.
 */

angular.module('app')
  .directive('uiButterBar', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
    return {
      restrict: 'AC',
      template: '<span class="bar"></span>',
      link: function(scope, el, attrs) {
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function(event) {
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });

        scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
          event.targetScope.$watch('$viewContentLoaded', function() {
            el.addClass('hide').removeClass('active');
          })
        });
      }
    };
  }]);
