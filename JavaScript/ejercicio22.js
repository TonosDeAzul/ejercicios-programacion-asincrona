/*
22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno.
*/

const array = [1, 2, 3, 4, 5, 6, 7];

async function procesarElementoAsync(elemento) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Elemento procesado: ${elemento}`);
}

async function procesarElementos(array) {
  for (const elemento of array) {
    await procesarElementoAsync(elemento);
  }
}

procesarElementos(array);
