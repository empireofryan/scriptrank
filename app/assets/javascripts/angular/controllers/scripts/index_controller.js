angular.module('app.controllers.scripts.index', [])
  .controller('ScriptsIndexController', function (scripts, Auth) {
    alert('hello');
    $scope.scripts = scripts;
  });