/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/


const palabraMasLarga = frase => {
    const palabras = frase.split(' ');
    let palabraLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraLarga.length) {
        palabraLarga = palabras[i];
      }
    }
  
    return palabraLarga;
  };
  
  // Pedir al usuario que ingrese una frase
  const inputFrase = prompt("Ingresa una frase:");
  const resultado = palabraMasLarga(inputFrase);
  console.log(resultado);

