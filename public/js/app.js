(function() {
  'Use Strict';

  angular.module('egenApp', ['ngRoute', 'ngMessages']);

  angular.module('egenApp').config(function($routeProvider) {

    //set up routes
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'listController'
      })
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'secondController'
      })
      .when('/create', {
        templateUrl: 'partials/create.html',
        controller: 'listController'
      })
  });
})()

