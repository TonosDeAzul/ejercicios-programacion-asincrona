/*
21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises
*/

// Creación de la primera promesa
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Resuelve la promesa con un mensaje de éxito después de 1 segundo
    resolve("Promesa 1 resuelta");
    // Imprime en la consola que se está procesando la promesa 1
    console.log("Procesando promesa 1");
  }, 1000);
});
// Creación de la segunda promesa
const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Rechaza la promesa con un error después de 2 segundos
    reject(new Error("Falla en promesa 2"));
    // Imprime en la consola que se está procesando la promesa 2
    console.log("Procesando promesa 2");
  }, 2000);
});
// Creación de la tercera promesa
const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Resuelve la promesa con un mensaje de éxito después de 3 segundos
    resolve("Promesa 3 resuelta");
    // Imprime en la consola que se está procesando la promesa 3
    console.log("Procesando promesa 3");
  }, 3000);
});
// Llamada a Promise.allSettled() con un arreglo de promesas
Promise.allSettled([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log("----------------------------");
    // Itera sobre cada resultado de la promesa
    resultados.forEach((resultado) => {
      // Imprime el estado de la promesa
      console.log(`Estado: ${resultado.status}`);
      if (resultado.status === "fulfilled") {
        // Si la promesa se cumplió, imprime su valor
        console.log(`Valor: ${resultado.value}`);
      } else {
        // Si la promesa fue rechazada, imprime el motivo del rechazo
        console.log(`Error: ${resultado.reason}`);
      }
    });
  })
  .catch((error) => {
    // Manejo de errores generales, en caso de que ocurra algún error durante la ejecución de las promesas
    console.error("Error general:", error);
  });