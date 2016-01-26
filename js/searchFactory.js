githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var access_token = '973539a4af62ea4ac44efa8c78c510dc01632d75';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': access_token
        }
      });
    }
  };
}]);
