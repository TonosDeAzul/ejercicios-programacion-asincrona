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

const num = 4;

let delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num !== 7) {
        reject(new Error("El número no coincide"));
      } else {
        resolve("El número coincide");
      }
    }, ms);
  });
};

delay(3000)
  .then((resolve) => {
    alert(resolve);
  })
  .catch((reject) => {
    alert(reject);
  });
