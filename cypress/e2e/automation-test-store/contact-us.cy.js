///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Contact us form', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    });

    it('Fill contact us form with valid values', () => {
        cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('Tainara Reis')
        cy.get('#ContactUsFrm_email').type('email@mail.com')
        cy.get('#ContactUsFrm_enquiry').type('Lorem ipsum')
        cy.xpath("//button[contains(@title, 'Submit')]").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
});