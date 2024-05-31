/*
Determina si todos los elementos en el array satisfacen una condición.
*/

/*
5. Crear una función every() que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/

// Se declara el array con elementos de diferentes tipos de datos
const array = [1, 2, 3, "4", 5, 6, "7"];
// Función flecha que verifica si el tipo de dato es numérico
const typeNumber = (num) => 
  // Si el tipo de num es 'number', retorna num; de lo contrario, retorna null
    (typeof num === "number" ? num : null);
// Usa el método every para verificar si todos los elementos del array son numéricos
let resultado = array.every(typeNumber);
// Imprime el resultado, true si todos los elementos son numéricos, false si no lo son
console.log(resultado);

// const dataType = (num) => typeof num;
// let resultado = array.map(dataType)