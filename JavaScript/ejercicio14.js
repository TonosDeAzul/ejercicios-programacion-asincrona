/*
14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await.
*/

// Definición de una función que devuelve una promesa que se resuelve después de 'ms' milisegundos
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Definición de una función asincrónica 'esperar'
async function esperar() {
  console.log("Esperando 1 segundo..."); // Se imprime un mensaje indicando la espera
  await delay(1000); // Se espera 1 segundo usando la función 'delay'
  alert("Operación completada"); // Después de la espera, se muestra una alerta indicando que la operación ha sido completada
}
// Se llama a la función 'esperar'
esperar();