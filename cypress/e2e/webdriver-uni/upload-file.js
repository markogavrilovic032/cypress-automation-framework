/// <reference types = "Cypress" />

describe('Test file upload via webdriveruni', () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
        // cy.url().should('include', 'Data-Table')
    })
    it('Upload a file ...', () => {
        cy.get('#myFile').selectFile("cypress/fixtures/kompas.jfif")
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).equal('Your file has now been uploaded!')
        })
    });

    it('Upload No file...', () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).equal('You need to select a file to upload!')
        })
    });
});