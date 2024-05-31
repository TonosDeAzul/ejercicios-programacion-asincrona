/*
13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.
*/

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function retorno() {
//   await delay(3000);
//   alert("Han pasado 3 segundos");
// }
// retorno();

// Definición de la constante 'num'
const num = 4;
// Definición de una función 'delay' que devuelve una promesa
let delay = (ms) => {
  return new Promise((resolve, reject) => {
    // Dentro de la promesa, se ejecuta setTimeout después de 'ms' milisegundos
    setTimeout(() => {
      // Se verifica si 'num' es diferente de 7
      if (num !== 7) {
        // Si 'num' no coincide, se rechaza la promesa con un error
        reject(new Error("El número no coincide"));
      } else {
        // Si 'num' coincide, se resuelve la promesa
        resolve("El número coincide");
      }
    }, ms);
  });
};
// Llamada a la función 'delay' con un retraso de 3000 milisegundos
delay(3000)
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