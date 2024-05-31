/*
12. La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
promesas.
La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
después de ms milisegundos, para que podamos agregarle. then, así:
*/

// Definición de una función asincrónica 'delay' que pausa la ejecución durante 'ms' milisegundos
async function delay(ms) {
  // Se espera a que se cumpla la promesa generada por setTimeout
  await new Promise((resolve) => setTimeout(resolve, ms));
}
// Llamada a la función delay con un retraso de 3000 milisegundos
delay(3000)
  // Una vez que se cumple el tiempo de espera, se ejecuta esta función de devolución
  .then(() => alert("Se ejecuta después de 3 segundos"));