describe('GitUserSearchController', function() {
  var ctrl;
  var scope;

  beforeEach(module('GitUserSearch', 'searchFactoryMock'));

  beforeEach(inject(function($controller, $rootScope) {
    ctrl = $controller('GitUserSearchController');
    scope = $rootScope;
  }));

  it('initializes with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
    expect(ctrl.lastSearchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$digest();
      expect(ctrl.searchResult.items).toEqual('cat');
    });
  });
});
