angular.module('app.controllers.scripts.index', [])
  .controller('ScriptsIndexController', function (scripts, Auth, $scope){
    console.log(scripts);
    $scope.scripts = scripts;
  });
