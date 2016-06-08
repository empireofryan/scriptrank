angular.module('app', [
  'ngResource',
  'templates',
  'Devise',
  'ui.bootstrap',
  'ngMessages',
  'ngFlash',
  'truncate',
  'ui.router',
  'app.controllers',
  'app.routes',
  'app.services',
  'app.directives'
]).run(function ($rootScope, Auth, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  });

  // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
  //   // if route requires auth and user is not logged in
  //   var authenticationRequired = toState.name.match('app.scripts');
  //
  //   if (authenticationRequired && !Auth.isAuthenticated()) {
  //     // redirect back to login
  //     event.preventDefault();
  //     $state.go('app.landing');
  //   }
  // });
});
