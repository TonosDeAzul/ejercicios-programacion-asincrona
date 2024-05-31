/*
El find()método de Arrayinstancias devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve.
*/

/*
7. Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

// Se declara el array con una lista de números
const array = [1, 2, 4, 7];
// Función expresada que verifica si un número es primo
const numsPrimos = function (num) {
  // Itera desde 2 hasta num - 1
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
// Usa el método find para devolver el primer elemento del array que es primo
let resultado = array.find(numsPrimos);
// Imprime el primer número primo encontrado en el array
console.log(resultado);