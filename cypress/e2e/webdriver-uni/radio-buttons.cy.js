/// <reference types="cypress" />

describe("Validate radio buttons", () => {
    beforeEach(() => {
      cy.visit('https://www.webdriveruniversity.com/')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    });

    it('Check the first radio button', () => {
        cy.get('#radio-buttons').find('[type=radio]').first().check()
    });

    it('Check the fourth radio button', () => {
        cy.get('#radio-buttons').find('[type=radio]').eq(3).check()
    });

    it.only('Validate radio buttons states', () => {
        cy.get('[value=lettuce]').should('not.be.checked')
        cy.get('[value=pumpkin]').should('be.checked')
    });
})