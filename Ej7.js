/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

var limite = parseInt(prompt("Ingrese un valor límite positivo: "));


if (!isNaN(limite) && limite > 0) {
    var suma = 0;
    var numero;

    // Solicitar números al usuario hasta que la suma supere el límite
    while (suma <= limite) {
        numero = parseFloat(prompt("Ingrese un número: "));

        // Verificar si el valor ingresado es un número válido
        if (!isNaN(numero)) {
            suma += numero;
        } else {
            console.log("El valor ingresado no es válido. Por favor, ingrese un número válido.");
        }
    }

    console.log("La suma de los números introducidos superó el límite inicial.");
} else {
    console.log("El valor ingresado no es válido. Por favor, ingrese un valor límite positivo.");
}

