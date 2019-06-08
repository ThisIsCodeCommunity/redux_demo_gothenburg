describe('page should display ', () => {
  it('Hello World', () => {
    cy.visit('http://localhost:3000')
    cy.get('body').should('contain', 'Hello Thomas')
  })
});