/**
 * Created by ron on 2/18/2015.
 */

'use strict';

app.controller('ToasterDemoCtrl', ['$scope', 'toaster', function($scope, toaster) {
  $scope.toaster = {
    type: 'success',
    title: 'Title',
    text: 'Message'
  };

  $scope.pop = function() {
    toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
  };
}]);
