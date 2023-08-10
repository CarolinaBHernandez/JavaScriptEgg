/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

const circulo = {
    radio: 0,
    calcularArea: function() {
      return Math.PI * this.radio * this.radio;
    },
    calcularPerimetro: function() {
      return 2 * Math.PI * this.radio;
    }
  };
  
  // Solicitar al usuario que ingrese el radio del círculo
  circulo.radio = parseFloat(prompt("Ingresa el radio del círculo:"));
  
  // Calcular el área y el perímetro
  const area = circulo.calcularArea();
  const perimetro = circulo.calcularPerimetro();
  
  console.log("Área del círculo:", area);
  console.log("Perímetro del círculo:", perimetro);
  