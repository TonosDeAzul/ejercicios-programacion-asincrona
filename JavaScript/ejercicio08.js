/*
El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
*/

/*
8. Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

// Se declara el array
const array = [1, 2, 3, "4", 5, 6, "7"];
// Verfica si el tipo de dato es string
const typeNumber = (num) => typeof num === "string" ? num : null;
// Devuelve el index del primer elemento que coincida con la condición
let resultado = array.findIndex(typeNumber);
console.log(resultado);