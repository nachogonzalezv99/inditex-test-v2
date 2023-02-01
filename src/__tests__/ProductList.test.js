import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApiProductRepository } from "../infrastructure/ApiProductRepository";
import { ProductList } from "../pages/ProductList/ProductList";
import { ProductMother } from "../test/ProductMother";
import { renderWithRouter } from "../test/renderWithRouter";

jest.mock("../infrastructure/ApiProductRepository");
let mockProductRepository = new ApiProductRepository();

describe("ProductList section", () => {
  it("show all cards", async () => {
    const product = ProductMother.create();

    mockProductRepository.search.mockResolvedValue([product]);

    renderWithRouter(<ProductList productRepository={mockProductRepository} />);

    const productTitle = await screen.findByRole("link", {
      name: new RegExp(product.model, "i"),
    });

    expect(productTitle).toBeInTheDocument();
    mockProductRepository.search.mockReset();
  });

  it("show no products message if products is empty", async () => {
    mockProductRepository.search.mockResolvedValue([]);

    renderWithRouter(<ProductList productRepository={mockProductRepository} />);

    const noProductsMessage = await screen.findByText(
      new RegExp("No products available", "i")
    );

    expect(noProductsMessage).toBeInTheDocument();
    mockProductRepository.search.mockReset();
  });
  it("filters the products by model", async () => {
    const product = ProductMother.create({ model: "Modelo 1" });

    mockProductRepository.search.mockResolvedValue([product]);

    renderWithRouter(<ProductList productRepository={mockProductRepository} />);

    const filterInput = await screen.findByLabelText(new RegExp("Search", "i"));
    userEvent.type(filterInput, product.model);

    const productTitle = await screen.findByRole("link", {
      name: new RegExp(product.model, "i"),
    });

    expect(productTitle).toBeInTheDocument();

    userEvent.type(filterInput, "Modelo 2");

    expect(productTitle).not.toBeInTheDocument();

    mockProductRepository.search.mockReset();
  });
  it("filters the products by brand", async () => {
    const product = ProductMother.create({ brand: "Brand 1" });

    mockProductRepository.search.mockResolvedValue([product]);

    renderWithRouter(<ProductList productRepository={mockProductRepository} />);

    const filterInput = await screen.findByLabelText(new RegExp("Search", "i"));
    userEvent.type(filterInput, product.brand);

    const productTitle = await screen.findByRole("link", {
      name: new RegExp(product.brand, "i"),
    });

    expect(productTitle).toBeInTheDocument();

    userEvent.type(filterInput, "Brand 2");

    expect(productTitle).not.toBeInTheDocument();

    mockProductRepository.search.mockReset();
  });
});
