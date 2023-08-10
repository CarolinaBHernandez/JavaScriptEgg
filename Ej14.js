/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

const libro = {
    ISBN: "",
    titulo: "",
    autor: "",
    numPaginas: 0,
    cargarLibro: function() {
      this.ISBN = prompt("Ingresa el ISBN del libro:");
      this.titulo = prompt("Ingresa el título del libro:");
      this.autor = prompt("Ingresa el autor del libro:");
      this.numPaginas = parseInt(prompt("Ingresa el número de páginas del libro:"));
    },
    mostrarInformacion: function() {
      console.log("ISBN:", this.ISBN);
      console.log("Título:", this.titulo);
      console.log("Autor:", this.autor);
      console.log("Número de páginas:", this.numPaginas);
    }
  };
  
  libro.cargarLibro(); // Cargar los datos del usuario
  libro.mostrarInformacion(); // Mostrar la información del libro
  