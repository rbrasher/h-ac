/**
 * Created by ron on 2/18/2015.
 */

'use strict';

app.controller('SliderCtrl', function($scope) {
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };

  $scope.currencyFormatting = function(value) {
    return "$" + value.toString();
  }
});
