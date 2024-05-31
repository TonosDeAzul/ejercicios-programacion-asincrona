/*
15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada".
*/

// Definición de una función flecha que devuelve una promesa
let promesa = (num) => {
  return new Promise((resolve, reject) => {
    // Se establece un temporizador para simular una operación asincrónica
    setTimeout(() => {
      // Si el valor pasado es 0, se rechaza la promesa con un error
      if (num === 0) {
        reject(new Error("Promise rechazada"));
      } else {
        // Si el valor es diferente de 0, se resuelve la promesa
        resolve("Promise aceptada");
      }
    }, 2000); // La promesa se resolverá después de 2000 milisegundos (2 segundos)
  });
};
// Se llama a la función promesa con el argumento 0
promesa(0)
  // Si la promesa se resuelve, se ejecuta esta función de devolución
  .then((resolve) => {
    // Se muestra un mensaje de alerta con el resultado de la resolución
    alert(resolve);
  })
  // Si la promesa es rechazada, se ejecuta esta función de devolución
  .catch((reject) => {
    // Se muestra un mensaje de alerta con el error de rechazo
    alert(reject);
  });