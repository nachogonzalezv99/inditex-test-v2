import { useEffect, useMemo, useState } from "react";

export function useProducts(productRepository, filter) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        product.brand.match(new RegExp(filter, "i")) ||
        product.model.match(new RegExp(filter, "i"))
      ) {
        return product;
      }
    });
  }, [products, filter]);

  useEffect(() => {
    setIsLoading(true);
    productRepository.search().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  return { products: filteredProducts, isLoading };
}
