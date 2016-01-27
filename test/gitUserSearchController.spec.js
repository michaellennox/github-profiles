describe('GitUserSearchController', function() {
  var searchFactoryMock;
  var ctrl;

  beforeEach(function() {
    searchFactoryMock = jasmine.createSpyObj('Search', ['query']);
    module('GitUserSearch', {
      Search: searchFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    ctrl = $controller('GitUserSearchController');
    searchFactoryMock.query.and.returnValue($q.when({ data: {items: 'cat'} }));
    scope = $rootScope;
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$apply();
      expect(ctrl.searchResult.items).toEqual('cat');
    });
  });
});
