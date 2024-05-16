/*
Determina si todos los elementos en el array satisfacen una condición.
*/

/*
5. Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/

// Se declara el array
const array = [1, 2, 3, "4", 5, 6, "7"];
// Verfica si el tipo de dato es numérico
const typeNumber = (num) => typeof num === "number" ? num : null;
// Recorre elemento por elemento del array y si todo cumplen la condición retorna true
let resultado = array.every(typeNumber);
console.log(resultado);

// const dataType = (num) => typeof num;
// let resultado = array.map(dataType)