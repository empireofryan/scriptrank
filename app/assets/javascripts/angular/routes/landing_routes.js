angular.module('app.routes.landing', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'layout/header.html'
          },
          'mainContent@': {
            template: '<div ui-view></div>'
          }
        }
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
  });