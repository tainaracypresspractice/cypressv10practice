/// <reference types="cypress" />

describe('TEste', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    });
    
    it('test', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
});