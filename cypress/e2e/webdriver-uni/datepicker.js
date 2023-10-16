/// <reference types = "Cypress" />

describe('Test Datepicker via webdriveruni', () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        // cy.url().should('include', 'Data-Table')
    })

    it('Select date from date picker', () => {

        cy.get('#datepicker').click();
        // let date = new Date();
        // date.setDate(date.getDate()) // get current date
        // cy.log(date.getDate())
        
        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate())
        var date = new Date()
        date.setDate(date.getDate() + 386);
        var futureYear = date.getFullYear();
        var futureMounth = date.toLocaleString('default', {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear)
        cy.log("Future mounth to select: " + futureMounth)
        cy.log("Future day to select: " + futureDay)

        function selectMounthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMounthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMounth)) {
                        cy.get('.next').first().click();
                        selectMounthAndYear();
                    }
                })  
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMounthAndYear();
        selectFutureDay();
        // expect(cy.get('#datepicker').text()).to.equal('111111111111111')
    });
});