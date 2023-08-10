/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

const espacio = frase => {
    let resultado = "";
  
    for (let i = 0; i < frase.length; i++) {
      resultado += frase[i];
      if (i < frase.length - 1) {
        resultado += " ";
      }
    }
  
    return resultado;
  };
  
  // Pedir al usuario que ingrese una frase
  const inputFrase = prompt("Ingresa una frase:");
  const fraseConEspacios =espacio(inputFrase);
  console.log(fraseConEspacios);
  
  

