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
            return ScriptsApi.get().$promise.then(function (response) {
              return response.scripts;
            });
          }
        }
      })
      .state('app.scripts.new', {
        url: '/new',
        controller: 'ScriptsNewController',
        templateUrl: 'scripts/new.html',
        resolve: {
         genres: function (GenresApi) {
           return GenresApi.get().$promise.then(function (response) {
             return response.genres;
           });
         }
       }
      })

      .state('app.scripts.show', {
        url: '/show/:id',

        
      })
    });
