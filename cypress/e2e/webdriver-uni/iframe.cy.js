/// <reference types="cypress" />

describe("Handle IFrame & Modals", () => {
    beforeEach(() => {
      cy.visit('https://www.webdriveruniversity.com/')
    });

    it('Handling IFrame & Modals', () => {
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe') // using wrap allows to use cypress commands to interact with iframe
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })

        cy.get('@modal').contains('Close').click()

    });
});