import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export class ApiShoppingCartRepository {
  baseUrl = "http://localhost:3500/cart";
  localStorageKey = "shoppingCart";
  cachedHour = 1;

  async search() {
    const data = getLocalStorage(this.localStorageKey);

    if (!data) {
      return fetch(this.baseUrl)
        .then((res) => res.json())
        .then((data) => {
          setLocalStorage(this.localStorageKey, data.total, this.cachedHour);
          return data.total;
        });
    }

    return Promise.resolve(data);
  }

  async save(data) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
    const { total } = await response.json();

    setLocalStorage(this.localStorageKey, total, this.cachedHour);
  }
}
