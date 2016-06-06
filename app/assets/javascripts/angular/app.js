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
]).run(function ($rootScope, Auth, $location) {
  $rootScope.$on('$stateChangeError', function (event, a, b, c, d, e) {
    debugger;
  });

// $rootScope.$on('$stateChangeStart', function (event, next, current) {
//   // if route requires auth and user is not logged in
//   if (next.url != '/login' && !Auth.isAuthenticated()) {
//     // redirect back to login
//     event.preventDefault();
//     $location.path('/login');
//   }
// });
});
