/**
 * Created by ron on 2/18/2015.
 */

angular.module('setNgAnimate', ['$animate', function($animate) {
  return {
    link: function($scope, $element, $attrs) {
      $scope.watch(function() {
        return $scope.$eval($attrs.setNgAnimate, $scope);
      }, function(valnew, valold) {
        $animate.enabled(!!valnew, $element);
      });
    }
  };
}]);
