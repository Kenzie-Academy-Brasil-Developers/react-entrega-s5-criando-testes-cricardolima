

context("Register", () => {
  it("Enters the landing page and tries to search for a CEP number", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get("input:first").type(27410290);
    cy.contains("Buscar pelo CEP").click();
  });
});
