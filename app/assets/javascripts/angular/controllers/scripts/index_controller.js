angular.module('app.controllers.scripts.index', [])
  .controller('ScriptsIndexController', function (scripts, Auth, $scope){
    console.log(scripts);
    $scope.scripts = scripts;

  var ctrl = this;
      ctrl.checkboxModel = {
      drama: false,
      comedy: false,
      horror: false,
      scifi: false,
    }
  });
