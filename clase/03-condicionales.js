// 03 - Condicionales

const nota = 6.1;

if (nota >= 6.0) {
  console.log("Excelente");
} else if (nota >= 4.0) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

const dia = "martes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "martes":
  case "miercoles":
    console.log("Mitad de semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  default:
    console.log("Dia no contemplado");
}
