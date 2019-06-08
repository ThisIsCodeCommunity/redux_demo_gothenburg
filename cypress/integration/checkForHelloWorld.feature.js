describe('page should display ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Hello World from Redux Store', () => {
    cy.get('body').should('contain', 'Hello World from Redux Store')
  })

  it('display custom greeting', () => {
    cy.get('input').type('Hello Thomas')
    cy.contains('Change greeting').click()
    cy.get('body').should('contain', 'Hello Thomas')

  })

  it('resets greeting', () => {
    cy.get('input').type('Hello Whoever')
    cy.contains('Change greeting').click()
    cy.contains('Reset').click()
    cy.get('body').should('contain', 'Hello World from Redux Store')

  })
});