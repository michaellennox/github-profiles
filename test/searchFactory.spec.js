describe('factory: Search', function() {
  var search;
  var access_token = '?access_token=973539a4af62ea4ac44efa8c78c510dc01632d75';

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .when("GET", "https://api.github.com/search/users" + access_token + "&q=hello")
        .respond(
          { items: 'user search results' }
        );
      httpBackend
        .when("GET",
        "https://api.github.com/users/tansaku" + access_token
        )
        .respond(
          { item: 'single user data' }
        );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#query', function() {
    it('returns search results', function() {
      search.query('hello')
        .then(function(response) {
          expect(response.data.items).toEqual('user search results');
        });
      httpBackend.flush();
    });
  });

  describe('#getUser', function() {
    it('returns a user data', function() {
      search.getUser('tansaku')
        .then(function(response) {
          expect(response.data.item).toEqual('single user data');
        });
      httpBackend.flush();
    });
  });
});
