// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './01_ProtractorAPI/*/**/*.e2e-spec.ts'
  ],
  suites: {
    first: ['./01_ProtractorAPI/02_first_testcase/**/*.e2e-spec.ts'],
    web_browser: ['./01_ProtractorAPI/03_web_browser/**/*.e2e-spec.ts'],
    web_element: ['./01_ProtractorAPI/04_web_element/**/*.e2e-spec.ts'],
    list_element: ['./01_ProtractorAPI/05_list_element/**/*.e2e-spec.ts']
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};