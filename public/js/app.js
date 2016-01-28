var githubUserSearch = angular.module('GitUserSearch', ['ngResource', 'ngRoute']);

githubUserSearch.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/templates/search.html',
        // resolve: {
        //   delay: function($q, $timeout) {
        //   var delay = $q.defer();
        //   $timeout(delay.resolve, 100);
        //   return delay.promise;
        //   }
        // }
      })
      .when('/profiles/:name', {
        templateUrl: '../views/templates/profile.html',
        // resolve: {
        //   delay: function($q, $timeout) {
        //   var delay = $q.defer();
        //   $timeout(delay.resolve, 1000);
        //   return delay.promise;
        //   }
        // }
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
