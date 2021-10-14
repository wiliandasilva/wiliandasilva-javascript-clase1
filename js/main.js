const Año = 2021;

let nombre = prompt("Ingrese su Nombre");
 
let apellido = prompt("Ingrese su Apellido");

let fechaNacimiento = prompt("Ingrese su fecha de Nacimiento");

parseInt (Año);

parseInt (fechaNacimiento);

let edad = Año - fechaNacimiento;

document.write("<div class=box2 >" + "<h2>" + "Hola "+ nombre + " " + apellido + "\nBienvenido al curos de JavaScript!" + "</h2>" + "</div>");

console.log(nombre);
console.log(apellido);
console.log(edad + " Años");