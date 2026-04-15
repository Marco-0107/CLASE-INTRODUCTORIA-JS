// Clase Introductoria 2 - Arrays y CRUD simulado
// Objetivo: guardar, leer, editar y eliminar datos en un arreglo.

const readline = require("readline");

const productos = [
  { id: 1, nombre: "Cuaderno", precio: 2500, stock: 10 },
  { id: 2, nombre: "Lapiz", precio: 500, stock: 50 },
  { id: 3, nombre: "Goma", precio: 700, stock: 25 },
];

let siguienteId = 4;

function crearProducto(nombre, precio, stock) {
  const nuevoProducto = {
    id: siguienteId,
    nombre,
    precio,
    stock,
  };

  productos.push(nuevoProducto);
  siguienteId += 1;

  return nuevoProducto;
}

function listarProductos() {
  return productos;
}

function buscarProductoPorId(id) {
  return productos.find((producto) => producto.id === id);
}

function editarProducto(id, datosActualizados) {
  const producto = buscarProductoPorId(id);

  if (!producto) {
    return null;
  }

  if (datosActualizados.nombre !== undefined) {
    producto.nombre = datosActualizados.nombre;
  }

  if (datosActualizados.precio !== undefined) {
    producto.precio = datosActualizados.precio;
  }

  if (datosActualizados.stock !== undefined) {
    producto.stock = datosActualizados.stock;
  }

  return producto;
}

function eliminarProducto(id) {
  const indice = productos.findIndex((producto) => producto.id === id);

  if (indice === -1) {
    return false;
  }

  productos.splice(indice, 1);
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (respuesta) => {
      resolve(respuesta.trim());
    });
  });
}

function mostrarMenu() {
  console.log("\n=== MENU CRUD DE PRODUCTOS ===");
  console.log("1) Listar productos");
  console.log("2) Crear producto");
  console.log("3) Buscar producto por id");
  console.log("4) Editar producto");
  console.log("5) Eliminar producto");
  console.log("0) Salir");
}

function toNumber(valor) {
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

async function ejecutarMenu() {
  let continuar = true;

  while (continuar) {
    mostrarMenu();
    const opcion = await preguntar("Selecciona una opcion: ");

    switch (opcion) {
      case "1": {
        console.log("\n=== LISTADO ===");
        console.table(listarProductos());
        break;
      }

      case "2": {
        const nombre = await preguntar("Nombre del producto: ");
        const precio = toNumber(await preguntar("Precio: "));
        const stock = toNumber(await preguntar("Stock: "));

        if (!nombre || precio === null || stock === null) {
          console.log("Datos invalidos. Intenta nuevamente.");
          break;
        }

        const creado = crearProducto(nombre, precio, stock);
        console.log("Producto creado:", creado);
        break;
      }

      case "3": {
        const id = toNumber(await preguntar("ID a buscar: "));

        if (id === null) {
          console.log("ID invalido.");
          break;
        }

        const producto = buscarProductoPorId(id);
        if (!producto) {
          console.log("No se encontro un producto con ese id.");
          break;
        }

        console.log("Producto encontrado:", producto);
        break;
      }

      case "4": {
        const id = toNumber(await preguntar("ID a editar: "));

        if (id === null) {
          console.log("ID invalido.");
          break;
        }

        const nombre = await preguntar("Nuevo nombre (Enter para mantener): ");
        const precioTexto = await preguntar("Nuevo precio (Enter para mantener): ");
        const stockTexto = await preguntar("Nuevo stock (Enter para mantener): ");

        const datosActualizados = {};

        if (nombre) {
          datosActualizados.nombre = nombre;
        }

        if (precioTexto) {
          const precio = toNumber(precioTexto);
          if (precio === null) {
            console.log("Precio invalido.");
            break;
          }
          datosActualizados.precio = precio;
        }

        if (stockTexto) {
          const stock = toNumber(stockTexto);
          if (stock === null) {
            console.log("Stock invalido.");
            break;
          }
          datosActualizados.stock = stock;
        }

        const editado = editarProducto(id, datosActualizados);

        if (!editado) {
          console.log("No se encontro un producto con ese id.");
          break;
        }

        console.log("Producto editado:", editado);
        break;
      }

      case "5": {
        const id = toNumber(await preguntar("ID a eliminar: "));

        if (id === null) {
          console.log("ID invalido.");
          break;
        }

        const eliminado = eliminarProducto(id);
        console.log(eliminado ? "Producto eliminado." : "No se encontro ese id.");
        break;
      }

      case "0": {
        continuar = false;
        console.log("Saliendo del programa...");
        break;
      }

      default: {
        console.log("Opcion no valida. Intenta nuevamente.");
      }
    }
  }

  rl.close();
}

ejecutarMenu();
