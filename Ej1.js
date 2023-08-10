/*1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.*/



var clima = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");


if (clima) {
  var mensaje = "El día de hoy está " + clima;
  alert(mensaje);
} else {
  alert("No ingresaste ninguna respuesta.");
}
