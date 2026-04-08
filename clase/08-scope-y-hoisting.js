// 08 - Scope y hoisting (introduccion)

var x = "global con var";
let y = "global con let";

function ejemploScope() {
  var x = "local con var";
  let y = "local con let";
  console.log("Dentro de la funcion ->", x, y);
}

ejemploScope();
console.log("Fuera de la funcion ->", x, y);

// Hoisting: la declaracion existe antes, pero la asignacion no.
console.log("Valor de variableConVar antes de asignar:", variableConVar);
var variableConVar = "ahora tiene valor";

// Descomenta para mostrar ReferenceError por TDZ con let:
// console.log(variableConLet);
// let variableConLet = "valor";
