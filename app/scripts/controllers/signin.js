/**
 * Created by ron on 2/18/2015.
 */

'use strict';

//signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $scope.user = {};
  $scope.authError = null;
  $scope.login = function() {
    $scope.authError = null;
    //try to login
    $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if(!response.data.user) {
          $scope.authError = 'Email or Password are not correct';
        } else {
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server error';
      });
  }
}]);
