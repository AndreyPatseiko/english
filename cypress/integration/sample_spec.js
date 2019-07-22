describe ('My First Test', function () {
  it ('Visits the Kitchen Sink', function () {
    cy.visit ('http://localhost:3000/auth');

    cy.get ('input[type="email"]').type ('asd@asd.com');
    cy.get ('input[type="password"]').type ('111111Aa').should('have.value', '111111Aa');
    cy.get ('form > button').click ();
  });
});
