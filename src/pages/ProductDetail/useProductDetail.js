import { useEffect, useState } from "react";

export const useProductDetail = (productRepository, productId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSendLoading, setIsSendLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  const setInitialState = (array) => (array?.length === 1 ? array[0] : "");
  const isColorSelected = (color) => color === selectedColor;
  const isStorageSelected = (storage) => storage === selectedStorage;
  const handleColorClick = (color) => setSelectedColor(color);
  const handleStorageClick = (storage) => setSelectedStorage(storage);

  const isButtonDisabled = () =>
    !selectedColor || !selectedStorage || isSendLoading;
  const handleClick = () => {};

  useEffect(() => {
    setIsLoading(true);
    productRepository.byId(productId).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setSelectedColor(setInitialState(product.colors));
    setSelectedStorage(setInitialState(product.storage));
  }, [product]);

  return {
    product,
    isLoading,
    isColorSelected,
    selectedColor,
    handleColorClick,
    isStorageSelected,
    handleStorageClick,
    isButtonDisabled,
    handleClick,
  };
};
