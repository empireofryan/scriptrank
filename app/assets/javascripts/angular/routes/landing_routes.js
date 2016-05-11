angular.module('app.routes.landing', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
         url: '',
         controller: function () {},
         templateUrl: 'landing.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'auth/login.html'
      })
      .state('registration', {
        url: '/registration',
        controller: 'RegistrationController',
        templateUrl: 'auth/registration.html'
      })
  });