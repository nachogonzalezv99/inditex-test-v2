# Getting Started with Create React App

El proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app).

## Iniciar servidor

Se ha utilizado json-server para simular el servidor (https://www.npmjs.com/package/json-server).
Se debe ejecutar el siguiente comando en paralelo:

`json-server --watch server/db.json --port 3500 --middlewares server/server.js`

## Iniciar cliente

`npm start`

## Arquitectura

Se ha aplicado Arquitectura Hexagonal, separando el dominio, la infraestructura y la aplicación. El dominio se compone de las entidades y modelo de nuestra aplicación. La infraestructura es todo aquello que interactue con una entrada o salida (Base de datos, API, Local Storage, ...). La aplicación son los casos de uso. Esta arquitectura nos permite que el codigo sea mas mantenible, escalable y testeable ya que no nos acoplamos en todo el código a la librería o forma que obtenemos los datos.

Cabe destacar que para mantener el hecho de que cada componente se dedique a su funcion se ha utilizado programación reactiva.De esta manera, al añadir un producto se emite un evento que será escuchado por el provider, el valor guardado en el localstorage y de esta manera el provider podrá obtener el valor del localstorage.

Patrones:

- Patron Repository: Los repositorios, servirán para interactuar con los servicos externos (local storage, api, ...). Se tratan de clases que serán con metodos que retornarán promesas (search, byId, save, ...). Estos repositorios serán inyectados por props a los componentes que los utilicen, y así de esta manera podrán ser mockeados facilmente a la hora de hacer el testeo. Además

- Patron Factory: es utilizado para instanciar componentes que requieran una configuración, como el ProductList, que requiere pasar el repositorio, de esta manera tenemos una capa de "contenedor" que cons permite configurar estos componentes.

- Patron Object Mother: es utilizado a la hora de testear. Es utilizado para generar objetos con datos aleatorios, a los que se les puede settear cualquier atributo.

## Estructura de Archivos

- Components: componentes generales utilizados en toda la aplicación.

- Context: Context API. En este caso el contexto que se encarga de gestionar el ShoppingCart, donde se mantendrán el total de los productos añadidos, y recibirá un evento cuando se añada una nuevo para ser actualizado. Se ha decidido utilizar Context API, ya que la aplicación es pequeña. En caso de preveer una escalada en el tamaño de la aplicación, se habría optado por la utilización de una librería como Redux, para la cual poseemos toda una serie de middlewares y herramientas de debuggeo.

- Domain: como se está utilizando Arquitectura Hexagonal, aquí se encuentran todos los elementos de dominio. Si se estuviera utilizando typescript, tendríamos los typos, las interfaces de los Repositorios y otros elementos de dominio.

- Infrastructure: La implementación de los Repositorios.

- Pages: se encuentras las diferentes páginas completas, con sus componentes particulares. Si un componente pasa a ser utilizado en otras Pages, pasará a la carpeta de Components.

- Routes: El router y un objeto con las rutas, para que las rutas estén centralizadas.

- Styles: Estilos globales (container, btn, ...). Los estilos particulares de cada componente están en su respectivo archivo a la altura del componente.

- Test: Todos los test y utilidades de los mismos. Aquí se encuentran los Object Mother y los custom render, para poder añadir el Provider del Router en los test que lo requieran. En la carpeta e2e están situados los test end to end o de aceptación.

- Utils: funciones y utilidades. Disponemos de la utilidad localStorage, que podrá ser compartida por toda la aplicación.

## Testing

### Unitarios

Se ha utilizado Jest y Testing Library, entendidos como casos de uso, no como componentes aislados. En este ejemplo tenemos tres secciones: La Lista de Widgets, El Detalle de un widget y El carrito de compra. Para cada uno de estos caso de uso, se han testeado las funcionalidades imprescindibles, como utilizar el buscador, listar los productos, añadir un nuevo producto, etc.

`npm run test`: Ejecutar los unit test
`npm run test:coverage`: Ejecutar el test coverage

### De Aceptación o end-to-end

Se ha utilizado Cypress junto a Testing Library. Se ha testeado los casos completos de añadir el primer producto y añadir más de 9 productos. Se ha testeado esta funcionalidad por ser la más importante, y porque en los test unitarios no lo cubriamos completamente.

`npm run cy:open`: Ejecutar cypress en la dev tools del navegador
`npm run cy:run`: Ejecutar cypress en la consola
