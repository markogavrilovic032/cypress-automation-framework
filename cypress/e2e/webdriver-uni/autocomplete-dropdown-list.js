/// <reference types="Cypress"/>

describe('Verify Autocomplete dropdown list', () => {
    it('Select specific product via autocomplete list ', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Autocomplete-TextField')

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list>*').each(($el,index,$list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado'

            if(prod === productToSelect){
                // $el.click()
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
    });

    it('Select and verify Grapes', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Autocomplete-TextField')

        cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list>*').each(($el, index, $list) => {
            const prod= $el.text()
            const productToSelect = 'Grapes'
            if(prod === productToSelect){
                // $el.click()
                $el.trigger('click')
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        })
    });
});