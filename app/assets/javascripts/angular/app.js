angular.module('app', [
   'ngResource',
   'templates',
   'Devise',
   'ui.bootstrap',
   'ngMessages',
   'ngFlash',
   'truncate',
   'ngFileUpload',
   'jkuri.gallery',
   'ui.router',
   'app.controllers',
   'app.routes',
   'app.services'
]).run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, a, b, c, d, e) {
    debugger;
  });
});
