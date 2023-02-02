import { ApiProductRepository } from "../../infrastructure/ApiProductRepository";
import { ApiShoppingCartRepository } from "../../infrastructure/ApiShoppingCartRepository";
import { ProductDetail } from "../ProductDetail/ProductDetail"

const productRepository = new ApiProductRepository();
const shoppingCartRepository = new ApiShoppingCartRepository();

export class ProductDetailFactory {
    static create() {
        return (
            <ProductDetail
                productRepository={productRepository}
                shoppingCartRepository={shoppingCartRepository}
            />
        );
    }
}
