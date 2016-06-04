angular.module('app.controllers.scripts.new', [])
  .controller('ScriptsNewController', function ($scope, Auth, ScriptsApi, genres) {
    $scope.actions = {
      submitForm: function () {
        debugger;
        return ScriptsApi.save({script: $scope.script}).$promise.then(function (response) {
          // this callback will be called asynchronously
          // when the response is available
          $state.go('app.script.index');
        }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        });
      }
    };
    $scope.genres = genres;
  });
