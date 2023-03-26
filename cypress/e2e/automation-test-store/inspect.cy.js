/// <reference types="cypress" />

describe('TEste', () => {
    it('test', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
});