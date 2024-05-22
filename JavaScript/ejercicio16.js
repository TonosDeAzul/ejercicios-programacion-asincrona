/*
16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final.
*/

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 1000);
})
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 4), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 7), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });
