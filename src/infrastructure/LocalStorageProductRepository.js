export class LocalStorageProductRepository {
  baseUrl = "http://localhost:3500/products/";

  async search() {
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
      );
  }
}
