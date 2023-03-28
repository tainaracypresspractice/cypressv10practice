/// <reference types="cypress" />

describe("Validate checkboxes", () => {
    beforeEach(() => {
      cy.visit('https://www.webdriveruniversity.com/')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    });

    it('Check the first checkbox', () => {
        cy.get('[type=checkbox]').check('option-1').should('be.checked')
    });

    it('Uncheck the third checkbox', () => {
        cy.get('[type=checkbox]').uncheck('option-3').should('not.be.checked')
    });

    it.only('Check multiple checkboxes', () => {
        cy.get('[type=checkbox]').check(['option-1', 'option-2', 'option-3', 'option-4'])
    });
});