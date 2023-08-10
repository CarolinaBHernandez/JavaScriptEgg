/*Escribir una función flecha que reciba una palabra y la devuelva al revés.*/
const alreves = palabra => {
    let palabraReversa = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
      palabraReversa += palabra[i];
    }
    return palabraReversa;
  };
  
  // Pedir al usuario que ingrese una palabra
  const palabraOriginal = prompt("Ingresa una palabra:");
  const palabraReversa = alreves(palabraOriginal);
  console.log(palabraReversa);
  