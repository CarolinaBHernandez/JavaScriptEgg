/*Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio*/

var radio = prompt("Ingrese el valor del radio de la circunferencia");
radio = parseFloat(radio);

if (!isNaN(radio) && radio >= 0) {
    var PI = Math.PI;

    var area = PI * Math.pow(radio, 2);
    var perimetro = 2 * PI * radio;

    var mensaje = `El área de la circunferencia es: ${area.toFixed(2)}
El perímetro de la circunferencia es: ${perimetro.toFixed(2)}`;

    alert(mensaje);;
} else {
    alert("El valor ingresado no es válido. Por favor, ingrese un número positivo.");
}