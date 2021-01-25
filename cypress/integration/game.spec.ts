/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
  })

  it('Login button should render', () => {
    cy.get("#loginBtn").should('exist');
  })

  it('Time travel should render', () => {
    cy.get('#cell_1').click();

    cy.get("#move_1").should('have.text',"Move : 1");
  })
})
