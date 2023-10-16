/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Test contact US form via Automation test store', () => {

    before(() => {
        // cy.viewport("samsung-s10")
        cy.fixture('userDetails').as("user")
    });

    it('Should be able to subm,it a successful submission via contact us form',{
        retries:{
            runMode: 3,
            openMode:2
        }
    }, () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href$='contact']").should('be.visible').click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
            cy.log("11111111111111111111111111111111111111111111111111111111111111111")
        })
        
        cy.get("@user").then((user) =>{
            cy.get('[name="first_name"]').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("njanjanjanjanjanjanjanjanjanjanjanja")
        cy.get("button[title='Submit']").click()
        cy.get(".mb40 > p:nth-of-type(2)").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed")
    });
}); 