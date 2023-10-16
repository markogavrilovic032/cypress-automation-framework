/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    
    it('Confirm js alerts contains corect text', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).equal('I am an alert box!')
        })
    });

    it('Validate js confirm alert box works correctly when click confirm', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it('Validate js confirm alert box works correctly when click cansel button', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it('Validate js confirm alert box using a stub', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });

});