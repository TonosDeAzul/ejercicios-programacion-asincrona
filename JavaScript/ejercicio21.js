/*
21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises
*/

const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 1 resuelta");
    console.log("Procesando promesa 1");
  }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Falla en promesa 2"));
    console.log("Procesando promesa 2");
  }, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 3 resuelta");
    console.log("Procesando promesa 3");
  }, 3000);
});

Promise.allSettled([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log("----------------------------");
    resultados.forEach((resultado) => {
      console.log(`Estado: ${resultado.status}`);
      if (resultado.status === "fulfilled") {
        console.log(`Valor: ${resultado.value}`);
      } else {
        console.log(`Error: ${resultado.reason}`);
      }
    });
  })
  .catch((error) => {
    console.error("Error general:", error);
  });
