angular.module('app.routes', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
         url: '',
         controller: function () {},
         templateUrl: 'home.html'
      })

  });