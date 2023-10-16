/// <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
    
    it('Confirm links redirect to the correct pages', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include', 'https://www.webdriveruniversity.com')
        // cy.reload(true)

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')

    });

    it('Challenge', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')

        cy.go('back')
        cy.url().should('eq', 'https://www.webdriveruniversity.com/')

    });

});