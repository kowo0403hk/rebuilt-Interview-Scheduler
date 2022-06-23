describe("Navigation", () => {
  cy.get("/").as("home");
  it("should visit root", () => {
    "@home";
  });

  it("should navigate to Tuesday", () => {
    "@home"
      .contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
