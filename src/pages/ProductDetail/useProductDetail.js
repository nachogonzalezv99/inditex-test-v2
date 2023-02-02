import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";

export const useProductDetail = (productRepository, productId) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  const setInitialState = (array) => (array?.length === 1 ? array[0] : "");
  const isColorSelected = (color) => color === selectedColor;
  const isStorageSelected = (storage) => storage === selectedStorage;
  const handleColorClick = (color) => setSelectedColor(color);
  const handleStorageClick = (storage) => setSelectedStorage(storage);

  useEffect(() => {
    productRepository
      .byId(productId)
      .then((product) => setProduct(product))
      .catch(() => navigate(PublicRoutes.ERROR));
  }, [productRepository, navigate, productId]);

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
