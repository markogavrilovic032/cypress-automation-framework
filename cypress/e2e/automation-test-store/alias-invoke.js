/// <reference types="Cypress" />

describe('Alias and invoke', () => {

    it('Validate a specific hair care product', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });

    it('Challenge', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart')
    });

    it.only('Calculate total of normal and sale products', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',16)
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('selItemPrices')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPricesTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i=0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemsPricesTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPricesTotal;
            cy.log("Non sale price items total: " + itemsPricesTotal)
        })

        cy.get('@selItemPrices').then($linkText => {
            var selItemsPrices = 0;
            var selItemPrices = $linkText.split('$');
            var i;
            for(i=0; i < selItemPrices.length; i++){
                cy.log(selItemPrices[i])
                selItemsPrices += Number(selItemPrices[i])
            }
            itemsTotal += selItemsPrices;
            cy.log("SALE price items total: " + selItemsPrices)
        })
        .then(() => {
            cy.log(" Non sale and SALE price items total: " + itemsTotal)
            expect(itemsTotal).to.equal(660.5)
        })

    });
}); 