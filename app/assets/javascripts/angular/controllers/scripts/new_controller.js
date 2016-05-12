angular.module('app.controllers.scripts.new', [])
  .controller('ScriptsNewController', function ($scope, Auth, $http) {
    $scope.actions = {
      submitForm: function () {
        return $http.post('/api/v1/scripts.json', {script: $scope.script}).then(function successCallback(response) {
          debugger;
        // this callback will be called asynchronously
        // when the response is available
        }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        });
      }
    }
  });