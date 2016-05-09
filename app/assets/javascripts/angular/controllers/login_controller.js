angular.module('app.controllers.login', [])
  .controller('LoginController', function ($scope, Auth) {
    $scope.actions = {
      login: function () {
        Auth.login($scope.user).then(function () {

        });
      }
    };
  });
