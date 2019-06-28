import { browser } from "protractor";
import { SideBar } from "./pageObjects";
import { credentials } from "./credentials";

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e*.ts'
  ],
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
    
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    const page = new SideBar();
    page.navigateTo();
    page.enterEmail(credentials.email);
    page.enterPassword(credentials.password);
  }
};