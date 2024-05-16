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

// Se declara el array
const array = [1, 2, 4, 7];
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
// Devuelve el primer elemento que sea primo
let resultado = array.find(numsPrimos);
console.log(resultado);