import { ApiProductRepository } from "../../infrastructure/ApiProductRepository";
import { ProductDetail } from "../ProductDetail/ProductDetail"

const productRepository = new ApiProductRepository();

export class ProductDetailFactory {
    static create() {
        return (
            <ProductDetail
                productRepository={productRepository}
            />
        );
    }
}
