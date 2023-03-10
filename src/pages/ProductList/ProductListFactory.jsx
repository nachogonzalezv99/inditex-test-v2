import { ApiProductRepository } from "../../infrastructure/ApiProductRepository";
import { ProductList } from "./ProductList";

const productRepository = new ApiProductRepository();

export class ProductListFactory {
    static create() {
        return (
            <ProductList
                productRepository={productRepository}
            />
        );
    }
}
