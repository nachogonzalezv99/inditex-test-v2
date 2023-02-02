import "@testing-library/cypress/add-commands";

describe("Product Detail", () => {
  it("Add first product product", () => {
    cy.visit("/3");

    cy.intercept("POST", "/cart", {
      total: "1",
    });

    cy.findByRole("button", {
      name: new RegExp("Add to cart", "i"),
    }).click();

    cy.findByText("1");
  });
  it("Add more than 9 products to the cart", () => {
    cy.visit("/3");

    cy.intercept(
      "/cart",
      { times: 1 },
      {
        total: "9",
      }
    );

    const addButton = cy.findByRole("button", {
      name: new RegExp("Add to cart", "i"),
    });
    addButton.click();
    addButton.click();

    cy.findByText("9+");
  });
});
