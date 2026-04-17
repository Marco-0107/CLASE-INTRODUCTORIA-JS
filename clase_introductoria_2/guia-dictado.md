# Guía para Clase: Arrays y CRUD Simulado

## 1. Repaso rápido de arrays (5 min)
- **Concepto:** Explica qué es un array (arreglo). Ejemplo: una lista de elementos, como una lista de compras.
- **¿Para qué sirve?** Para almacenar varios datos en una sola variable.
- **Sintaxis básica:**  
  ```js
  const numeros = [1, 2, 3, 4];
  ```
- **Comandos útiles:**  
  - `.push()` para agregar elementos al final.
  - `.pop()` para quitar el último elemento.
  - `.length` para saber cuántos elementos hay.
- **Actividad:** Pide a los alumnos que creen un array con 3 frutas y agreguen una más usando `.push()`.

---

## 2. Arreglo de objetos: estructura de datos (10 min)
- **Concepto:** Un array puede contener objetos, no solo números o strings.
- **¿Por qué usar objetos?** Permiten guardar más información por elemento (ejemplo: producto con nombre, precio y stock).
- **Ejemplo:**
  ```js
  const productos = [
    { id: 1, nombre: "Cuaderno", precio: 2500, stock: 10 },
    { id: 2, nombre: "Lapiz", precio: 500, stock: 50 }
  ];
  ```
- **Actividad:** Haz que los alumnos creen un array de objetos con 2 mascotas (nombre, tipo, edad).

---

## 3. Crear y listar elementos (10 min)
- **Crear:**  
  - Explica cómo usar `.push()` para agregar un objeto nuevo.
  - Muestra la función `crearProducto` del código.
- **Listar:**  
  - Explica cómo mostrar todos los elementos con `console.table(productos)`.
- **Actividad:** Pide a los alumnos que agreguen un producto y luego muestren la lista.

---

## 4. Editar y eliminar por `id` (15 min)
- **Editar:**  
  - Explica cómo buscar un objeto por su `id` usando `.find()`.
  - Muestra la función `editarProducto`.
  - Explica cómo actualizar solo los campos necesarios.
- **Eliminar:**  
  - Explica cómo encontrar el índice con `.findIndex()` y eliminar con `.splice()`.
  - Muestra la función `eliminarProducto`.
- **Actividad:**  
  - Haz que los alumnos editen el nombre de un producto por su `id`.
  - Luego, que eliminen un producto y muestren la lista actualizada.

---

## 5. Explicar tarea y resolver dudas (10-20 min)
- **Tarea:**  
  - Lee el archivo de la tarea y explica los objetivos.
  - Asigna a cada alumno que implemente una función CRUD diferente (crear, listar, editar, eliminar) o que agregue validaciones.
- **Conceptos para reforzar:**  
  - ¿Qué es un array y para qué sirve?
  - ¿Por qué usamos objetos dentro de arrays?
  - ¿Cómo se agregan, editan y eliminan elementos?
  - ¿Qué hace cada método (`push`, `find`, `findIndex`, `splice`)?
- **Espacio para preguntas:**  
  - Responde dudas sobre el código y los conceptos.
  - Pide a los alumnos que expliquen con sus palabras cómo harían cada operación.

---
