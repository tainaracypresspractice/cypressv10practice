// ***********************************************************
// Place to set external plugins (not developed by Cypress)
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@cypress/xpath');

beforeEach(() => {
    cy.visit('https://automationteststore.com/')
});