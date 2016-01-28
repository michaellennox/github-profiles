githubUserSearch.controller('GitUserProfileController', ['Search', '$routeParams', function(Search, $routeParams) {
  var self = this;

  self.username = $routeParams.name;

  self.init = function() {
    Search.getUser(self.username)
      .then(function(response) {
        self.user = response.data;
      });
  };

  self.init();
}]);
