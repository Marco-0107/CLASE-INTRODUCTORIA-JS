// 01 - Tipos de datos basicos

const nombre = "Marco"; // string
const edad = 28; // number
const esProfesor = true; // boolean
const sinValor = undefined; // undefined
const vacio = null; // null
const idUnico = Symbol("id"); // symbol
const numeroGrande = 12345678901234567890n; // bigint

console.log("nombre:", nombre, "tipo:", typeof nombre);
console.log("edad:", edad, "tipo:", typeof edad);
console.log("esProfesor:", esProfesor, "tipo:", typeof esProfesor);
console.log("sinValor:", sinValor, "tipo:", typeof sinValor);
console.log("vacio:", vacio, "tipo:", typeof vacio); // historicamente devuelve "object"
console.log("idUnico:", idUnico.toString(), "tipo:", typeof idUnico);
console.log("numeroGrande:", numeroGrande, "tipo:", typeof numeroGrande);
