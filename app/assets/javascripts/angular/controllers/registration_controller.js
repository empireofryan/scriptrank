angular.module('app.controllers.registration', [])
  .controller('RegistrationController', function ($scope, Auth, $state) {
    $scope.actions = {
      register: function() {
        Auth.register($scope.user).then(function(){
          $state.go('scripts.index');
        }, function(response) {
        });
      }
    };
  });