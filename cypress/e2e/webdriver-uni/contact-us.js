import HomePage_PO from "../../support/pageOgjects/webdriver-uni/Homepage_PO";
import Contac_US_PO from "../../support/pageOgjects/webdriver-uni/Contact_US_PO";
/// <reference types="Cypress" />


describe("Test contact US form via Webdriver", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new HomePage_PO();
    const const_Us_PO = new Contac_US_PO()

    before(function() {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        homepage_PO.visitHomepage()
        cy.wait(1000);
        homepage_PO.clickOn_ContactUs_Button();
    });
    
    it('Should be able to subm,it a successful submission via contact us form', () => { 
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','Contact-Us')

        const_Us_PO.conctactForm_Submisstion(data.first_name,data.last_name,data.email,data.comments, '#contact_reply', 'Thank You for your Message!')
    });

    it('Should not be able to subm,it a successful submission via contact us form as all fileds are requred', () => {
        const_Us_PO.conctactForm_Submisstion(data.first_name,data.last_name, " ", data.comments, 'body', 'Error: Invalid email address')
    });
});
