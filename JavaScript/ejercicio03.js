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

// Se declara el Array
const array = ["daniel", "fenando", "gómez", "zayas"];
// Función expresada que convierte la primer letra de la palabra en mayúscula
const capitalizarPalabra = (palabra) =>
  palabra.charAt(0).toUpperCase() + palabra.slice(1);
// Recorre elemento por elemento del array y le aplica la función
let resultado = array.map(capitalizarPalabra);
console.log(resultado);