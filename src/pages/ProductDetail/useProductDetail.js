import { useEffect, useState } from "react";

export const useProductDetail = (
  productRepository,
  shoppingCartRepository,
  productId
) => {
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  const setInitialState = (array) => (array?.length === 1 ? array[0] : "");
  const isColorSelected = (color) => color === selectedColor;
  const isStorageSelected = (storage) => storage === selectedStorage;
  const handleColorClick = (color) => setSelectedColor(color);
  const handleStorageClick = (storage) => setSelectedStorage(storage);

  useEffect(() => {
    productRepository.byId(productId).then((product) => {
      setProduct(product);
    });
  }, []);

  useEffect(() => {
    setSelectedColor(setInitialState(product.colors));
    setSelectedStorage(setInitialState(product.storage));
  }, [product]);

  return {
    product,
    isColorSelected,
    handleColorClick,
    isStorageSelected,
    handleStorageClick,
    selectedColor,
    selectedStorage,
  };
};
