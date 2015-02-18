/**
 * Created by ron on 2/18/2015.
 */

'use strict';

/* Controllers */

// Form controller
app.controller('ContentAddCtrl', ['$scope', 'fbutil', '$http', '$modal', '$stateParams',
  function($scope, fbutil, $http, $modal, $stateParams) {
    console.log($stateParams);

    $scope.projectId = $stateParams.projectId;

    //var projects = fbutil.syncArray("mharward/projects");

    var content = fbutil.syncArray("mharward/projects/sample/content");
    //content.$add({
    //    contentType: 'video/wistia',
    //    title: 'Introduction on the "Exposure Model"',
    //    version: 1,
    //    permalink: '51x69zworm',
    //    categories: ['webinars'],
    //    tags: [],
    //    content: {
    //        description: "Introduction to earning money with webinars.",
    //        owner: 'mobzen',
    //        videoId: '51x69zworm'
    //    }
    //});

    //console.log(projects);
    //projects.$bindTo($scope, 'projects');
    $scope.projects = projects;

    $scope.newProject = {
      //name: "Testing"
    };

    $scope.delete = function(project) {
      $http.delete('http://hypewebapi.azurewebsites.net/api/project/' + project.$id);
    };

    $scope.create = function() {
      //var project = {
      //  projectId: projectId,
      //  name: name,
      //  description: description
      //};

      $http.post('http://hypewebapi.azurewebsites.net/api/project', $scope.newProject);
      $scope.newProject = {};
      $scope.createForm.$setPristine();
    };

    $scope.open = function() {
      var modalInstance = $modal.open({
        templateUrl: "myModalContent.html",
        controller: "ModalInstanceCtrl2",
        resolve: {
          model: function() {
            return $scope.newProject;
          }
        }
      });

      modalInstance.result.then(function (model) {
        $scope.create()
      }, function () {
        $scope.newProject = {};
      });
    }
  }
]);
