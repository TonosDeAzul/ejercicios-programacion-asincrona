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

// Importando la biblioteca Underscore Contrib
const _ = require('underscore-contrib');
// Declarando un array
let array = [-1, -21, -43, 34, 12, -1];
// Declarando una función que verifica si un número es menor que cero
const menorQue = (num) => num < 0;
// Utilizando el método dropWhile() de Underscore Contrib para obtener un nuevo array
// Este método elimina elementos del array original hasta que la función de prueba devuelva falso
let resultado = _.dropWhile(array, menorQue);
// Imprimiendo el array original y el array resultante después de aplicar dropWhile()
console.log("Array: ", array);
console.log("Array resultado: ", resultado);