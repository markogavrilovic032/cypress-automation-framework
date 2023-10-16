/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Inspect Automation Test Store items using chain of comandss', () => {

    it.only('Click on first item using item header', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log("Selected te following item: " + itemHeaderText)
        })
    });

    it('Click on first item using item index', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
}); 