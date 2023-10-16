/// <reference types="Cypress" />

describe('Iterate over element', () => {

    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    });

    it('Log information f all air care products', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index : " + index + " : " + $el.text())
        })

    });

    it('Add specific product to basket', () => {
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')){
        //         cy.wrap($el).click()
        //     }
        // })
        cy.selectProduct('urls to straight Shampoo')
    });

    it('Add another specific product to basket', () => {
        cy.selectProduct('Seaweed Conditioner')
    });

    it('Add another specific product to basket', () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    });

}); 