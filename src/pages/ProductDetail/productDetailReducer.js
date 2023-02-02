export const ACTIONS = {
  SET_PRODUCT: "setProduct",
  SET_SELECTED_COLOR: "setSelectedColor",
  SET_SELECTED_STORAGE: "setSelectedStorage",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PRODUCT:
      return { ...state, product: action.payload };
    case ACTIONS.SET_SELECTED_COLOR:
      return { ...state, selectedColor: action.payload };
    case ACTIONS.SET_SELECTED_STORAGE:
      return { ...state, selectedStorage: action.payload };
    default:
      throw new Error();
  }
}
