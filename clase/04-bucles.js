// 04 - Bucles: for, while, for...of

console.log("for clasico:");
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}

console.log("while:");
let contador = 3;
while (contador > 0) {
  console.log("Faltan", contador);
  contador--;
}

console.log("for...of en arrays:");
const frutas = ["manzana", "pera", "platano"];
for (const fruta of frutas) {
  console.log(fruta);
}
