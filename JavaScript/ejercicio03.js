/*
3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

// Se declara el Array
const array = ["hola", "como", "estás"];
let newArray = [];
// Función expresada que convierte la primer letra de la palabra en mayúscula
const capitalizarPalabra = (palabra) =>
  palabra.charAt(0).toUpperCase() + palabra.slice(1);
let resultado = array.map(capitalizarPalabra);
// Recorre elemento por elemento del array y le aplica la función
newArray.push(resultado);
// console.log(newArray);
