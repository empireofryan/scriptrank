angular.module('app.controllers.scripts.new', [])
  .controller('ScriptsNewController', function ($scope, Auth, ScriptsApi, genres, $state) {
    $scope.actions = {
      submitForm: function () {
        return ScriptsApi.save({script: $scope.script, comment: $scope.comment}).$promise.then(function (response) {
          $state.go('app.scripts.index');
        }, function (response) {
        });
      }
    };
    $scope.genres = genres;
  });
