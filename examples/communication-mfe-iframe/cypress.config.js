const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5174',
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false
  },
});
