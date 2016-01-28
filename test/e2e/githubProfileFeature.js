var mock = require('protractor-http-mock');

describe('Github Profile finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    mock(['gitSearchMock.js']);
  });

  afterEach(function(){
    mock.teardown();
  });

  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    browser.get('http://localhost:8080');
    searchBox.sendKeys('jamiebrown201');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('jamiebrown201');
  });

  it('records the last search', function() {
    browser.get('http://localhost:8080');
    searchBox.sendKeys('a person');
    searchButton.click();

    var lastSearch = element(by.binding('searchCtrl.lastSearchTerm'));
    expect(lastSearch.getText()).toEqual('Results For: a person');
  });
});
