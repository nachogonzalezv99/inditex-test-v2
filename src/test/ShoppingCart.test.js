import { screen, render } from "@testing-library/react";
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart";

describe("ShoppingCart section", () => {
  it("don't display total items when there are no items", async () => {
    const totalItems = 0;
    render(<ShoppingCart shoppingCartTotalItems={totalItems} />);
    const totalItemsDisplay = screen.queryByText(new RegExp(totalItems, "i"));
    expect(totalItemsDisplay).not.toBeInTheDocument();
  });
  it("display total items when total items is between 1 and 9", async () => {
    const totalItems = 5;
    render(<ShoppingCart shoppingCartTotalItems={totalItems} />);
    const totalItemsDisplay = screen.queryByText(new RegExp(totalItems, "i"));
    expect(totalItemsDisplay).toBeInTheDocument();
  });
  it("display 9+ as total items when total items is above 9", async () => {
    const totalItems = 15;
    render(<ShoppingCart shoppingCartTotalItems={totalItems} />);
    const totalItemsDisplay = screen.queryByText(new RegExp("9+", "i"));
    expect(totalItemsDisplay).toBeInTheDocument();
  });
});
