// Resolucion de tarea - clase teorica JavaScript
// Nota: cada variable declarada se imprime por consola.

// 1) Variable nombre de tipo String
const nombre = "Marco";
console.log("1) nombre:", nombre);

// 2) Variable edad de tipo Number
const edad = 28;
console.log("2) edad:", edad);

// 3) Variable isValido de tipo Boolean
const isValido = true;
console.log("3) isValido:", isValido);

// 4) Variable numbers con 10 numeros en un arreglo
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("4) numbers:", numbers);

// 5) Funcion basica y funcion flecha que suman 2 numeros
function sumarBasica(a, b) {
  return a + b;
}

const sumarFlecha = (a, b) => a + b;

console.log("5) sumarBasica(10, 5):", sumarBasica(10, 5));
console.log("5) sumarFlecha(10, 5):", sumarFlecha(10, 5));

// 6) Objeto persona con sus propiedades
const persona = {
  nombre: "Marco",
  apellido: "Cerda",
  edad: 28,
  rut: "12.345.678-9",
  direccion: "Av Siempre Viva 742",
};

console.log("6) persona:", persona);
console.log("6a) persona.nombre:", persona.nombre);
console.log("6a) persona.apellido:", persona.apellido);
console.log("6a) persona.edad:", persona.edad);
console.log("6a) persona.rut:", persona.rut);
console.log("6a) persona.direccion:", persona.direccion);
