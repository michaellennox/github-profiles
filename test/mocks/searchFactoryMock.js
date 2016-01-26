angular.module('searchFactoryMock', ['GitUserSearch'])
  .config(function($provide) {
    $provide.factory('Search', function($q) {
      return {
        query: function(searchTerm) {
          return $q.when({
            data: { items: 'cat' }
          });
        }
      };
    });
  });
