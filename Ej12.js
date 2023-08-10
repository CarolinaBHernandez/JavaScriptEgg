
/*Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/

const tipoDeDato = dato => {
    if (!isNaN(dato)) {
      if (Number.isInteger(parseFloat(dato))) {
        return 'number';
      } else {
        return 'float';
      }
    } else if (typeof dato === 'string') {
      return 'string';
    } else if (typeof dato === 'boolean') {
      return 'boolean';
    } else if (Array.isArray(dato)) {
      return 'array';
    } else if (typeof dato === 'object' && dato !== null) {
      return 'object';
    } else if (typeof dato === 'undefined') {
      return 'undefined';
    } else {
      return 'unknown';
    }
  };
  
  const input = prompt("Ingresa un valor:");
  const valor = JSON.parse(input); // Convertir el input a un valor JavaScript
  const resultado = tipoDeDato(valor);
  console.log(`El tipo de dato ingresado es: ${resultado}`);
  
  
  