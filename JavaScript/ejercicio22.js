/*
22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno.
*/

// Array de números
const array = [1, 2, 3, 4, 5, 6, 7];
// Función asíncrona que procesa un elemento después de un tiempo determinado
async function procesarElementoAsync(elemento) {
  // Espera 1000 milisegundos (1 segundo)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Imprime el elemento procesado
  console.log(`Elemento procesado: ${elemento}`);
}
// Función asíncrona que procesa todos los elementos del array
async function procesarElementos(array) {
  // Itera sobre cada elemento del array
  for (const elemento of array) {
    // Espera a que se procese el elemento actual antes de continuar
    await procesarElementoAsync(elemento);
  }
}
// Llamada a la función para procesar todos los elementos del array
procesarElementos(array);