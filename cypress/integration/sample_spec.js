describe('my first test', () => {
  it('does not do much', () => {
    cy.visit('/index.html');

    cy.get('#map .mapboxgl-canvas');
  });
});
