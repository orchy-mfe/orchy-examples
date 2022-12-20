const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    video: false,
    screenshotOnRunFailure: false,
    fixturesFolder: './',
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2
    }
  },
});
