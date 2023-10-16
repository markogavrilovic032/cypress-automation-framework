/// <reference types="Cypress" />

describe('Cypress web security 2', () => {
    it('Validate visiting two deferent domain 2', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.visit("https://www.automationteststore.com/")
    });

    it('Validate visiting two deferent domain via user aqctions 2', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    it('Orgin command', () => {
        // cy.origin('webdriveruniversity.com', () => {
        //     cy.visit('/');
        // });

        // cy.origin('automationteststore.com', () => {
        //     cy.visit('/');
        // });
        cy.visit("https://www.webdriveruniversity.com/")
        cy.visit("https://www.selectors.webdriveruniversity.com/")
    });
});