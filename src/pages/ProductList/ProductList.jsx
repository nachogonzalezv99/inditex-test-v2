import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

export function ProductList({ productRepository }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        productRepository.search().then(products => {
            console.log(products)
            setProducts(products)
            setIsLoading(false)
        })
    }, [])

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}