import { screen, render } from "@testing-library/react";
import { ApiProductRepository } from "../infrastructure/ApiProductRepository";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { ProductMother } from "../test/ProductMother";

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
  it("show default color when only one option", async () => {
    const product = ProductMother.create({ colors: ["#fff"] });

    mockProductRepository.byId.mockResolvedValue(product);

    render(<ProductDetail productRepository={mockProductRepository} />);

    let selectedOption = await screen.findByTestId("select-option");

    expect(selectedOption).toBeTruthy();
    mockProductRepository.search.mockReset();
  });
  it("color is not selected by default when multiple options", async () => {
    const product = ProductMother.create({ colors: ["#fff", "#aaa"] });

    mockProductRepository.byId.mockResolvedValue(product);

    render(<ProductDetail productRepository={mockProductRepository} />);

    let options = await screen.findAllByTestId("select-option");

    expect(options[0]).toBeFalsy();
    expect(options[1]).toBeFalsy();
  });
});
