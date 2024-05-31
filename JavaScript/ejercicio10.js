/*
Se utiliza para devolver los elementos de la colección hasta que la devolución de llamada proporcionada devuelva falso. Si la devolución de llamada nunca devuelve falso, el método takeWhile() devolverá todos los elementos de la colección.
*/

/*
Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
*/

// Requerir la biblioteca lodash
const _ = require("lodash");
// Declarar un array
let array = [-1, -21, -43, 34, 12, -1];
// Declarar una función que verifica si un número es menor que cero
const menorQue = (num) => num < 0;
// Obtener un nuevo array utilizando el método takeWhile() de lodash
// Este método devuelve elementos del array original hasta que la función de prueba devuelva falso
let resultado = _.takeWhile(array, menorQue);
// Imprimir el array original y el array resultante después de aplicar takeWhile()
console.log("Array: ", array);
console.log("Array resultado: ", resultado);
