/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/

const persona = {};

persona.nombre = prompt("Ingresa el nombre:");
persona.edad = parseInt(prompt("Ingresa la edad:"));
persona.sexo = prompt("Ingresa el sexo ('H' para hombre, 'M' para mujer, 'O' para otro):");
persona.peso = parseFloat(prompt("Ingresa el peso:"));
persona.altura = parseFloat(prompt("Ingresa la altura:"));

console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Sexo:", persona.sexo);
console.log("Peso:", persona.peso);
console.log("Altura:", persona.altura);
