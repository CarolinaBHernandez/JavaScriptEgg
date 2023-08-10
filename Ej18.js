// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:

//a) Determinar cual de los dos elementos de texto es mayor

var esMayor = [true, 5, false, "hola", "adios", 2];

console.log(esMayor);

const texto1 = esMayor[3];
const texto2 = esMayor[4];

if (texto1.length > texto2.length) {
  console.log(`"El texto ${texto1}" es mayor que "${texto2}"`);
} else if (texto2.length > texto1.length) {
  console.log(`"${texto2}" es mayor que "${texto1}"`);
} else {
  console.log("Los textos tienen la misma longitud.");
}

/*b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false.*/
var booleano = [true, 5, false, "hola", "adios", 2];

console.log(booleano);
const valorBooleano1 = booleano[0];
const valorBooleano2 = booleano[2];

console.log(valorBooleano1 && valorBooleano2); // Resultado true (AND lógico)
console.log(valorBooleano1 || valorBooleano2); // Resultado true (OR lógico)
console.log(!valorBooleano1); // Resultado false (NOT lógico)
console.log(!valorBooleano2); // Resultado true (NOT lógico)

/*c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var operaciones = [true, 5, false, "hola", "adios", 2];

console.log(operaciones);
const numero1 = operaciones[1];
const numero2 = operaciones[5];

console.log(`El resultado de la suma de los números es: ${numero1 + numero2}`);
console.log(`El resultado de la resta de los números es: ${numero1 - numero2}`);
console.log(`El resultado de la multiplicación de los números es: ${numero1 * numero2}`);
console.log(`El resultado de la división de los números es: ${numero1 / numero2}`);
console.log(`El módulo de los números es: ${numero1 % numero2}`);
