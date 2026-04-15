# Tarea - CRUD simulado con Arrays (Alumnos)

## Contexto

Tienes un arreglo llamado `alumnos` que representa una base de datos en memoria.
La asignatura es **Metodologias de Desarrollo**.
Debes completar las funciones para simular operaciones tipo endpoint:

- `crearAlumno` -> Crear
- `listarAlumnos` -> Leer todos
- `obtenerAlumnoPorId` -> Leer uno
- `actualizarAlumno` -> Editar
- `eliminarAlumno` -> Eliminar

El archivo tambien incluye un **ejemplo de menu interactivo con `switch-case`** para que vean la estructura tipo "endpoints" en consola.

## Archivo a trabajar

- `clase_introductoria_2/tarea/codigo-base.js`

## Requisitos

1. No usar base de datos ni librerias externas.
2. Solo trabajar con arrays, objetos y funciones de JavaScript.
3. Mantener la propiedad `id` unica para cada alumno nuevo.
4. La asignatura **no** se guarda dentro del objeto alumno: solo se muestra en el menu como contexto.
5. Si no existe un alumno al editar/eliminar, retornar `null` o `false` segun corresponda.

## Desafio extra (opcional)

- Crear una funcion `buscarAlumnosPorSeccion(seccion)` que retorne todos los alumnos de una seccion especifica.

## Criterios de evaluacion

- Logica correcta de CRUD.
- Uso correcto de metodos de arrays (`push`, `find`, `findIndex`, `splice`).
- Codigo ordenado y legible.
- Pruebas en consola funcionando.
