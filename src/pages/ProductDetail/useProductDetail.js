import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { ACTIONS, reducer } from "./productDetailReducer";

export const useProductDetail = (productRepository, productId) => {
  const [state, dispatch] = useReducer(reducer, {
    product: {},
    selectedColor: "",
    selectedStorage: "",
  });

  const navigate = useNavigate();

  const setInitialState = (array) => (array?.length === 1 ? array[0] : "");
  const isColorSelected = (color) => color === state.selectedColor;
  const isStorageSelected = (storage) => storage === state.selectedStorage;
  const handleColorClick = (color) =>
    dispatch({ type: ACTIONS.SET_SELECTED_COLOR, payload: color });
  const handleStorageClick = (storage) =>
    dispatch({ type: ACTIONS.SET_SELECTED_STORAGE, payload: storage });

  useEffect(() => {
    productRepository
      .byId(productId)
      .then((product) =>
        dispatch({ type: ACTIONS.SET_PRODUCT, payload: product })
      )
      .catch(() => navigate(PublicRoutes.ERROR));
  }, [productRepository, navigate, productId]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_SELECTED_COLOR,
      payload: setInitialState(state.product.colors),
    });
    dispatch({
      type: ACTIONS.SET_SELECTED_STORAGE,
      payload: setInitialState(state.product.storage),
    });
  }, [state.product]);

  return {
    state,
    isColorSelected,
    handleColorClick,
    isStorageSelected,
    handleStorageClick,
  };
};
