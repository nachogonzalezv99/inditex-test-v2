import { ShoppingCartContextProvider } from "./context/ShoppingCartContextProvider";
import { ApiShoppingCartRepository } from "./infrastructure/ApiShoppingCartRepository";
import { Router } from "./routes/Router";

const shoppingCartRepository = new ApiShoppingCartRepository();

function App() {
  return (
    <ShoppingCartContextProvider
      shoppingCartRepository={shoppingCartRepository}
    >
      <Router />
    </ShoppingCartContextProvider>
  );
}

export default App;
