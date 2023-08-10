/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/

var numero;
var suma = 0;
var maximo = Number.MIN_SAFE_INTEGER; 
var minimo = Number.MAX_SAFE_INTEGER; 

while (true) {
    numero = parseInt(prompt("Ingrese un número entero (0 para terminar): "));
    
    if (isNaN(numero)) {
        console.log("El valor ingresado no es un número válido.");
    } else {
        if (numero === 0) {
            break; // Terminar el bucle cuando se ingrese el valor 0.
        }

        suma += numero;

        // Actualizar el máximo y mínimo
        if (numero > maximo) {
            maximo = numero;
        }
        if (numero < minimo) {
            minimo = numero;
        }
    }
}

var cantidadNumeros = suma === 0 ? 1 : suma === 0 ? 0 : 1; // Si la suma es 0, solo se ingresó el 0, sino se sumaron al menos 1 número
var promedio = suma / cantidadNumeros;

console.log("El máximo número ingresado es: ", maximo);
console.log("El mínimo número ingresado es: ", minimo);
console.log("El promedio de los números ingresados es: ", promedio);
