describe('GitUserProfileController', function() {
  var searchFactoryMock;
  var ctrl;
  var $controller;

  beforeEach(function() {
    searchFactoryMock = jasmine.createSpyObj('Search', ['getUser']);
    module('GitUserSearch', {
      Search: searchFactoryMock
    });
  });

  beforeEach(inject(function(_$controller_, $q, $rootScope) {
    $controller = _$controller_
    searchFactoryMock.getUser.and.returnValue($q.when({ data: 'user data' }));
    scope = $rootScope;
  }));

  beforeEach(function() {
    ctrl = $controller(
      'GitUserProfileController',
      { $routeParams: {name: 'michaellennox'} }
    );
  })

  it('initializes with a username set to the routeParams.name', function() {
    expect(ctrl.username).toEqual('michaellennox');
  });

  it('initializes with a user set to the response of calling getUser on the Search factory', function() {
    scope.$digest();
    expect(ctrl.user).toEqual('user data')
  });
});
