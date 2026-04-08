// 07 - Metodos utiles en arrays y strings

const notas = [5.5, 6.2, 4.8, 3.9, 6.7];

const aprobadas = notas.filter((nota) => nota >= 4.0);
const masUno = notas.map((nota) => nota + 0.1);
const promedio = notas.reduce((acum, nota) => acum + nota, 0) / notas.length;

console.log("Notas:", notas);
console.log("Aprobadas:", aprobadas);
console.log("Notas + 0.1:", masUno);
console.log("Promedio:", promedio.toFixed(2));

const frase = "javascript es entretenido";
console.log("Mayusculas:", frase.toUpperCase());
console.log("Incluye 'entre':", frase.includes("entre"));
console.log("Reemplazo:", frase.replace("entretenido", "poderoso"));
