/**
 * Created by ron on 2/18/2015.
 */

'use strict';

//signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $scope.user = {};
  $scope.authError = null;
  $scope.signup = function() {
    $scope.authError = null;
    //try to create
    $http.post('api/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if(!response.data.user) {
          $scope.authError = response;
        } else {
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
  };
}]);
