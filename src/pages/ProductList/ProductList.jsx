import { Search } from "../../components/Search/Search";
import { useSearch } from "../../components/Search/useSearch";
import { ProductCard } from "./ProductCard";
import { ProductCardsSkeleton } from "./ProductCardsSkeleton";
import styles from './ProductList.module.scss';
import { useProducts } from "./useProducts";

export function ProductList({ productRepository }) {

    const { filter, onFilterChange } = useSearch()
    const { products, isLoading } = useProducts(productRepository, filter)

    let content
    if (isLoading) {
        content = <ProductCardsSkeleton numOfWidgets={3} />
    } else if (products.length === 0) {
        content = <div>No products available</div>
    } else {
        content = products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))
    }

    return (
        <div>
            <div className={`${styles.productList} container section`}>
                <header className={styles.productList__header}>
                    <h2 className={styles.productList__title}>All Products</h2>
                    <Search filter={filter} onFilterChange={onFilterChange} />
                </header>
                <div className={styles.products}>
                    {content}
                </div>
            </div>
        </div>
    )
}