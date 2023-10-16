/// <reference types="Cypress" />

describe("VErify checkboxes via webdriveruni", () => {

    beforeEach(function() {
        cy.navigateTo_WebdriverUni_Checkbox_Page();
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
    })
    
    it('Check and validate checkbox', () => {
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')

        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
        
    });

    it('Check mutiple checkboxes', () => {
        cy.get("input[type='checkbox']").check(['option-1','option-2','option-3','option-4']).should('be.checked')
    });

});