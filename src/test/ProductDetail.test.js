import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApiProductRepository } from "../infrastructure/ApiProductRepository";
import { ApiShoppingCartRepository } from "../infrastructure/ApiShoppingCartRepository";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { ProductMother } from "./ProductMother";
import { renderWithRouter } from "../test/renderWithRouter";

jest.mock("../infrastructure/ApiProductRepository");
jest.mock("../infrastructure/ApiShoppingCartRepository");
let mockProductRepository = new ApiProductRepository();
let mockShoppingCartRepository = new ApiShoppingCartRepository();

describe("ProductDetail section", () => {
  it("show product detail", async () => {
    const product = ProductMother.create();

    mockProductRepository.byId.mockResolvedValue(product);

    renderWithRouter(
      <ProductDetail
        productRepository={mockProductRepository}
        shoppingCartRepository={mockShoppingCartRepository}
      />
    );

    const productModelTitle = await screen.findByText(
      new RegExp(product.model, "i")
    );

    expect(productModelTitle).toBeInTheDocument();
    mockProductRepository.search.mockReset();
  });
  it("show default color when only one option", async () => {
    const product = ProductMother.create({ colors: ["#fff"] });

    mockProductRepository.byId.mockResolvedValue(product);

    renderWithRouter(
      <ProductDetail
        productRepository={mockProductRepository}
        shoppingCartRepository={mockShoppingCartRepository}
      />
    );

    let selectedOption = await screen.findByTestId("selected-color");

    expect(selectedOption).toBeInTheDocument();
    mockProductRepository.search.mockReset();
  });
  it("don't show defaulwt color if multiple options", async () => {
    const product = ProductMother.create({ colors: ["#fff", "#aaa"] });

    mockProductRepository.byId.mockResolvedValue(product);

    renderWithRouter(
      <ProductDetail
        productRepository={mockProductRepository}
        shoppingCartRepository={mockShoppingCartRepository}
      />
    );

    await waitFor(() => {
      let selectedOption = screen.queryByTestId("selected-color");
      expect(selectedOption).not.toBeInTheDocument();
    });

    mockProductRepository.search.mockReset();
  });
  it("disabled add to cart button when color or storage are not selected", async () => {
    const product = ProductMother.create();

    mockProductRepository.byId.mockResolvedValue(product);

    renderWithRouter(
      <ProductDetail
        productRepository={mockProductRepository}
        shoppingCartRepository={mockShoppingCartRepository}
      />
    );

    await waitFor(() => {
      const addToCartButton = screen.getByRole("button", {
        name: /Add to cart/i,
      });
      expect(addToCartButton).toBeDisabled();
    });

    mockProductRepository.search.mockReset();
  });
  it("available add to cart button when color and storage are selected", async () => {
    const product = ProductMother.create({
      colors: ["#fff"],
      storage: ["126"],
    });

    mockProductRepository.byId.mockResolvedValue(product);

    renderWithRouter(
      <ProductDetail
        productRepository={mockProductRepository}
        shoppingCartRepository={mockShoppingCartRepository}
      />
    );

    await waitFor(() => {
      const addToCartButton = screen.getByRole("button", {
        name: /Add to cart/i,
      });
      expect(addToCartButton).not.toBeDisabled();
    });

    mockProductRepository.search.mockReset();
  });
  it("save new product total count when button is clicked", async () => {
    const product = ProductMother.create({
      colors: ["#fff"],
      storage: ["126"],
    });

    mockProductRepository.byId.mockResolvedValue(product);

    renderWithRouter(
      <ProductDetail
        productRepository={mockProductRepository}
        shoppingCartRepository={mockShoppingCartRepository}
      />
    );

    await waitFor(() => {
      const addToCartButton = screen.getByRole("button", {
        name: /Add to cart/i,
      });
      userEvent.click(addToCartButton);

      expect(mockShoppingCartRepository.save).toHaveBeenCalledWith({
        productId: product.id,
        selectedColor: product.colors[0],
        selectedStorage: product.storage[0],
      });
    });

    mockProductRepository.search.mockReset();
  });
});
