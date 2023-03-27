/// <reference types="cypress" />

describe("Handle js alerts", () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/')
  });

  it("Confirm the alert contains the correct text", () => {
    //Clicks on Popup & Alerts at the same tab
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    cy.get('#button1').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')
    })
  });

  it("Validate confirm alert box when OK is pressed", () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    cy.get('#button4').click()

    cy.on('window:alert', (str) => {
      return true //Cypress press ok automatically
    })

    cy.get('#confirm-alert-text').contains('You pressed OK!')
  });

  it("Validate confirm alert box when Cancel is pressed", () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    cy.get('#button4').click()

    cy.on('window:confirm', (str) => {
      return false //Cypress will press cancel
    })

    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  });

  it.only("Validate the message inside alert box using STUB", () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    const stub = cy.stub() 

    cy.on('window:confirm', stub)


    cy.get('#button4').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Press a button!') //Validates the message inside the alert
    }).then(() => {
      return true
    }).then(() => {
      cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
  })
});