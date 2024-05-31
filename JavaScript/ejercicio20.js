/*
20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
*/

// Definición de la función de promesaUno
const promesaUno = (ms) => {
  // Retorna una nueva promesa
  return new Promise((resolve, reject) => {
    // Simula una operación asincrónica con un temporizador
    setTimeout(() => {
      // Resuelve la promesa con un mensaje de éxito y el tiempo de espera
      resolve(`Se ha cumplido la promesa (${ms})`);
      // Imprime en la consola que la promesaUno se ha ejecutado
      console.log(`Promesa 1`);
    }, ms); // Espera 'ms' milisegundos antes de resolver la promesa
  });
};
// Definición de la función de promesaDos
const promesaDos = (ms) => {
  // Retorna una nueva promesa
  return new Promise((resolve, reject) => {
    // Simula una operación asincrónica con un temporizador
    setTimeout(() => {
      // Resuelve la promesa con un mensaje de éxito y el tiempo de espera
      resolve(`Se ha cumplido la promesa (${ms})`);
      // Imprime en la consola que la promesaDos se ha ejecutado
      console.log(`Promesa 2`);
    }, ms); // Espera 'ms' milisegundos antes de resolver la promesa
  });
};
// Definición de la función de promesaTres
const promesaTres = (ms) => {
  // Retorna una nueva promesa
  return new Promise((resolve, reject) => {
    // Simula una operación asincrónica con un temporizador
    setTimeout(() => {
      // Resuelve la promesa con un mensaje de éxito y el tiempo de espera
      resolve(`Se ha cumplido la promesa (${ms})`);
      // Imprime en la consola que la promesaTres se ha ejecutado
      console.log(`Promesa 3`);
    }, ms); // Espera 'ms' milisegundos antes de resolver la promesa
  });
};
// Ejecución de todas las promesas simultáneamente y manejo del resultado
Promise.all([promesaUno(1000), promesaDos(2000), promesaTres(3000)]).then(
  (resultado) => {
    // Espera 2 segundos antes de imprimir los resultados
    setTimeout(() => {
      // Itera sobre cada mensaje de la promesa resuelta
      resultado.forEach((mensajePromesa) => {
        console.log(mensajePromesa); // Imprime cada mensaje de la promesa
      }, 2000);
    });
  }
);