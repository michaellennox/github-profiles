exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  mocks: {
    default: [],
    dir: 'mocks'
  },
  onPrepare: function(){
    require('protractor-http-mock').config = {
      rootDirectory: __dirname,
      protractorConfig: 'conf.js'
    };
  }
};
