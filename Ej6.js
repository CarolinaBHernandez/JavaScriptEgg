/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/

var num = prompt("Ingrese un numero entero: ");
num = parseInt(num); 

if (isNaN(num)) {
    console.log("Por favor, ingrese un número válido.");
} else if (num === 0) {
    console.log("El número no es par ni impar.");
} else if (num % 2 === 0) {
    console.log("El número ingresado es par.");
} else {
    console.log("El número ingresado es impar.");
}
