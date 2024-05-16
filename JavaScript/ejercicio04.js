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

// Se declara el array
const array = ["1", "4", "7", "9"];
// Función expresada que busca los números primos
const numsPrimos = function (num) {
  // Iteramos desde 2 hasta el número 
  for (let i = 2; i < num; i++) {
    // Verifica si el número es divisible
    if (num % i === 0) {
      // Si es divisble retorna false
      return false;
    }
  }
  // Si no es divisible y es mayor que 1, retorna el número
  return num > 1;
};
// Recorre elemento por elemento del array, aplica la función y filtra
let resultado = array.filter(numsPrimos);
console.log(resultado)