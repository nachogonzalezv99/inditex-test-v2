import { LocalStorageProductRepository } from "../../infrastructure/LocalStorageProductRepository";
import { ProductList } from "./ProductList";

const productRepository = new LocalStorageProductRepository();

export class ProductListFactory {
    static create() {
        return (
            <ProductList
                productRepository={productRepository}
            />
        );
    }
}
