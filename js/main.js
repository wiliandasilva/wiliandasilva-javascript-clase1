const Año = parseInt ("2021");

let nombre = prompt ("Ingrese su Nombre");
 
let apellido = prompt("Ingrese su Apellido");


if (nombre == "" || apellido == ""){

    console.error( "Error! ingresar datos validos");

    alert("Ingresar Datos Validos");

} else {

    let fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));

    let edad = parseInt( Año - fechaNacimiento );

    if ( fechaNacimiento == "" || edad < 18 ){
        
        alert("No puede Ingresar!");

    } else {

     document.write("<div class=box2 >" + "<h2>" + "Hola "+ nombre + " " + apellido + "\nBienvenido al curos de JavaScript!" + "</h2>" + "</div>");

     console.log(nombre);
     console.log(apellido);
     console.log(edad);
    }

}

