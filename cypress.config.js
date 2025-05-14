const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.advantageonlineshopping.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    env: {
      email: "teste@teste.com.br",
      loginPassword: "12Test!@#",
      loginUser: "nat12309"
    }
  },
  // Adicione esta configuração para o plugin
  "cypress-plugin-api": {
    // Configurações do plugin, se necessário
  }
});