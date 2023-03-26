/// <reference types="cypress" />

describe('Practicing different ways of asserting elements quantity', () => {

    const totalOfelements = 16
    
    it('Option 1: using Jquery', () => {
        cy.get('.thumbnail').invoke('size').should('equal', totalOfelements)
    })

    it('Option 2: using then and expect', () => {
        cy.get('.thumbnail').then($elements => {
            expect($elements.length).to.equal(totalOfelements)
        })
    });

    it('Option 3: using its', () => {
        cy.get('.thumbnail').its('length').should('equal', totalOfelements)
    });

    it('Option 4: using only should', () => {
        cy.get('.thumbnail').should('have.length', totalOfelements)
    });
});