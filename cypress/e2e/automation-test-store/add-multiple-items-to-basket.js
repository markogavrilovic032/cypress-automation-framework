import AutoStpre_Homepage_PO from "../../support/pageOgjects/automation-test-store/AutoStore_Homepage_PO.js";
import AutoStore_HairCare_PO from "../../support/pageOgjects/automation-test-store/AutoStore_HairCare_PO.js";
/// <reference types="Cypress" />

describe('Add multiple items to basket', () => {

    const autoStpre_Homepage_PO = new AutoStpre_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

    before(() => {
        cy.fixture("product").then(function(data) {
            globalThis.data = data;
        })
    });
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStpre_Homepage_PO.accessHomepage()
        autoStpre_Homepage_PO.clickOnHairCare_Link()
    });

    it('Add multiple items', () => {
        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.dropdown-toggle > .fa').click()
        autoStore_HairCare_PO.addHairCareProductsToBasket()
    });

}); 