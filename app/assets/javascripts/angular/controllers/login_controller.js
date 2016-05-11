angular.module('app.controllers.login', [])
  .controller('LoginController', function ($scope, $state, Auth) {
    $scope.actions = {
      login: function() {
        Auth.login($scope.user).then(function(){
          //Message.success("Signed in successfully.")
          $state.go('app.scripts.index');
        }, function(response) {
          //Message.danger(response.data.error);
        });
      }
    };
  });
