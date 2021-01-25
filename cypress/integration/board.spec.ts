/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Board state should be win', () => {
    cy.get('#cell_1').click();
    cy.get('#cell_2').click();
    cy.get('#cell_5').click();
    cy.get('#cell_3').click();
    cy.get('#cell_9').click();

    cy.get("#alert-dialog-title").should('have.text',"Game Over");
  })

  it('Board state should be draw', () => {
    cy.get('#cell_1').click();
    cy.get('#cell_2').click();
    cy.get('#cell_3').click();
    cy.get('#cell_4').click();
    cy.get('#cell_6').click();
    cy.get('#cell_5').click();
    cy.get('#cell_7').click();
    cy.get('#cell_9').click();
    cy.get('#cell_8').click();

    cy.get("#alert-dialog-title").should('have.text',"Match Draw");
  })
})
