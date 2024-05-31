/*
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

/*
3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

// Se declara el array con nombres en minúscula
const array = ["daniel", "fenando", "gómez", "zayas"];
// Función flecha que convierte la primera letra de una palabra a mayúscula
const capitalizarPalabra = (palabra) =>
  // Toma el primer carácter de la palabra, lo convierte a mayúscula
  // y lo concatena con el resto de la palabra
  palabra.charAt(0).toUpperCase() + palabra.slice(1);
// Usa el método map para recorrer cada elemento del array y aplicar la función capitalizarPalabra
let resultado = array.map(capitalizarPalabra);
// Imprime el array resultante con las palabras capitalizadas
console.log(resultado);