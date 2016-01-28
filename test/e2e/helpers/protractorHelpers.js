module.exports.searchFor = function(searchTerm) {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  browser.get('http://localhost:8080');
  searchBox.sendKeys(searchTerm);
  searchButton.click();
}
