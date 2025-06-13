describe('Flujo de búsqueda completo', () => {
  const searchQuery = 'celular';
  const maxResults = 4;

  it('Debería realizar el flujo completo desde /home hasta /detail', () => {
    cy.visit('http://localhost:8080/');

    cy.get('#search-box-input').type(`${searchQuery}{enter}`);

    cy.url().should('include', '/items');
    cy.url().should('include', `?search=${searchQuery}`);

    cy.get('.product-list-item').should('have.length.lte', maxResults);

    cy.get('[data-testid="product-list-item"]').should('be.visible').first().click();

    cy.url().should('match', /\/items\/[^\/?#]+$/);

    cy.get('[data-testid="product-detail"]').should('exist');
  });
});
