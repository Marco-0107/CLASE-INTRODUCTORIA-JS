// 05 - Funciones declaradas, expresadas y flecha

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

const despedir = function (nombre) {
  return `Chao, ${nombre}`;
};

const sumar = (x, y) => x + y;

console.log(saludar("Ana"));
console.log(despedir("Ana"));
console.log("2 + 3 =", sumar(2, 3));

// Parametros con valor por defecto
function crearUsuario(nombre, rol = "estudiante") {
  return { nombre, rol };
}

console.log(crearUsuario("Pablo"));
console.log(crearUsuario("Laura", "ayudante"));
