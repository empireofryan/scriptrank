(function(){
  'use strict';

  angular
    .module('app.controllers.scripts.show', [])
    .controller('ShowController', ShowController);

  function ShowController($scope, ScriptsApi, $stateParams, Auth, ScriptCommentsApi){
    var scriptLoader = function(){
      return ScriptsApi.get({script_id: $stateParams.id}).$promise.then(function(data){
        $scope.script = data;
      });
    };

    $scope.image = "http://emojipedia-us.s3.amazonaws.com/cache/f8/69/f869f6512b0d7187f4e475fc9aa7f250.png";

    $scope.pdf = "https://4.bp.blogspot.com/-A4UAkPrRSRo/VNjzEfVTU_I/AAAAAAAAB7Q/8HfGtfc5xrk/s1600/download_pdf.png";

    $scope.submitComment = function () {
      return ScriptCommentsApi.save($scope.newComment).$promise.then(function (comment) {
        $scope.script.comments.push(comment);
        delete $scope.newComment.description;
      });
    };

    $scope.upvote = function(){
      ScriptsApi.upvote({script_id: $stateParams.id}, {}).$promise.then(function(data){
        $scope.script.upvotes_count++;
      });
    }

    scriptLoader().then(function () {
      $scope.newComment = {
        user_id: Auth._currentUser.id,
        script_id: $scope.script.id
      };
    });
  }
})();
