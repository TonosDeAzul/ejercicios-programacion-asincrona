/*
Se utiliza para devolver los elementos de la colección hasta que la devolución de llamada proporcionada devuelva falso. Si la devolución de llamada nunca devuelve falso, el método takeWhile() devolverá todos los elementos de la colección.
*/

/*
Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
*/

// Requiring the lodash library 
const _ = require("lodash");
// Array 
let array = [-1, -21, -43, 34, 12, -1];
// Function
const menorQue = (num) => num < 0;
// Getting dropped array using takeWhile() method
let resultado = _.takeWhile(array, menorQue);
// Printing the output 
console.log("Array: ", array);
console.log("Array resultado: ", resultado);