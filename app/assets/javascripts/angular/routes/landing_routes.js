angular.module('app.routes.landing', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('app.landing', {
         url: '',
         controller: function () {},
         templateUrl: 'landing.html'
      })
      .state('app.login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'auth/login.html'
      })
      .state('app.registration', {
        url: '/registration',
        controller: 'RegistrationController',
        templateUrl: 'auth/registration.html'
      })
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
          scripts: function ($q) {
            return [];
          }
         }
      })
  });