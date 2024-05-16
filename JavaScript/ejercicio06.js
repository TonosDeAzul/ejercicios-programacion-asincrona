/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
*/

/*
6. Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true
*/

// Se declara el array
const array = [1, 2, 3, "4", 5, 6, 7];
// Verfica si el tipo de dato es string
const typeNumber = (num) => typeof num === "string" ? num : null;
// Recorre elemento por elemento del array y si al menos uno cumple la condición retorna true
let resultado = array.some(typeNumber);
console.log(resultado);