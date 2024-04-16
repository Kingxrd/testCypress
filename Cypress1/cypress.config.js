const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9m9zof',
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    },
    screenshotOnRunFailure: true
});
