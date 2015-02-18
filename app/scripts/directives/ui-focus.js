/**
 * Created by ron on 2/18/2015.
 */

angular.module('app')
  .directive('uiFocus', function($timeout, $parse) {
    return {
      link: function (scope, element, attr) {
        var model = $parse(attr.uiFocus);
        scope.$watch(model, function (value) {
          if (value === true) {
            $timeout(function () {
              scope.$apply(model.assign(scope, false));
            });
          }
        })
      }
    };
  });
