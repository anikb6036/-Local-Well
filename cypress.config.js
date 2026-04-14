const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "my-cypress-project/cypress/localwell/Test/LoginPage/Test.cy.js",
  },
});
