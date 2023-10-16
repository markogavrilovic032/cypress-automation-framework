class Contac_US_PO {
    
    conctactForm_Submisstion(firstName, lastName, email, comment, $selector, testToLocate) {
        cy.get("[name='first_name']").type(firstName)
        cy.get("[name='last_name']").type(lastName)
        cy.get("[name='email']").type(email)
        cy.get("textarea[placeholder='Comments']").type(comment)
        cy.get("[type='submit']").click()
        cy.get($selector).contains(testToLocate)
        // cy.screenshot("Miloje a contact us from submition")
    }
}

export default Contac_US_PO;