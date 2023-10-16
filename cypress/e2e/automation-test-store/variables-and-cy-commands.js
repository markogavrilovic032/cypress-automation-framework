/// <reference types="Cypress" />

describe('Veryying variables cypress commands and jquery cmmands', () => {

    it('Navigate to specific product pages ', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    });

    it('Navigate to specific product pages makeup', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()

        //Following code will be fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });

    it.only('Validate properties of the Contact Us Page', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href$='contact']").should('be.visible').click()
        //cypress comand and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name:')

            //Enable commands (closure)
            cy.get('#field_11').then(finText => {
                cy.log(finText.text())
                cy.log(finText)
            })

        })
        //Enable commands (closure)
    });

}); 