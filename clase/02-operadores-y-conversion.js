// 02 - Operadores y conversion de tipos

const a = 10;
const b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicacion:", a * b);
console.log("Division:", a / b);
console.log("Modulo:", a % b);

console.log("Comparaciones:");
console.log("10 == '10':", 10 == "10"); // true (compara con conversion)
console.log("10 === '10':", 10 === "10"); // false (compara valor y tipo)
console.log("10 !== 5:", 10 !== 5);

const textoNumero = "42";
const numeroConvertido = Number(textoNumero);
console.log("Number('42'):", numeroConvertido, "tipo:", typeof numeroConvertido);

const numeroAString = String(999);
console.log("String(999):", numeroAString, "tipo:", typeof numeroAString);
