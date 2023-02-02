import { useShoppingCartContext } from "../../context/ShoppingCartContextProvider";
import { ShoppingCart } from "./ShoppingCart";

export function ShoppingCartFactory() {
  const { shoppingCartTotalItems } = useShoppingCartContext();

  return <ShoppingCart shoppingCartTotalItems={shoppingCartTotalItems} />;
}
