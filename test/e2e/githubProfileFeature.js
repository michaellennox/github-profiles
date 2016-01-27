var mock = require('protractor-http-mock');

describe('Github Profile finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    mock([{
      request: {
        path: 'https://api.github.com/search/users?q=jamiebrown201',
        method: 'GET'
      },
      response: {
        data: {
          items: {
            login: "jamiebrown201",
            avatar_url: "https://avatars.githubusercontent.com/u/196474?v=3",
            html_url: "https://github.com/jamiebrown201"
          }
        }
      }
    }]);
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
});
