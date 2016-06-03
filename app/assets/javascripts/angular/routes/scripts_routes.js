angular.module('app.routes.scripts', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.scripts', {
        url: '/scripts',
        template: '<div ui-view></div>',
        abstract: true
      })
      .state('app.scripts.index', {
       url: '',
       controller: 'ScriptsIndexController',
       templateUrl: 'scripts/index.html',
       resolve: {
          scripts: function (ScriptsApi) {
            return ScriptsApi.get().then(function (response) {
              return response.scripts;
            });
          }
        }
      })
      .state('app.scripts.new', {
        url: '/new',
        controller: 'ScriptsNewController',
        templateUrl: 'scripts/new.html'
      })
    });
