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

// Se declara el array con elementos de diferentes tipos de datos
const array = [1, 2, 3, "4", 5, 6, "7"];
// Función flecha que verifica si el tipo de dato es string
const typeNumber = (num) => 
  // Si el tipo de num es 'string', retorna num; de lo contrario, retorna null
    typeof num === "string" ? num : null;
// Usa el método findIndex para devolver el índice del primer elemento del array que sea string
let resultado = array.findIndex(typeNumber);
// Imprime el índice del primer elemento string encontrado en el array
console.log(resultado);