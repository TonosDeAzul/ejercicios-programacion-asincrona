/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
*/

/*
6. Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true
*/

// Se declara el array con elementos de diferentes tipos de datos
const array = [1, 2, 3, "4", 5, 6, 7];
// Función flecha que verifica si el tipo de dato es string
const typeNumber = (num) => 
  // Si el tipo de num es 'string', retorna num; de lo contrario, retorna null
    typeof num === "string" ? num : null;
// Usa el método some para verificar si al menos un elemento del array es string
let resultado = array.some(typeNumber);
// Imprime el resultado, true si al menos un elemento es string, false si ninguno lo es
console.log(resultado);