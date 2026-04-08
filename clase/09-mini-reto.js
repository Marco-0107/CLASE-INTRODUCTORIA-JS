// 09 - Mini reto: lista de compras

const compras = [
  { producto: "pan", precio: 1200, cantidad: 2 },
  { producto: "leche", precio: 1000, cantidad: 1 },
  { producto: "huevos", precio: 3500, cantidad: 1 },
];

const total = compras.reduce((acum, item) => acum + item.precio * item.cantidad, 0);

console.log("Detalle de compra:");
for (const item of compras) {
  console.log(`- ${item.producto}: ${item.cantidad} x ${item.precio}`);
}
console.log("Total:", total);

// Desafio extra:
// 1) Agrega una funcion aplicarDescuento(total, porcentaje)
// 2) Muestra el total con 10% de descuento
