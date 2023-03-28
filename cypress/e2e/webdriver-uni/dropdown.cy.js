/// <reference types="cypress" />

describe("Validate dropdown menus", () => {
    beforeEach(() => {
      cy.visit('https://www.webdriveruniversity.com/')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    });

    it('Select specific value in dropdown', () => {
        cy.get('#dropdowm-menu-1').select('python')
    });

    it('Select specific value in dropdown', () => {
        cy.get('#dropdowm-menu-2').select('eclipse').should('have.value', 'eclipse')
    });

    it('Select specific option text in dropdown', () => {
        cy.get('#dropdowm-menu-3').select('JQuery').contains('Jquery')
    })
})