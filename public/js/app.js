var githubUserSearch = angular.module('GitUserSearch', ['ngResource', 'ngRoute']);

githubUserSearch.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/templates/search.html'
      })
      .when('/profiles/:name', {
        templateUrl: '../views/templates/profile.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
