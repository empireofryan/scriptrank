angular.module('app.routes.scripts', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('scripts', {
        url: '/scripts',
        abstract: true
      })
      .state('scripts.index', {
         url: '',
         controller: 'ScriptsIndexController',
         templateUrl: 'scripts/index.html',
         resolve: {
          scripts: function ($q) {
            return [];
          }
         }
      })
  });