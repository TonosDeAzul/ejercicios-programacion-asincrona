/*
15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada".
*/

let promesa = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 0) {
        reject(new Error("Promise rechazada"));
      } else {
        resolve("Promise aceptada");
      }
    }, 2000);
  });
};

promesa(0)
  .then((resolve) => {
    alert(resolve);
  })
  .catch((reject) => {
    alert(reject);
  });
