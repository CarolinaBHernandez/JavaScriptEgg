/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

var num1 = 20;
var num2 = 10;

var operacion = prompt("Ingrese la operación que desea realizar (S para suma, R para resta, M para multiplicación, D para división):");
operacion = operacion.toUpperCase(); 

switch (operacion) {
    case 'S':
        console.log('El resultado de la suma es: ', num1 + num2);
        break;
    case 'R':
        console.log('El resultado de la resta es: ', num1 - num2);
        break;
    case 'M':
        console.log('El resultado de la multiplicación es: ', num1 * num2);
        break;
    case 'D':
        if (num2 !== 0) {
            console.log('El resultado de la división es: ', num1 / num2);
        } else {
            console.log('No es posible dividir por cero.');
        }
        break;
    default:
        console.log('Debe especificar una letra válida (S, R, M o D).');
}
