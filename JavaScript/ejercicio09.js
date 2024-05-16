/*
Toma una matriz y una función y, por lo tanto, devuelve una matriz en la que los elementos se eliminan de la matriz original para la cual la función devuelve verdadero.

Nota: los valores se eliminan hasta que la función devuelve falso; después de un valor falso no se realizan cambios en el valor original.
*/

/*
9. Crear una función dropWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos a partir del primer callback que devolvió false
• (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
callback de true, no los agrega, cuando el callback da false por primera vez agrega
todos los elementos restantes a partir de dicho elemento inclusive)
*/

// Defining underscore contrib variable
const _ = require('underscore-contrib');
// Array
let array = [-1, -21, -43, 34, 12, -1];
// Function
const menorQue = (num) => num < 0;
// Getting dropped array using dropWhile() method
let resultado = _.dropWhile(array, menorQue);
console.log("Array: ", array);
console.log("Array resultado: ", resultado);