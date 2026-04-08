// 06 - Arrays y objetos

const numeros = [10, 20, 30];
console.log("Primer elemento:", numeros[0]);

numeros.push(40);
console.log("Array actualizado:", numeros);

const estudiante = {
  nombre: "Camila",
  edad: 21,
  carrera: "Ingenieria",
};

console.log("Nombre:", estudiante.nombre);
estudiante.edad = 22;
estudiante.activo = true;
console.log("Objeto actualizado:", estudiante);

for (const clave in estudiante) {
  console.log(`${clave}: ${estudiante[clave]}`);
}
