var helpers = require('./helpers/protractorHelpers.js')

describe('Github Profile Info', function() {
  var profile = element(by.css('.user-login'));

  beforeEach(function() {
    helpers.searchFor('michaellennox');
  });

  it('clicking a profile should open a page about that user', function() {
    profile.click();

    var avatarUrl = element(by.css('.profile-avatar')).getAttribute('src');
    var username = element(by.binding('profileCtrl.user.login')).getText();

    expect(browser.getCurrentUrl()).toContain('/profiles/michaellennox');
    expect(avatarUrl).toEqual('https://avatars.githubusercontent.com/u/14293463?v=3&s=150');
    expect(username).toEqual('michaellennox');
  });

  it('the page should display repository details', function() {
    profile.click();

    var repos = element.all(by.repeater('repo in profileCtrl.repos'));
    expect(repos.get(0).getText()).toContain('airport-javascript');
    expect(repos.get(0).getText()).toContain('Owned By: michaellennox');
  });
});
