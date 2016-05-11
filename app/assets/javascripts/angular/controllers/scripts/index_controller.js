angular.module('app.controllers.scripts.index', [])
  .controller('ScriptsIndexController', function (scripts, Auth) {
    $scope.scripts = scripts;
  });