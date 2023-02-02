import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export class ApiProductRepository {
  baseUrl = "http://localhost:3500/products/";
  localStorageKey = "product-list";
  cachedHours = 1;

  async search() {
    const data = getLocalStorage(this.localStorageKey);

    if (!data) {
      return fetch(this.baseUrl)
        .then((response) => response.json())
        .then((responses) =>
          responses.map((response) => {
            return {
              id: response.id,
              img: response.img,
              brand: response.marca,
              model: response.modelo,
              price: response.precio,
              cpu: response.cpu,
              ram: response.ram,
              os: response.sistemaOperativo,
              resolution: response.resolucionPantalla,
              battery: response.bateria,
              cameras: response.camaras,
              dimensions: response.dimensiones,
              weight: response.peso,
              colors: response.colores,
              storage: response.almacenamiento,
            };
          })
        )
        .then((res) => {
          setLocalStorage(this.localStorageKey, res, this.cachedHours);
          return res;
        });
    }

    return Promise.resolve(data);
  }

  async byId(id) {
    return fetch(this.baseUrl + id)
      .then((response) => {
        if (response.status !== 200) throw new Error();
        return response.json();
      })
      .then((response) => {
        return {
          id: response.id,
          img: response.img,
          brand: response.marca,
          model: response.modelo,
          price: response.precio,
          cpu: response.cpu,
          ram: response.ram,
          os: response.sistemaOperativo,
          resolution: response.resolucionPantalla,
          battery: response.bateria,
          cameras: response.camaras,
          dimensions: response.dimensiones,
          weight: response.peso,
          colors: response.colores,
          storage: response.almacenamiento,
        };
      });
  }
}
