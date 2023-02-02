import { screen, render } from "@testing-library/react";
import { ApiProductRepository } from "../infrastructure/ApiProductRepository";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { ProductMother } from "./ProductMother";

jest.mock("../infrastructure/ApiProductRepository");
let mockProductRepository = new ApiProductRepository();

describe("ProductDetail section", () => {
  it("show product detail", async () => {
    const product = ProductMother.create();

    mockProductRepository.byId.mockResolvedValue(product);

    render(<ProductDetail productRepository={mockProductRepository} />);

    const productModelTitle = await screen.findByText(
      new RegExp(product.model, "i")
    );

    expect(productModelTitle).toBeInTheDocument();
    mockProductRepository.search.mockReset();
  });
});
