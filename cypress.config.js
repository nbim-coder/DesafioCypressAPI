const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
    env: {
      email: "teste@teste.com.br",
      loginPassword: "12Test!@#",
      loginUser: "nat12309"
    }
  },
});