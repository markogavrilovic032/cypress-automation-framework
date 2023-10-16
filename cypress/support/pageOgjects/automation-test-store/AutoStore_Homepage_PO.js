class AutoStpre_Homepage_PO {
    accessHomepage(){
        cy.visit("https://automationteststore.com/")
    }

    clickOnHairCare_Link(){
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    }
}
export default AutoStpre_Homepage_PO;