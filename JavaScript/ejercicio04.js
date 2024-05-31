/*
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
*/

/*
4. Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro".
*/

// Se declara el array con números en formato de cadena
const array = ["1", "4", "7", "9"];
// Función expresada que verifica si un número es primo
const numsPrimos = function (num) {
  // Itera desde 2 hasta num-1
  for (let i = 2; i < num; i++) {
    // Verifica si num es divisible por i
    if (num % i === 0) {
      // Si es divisible, no es primo, retorna false
      return false;
    }
  }
  // Si no es divisible por ningún número y es mayor que 1, es primo, retorna true
  return num > 1;
};
// Recorre elemento por elemento del array, aplica la función y filtra  
let resultado = array.filter(numsPrimos);
// Imprime el array resultante con los números primos
console.log(resultado);