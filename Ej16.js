/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/

function generarValorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const vector1 = [];
  const vector2 = [];
  
  for (let i = 0; i < 5; i++) {
    vector1.push(generarValorAleatorio(1, 100));
    vector2.push(generarValorAleatorio(1, 100));
  }
  
  console.log("Vector 1:", vector1);
  console.log("Vector 2:", vector2);
  