/*Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.*/

var esMayor = prompt("Ingrese su edad: ");


esMayor = parseInt(esMayor);

if (!isNaN(esMayor)) {
    if (esMayor >= 18) {
        console.log("Es mayor de edad.");
    } else {
        console.log("Es menor de edad.");
    }
} else {
    console.log("El valor ingresado no es válido. Por favor, ingrese un número válido.");
}
