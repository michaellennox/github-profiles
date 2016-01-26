githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;

  var access_token = '973539a4af62ea4ac44efa8c78c510dc01632d75';
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      {
        q: self.searchTerm,
        access_token: access_token
      }
    );
  };
}]);
