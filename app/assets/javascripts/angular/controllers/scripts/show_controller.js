(function(){
  'use strict';

  angular
    .module('app.controllers.scripts.show', [])
    .controller('ShowController', ShowController);

  function ShowController($scope, ScriptsApi, $stateParams){
    var scriptLoader = function(){
      ScriptsApi.get({script_id: $stateParams.id}).$promise.then(function(data){
        $scope.script = data.scripts;
      })
    }

    scriptLoader();
  }
})();